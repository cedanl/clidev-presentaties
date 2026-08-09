# Spreektekst & vragen — Open Onderwijs Data Chat (workshop)

Data Summer School · CEDA · ± 60 min · interactief.
Hoort bij `20260807_AIData_SummerSchool.md`. Deze tekst staat ook als sprekersnotitie onder elke slide (druk `P` in Slidev voor presentatormodus).

**Rode draad van álles:** een taalmodel is goed in taal en slecht in cijfers → laat het model de taal doen en de computer de cijfers. De sessie is bewust probleemgericht, geen lijst maatregelen. De twee gespreksmomenten (stap 5 en 7) maken hier een workshop van in plaats van een presentatie — geef die de meeste ruimte.

---

## Slide 1 — Titel

**Vertel:** Welkom. Dit is een workshop, geen praatje. We laten zien hoe je een taalmodel over open onderwijsdata laat praten zónder dat het hallucineert op de cijfers. CEDA bouwt aan de Open Onderwijs Data Chat (werknaam): open onderwijsdata bevragen in gewone taal, antwoord in gewone taal. Nog volop in ontwikkeling — feedback is precies het doel van vandaag.

**Zeg hardop:** "Het model doet de taal, de computer doet de cijfers." Dat is de kapstok voor alles wat komt.

## Slide 2 — Programma

**Vertel:** Kort langslopen. Zeven stappen. Twee daarvan — stap 5 en 7 — zijn gesprekken; dáár onderscheidt een workshop zich. Als de tijd uitloopt kort ik stap 4 in en bescherm ik 5 en 7.

## Slide 3 — Rode draad

**Vertel:** Eén idee om mee te nemen: een taalmodel herkent patronen in taal, maar rekent niet. Dus bouw je eromheen. In vaktermen: tool calls, scaffolding en harness. Kort houden — de uitleg komt bij stap 3.

---

## Stap 1 — Demo eerst (slides 4–5) · ± 7 min · tonen

**Doel:** vertrouwen wekken. Laat zien dat het gewoon werkt, vóór je laat zien waar het misgaat.

**Doen:** stel de chat live één duidelijke, controleerbare vraag — bijv. het aantal MBO-studenten in een recent jaar, of instroom bij een instelling die iemand in de zaal kent.

**Laat zien:** antwoord in gewone taal, met bronvermelding en uitklapbare stappen eronder. Benoem kort: de chat haalt live op bij CBS, DUO en RIO en toont waar elk cijfer vandaan komt.

**❓ Vraag aan de zaal:** *"Wat zou je hier zelf mee willen vragen?"* → verzamel één of twee vragen op de flip-over. Die komen terug bij stap 7.

---

## Stap 2 — Nu de fout (slides 6–7) · ± 6 min · tonen + laten raden

**Doel:** het probleem voelbaar maken. Dit is de haak van de sessie.

**Vertel:** een echte vraag uit onze logs — hoeveel eerstejaars bachelorstudenten stroomden in bij de VU? De chat haalde netjes ~40 rijen per jaar op en telde ze toen zélf op. Toon de tabel: alle vijf de jaren ernaast, tot bijna 7%, in wisselende richting.

**❓ Vraag aan de zaal:** *"Alle vijf de jaren zitten ernaast, in wisselende richting. Wat is hier volgens jullie gebeurd?"* → laat mensen raden. Iemand komt vaak zelf op "het heeft zelf zitten rekenen". Geef daar de tijd voor; niet meteen het antwoord geven.

**Kernpunt:** niets in het antwoord verraadde dat er iets mis was. Geen foutmelding. En de foute getallen gingen door naar de grafiek — precies de vorm die mensen onthouden en in een presentatie plakken.

---

## Stap 3 — Waarom dat gebeurt (slide 8) · ± 4 min · vertellen

**Doel:** het mechanisme benoemen. Kort en scherp — dit is de theorie.

**Vertel:** een taalmodel voorspelt tekst. Het herkent patronen in taal; het rekent niet. En het weet zelf niet wanneer het gokt. Vraag het veertig getallen op te tellen en je krijgt een plausibel getal dat er een paar procent naast zit — zonder aarzeling, in een keurige zin. De VU-fout was simpel: er was geen rekenfunctie, dus moest het model wel zelf optellen.

**Naar het principe:** daaruit volgt alles hierna — het model mag de taal doen, de computer doet de cijfers. De rest van de sessie is dat principe waterdicht en controleerbaar maken.

---

## Stap 4 — Wat we hebben gedaan (slides 9–13) · ± 15 min · vertellen (+ evt. live)

**Doel:** laten zien hoe je het principe afdwingt. Niet 21 maatregelen aflopen — drie clusters, elk met één sprekend voorbeeld.

**Cluster A — Niet rekenen, niet zelf ophalen.** Geen directe datatoegang, niet uit het geheugen putten; alleen vaste functies die live ophalen bij CBS, DUO en RIO. Python doet het optellen en middelen. Grote tabellen blijven server-side; het model krijgt een beschrijving en vraagt gericht stukjes op. Grafieken lezen de echte cijfers uit de opslag.
→ *Voorbeeld:* de VU-fout, opgelost met een aggregatiefunctie plus de regel "reken nooit zelf op data". Dezelfde vraag geeft nu altijd hetzelfde, narekenbare getal.
→ *Termen:* tool calling · server-side aggregatie · store/query-patroon · pass-by-reference.

**Cluster B — De juiste bron en het juiste filter.** In de praktijk de grootste bron van slechte antwoorden: niet verzonnen getallen, maar correcte cijfers uit de verkeerde tabel. Opgelost met routingregels (VSV via CBS, prognoses via DUO, actuele instellingen via RIO), een betere catalogus-zoekfunctie (archief eruit, titeltreffers zwaarder, synoniemen erbij) en opgeschreven bronconventies.
→ *Voorbeeld:* schooljaar. CBS codeert 2022–2023 als `2022SJ00`, met het startjaar. Zonder die regel zat elk antwoord er stelselmatig een jaar naast — zonder foutmelding.
→ *Termen:* routing rules · capability-based filtering · veldgewogen ranking.

**Cluster C — Fouten die je niet ziet, en meten of het werkt.** Het gevaarlijkst: fouten zonder foutmelding. Twee opvragingen met hetzelfde opslaglabel die elkaar overschreven (grafiek "mannen" toonde vrouwendata); of data die stil werd afgekapt en als totaal werd gepresenteerd. Beide opgelost. Plus controleerbaarheid (bron, definitie, reproduceerbare code onder elk antwoord) en een meetlaag: een testset met vooraf bekende antwoorden en een logboek van elke stap.
→ *Voorbeeld:* de testset scoort modellen op dezelfde vragen — DeepSeek R1 88, Hy3 82, Haiku 60 (koos vaak de verkeerde bron). Modelkeuze is nu onderbouwd in plaats van gevoelsmatig.
→ *Termen:* cache key collision · provenance · evaluation harness · audit logging.

**Optioneel live:** stel de VU-vraag opnieuw en laat het nu wél kloppen, met de uitklapbare rekenstap eronder. Bewijs dat cluster A werkt.

---

## Stap 5 — Wat iedereen voorstelt, en wij niet doen (slides 14–15) · ± 12 min · GESPREK

**Doel:** het interessantste deel voor dit publiek — zij hebben deze suggesties zelf al klaarliggen. Lok discussie uit vóór je je eigen antwoord geeft.

**❓ Open met een vraag:** *"Als je dit hoort — hallucinerende AI op cijfers — wat zou jíj inzetten?"* → verzamel de antwoorden op een flip-over. Meestal komen precies deze vier langs. Onthul de slide pas daarna.

1. **Het model bijtrainen op onze data** (fine-tuning · RLHF). *Waarom niet:* we gebruiken modellen van derden en kunnen hun gewichten niet aanpassen; het vraagt duizenden voorbeelden; en de fouten zaten in ontbrekende domeinkennis en bugs, niet in het model. *Wel:* modellen sélecteren op eval-scores.
2. **Alles in een vectordatabase gooien** (klassieke vector-RAG). *Waarom niet:* onze bronnen zijn tabellen met cijfers, geen tekst. "Het best lijkende fragment" is precies niet wat je wilt bij een exact totaal. Hoe verder die kant op, hoe meer je geavanceerde AI in een middelmatige zoekmachine verandert.
3. **Een tweede AI die de eerste controleert** (multi-agent verification). *Waarom niet standaard:* verdubbelt kosten en wachttijd, en twee exemplaren van hetzelfde model delen dezelfde blinde vlekken — dan bevestigt de controleur de fout. *Wel denkbaar:* als smalle checker die tegen data toetst, alleen bij zware output.
4. **De chat laten uitleggen of een cijfer goed of slecht is** (automatische duiding). *Waarom niet:* duiding vraagt context die niet in de data zit en per instelling verschilt (corona is hét voorbeeld). Een model dat dat invult, doet dat uit voorkennis — precies wat we elders verbieden. Duiding blijft bij de gebruiker.

**Rode draad van dit deel:** geen van deze ideeën is onzin. Ze passen alleen niet bij dít probleem, of ze lossen iets op wat we anders al hebben opgelost. Dat onderscheid maken is het echte werk.

---

## Stap 6 — Wat nog openstaat (slide 16) · ± 4 min · vertellen

**Doel:** eerlijk zijn over de randen. Kort rijtje, geen uitweiding.

- **Elk getal automatisch narekenen** — een controle die elk getal in de antwoordtekst terugzoekt in de opgehaalde cijfers en markeert wat er niet in staat. Het grootste resterende gat, met gewone code te dichten.
- **Duim omhoog / omlaag** — een knop om een fout antwoord aan te wijzen. Elke bevestigde fout wordt een nieuwe testvraag.
- **Strikvragen in de testset** — data met een onmogelijke combinatie, om te zien of het model dat toegeeft of gladstrijkt.
- **Proberen de chat te misleiden** — weerbaarheidstest tegen instructies verstopt in een geüpload bestand. Nu de tool bij externe gebruikers ligt, is dat relevant.
- **Begrippen vastleggen in code** — één plek waar staat wat "instroom" of "marktaandeel" precies is, zodat een regel een garantie wordt in plaats van een advies.

---

## Stap 7 — Zelf proberen, probeer hem te breken (slides 17–18) · ± 12 min · SAMEN DOEN

**Doel:** de kern van een summer school-workshop. Niet laten zien dát het werkt, maar samen vinden wáár het niet werkt.

**Doen:** laat de zaal vragen aandragen (ook de twee uit stap 1) en stel ze live. Deze uitlokkers raken precies de clusters uit stap 4:

- Vraag iets over een **schooljaar** — wordt het juiste jaar gebruikt? *(cluster B)*
- Vraag naar **voortijdig schoolverlaten** — welke bron wordt gekozen? *(cluster B)*
- Vraag een **marktaandeel** voor een instelling in een regio — gaat het over waar studenten wonen of waar de school staat? *(cluster B)*
- Vraag iets **historisch** over instellingen of locaties — wordt het register gebruikt waar dat niet hoort? *(cluster B)*
- **Upload een eigen bestand** en stel er een rekenvraag over. *(cluster A / veiligheid)*
- Vraag iets waarvan je zeker weet dat de **data het niet kan beantwoorden** — geeft de chat dat toe of verzint hij iets? *(cluster C / eval)*

**❓ Afsluiten:** *"Vond iemand een fout? Geef de vraag, het antwoord en het moment door."* Met het logboek is dan terug te halen welke datasets zijn overwogen, welke is gekozen en welke berekening is uitgevoerd. Elke bevestigde fout kan een testvraag worden — en dan kan hij niet stil terugkeren. Sluit af met: feedback en suggesties zijn precies waarvoor deze sessie bedoeld is.

---

## Timing in één blik (slide 19)

| Tijd | Stap | Vorm |
|------|------|------|
| 0–7 | 1 · Demo eerst | tonen |
| 7–13 | 2 · Nu de fout (VU-tabel) | tonen + laten raden |
| 13–17 | 3 · Waarom dat gebeurt | vertellen |
| 17–32 | 4 · Wat we deden (3 clusters) | vertellen + evt. live |
| 32–44 | **5 · Wat we niet doen** | **gesprek** |
| 44–48 | 6 · Wat nog openstaat | vertellen |
| 48–60 | **7 · Zelf proberen / breken** | **samen doen** |

**Loopt de tijd uit:** kort stap 4 in (twee clusters in plaats van drie) en bescherm stap 5 en 7 — dat zijn de delen waar dit een workshop is en geen presentatie.

---

## Alle vragen aan de zaal op een rij

1. **(Stap 1)** "Wat zou je hier zelf mee willen vragen?" — verzamelen voor stap 7.
2. **(Stap 2)** "Alle vijf de jaren zitten ernaast, in wisselende richting. Wat is hier volgens jullie gebeurd?" — laten raden.
3. **(Stap 5)** "Als je dit hoort — hallucinerende AI op cijfers — wat zou jíj inzetten?" — flip-over, dan onthullen.
4. **(Stap 7)** "Vond iemand een fout? Geef de vraag, het antwoord en het moment door."
