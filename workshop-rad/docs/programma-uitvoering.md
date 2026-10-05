# Programma-uitvoering: draaiboek van 120 minuten

Dit is het draaiboek bij het deck `261005_workshop_rad_uitvoering`. Het eerdere voorstel
(`261005_workshop_rad_voorstel`) legt de keuzes voor; dit document beschrijft de dag zelf.

**Casus:** A, eerstejaarsuitval (aanbeveling; zie `bevindingen-staat1cho.md`, punt 5). Wissel naar B
alleen als de groep daar zin in heeft, de data ondersteunt het. Casus C gaan we niet doen.
**Werkvorm:** tweetallen, één typt de opdrachten (prompter), één leest wat de agent teruggeeft en beoordeelt of het logisch is (checker), wisselen na ronde 1. Deelnemers prompten zelf; de skills laat alleen de leider zien, bij de spiegelmomenten.

## Tijdlijn

| Tijd | Min | Blok | Wat de leider doet | Dia |
|---|---|---|---|---|
| 0:00 | 5 | Intro | Welkom, CEDA in één minuut, doel en spelregels | 1-4 |
| 0:05 | 6 | Synthetische data | Wat het is, waarom, wat het niet is; benoem dat het patroon ingebouwd is | 5 |
| 0:11 | 6 | Opdracht en casus | Casusvraag, tweetallen, eindproduct | 6-7 |
| 0:17 | 8 | Skills en prompts | Wat is een skill; de drie skills bij naam | 8-9 |
| 0:25 | 5 | Devcontainer en voorbeeldprompt | Live: eerste prompt, skill activeren | 10 |
| 0:30 | 22 | **Ronde 1: data exploratie** | Rondlopen, vragen alleen beantwoorden met een wedervraag | 11-12 |
| 0:52 | 15 | **Spiegelmoment 1: kijk in de skill** | Bespreek `/workshop-verkennen`: opbouw en wat hij afvangt | 13-15 |
| 1:07 | 22 | **Ronde 2: dashboard bouwen** | Rondlopen, let op de responsible-checks | 16-18 |
| 1:29 | 15 | **Spiegelmoment 2: kijk in de skill** | Bespreek `/workshop-dashboard`, daarna de onthulling | 19-22 |
| 1:44 | 16 | **Evaluatie en afsluiting** (één blok) | Terugblik, peiling, open vraag, afsluitend rondje | 23-27 |
| 2:00 | | Einde | Contactslide blijft staan | 28 |

Evaluatie en afsluiting zijn **één blok van 16 minuten** na de laatste uitleg. Loopt het uit, kort dan de
afsluiting (6 min) in en niet de peiling.

Bij de spiegelmomenten kijken we **naar de skill, niet naar individuele dashboards**. De groep
kan in twee of drie zinnen terugkoppelen wat ze zelf deden; daarna loopt de leider door de skill.

## Voor de dag

- [ ] Devcontainer getest op twee laptops en één Mac. Python, DuckDB, Streamlit en Claude Code werken.
- [ ] `workshop-rad/data/synthetisch_1cho.csv` staat in de devcontainer onder `data/`. **Niet** `waarheid.csv`.
- [ ] De drie skills staan klaar in `.claude/skills/` (kopieer `workshop-rad/skills/*`) en activeren met één commando: `/workshop-verkennen`, `/workshop-dashboard`, `/workshop-reflectie`.
- [ ] Minstens **twee droge runs** van beide rondes, met de checkpoints hieronder. Zie `droge-run.md`.
- [ ] Peiling-tool gekozen en getest (QR-code werkt, antwoorden zijn zichtbaar). Alternatief: papieren kaartjes.
- [ ] Fonts geïnstalleerd op de presentatielaptop, deck als PDF als reserve.
- [ ] Beslissing over casus en peiling-tool genomen (zie `beslissingen.md`).

## Blok per blok

### Intro (0:00)
CEDA-slide laten staan en niets uitleggen; de leider legt in één minuut uit wie CEDA is. Dan het doel:
*aan het eind kun je een kwalitatief antwoord geven op de casusvraag, onderbouwd met een dashboard*.
Spelregel: er is geen goed of fout dashboard, alleen keuzes die je kunt uitleggen.

### Synthetische data (0:05)
Drie boodschappen: veilig (fictief), open (mag de agent in), let op (bewust gemaakt, kansen zijn onze
keuze). Zeg hardop dat er een echt verschil is ingebouwd én een nep-verschil, zonder te vertellen welke.

### Opdracht en casus (0:11)
Casusvraag A: *welke eerstejaars stoppen binnen een jaar, en verschilt dat per sector en
opleidingsvorm?* Let op: opleidingsvorm heeft in de workshopdata maar één waarde (voltijd; de droge run bevestigde dit); laat
deelnemers dat zelf ontdekken en neem het mee naar het spiegelmoment als bewijs dat verkennen loont.

### Skills en prompts (0:17)
Prompt versus skill versus agent (dia 8). Laat een SKILL.md op het scherm zien, niet langer dan een minuut.
Dia 9 noemt de drie skills bij naam: `/workshop-verkennen`, `/workshop-dashboard` en `/workshop-reflectie`.
Vuistregel: elke prompt die je drie keer typt, is een skill in wording.

### Devcontainer en voorbeeldprompt (0:25)
Laat live de eerste instructie zien, bijvoorbeeld: *"Lees data/synthetisch_1cho.csv en vertel in
gewone taal wat erin zit."* Dan de skill activeren (`/workshop-verkennen`). Maximaal 1 minuut voor
het activeren; zo niet, dan is de devcontainer-voorbereiding mislukt.

### Ronde 1: data exploratie (0:30-0:52)
Deelnemers werken met de agent aan data en codebook. De checker beoordeelt of de uitkomst logisch is; code lezen hoeft niet. **Checkpoint
(wat een goede ronde oplevert):** 3070 studenten, cohorten 2012-2023, cohort 2023 nog niet
waarneembaar voor uitval, veel kleine groepen bij opleiding × cohort × geslacht, een schets met twee
of drie views. Wie het laatste cohort meetelt (het geeft een vertekend percentage, met onze definitie 100% uitval), zit in de valkuil.

### Spiegelmoment 1: kijk in de skill (0:52-1:07)
Dia 13-15. We bespreken de skill, niet de schetsen van de tweetallen.
1. (3 min) Twee tweetallen noemen elk één ding dat ze in ronde 1 tegenkwamen.
2. (6 min) Dia 14: de vier stappen van `/workshop-verkennen`. Open SKILL.md op het scherm: bovenaan staat
   wanneer de agent hem pakt, daaronder de stappen. Vraag: welke stap heb je overgeslagen of anders gedaan?
3. (4 min) Dia 15: wat de skill afvangt (laatste cohort, kolom met één waarde, kleine groepen, geen oorzaak).
   Laat deelnemers aanwijzen welke ze zelf misten.
4. (2 min) Draai de skill live (ongeveer 1 minuut, zie `tijdmeting.md`) en zet eventueel een gewone prompt ernaast. Leg het verschil neer als bevinding, niet als oordeel.

### Ronde 2: dashboard bouwen (1:07-1:29)
Wissel van rol. Bouw een dashboard met conclusie als titel, vergelijking, filter, drempel, bron en
toegankelijkheid. **Checkpoint:** uitval 22% techniek, 13% economie, 10% gezondheidszorg, totaal
16,7%; geslacht is ruis (16% versus 17%); drempel toegepast op opleiding × cohort × geslacht.

### Spiegelmoment 2: kijk in de skill (1:29-1:44)
Dia 19-22. Ook nu bespreken we de skill, niet de dashboards van de tweetallen.
1. (3 min) Twee tweetallen noemen elk één keuze die ze maakten (titel, drempel, filter).
2. (4 min) Dia 20: wat `/workshop-dashboard` doet: inlezen, bouwen, checks verweven, testen.
3. (4 min) Dia 21: tabel met de vijf checks. Vraag per rij: deed jij dit zelf? De skill doet het elke keer.
4. (4 min) Dia 22: **de onthulling**. De werkelijke uitval per sector, en de mededeling dat geslacht bewust
   géén verschil kent. Wie "vrouwen vallen vaker uit" had, gebruikt dit als leermoment zonder beschuldiging.

### Evaluatie en afsluiting, één blok (1:44-2:00)
Dia 23-27. Zie `evaluatie-en-vervolg.md`.
1. (4 min) Terugblik, via `/workshop-reflectie` of de peiling (dia 23-24).
2. (2 min) Meerkeuzevraag: interesse in een training (dia 25).
3. (4 min) Open vraag: wat wil je precies leren (dia 26).
4. (6 min) Afsluitend rondje: *wat verloor en won je, en wat doe je morgen anders?* Eén zin per persoon of op een
   kaartje (dia 27). Sluit met de contactslide.

Als de rondes uitlopen, kort dan de afsluiting in; schrap niet de peiling.

## Als het misgaat

| Probleem | Oplossing |
|---|---|
| Devcontainer start niet | Reserve: laptop van de leider, deelnemers kijken mee; of werk in tweetallen op één laptop |
| Agent geeft een afwijkend resultaat | Vergelijk met het checkpoint; verschil is zelf een spiegelmoment |
| Ronde loopt uit | Verkort spiegelmoment, niet de evaluatie |
| Iemand haakt af | Zet naast een tweetal; de checker-rol is ook waardevol |
| Peiling werkt niet | Papieren kaartjes met dezelfde vragen, kort invullen |
| Iemand wil echte data gebruiken | Nee: privacy; verwijs naar het CEDA-pakket eencijferho voor na de workshop |
