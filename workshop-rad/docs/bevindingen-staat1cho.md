# Bevindingen uit staat-van-onderwijsinstelling (staat1cho)

Bron: `~/Projects/staat-van-onderwijsinstelling` (R-package en Shiny-dashboard, CEDA/Npuls),
package-versie 0.2.0 (CRAN-inzending). Gelezen: `README.md`, `R/definities.R`,
`R/synthetisch.R`, `R/rapportage.R`, `inst/app/app.R`, `inst/extdata/`.

Doel van het lezen: is er in het dashboard of package iets dat de workshop sterker, eerlijker of
makkelijker maakt? Hieronder wat we gevonden hebben, wat we ermee gedaan hebben en wat nog openstaat.

## Kort

| # | Bevinding | Gevolg voor de workshop | Status |
|---|---|---|---|
| 1 | staat1cho bevat een generator voor synthetische 1CHO-data (`maak_synthetische_1cho`) met een antwoordsleutel (`waarheid`) | Geen eigen generator bouwen; we gebruiken deze | Gebruikt |
| 2 | De generator heeft **geen patroon** per sector: iedereen heeft dezelfde kans op uitval | Het voorstel beloofde "een ingebakken patroon", dat klopte niet | Opgelost: eigen wrapper, zie hieronder |
| 3 | Privacydrempel is 30 studenten per groep en 5 per percentage-cel, met secundaire onderdrukking | De sheets zeiden "n<5"; we gebruiken nu de staat1cho-waarden | Doorgevoerd in decks en skills |
| 4 | Definities (uitval, rendement, studiewissel, "nog niet waarneembaar") staan uitgeschreven in `R/definities.R` | Letterlijk overgenomen in `verkennen` | Doorgevoerd |
| 5 | Het synthetische bestand bevat geen VO-eindcijfers (die komen uit VAKHAVW) | Casus C ("VO-cijfers en studiesucces") is met dit bestand niet te beantwoorden | Open: casus herformuleren of A/B kiezen |
| 6 | Het dashboard is R/Shiny, de workshop gebruikt Python/Streamlit | Geen directe hergebruik van code; wel van de tabindeling en definities | Bewust verschil |
| 7 | Studiewissel in de generator is een vaste ring (34401 → 34402 → 35501 → 39110 → 34401) | Stromen tussen sectoren zijn voorspelbaar; geschikt voor casus B | Gedocumenteerd |

## 1. De generator en de antwoordsleutel

`maak_synthetische_1cho(n_per_jaar, jaren, p_uitval_1jr, p_uitval_later, p_wissel, seed)`
simuleert een fictieve hbo-instelling met vier opleidingen (twee techniek, één gezondheidszorg,
één economie) en geeft het kolomformaat van de 1cijferho-enriched output. Het attribuut `waarheid`
bevat per student wat er echt gebeurde (uitval, diploma, wissel, vooropleiding), zonder afkapping.

Dat is waardevol voor de workshop: we kunnen **controleren** of wat deelnemers (en de skills) vinden
klopt, en we hebben per ronde een checkpoint zonder te hoeven raden.

## 2. Geen patroon: eerlijke waarschuwing

Met de standaardinstellingen (seed 1, 200 per jaar, 2012-2023) komt de uitval binnen één jaar uit
op **14,7% (economie), 16,3% (gezondheidszorg) en 16,9% (techniek)**, en 17,1% (man) versus 15,2%
(vrouw). Dat zijn de kleine afwijkingen die toeval geeft, geen patroon: uitval en wissel worden voor
iedereen uit dezelfde kans getrokken, onafhankelijk van sector of geslacht.

Voor een workshop waarin deelnemers "iets te vinden" moeten hebben, is dat een probleem, én het is
leerzaam: een deelnemer die uit deze data "techniek valt vaker uit" concludeert, trekt een
conclusie uit ruis. Om beide te kunnen gebruiken hebben we een wrapper gemaakt.

### De workshopdata

`workshop-rad/scripts/genereer_data.R` draait de generator **per sector** met een eigen kans en
houdt alleen de studenten die in die sector beginnen:

| Startsector | Kans uitval jaar 1 | Kans studiewissel | Seed |
|---|---|---|---|
| techniek | 22% | 5% | 11 |
| gezondheidszorg | 10% | 20% | 12 |
| economie | 15% | 12% | 13 |

Resultaat: `workshop-rad/data/synthetisch_1cho.csv` (3070 studenten, 10.278 rijen, 2012-2023) en de
antwoordsleutel `workshop-rad/data/antwoordsleutel/waarheid.csv`. Uitkomst voor cohorten 2012-2022 (2023 is nog
niet waarneembaar): **techniek 21,9%, economie 13,1%, gezondheidszorg 10,2%, totaal 16,7%**;
geslacht 16,1% (man) versus 17,3% (vrouw), dus bewust géén patroon. Volledige uitkomsten:
`workshop-rad/data/antwoordsleutel/verwachte_uitkomsten.txt`, reproduceerbaar met
`Rscript workshop-rad/scripts/verwachte_uitkomsten.R`.

De opzet is dus: **één echt verschil (sector) en één nep-verschil (geslacht)**. Een goede
analyse toont het eerste en waarschuwt voor het tweede.

> Let op bij uitleg aan deelnemers: de kansen in de wrapper zijn onze keuze, geen werkelijkheid.
> Zeg dat expliciet bij het blok "Synthetische data".

## 3. Privacydrempel en secundaire onderdrukking

`R/rapportage.R` hanteert:

- **primair:** groepen met minder dan 30 studenten krijgen `NA` voor alle uitkomsten, inclusief `n`
- **secundair:** is in een instroomjaar precies één groep onderdrukt, dan is die terug te rekenen uit
  het totaal; daarom wordt ook de kleinste zichtbare groep onderdrukt
- **cellen:** een percentage wordt `NA` als teller of rest kleiner is dan 5

In de project-documentatie staat dat dit een eigen keuze van het project is en nog niet door een
privacy officer of FG is getoetst. Dat nemen we over in de skills en in de sheets, en we claimen
dus niet dat 30/5 "de norm" is.

Op de workshopdata vallen 28 van de 96 groepen (opleiding × cohort × geslacht) onder 30, en 20 van
96 groepen (opleiding × cohort × internationaal) onder 5. De tweede uitsplitsing is dus een
mooie "val" voor de privacy-check.

## 4. Definities

Overgenomen uit `R/definities.R` en vastgelegd in `verkennen`. De belangrijkste valkuil
voor beginners is **"nog niet waarneembaar"**: het laatste cohort heeft nog geen volledig eerste
jaar achter de rug en geeft dus een vertekend percentage (met onze definitie 100% uitval). De skills dwingen af dat dit wordt gecontroleerd.

## 5. Casus C werkt niet met dit bestand

De casus vraagt het VO-eindcijfer. Dat zit in het aparte VAKHAVW-bestand (gemiddeld eindcijfer,
wiskundecijfer, aantal vakken) en niet in het inschrijvingenbestand. De generator levert wel een
`vooropleiding` (havo/vwo/mbo/buitenlands/onbekend), maar zonder verband met rendement. Opties:

1. Casus C herformuleren naar "vooropleiding en rendement" en het eerlijke antwoord ("geen
   duidelijk verband in deze data") als leerpunt gebruiken. Rendement 5 jaar op de workshopdata:
   buitenlands 61,7%, havo 55,8%, mbo 55,6%, onbekend 56,0%, vwo 52,6% — ruis, groepen tussen 94 en
   912 studenten.
2. Een synthetisch VAKHAVW-bestand toevoegen (vraagt een uitbreiding van de generator).
3. Casus C schrappen en kiezen tussen A en B. **Aanbevolen:** casus A, want daar zit het ingebouwde
   patroon in. Het uitvoeringsdeck is daarop gebouwd.

## 6. Het dashboard zelf

Tabbladen in het staat1cho-dashboard: Overzicht, Instroom, Rendement, Uitval, Studiewissel,
Vooropleiding, Data. Het exporteert een benchmarkrapport in Excel met een tabblad Metadata dat de
onderdrukkingsregels uitlegt. Het is een goede referentie voor de vraag "wat hoort er in een
verantwoord studiesucces-dashboard"; we gebruiken de structuur (eerst instroom, dan uitkomsten,
dan uitleg) als inspiratie voor `bouwen`, maar kopiëren geen code.

## 7. Wat we niet hebben gedaan

- Geen wijzigingen in de repo staat-van-onderwijsinstelling. Al het werk staat in `clidev-presentaties`.
- De Shiny-app is niet gedraaid; de bevindingen komen uit de broncode en uit het draaien van de generator.
- De skills `verkennen` en `bouwen` zijn getest met een droge run, zie
  `docs/droge-run.md` voor de uitkomst en de beperkingen.
