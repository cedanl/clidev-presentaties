# Evaluatie en vervolg

Het evaluatieblok (1:44-2:00, samen met de afsluiting) levert twee dingen op: een terugblik op de workshop en een peiling
of er een vervolg moet komen. Dit document legt vast hoe we vragen, opslaan en verwerken.

## Opzet in 16 minuten (evaluatie en afsluiting als één blok)

| Min | Stap | Vorm |
|---|---|---|
| 4 | Terugblik: wat vond je ervan? | `/workshop-reflectie` (vraag 1-3) of de peiling |
| 2 | Meerkeuzevraag: interesse in een training | Peiling of handopsteken |
| 4 | Open vraag: wat wil je precies leren? | Peiling, kort antwoord |
| 6 | Afsluiting: wat verloor en won je, wat doe je morgen anders? | Rondje in de groep of kaartje |

De skill `/workshop-reflectie` wordt bij naam genoemd op dia 9 en uitgelegd op dia 24.

## De vragen

De exacte formulering staat in `skills/workshop-reflectie/references/vragenset.md` en verandert
niet per sessie, zodat antwoorden vergelijkbaar blijven over meerdere workshops.

1. **Werkwijze**: Hoe heb je dit aangepakt, en hoe werkte je samen met de agent?
2. **Ging goed**: Wat ging goed?
3. **Blinde vlekken**: Wat zie je nu wat je eerst niet zag?
4. **Interesse in een training** (meerkeuze):
   - Nee, niet nodig
   - Een losse sessie van een paar uur
   - Een paar dagdelen verspreid over enkele weken
   - Een programma van 4 uur per week voor één semester
5. **Wat wil je leren** (open): alleen als 4 niet "nee" is.

Over de meerkeuzevraag: de schaal loopt van niets tot een heel semester omdat "wel interesse"
goedkoop is. Pas de keuze voor de zwaarste optie laat zien wie echt tijd wil vrijmaken. De optie
"4 uur per week voor één semester" is de aanname van het team over wat een volwaardig programma is;
verander die als het team een andere omvang in gedachten heeft.

## Eerst toestemming

Open het blok met één zin: *"De antwoorden zijn anoniem en gebruiken we om te bepalen of we een
vervolg organiseren. Mag dat?"* Alleen bij ja worden antwoorden bewaard of gedeeld. De skill vraagt
hier zelf ook om. Geen namen van collega's, geen oordelen over personen in de open velden.

## Opslag

- **Peiling:** exporteer na afloop naar CSV in een afgeschermde map van CEDA. Verwijder
  deelnemersgegevens die de tool zelf verzamelt.
- **Reflectie-skill:** één bestand per deelnemer (`reflectie-<pseudoniem>.md`) in de eigen werkmap van
  de deelnemer. De leider verzamelt alleen bestanden van wie dat wil en alleen met toestemming.
- Bewaar niets in de repo `clidev-presentaties`: antwoorden horen niet bij de code.

## Verwerking

1. **Tel de meerkeuze.** Maak een tabel: aantal per optie en percentage van het aantal respondenten.
2. **Bepaal de vervolgvorm.** Vuistregel (aanname van het team, bijstellen indien nodig):

   | Uitkomst | Vervolg |
   |---|---|
   | Meer dan de helft kiest "nee" of "een losse sessie" | Een herhaalworkshop en documentatie, geen programma |
   | Minimaal 8 deelnemers kiezen "een programma van 4 uur per week" | Een pilot-programma voor één semester uitwerken |
   | Verdeeld | Modulair aanbod: losse sessie plus verdiepende dagdelen |

3. **Cluster de open antwoorden.** Lees ze één keer door, maak 3-5 thema's (bijvoorbeeld "eigen skills
   schrijven", "eigen data veilig gebruiken", "dashboards verantwoorden"), tel per thema en bewaar
   twee kernachtige citaten per thema. Verzin geen thema's die niemand noemde.
4. **Terugkoppeling.** Stuur binnen een week een korte samenvatting naar de deelnemers: wat we
   hoorden en wat we gaan doen.

## Voorbeeld van een uitkomst

*(Alleen ter illustratie, geen echte data: zo ziet de samenvatting eruit.)*

| Optie | Aantal | Aandeel |
|---|---|---|
| Nee, niet nodig | n | % |
| Een losse sessie van een paar uur | n | % |
| Een paar dagdelen over enkele weken | n | % |
| 4 uur per week voor één semester | n | % |

Thema's: ...  
Beslissing: ...

## Wat we niet doen

- Geen reflectie koppelen aan een commit-range of tokenstatistieken zoals `sessie-terugblik`: de
  deelnemers zijn geen team met een gedeelde repo.
- Niemand overhalen om iets in te vullen. Een leeg antwoord is een antwoord.
- Geen antwoorden delen die iemand herleidbaar maken.
