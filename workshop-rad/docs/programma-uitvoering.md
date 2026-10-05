# Programma-uitvoering: draaiboek van 120 minuten

Dit is het draaiboek bij het deck `261005_workshop_rad_uitvoering`. Het eerdere voorstel
(`261005_workshop_rad_voorstel`) legt de keuzes voor; dit document beschrijft de dag zelf.

**Casus:** A, eerstejaarsuitval (aanbeveling; zie `bevindingen-staat1cho.md`, punt 5). Wissel naar B
alleen als de groep daar zin in heeft, de data ondersteunt het. Casus C gaan we niet doen.
**Werkvorm:** tweetallen, één stuurt (bestuurder), één controleert (navigator), wisselen na ronde 1.

## Tijdlijn

| Tijd | Min | Blok | Wat de leider doet | Dia |
|---|---|---|---|---|
| 0:00 | 5 | Intro | Welkom, CEDA in één minuut, doel en spelregels | 1-4 |
| 0:05 | 6 | Synthetische data | Wat het is, waarom, wat het niet is; benoem dat het patroon ingebouwd is | 5 |
| 0:11 | 6 | Opdracht en casus | Casusvraag, tweetallen, eindproduct | 6-7 |
| 0:17 | 8 | Skills en prompts | Wat is een skill, waarom loont het | 8 |
| 0:25 | 5 | Devcontainer en voorbeeldprompt | Live: eerste prompt en start van skill 1 | 9 |
| 0:30 | 22 | **Ronde 1: data exploratie** | Rondlopen, vragen alleen beantwoorden met een wedervraag | 10-11 |
| 0:52 | 15 | **Spiegelmoment 1** | 2-3 tweetallen vertellen, daarna skill 1 live | 12-13 |
| 1:07 | 22 | **Ronde 2: dashboard bouwen** | Rondlopen, let op de responsible-checks | 14-16 |
| 1:29 | 15 | **Spiegelmoment 2** | 2-3 dashboards tonen, onthul de uitkomst, skill 2 live | 17-19 |
| 1:44 | 8 | **Evaluatie en vervolg** | Reflectie, meerkeuzevraag, open vraag | 20-22 |
| 1:52 | 8 | Interactieve afsluiting | Wat verloor en won je, wat neem je mee | 23 |

De evaluatie staat bewust ná de laatste uitleg (spiegelmoment 2) en vóór de interactieve afsluiting:
deelnemers hebben dan alles gezien en de laatste minuten blijven voor de gezamenlijke afronding.

## Voor de dag

- [ ] Devcontainer getest op twee laptops en één Mac. Python, DuckDB, Streamlit en Claude Code werken.
- [ ] `workshop-rad/data/synthetisch_1cho.csv` staat in de devcontainer onder `data/`. **Niet** `waarheid.csv`.
- [ ] De drie skills staan klaar in `.claude/skills/` (kopieer `workshop-rad/skills/*`) en activeren met één commando.
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
Prompt versus skill versus agent. Laat een SKILL.md op het scherm zien, niet langer dan een minuut.
Vuistregel: elke prompt die je drie keer typt, is een skill in wording.

### Devcontainer en voorbeeldprompt (0:25)
Laat live de eerste instructie zien, bijvoorbeeld: *"Lees data/synthetisch_1cho.csv en vertel in
gewone taal wat erin zit."* Dan de skill activeren (`/workshop-verkennen`). Maximaal 1 minuut voor
het activeren; zo niet, dan is de devcontainer-voorbereiding mislukt.

### Ronde 1: data exploratie (0:30-0:52)
Deelnemers werken met de agent aan data en codebook. De navigator controleert de code. **Checkpoint
(wat een goede ronde oplevert):** 3070 studenten, cohorten 2012-2023, cohort 2023 nog niet
waarneembaar voor uitval, veel kleine groepen bij opleiding × cohort × geslacht, een schets met twee
of drie views. Wie het laatste cohort meetelt (het geeft een vertekend percentage, met onze definitie 100% uitval), zit in de valkuil.

### Spiegelmoment 1 (0:52-1:07)
Twee à drie tweetallen vertellen in één minuut wat ze deden en wat ze tegenkwamen. Daarna draait de
leider `/workshop-verkennen` op dezelfde data en vergelijkt: wat vond de skill dat zij misten, en
andersom? Leg het verschil neer als bevinding, niet als oordeel.

### Ronde 2: dashboard bouwen (1:07-1:29)
Wissel van rol. Bouw een dashboard met conclusie als titel, vergelijking, filter, drempel, bron en
toegankelijkheid. **Checkpoint:** uitval 22% techniek, 13% economie, 10% gezondheidszorg, totaal
16,7%; geslacht is ruis (16% versus 17%); drempel toegepast op opleiding × cohort × geslacht.

### Spiegelmoment 2 (1:29-1:44)
Twee à drie dashboards tonen: wat deed jij anders, wat miste de agent? Dan **de onthulling**: dia
met de werkelijke uitval per sector en de mededeling dat geslacht bewust géén verschil kent. Wie
"vrouwen vallen vaker uit" op een dashboard had staan, gebruikt dit als leermoment, zonder
beschuldiging. Dan skill 2 live.

### Evaluatie en vervolg (1:44-1:52)
Zie `evaluatie-en-vervolg.md`. Drie stappen: reflectie (3 min), meerkeuzevraag (2 min), open vraag
(3 min). Houd de tijd; als de rondes uitlopen, schrap eerst de interactieve afsluiting.

### Interactieve afsluiting (1:52-2:00)
Rondje in de groep: *wat verloor en won je, en wat doe je morgen anders?* Eén zin per persoon of op
een kaartje. Sluit met de contactslide en de vervolgstappen.

## Als het misgaat

| Probleem | Oplossing |
|---|---|
| Devcontainer start niet | Reserve: laptop van de leider, deelnemers kijken mee; of werk in tweetallen op één laptop |
| Agent geeft een afwijkend resultaat | Vergelijk met het checkpoint; verschil is zelf een spiegelmoment |
| Ronde loopt uit | Verkort spiegelmoment, niet de evaluatie |
| Iemand haakt af | Zet naast een tweetal; navigator-rol is ook waardevol |
| Peiling werkt niet | Papieren kaartjes met dezelfde vragen, kort invullen |
| Iemand wil echte data gebruiken | Nee: privacy; verwijs naar het CEDA-pakket eencijferho voor na de workshop |
