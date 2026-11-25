---
theme: default
title: Een 1CHO voor het mbo?
info: Haalbaarheid van een mbo-versie van 1CHO uit de mbo-bekostigingsbestanden, getoetst met Staat van de Onderwijsinstelling (issue #389).
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- Slide: Titelslide -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Een 1CHO voor het mbo?</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Kunnen de mbo-bekostigingsbestanden samen een mbo-versie van 1CHO worden?
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; oktober 2026 &middot; issue #389</div>
</div>

<!--
Kort antwoord: ja, per instelling, voor 47 van de 115 1CHO-kolommen. De presentatie gaat over wat werkt en wat ontbreekt.
-->

<!-- Slide: Vaste CEDA-slide -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide16.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 50% 50%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2.2rem 2.2rem 3rem;">
    <p class="eyebrow">Wie is CEDA</p>
    <h1 style="font-size: 1.7rem;">Centre of Educational Data Analytics</h1>
    <p class="np-subtitle" style="margin-top: 0.4rem; max-width: 100%;">Eén team binnen Npuls. Van ruwe data tot AI-toepassing, open source.</p>
    <ul style="font-size: 0.88rem; line-height: 1.7;">
      <li>Data, analytics en generatieve AI in één keten</li>
      <li>Altijd in co-creatie met mbo, hbo en wo</li>
      <li>Open source, voor elke instelling</li>
    </ul>
  </div>
  <div></div>
</div>

<!-- Slide: Het antwoord -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Het antwoord: ja, met duidelijke gaten

<p class="np-subtitle">Per instelling zijn de mbo-bestanden om te zetten naar de 1CHO-vorm. Getoetst door Staat van de Onderwijsinstelling erop te draaien, op de demo-data.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Werkt</span>
    <h3 style="margin-top: 0.5rem;">47 van de 115 kolommen</h3>
    <ul style="font-size: 0.84rem; line-height: 1.5; margin: 0.3rem 0 0;">
      <li>Student, jaar, opleiding, niveau, BOL/BBL</li>
      <li>Hoofdinschrijving, verblijfsjaar, eerstejaars</li>
      <li>Diploma's, geslacht, leeftijd</li>
      <li>Instroom, rendement, uitval, wissel: de tool draait</li>
    </ul>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Ontbreekt</span>
    <h3 style="margin-top: 0.5rem;">68 kolommen, vier oorzaken</h3>
    <ul style="font-size: 0.84rem; line-height: 1.5; margin: 0.3rem 0 0;">
      <li>Postcode en herkomst: alleen in GRONDSLAG</li>
      <li>Vooropleiding: in geen enkel mbo-bestand</li>
      <li>Loopbaan over scholen heen: alleen eigen school</li>
      <li>Rest: HO-specifiek, niet van toepassing</li>
    </ul>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.7rem;">
  Goed voor <strong>rendement en uitval per opleiding</strong>; zwak voor <strong>kansengelijkheid</strong> (vooropleiding, herkomst, regio).
</div>

</div>

<!--
Bron 1CHO-indeling: Bestandsbeschrijving 1cyferho 2023 v1.1 (cedanl/1cijferho).
Demo-data: 3 instellingen, 14 studenten, schooljaren 2020 t/m 2025, alleen RO en TBG-i. Te klein om de uitkomsten te beoordelen; wel genoeg om te zien of het technisch werkt.
-->

<!-- Slide: Dekking 1CHO -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# 47 van de 115 kolommen zijn te vullen

<p class="np-subtitle">Op papier beoordeeld per kolom. 16 daarvan zijn in de proefversie gebouwd en getest.</p>

<div class="np-table" style="font-size: 0.72rem;">

| Categorie | Kolommen | Wat het is | Te vullen |
|-----------|----------|------------|-----------|
| Direct | 20 | Staat in RO of TBG-i: jaar, opleiding, niveau, diploma, geslacht, leeftijd | <span class="np-badge green">Ja</span> |
| Afgeleid | 17 | Uit meerdere jaren samen: eerste jaar, verblijfsjaar, hoofdinschrijving | <span class="np-badge green">Ja</span> |
| Referentietabel | 10 | Met een extra lijst: opvolger opleiding, sector, fusies, ISCED | <span class="np-badge green">Ja</span> |
| Mbo-breed | 29 | Vraagt alle mbo-scholen: eerste jaar in het mbo, diploma elders | <span class="np-badge yellow">Samen</span> |
| Alleen in GRONDSLAG | 14 | Postcode, nationaliteit, herkomst; niet te koppelen aan RO | <span class="np-badge orange">Nee</span> |
| In geen mbo-bestand | 14 | Vooropleiding, eindcijfer vo | <span class="np-badge orange">Nee</span> |
| Niet van toepassing | 11 | Bachelor/master, BSN | <span class="np-badge blue">N.v.t.</span> |

</div>

</div>

<!--
Samen: mogelijk zodra meerdere instellingen samenvoegen of DUO een mbo-breed bestand levert.
Volledige lijst per kolom: dekking_1cho.csv bij het onderzoek.
-->

<!-- Slide: Hoe de kolommen gevuld worden -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Hoe de kolommen gevuld worden

<p class="np-subtitle">De kolommen die Staat van de Onderwijsinstelling gebruikt, met recordtype, veld en regel.</p>

<div class="np-table" style="font-size: 0.72rem;">

| 1CHO-kolom | Bron (recordtype: veld) | Regel |
|------------|-------------------------|-------|
| persoonsgebonden_nummer | PER: BSN of onderwijsnummer | Pseudoniem: HMAC-SHA256 met salt |
| inschrijvingsjaar | ISP: DatumBegin, DatumEind | Schooljaar waarin de periode 1 oktober dekt |
| soort_inschrijving_actuele_instelling | ISP, alle inschrijvingen | Hoofdinschrijving: hoogste niveau, dan laagste crebo, dan recentste start |
| verblijfsjaar_actuele_(opleiding_)instelling | ISG: DatumInschrijving, ISP: DatumBegin | Schooljaar − eerste 1 oktober na de start + 1 |
| opleiding_actueel_equivalent, type HO | ISP: Opleidingcode, Niveau | Niveau leeg: aangevuld uit crebo- en S-BB-lijst |
| opleidingsvorm | ISP: Leertraject | BOL / BBL, ongewijzigd |
| diplomajaar, soort_diploma_instelling | DIP: DatumResultaat, Opleidingcode | Venster oktober–september, aan de rij van dat schooljaar |
| geslacht, leeftijd_per_peildatum_1_oktober | PER: Geslacht, Geboortedatum | Leeftijd op 1 oktober van het schooljaar |

</div>

</div>

<!--
De eerste stappen (inlezen, pseudonimiseren, hoofdinschrijving, niveau-aanvulling) doet de bestaande pipeline al: star-tabel fact_inschrijving_schooljaar. Nieuw is alleen de omzetting naar 1CHO-kolomnamen, het verblijfsjaar en het koppelen van diploma's aan een schooljaar.
Sector (croho-onderdeel) wordt de sectorkamer; locatie is nu BRIN + plaats, omdat een RIO-opzoektabel voor de onderwijslocatiecode ontbreekt.
-->

<!-- Slide: Het draait -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De toets: het werkt, met één aanpassing

<p class="np-subtitle">We lieten Staat van de Onderwijsinstelling ongewijzigd draaien op het mbo-bestand.</p>

<div class="np-grid-3" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Werkt</span>
    <h3 style="margin-top: 0.5rem;">Geen foutmeldingen</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Voor alle drie de demo-instellingen komen instroom, rendement, uitval, studiewissel en het benchmarkrapport eruit.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Aanpassen</span>
    <h3 style="margin-top: 0.5rem;">Diploma's</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">De tool herkent alleen hbo- en wo-diploma's, dus eerst 0 van de 5. Na het toevoegen van "mbo-diploma" aan die lijst: 5 van de 5.</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">Nog open</span>
    <h3 style="margin-top: 0.5rem;">Kloppen de cijfers?</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">De demo heeft maar 14 nep-studenten. Of de uitkomsten realistisch zijn, kan alleen met echte data.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Alle cijfers komen eruit; alleen de uitsplitsing naar <strong>postcode</strong> en <strong>vooropleiding</strong> ontbreekt.
</div>

</div>

<!--
Instelling 27DV: 8 instromers; rendement na 3 jaar: 3 binnen 3 jaar, 1 later, 4 nog niet waarneembaar (te recent).
De aanpassing: de lijst met diplomasoorten in maak_diploma_behaald() instelbaar maken.
-->

<!-- Slide: Wat ontbreekt -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat ontbreekt er?

<p class="np-subtitle">68 kolommen. 11 daarvan zijn HO-specifiek en hoeven niet; de rest valt in drie groepen.</p>

<div class="np-grid-3" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Alleen in GRONDSLAG · 14</span>
    <h3 style="margin-top: 0.5rem;">Persoonskenmerken</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Postcode, nationaliteit, geboorteland van student en ouders, en daaruit CBS-herkomst en EER. Aan te vullen uit de eigen administratie van de school.</p>
  </div>
  <div class="np-card accent-pink">
    <span class="np-badge pink">In geen mbo-bestand · 14</span>
    <h3 style="margin-top: 0.5rem;">Vooropleiding</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Vmbo of havo, met jaar, school en eindcijfer. Voor analyses van kansengelijkheid een kernvariabele.</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">Mbo-breed · 29</span>
    <h3 style="margin-top: 0.5rem;">De mbo-loopbaan</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Eerste jaar in het mbo, eerder diploma elders, ononderbroken ingeschreven. Eén school ziet alleen haar eigen studenten.</p>
  </div>
</div>

</div>

<!--
Niet van toepassing (11): propedeuse/bachelor/master, University College, soort programma, etniciteit en generatie (ook in 1CHO vervallen), BSN en onderwijsnummer (bewust weggelaten).
Mbo-breed wordt deels mogelijk met de bestanden van meerdere scholen samen; de pipeline zoekt studenten nu al over instellingen heen.
-->

<!-- Slide: Wat kan er niet -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat kan er niet?

<p class="np-subtitle">De analyses die je met dit bestand niet, of maar beperkt, kunt doen.</p>

<div class="np-table" style="font-size: 0.72rem;">

| Analyse | Kan het? | Waarom niet |
|---------|----------|-------------|
| Uitsplitsen naar vooropleiding (vmbo-leerweg, havo) | <span class="np-badge orange">Nee</span> | Vooropleiding staat in geen enkel mbo-bestand |
| Uitsplitsen naar herkomst, nationaliteit, regio | <span class="np-badge orange">Nee</span> | Staat alleen in GRONDSLAG, en dat is niet aan RO te koppelen |
| Eerstejaars mbo of eerder in het mbo | <span class="np-badge orange">Nee</span> | Eén school ziet de eerdere mbo-loopbaan van een student niet |
| Doorstroom naar het hbo | <span class="np-badge orange">Nee</span> | De mbo-bestanden volgen de student niet na het mbo |
| Korte en tussentijdse inschrijvingen | <span class="np-badge orange">Nee</span> | Alleen wie op 1 oktober ingeschreven is, telt mee (demo: 3 van 19 vallen weg) |
| Uitval zuiver meten | <span class="np-badge yellow">Beperkt</span> | Een overstap naar een andere school telt als uitval, ook naar een andere BRIN van hetzelfde bestuur |
| Rendement na 5 en 8 jaar | <span class="np-badge yellow">Beperkt</span> | Vraagt 5 tot 8 jaar aan RO's; één RO beslaat maximaal 2 jaar |
| Diploma's in Staat van de Onderwijsinstelling | <span class="np-badge yellow">Beperkt</span> | Werkt pas als de tool mbo-diploma's kent (kleine aanpassing) |

</div>

</div>

<!--
Bron 2-jaarsgrens: PvE MBO-instellingen 4.8.2, paragraaf 7.2. Hoe ver terug DUO RO's levert, weten we nog niet. Positief: elke RO levert de startdatum mee, ook van vóór de gekozen periode.
Uitval: 1CHO ziet wel inschrijvingen bij andere instellingen; de mbo-bestanden alleen de eigen school. Met de bestanden van meerdere scholen samen wordt dit deels opgelost.
Herkomst en regio kunnen uit de eigen studentenadministratie van de school komen; vooropleiding vraagt een andere bron.
-->

<!-- Slide: GRONDSLAG 1 - Eén student, twee nummers -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# GRONDSLAG is niet te koppelen met RO

<p class="np-subtitle">Voorbeeld: dezelfde student staat in RO en in GRONDSLAG, maar onder een ander nummer.</p>

<div class="np-pipeline" style="margin-top: 1rem;">
  <div class="np-step blue" style="flex: 1; max-width: 230px;">
    <strong style="font-size: 0.95rem;">In RO</strong>
    <small>Student met BSN 123…, start 30 jan 2023, Mbo-Verpleegkundige</small>
  </div>
  <div class="np-arrow">+</div>
  <div class="np-step orange" style="flex: 1; max-width: 230px;">
    <strong style="font-size: 0.95rem;">In GRONDSLAG</strong>
    <small>Student met PGN 987…, zelfde start, zelfde opleiding</small>
  </div>
  <div class="np-arrow">=</div>
  <div class="np-step green" style="flex: 1; max-width: 230px;">
    <strong style="font-size: 0.95rem;">In het bestand</strong>
    <small>Twee verschillende studenten, want twee verschillende nummers</small>
  </div>
</div>

<div class="np-card accent-yellow" style="margin-top: 0.9rem;">
  <p style="font-size: 0.86rem; line-height: 1.55; margin: 0; color: var(--np-ink);"><strong>Dit is een bewuste keuze van DUO.</strong> In het programma van eisen staat bij GRONDSLAG: <em>"Het persoonsgebondennummer mag niet geleverd worden, daarom is in de levering een omgenummerd nummer opgenomen. De geboortedatum mag niet geleverd worden."</em> Er bestaat dus geen sleutel van PGN naar BSN. GRONDSLAG kan op persoon niet aan RO gekoppeld worden.</p>
</div>

<div class="np-bottomline" style="margin-top: 0.7rem;">
  Daarom alleen <strong>RO en TBG-i</strong>. Demo-school 27DV: 18 instromers mét GRONDSLAG, 8 zonder.
</div>

</div>

<!--
Bron: PvE MBO-instellingen 4.8.2, §17.1 (afslag register-levering IP).
GRONDSLAG is een kopie van een levering die DUO aan een andere partij doet; in die levering mogen BSN en geboortedatum niet mee, vermoedelijk om privacyredenen. RO en TBG-i zijn bedoeld om de eigen administratie te controleren en bevatten wel het BSN.
De nummers op de slide zijn verzonnen; de inschrijving (30 januari 2023, opleiding 25655 Mbo-Verpleegkundige, instelling 27DV) komt uit de demo-data en staat in beide bestanden.
Het verschil van 10 komt deels door dubbeltelling (2 inschrijvingen staan in beide bestanden) en deels doordat de demo-RO van 27DV een andere periode beslaat.
GRONDSLAG via de inschrijving aan RO plakken doen we niet: dat vraagt matchen op geslacht en leeftijd (#128) en omzeilt wat DUO bewust heeft afgeschermd.
-->

<!-- Slide: Afsluitslide -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">Tot slot</p>
  <h1 style="font-size: 2.6rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Blijf in contact</h1>
  <p style="font-size: 1.05rem; color: var(--np-dark-gray); max-width: 600px; line-height: 1.5;">Vragen, feedback of zin om mee te bouwen? We horen graag van je.</p>
  <div style="display: flex; gap: 1rem; margin-top: 1.6rem; flex-wrap: wrap; justify-content: center;">
    <div class="np-card accent-blue" style="padding: 0.9rem 1.4rem; text-align: center;">
      <span class="np-badge blue">GitHub</span>
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">github.com/cedanl</p>
    </div>
    <div class="np-card accent-green" style="padding: 0.9rem 1.4rem; text-align: center;">
      <span class="np-badge green">Community</span>
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">community.npuls.nl/groups/data-ai</p>
    </div>
    <div class="np-card accent-orange" style="padding: 0.9rem 1.4rem; text-align: center;">
      <span class="np-badge orange">Email</span>
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">ceda@surf.nl</p>
    </div>
  </div>
</div>
