---
theme: default
title: Open Onderwijs Data Chat — workshop
info: Data Summer School · CEDA. Een taalmodel over open onderwijsdata laten praten zonder te hallucineren op cijfers.
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- TITELSLIDE (Slide1.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">Data Summer School · CEDA</p>
  <h1 style="font-size: 3rem; line-height: 1.12; margin-bottom: 0.6rem; color: var(--np-ink);">Open Onderwijs Data Chat</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 720px; line-height: 1.5; margin-bottom: 1rem;">
    Open onderwijsdata bevragen in gewone taal.
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls · 2026</div>
</div>

<!--
PRESENTER — ± 60 min, interactief. Dit is een workshop, geen praatje: stap 5 (Wat we
niet doen) en stap 7 (Zelf proberen) zijn gesprekken en krijgen de meeste ruimte.
Kernboodschap die alles draagt — zeg hardop: "Een taalmodel is goed in taal en slecht
in cijfers. Dus bouw je eromheen zodat het model de taal doet en de computer de cijfers."
CEDA bouwt aan de Open Onderwijs Data Chat (werknaam), nog volop in ontwikkeling.
Feedback is het doel van vandaag.
-->

---

<!-- AGENDA (Slide2.PNG) — tekst rechts -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Wat gaan we doen</p>
  <h1 style="font-size: 2rem !important; margin-bottom: 1.2rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 0.7rem; font-size: 0.95rem;">
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num">1</span><strong>Demo</strong>
    </div>
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span><strong>De fout</strong>
    </div>
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num" style="background: var(--np-orange);">3</span><strong>Waarom het gebeurt</strong>
    </div>
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num" style="background: var(--np-blue);">4</span><strong>Wat we deden</strong>
    </div>
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num" style="background: var(--np-green);">5</span><strong>Wat we níet doen</strong>
    </div>
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num" style="background: var(--np-blue);">6</span><strong>Wat nog openstaat</strong>
    </div>
    <div style="display: flex; align-items: center; gap: 0.7rem;">
      <span class="np-num" style="background: var(--np-green);">7</span><strong>Zelf proberen</strong>
    </div>
  </div>
</div>

<!--
PRESENTER — Kort langslopen. Stap 5 en 7 zijn de gespreksdelen; daar onderscheidt
dit zich van een presentatie. Bij tijdnood: stap 4 inkorten (twee clusters), 5 en 7
beschermen.
-->

---

<!-- RODE DRAAD — quote/highlight (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <p class="eyebrow">De rode draad</p>
  <div style="font-family: 'Cooper Light BT', serif; font-size: 2rem; line-height: 1.45; color: var(--np-blue); max-width: 760px;">
    "Een taalmodel is goed in taal en slecht in cijfers. Dus laat het model de taal doen, en de computer de cijfers."
  </div>
</div>

</div>

<!--
PRESENTER — Dit is het enige idee dat het publiek moet meenemen. Alles daarna is dit
principe waterdicht en controleerbaar maken. Kort houden; de theorie komt bij stap 3.
De vakterm-vertaling van dit principe komt straks terug bij "Wat we deden":
tool calls = het model roept alleen vaste functies aan (de computer rekent);
scaffolding = de vaste regels en routing eromheen; harness = de testset die meet of
het werkt. Noem die woorden hier NIET — het publiek heeft er nu niks aan.
-->

---

<!-- STAP 1 — DEMO (Slide13.PNG, divider) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <h1 style="color: #FFFFFF !important; font-size: 3.4rem;">Demo</h1>
  </div>
</div>

<!--
PRESENTER — ± 7 min · tonen. Doel: vertrouwen wekken — laat zien dat het werkt vóór
je laat zien waar het misgaat. Schakel nu naar de LIVE APPLICATIE.
Stel één duidelijke, controleerbare vraag (bijv. aantal MBO-studenten in een recent
jaar, of instroom bij een instelling die iemand kent). Laat het antwoord in gewone taal
zien, met bronvermelding en uitklapbare stappen. Benoem kort: live ophalen bij CBS, DUO
en RIO, met de herkomst van elk cijfer.
VRAAG AAN DE ZAAL: "Wat zou je hier zelf mee willen vragen?" Noteer 1–2 vragen op de
flip-over — die komen terug bij stap 7.
Achtergrond in één zin: CEDA bouwt aan de Open Onderwijs Data Chat; nog in ontwikkeling,
feedback is het doel.
-->

---

<!-- DIVIDER — Stap 2 (Slide14.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Het probleem</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Nu de fout</h1>
  </div>
</div>

<!--
PRESENTER — ± 6 min · tonen + laten raden. Dit is de haak van de sessie.
-->

---

<!-- STAP 2 — VU tabel (Slide4.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Hoeveel eerstejaars stroomden in bij de VU?

<p class="np-subtitle">Een echte vraag uit onze logs. De chat haalde de data netjes op — en telde toen zélf op.</p>

<div style="display: flex; gap: 1.6rem; align-items: center; margin-top: 0.2rem;">
<div style="flex: 1.1;">

<table style="border-collapse: collapse; width: 100%; font-size: 0.9rem;">
  <thead>
    <tr style="border-bottom: 2px solid var(--np-dark-blue); text-align: right;">
      <th style="text-align: left; padding: 6px 10px; color: var(--np-mid-gray); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em;">Studiejaar</th>
      <th style="padding: 6px 10px; color: var(--np-mid-gray); font-size: 0.78rem; text-transform: uppercase;">Chat zei</th>
      <th style="padding: 6px 10px; color: var(--np-mid-gray); font-size: 0.78rem; text-transform: uppercase;">Werkelijk</th>
      <th style="padding: 6px 10px; color: var(--np-mid-gray); font-size: 0.78rem; text-transform: uppercase;">Afwijking</th>
    </tr>
  </thead>
  <tbody style="text-align: right;">
    <tr style="border-bottom: 1px solid var(--np-light-gray);"><td style="text-align: left; padding: 6px 10px;">2021/'22</td><td style="padding: 6px 10px; color: var(--np-orange); font-weight: 600;">4.338</td><td style="padding: 6px 10px; color: var(--np-green); font-weight: 600;">4.537</td><td style="padding: 6px 10px;">−4,4%</td></tr>
    <tr style="border-bottom: 1px solid var(--np-light-gray);"><td style="text-align: left; padding: 6px 10px;">2022/'23</td><td style="padding: 6px 10px; color: var(--np-orange); font-weight: 600;">3.984</td><td style="padding: 6px 10px; color: var(--np-green); font-weight: 600;">4.280</td><td style="padding: 6px 10px;">−6,9%</td></tr>
    <tr style="border-bottom: 1px solid var(--np-light-gray);"><td style="text-align: left; padding: 6px 10px;">2023/'24</td><td style="padding: 6px 10px; color: var(--np-orange); font-weight: 600;">3.947</td><td style="padding: 6px 10px; color: var(--np-green); font-weight: 600;">4.018</td><td style="padding: 6px 10px;">−1,8%</td></tr>
    <tr style="border-bottom: 1px solid var(--np-light-gray);"><td style="text-align: left; padding: 6px 10px;">2024/'25</td><td style="padding: 6px 10px; color: var(--np-orange); font-weight: 600;">3.683</td><td style="padding: 6px 10px; color: var(--np-green); font-weight: 600;">3.863</td><td style="padding: 6px 10px;">−4,7%</td></tr>
    <tr><td style="text-align: left; padding: 6px 10px;">2025/'26</td><td style="padding: 6px 10px; color: var(--np-orange); font-weight: 600;">3.455</td><td style="padding: 6px 10px; color: var(--np-green); font-weight: 600;">3.306</td><td style="padding: 6px 10px;">+4,5%</td></tr>
  </tbody>
</table>

</div>
<div style="flex: 0.8;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Kernpunt</span>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Niets in het antwoord verraadde dat er iets mis was. <strong>Geen foutmelding.</strong> De foute getallen gingen door naar de grafiek.
    </p>
  </div>
</div>
</div>

</div>

<!--
PRESENTER — Vertel: uit onze eigen logs. Hoeveel eerstejaars bachelorstudenten
stroomden in bij de VU? De chat haalde netjes ~40 rijen per jaar op en telde ze
vervolgens in zijn hoofd op.
LATEN RADEN: "Alle vijf de jaren zitten ernaast, in wisselende richting. Wat is hier
volgens jullie gebeurd?" Iemand komt vaak zelf op "het heeft zelf zitten rekenen".
Geef daar de tijd voor; niet meteen het antwoord geven.
Kernpunt: geen foutmelding, en de foute getallen belandden in de grafiek — de vorm die
mensen onthouden en in een presentatie plakken.
-->

---

<!-- STAP 3 — Waarom (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Waarom het gebeurt

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: center;">
<div>
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.5rem; line-height: 1.45; color: var(--np-blue);">
    Een taalmodel voorspelt tekst. Het herkent patronen in taal; het rekent niet. En het weet zelf niet wanneer het gokt.
  </div>
</div>
<div style="font-size: 0.9rem; line-height: 1.7;">

- Vraag om **veertig getallen op te tellen** → een plausibel getal dat er een paar procent naast zit, zonder aarzeling
- De VU-fout was simpel: **er was geen rekenfunctie**, dus moest het model wel zelf optellen

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Daaruit volgt alles: <strong>het model doet de taal, de computer doet de cijfers</strong>.
</div>

</div>
</div>

</div>

<!--
PRESENTER — ± 4 min · vertellen. Kort en scherp, dit is de theorie.
Een taalmodel voorspelt tekst; het rekent niet en weet niet wanneer het gokt. Veertig
getallen optellen → plausibel getal dat ernaast zit, in een keurige zin. Oorzaak VU-fout:
geen rekenfunctie. Naar het principe: model doet de taal, computer de cijfers — de rest
van de sessie is dat waterdicht en controleerbaar maken.
-->

---

<!-- DIVIDER — Stap 4 (Slide15.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">De aanpak</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Wat we hebben gedaan</h1>
  </div>
</div>

<!--
PRESENTER — ± 15 min · vertellen (+ evt. live). Niet alle 21 maatregelen aflopen — drie
clusters, elk met één voorbeeld. Bij tijdnood: twee clusters.
Hier komt het principe van slide 3 terug, nu mét de vaktermen — de drie clusters ZIJN
tool calls / scaffolding / harness:
· Cluster A = TOOL CALLS: het model rekent en haalt niet zelf op, het roept vaste
  functies aan (de computer doet de cijfers).
· Cluster B = SCAFFOLDING: het geraamte van vaste regels eromheen — welke bron, welk
  filter, welke conventie — zodat het model niet hoeft te gokken.
· Cluster C = HARNESS: het meetsysteem eromheen — een testset en logboek die vaststellen
  dat het werkt en fouten zichtbaar maken.
Je kunt die drie woorden hier één keer laten vallen als kapstok.
-->

---

<!-- STAP 4 — 3 clusters overzicht (Slide4.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Drie clusters

<div class="np-grid-3" style="margin-top: 0.7rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Cluster A</span>
    <h3 style="margin-top: 0.5rem;">Niet rekenen, niet zelf ophalen</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0;">Python doet de cijfers, het model roept alleen vaste functies aan.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Cluster B</span>
    <h3 style="margin-top: 0.5rem;">De juiste bron en het juiste filter</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0;">Correcte cijfers uit de verkeerde tabel.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Cluster C</span>
    <h3 style="margin-top: 0.5rem;">Fouten die je niet ziet</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0;">Geen foutmelding.</p>
  </div>
</div>

</div>

<!--
PRESENTER — Introduceer de drie clusters, dan per cluster een verdiepingsslide.
A: niet rekenen, niet zelf ophalen. B: de juiste bron/filter — in de praktijk de grootste
bron van slechte antwoorden (correcte cijfers, verkeerde tabel). C: fouten zonder
foutmelding, plus een meetlaag.
-->

---

<!-- CLUSTER A detail (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Cluster A</p>

# Het model mag niet rekenen, en niet zelf ophalen

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
<div style="font-size: 0.9rem; line-height: 1.65;">

- Geen directe toegang tot data, niet uit het geheugen putten — alleen **vaste functies** die live ophalen bij CBS, DUO en RIO
- Optellen en middelen doet **Python**; grote tabellen blijven op de server, het model vraagt gericht stukjes op
- Grafieken lezen de **echte cijfers uit de opslag** in plaats van ze over te typen

</div>
<div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Voorbeeld</span>
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.3rem 0 0;">
      De <strong>VU-fout</strong>: opgelost met een aggregatiefunctie plus de regel "reken nooit zelf op data". Dezelfde vraag geeft nu altijd hetzelfde, narekenbare getal.
    </p>
  </div>
</div>
</div>

<p style="font-family: monospace; font-size: 0.74rem; color: var(--np-mid-gray); margin-top: 1rem;">tool calling · server-side aggregatie · store/query-patroon · pass-by-reference</p>

</div>

<!--
PRESENTER — Raakt problemen 1, 2 en 3. Kern: de computer doet de cijfers, het model de taal.
VAKTERMEN (voor als iemand vraagt wat ze betekenen — en welke maatregel erbij hoort):
· tool calling — het model verzint geen data, het roept vaste, vooraf gebouwde functies
  aan ("haal instroom VU op"). Maatregel: álle datatoegang loopt via die functies.
· server-side aggregatie — optellen/middelen gebeurt in Python (pandas) op de server, niet
  in het model. Maatregel: de aggregatiefunctie met groeperen/rekenen — dit loste de VU-fout op.
· store/query-patroon — grote tabellen blijven op de server onder een label; het model krijgt
  een beschrijving en vraagt gerichte stukjes op. Maatregel: data niet in de prompt proppen.
· pass-by-reference — grafieken krijgen een verwijzing naar de opgeslagen dataset i.p.v. losse
  getallen, en lezen de echte waarden zelf. Maatregel: geen overtypstap tussen bron en beeld.
OPTIONEEL LIVE: stel de VU-vraag opnieuw in de app en laat zien dat het nu klopt, met de
uitklapbare rekenstap. Bewijs dat cluster A werkt.
-->

---

<!-- CLUSTER B detail (Slide4.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

<p class="eyebrow">Cluster B</p>

# De juiste bron en het juiste filter vinden

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
<div style="font-size: 0.9rem; line-height: 1.65;">

- De grootste bron van slechte antwoorden: **correcte cijfers uit de verkeerde tabel**
- **Routingregels**: voortijdig schoolverlaten via CBS, prognoses via DUO, actuele instellingen via RIO
- Betere **catalogus-zoekfunctie**: verouderde datasets eruit, titeltreffers wegen zwaarder, synoniemen erbij

</div>
<div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Voorbeeld</span>
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.3rem 0 0;">
      <strong>Schooljaar:</strong> CBS codeert 2022–2023 als <code>2022SJ00</code>, met het startjaar. Zonder die regel zat elk antwoord er stelselmatig een jaar naast — zonder foutmelding.
    </p>
  </div>
</div>
</div>

<p style="font-family: monospace; font-size: 0.74rem; color: var(--np-mid-gray); margin-top: 1rem;">routing rules · capability-based filtering · veldgewogen ranking</p>

</div>

<!--
PRESENTER — Raakt problemen 4 t/m 9. In de praktijk de grootste bron van slechte
antwoorden: correcte cijfers, verkeerde tabel of verkeerde periode.
VAKTERMEN (met de maatregel erbij):
· routing rules — vaste regels welke bron bij welk onderwerp hoort (VSV→CBS, prognoses→DUO,
  actueel→RIO, historie→CBS/DUO). Maatregel: die regels staan in de systeemprompt.
· capability-based filtering — alleen datasets tonen die de chat écht kan laden en gebruiken;
  archief (60% van de CBS-sets!) en niet-laadbare leveranciers eruit. Maatregel: filter in de
  zoekfunctie.
· veldgewogen ranking — een treffer in de TITEL weegt zwaarder dan diep in de omschrijving, plus
  onderwijssynoniemen ("uitval" vindt ook "voortijdig schoolverlaten"). Maatregel: betere
  catalogus-zoekfunctie.
Voorbeeld: schooljaarcodering 2022SJ00 — een off-by-one die geen foutmelding gaf en alleen
opviel als je het antwoord al kende. Bij DUO speelt dezelfde: jaar 2022 = peildatum 1-10-2022.
-->

---

<!-- CLUSTER C detail (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Cluster C</p>

# Fouten die je niet ziet — en meten of het werkt

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
<div style="font-size: 0.9rem; line-height: 1.65;">

- Het gevaarlijkst: fouten **zonder foutmelding** — een label dat data overschreef (grafiek "mannen" toonde vrouwendata), of stil afgekapte data als totaal
- **Controleerbaarheid**: bron, definitie en reproduceerbare code onder elk antwoord
- **Meetlaag**: een testset met vooraf bekende antwoorden + een logboek van elke stap

</div>
<div>
  <div class="np-card accent-green">
    <span class="np-badge green">Voorbeeld</span>
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.3rem 0 0;">
      De testset scoort modellen op dezelfde vragen: <strong>DeepSeek R1 88</strong>, Hy3 82, Haiku 60 (koos vaak de verkeerde bron). Modelkeuze is nu onderbouwd.
    </p>
  </div>
</div>
</div>

<p style="font-family: monospace; font-size: 0.74rem; color: var(--np-mid-gray); margin-top: 1rem;">cache key collision · provenance · evaluation harness · audit logging</p>

</div>

<!--
PRESENTER — Raakt problemen 10 t/m 16. De gevaarlijkste fouten geven geen foutmelding.
VAKTERMEN (met de maatregel erbij):
· cache key collision — twee opvragingen kregen hetzelfde opslaglabel, de tweede overschreef
  de eerste (grafiek "mannen" toonde vrouwendata). Maatregel: het filter meenemen in het label.
· provenance — de herkomst onder elk antwoord: bron met dataset-ID en periode, de definities van
  de kolommen, en per stap de uitvoerbare Python-code. Maatregel: "vertrouw de chat" wordt
  "reken het na".
· evaluation harness — zie eval-scores hieronder.
· audit logging — elke vraag, elk antwoord, elke functie-aanroep en cataloguszoekopdracht wordt
  vastgelegd, ook in productie. Maatregel: fouten zijn terug te vinden — zo is de VU-fout ontdekt.

WAT ZIJN EVAL-SCORES (als iemand vraagt): we hebben een "golden dataset" — productievragen
waarvan we vooraf hebben uitgezocht welke dataset erbij hoort, welke stappen, welke getallen
(met speling) en welke woorden in het antwoord horen. Een script legt elk model dezelfde vragen
voor en geeft een cijfer op 100, opgebouwd uit 6 criteria: juiste tools gebruikt · data echt
opgehaald · via een script gerekend · grafiek gemaakt · niets verzonnen · bronnen vermeld.
Bij ons: DeepSeek R1 88, Hy3 82, Haiku 60 (Haiku koos vaak de verkeerde bron). Zo kiezen we een
model op meetbare prestaties i.p.v. onderbuikgevoel, en elke gevonden fout wordt een nieuwe
testvraag zodat hij niet stil kan terugkeren.
-->

---

<!-- DIVIDER — Stap 5 (Slide13.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">De afwegingen</p>
    <h1 style="color: #FFFFFF !important; font-size: 2.7rem;">Wat iedereen voorstelt, en wij niet doen</h1>
  </div>
</div>

<!--
PRESENTER — ± 12 min · GESPREK. Het interessantste deel voor dit publiek — zij hebben
deze suggesties zelf al klaarliggen. OPEN MET EEN VRAAG en verzamel op de flip-over
vóór je de volgende slide onthult: "Als je dit hoort — hallucinerende AI op cijfers —
wat zou jíj inzetten?" Meestal komen precies de vier op de volgende slide langs.
-->

---

<!-- STAP 5 — 4 pairs (Slide4.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Vier suggesties — en waarom niet

<p class="np-subtitle">Geen enkel idee is onzin. Ze passen alleen niet bij dít probleem.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start; gap: 0.7rem;">
  <div class="np-card accent-pink">
    <h3 style="font-size: 1rem;">Bijtrainen op onze data</h3>
    <p style="font-size: 0.72rem; color: var(--np-orange); font-family: monospace; margin: 0.15rem 0 0.3rem;">fine-tuning · RLHF</p>
    <p class="muted" style="font-size: 0.78rem; margin: 0;">Modellen van derden; fouten zaten in domeinkennis en bugs, niet in het model. <strong>Wel:</strong> selecteren op eval-scores.</p>
  </div>
  <div class="np-card accent-pink">
    <h3 style="font-size: 1rem;">Alles in een vectordatabase</h3>
    <p style="font-size: 0.72rem; color: var(--np-orange); font-family: monospace; margin: 0.15rem 0 0.3rem;">klassieke vector-RAG</p>
    <p class="muted" style="font-size: 0.78rem; margin: 0;">Onze bronnen zijn tabellen, geen tekst. "Best lijkende fragment" is niet wat je wilt bij een exact totaal.</p>
  </div>
  <div class="np-card accent-pink">
    <h3 style="font-size: 1rem;">Tweede AI die de eerste controleert</h3>
    <p style="font-size: 0.72rem; color: var(--np-orange); font-family: monospace; margin: 0.15rem 0 0.3rem;">multi-agent verification</p>
    <p class="muted" style="font-size: 0.78rem; margin: 0;">Dubbele kosten en wachttijd; zelfde model deelt dezelfde blinde vlekken. <strong>Wel:</strong> als smalle checker tegen data.</p>
  </div>
  <div class="np-card accent-pink">
    <h3 style="font-size: 1rem;">Chat laat cijfer duiden</h3>
    <p style="font-size: 0.72rem; color: var(--np-orange); font-family: monospace; margin: 0.15rem 0 0.3rem;">automatische duiding</p>
    <p class="muted" style="font-size: 0.78rem; margin: 0;">Duiding vraagt context die niet in de data zit (corona!). Een model dat dat invult, gokt. Duiding blijft bij de gebruiker.</p>
  </div>
</div>

</div>

<!--
PRESENTER — Pas onthullen ná het uitlokken. Per suggestie: waarom niet, en de nuance.
1. Bijtrainen op onze data (fine-tuning = het model op eigen voorbeelden verder trainen;
   RLHF = bijsturen met menselijke voorkeuren). Waarom niet: we draaien modellen van derden
   en kunnen hun gewichten niet aanpassen; het vraagt duizenden voorbeelden; en de fouten
   zaten in ontbrekende domeinkennis en bugs, niet in het model. WEL: we selecteren modellen
   op eval-scores (zie hieronder).
2. Alles in een vectordatabase (vector-RAG = tekst in stukjes knippen, op "lijkt erop"
   terugzoeken). Waarom niet: onze bronnen zijn cijfertabellen, geen lopende tekst. Het "best
   lijkende fragment" is precies verkeerd als je een exact totaal nodig hebt — dan verander je
   geavanceerde AI in een middelmatige zoekmachine.
3. Tweede AI die de eerste controleert (multi-agent verification). Waarom niet standaard:
   verdubbelt kosten en wachttijd, en twee exemplaren van hetzelfde model delen dezelfde blinde
   vlekken — dan bevestigt de controleur de fout. WEL denkbaar: als smalle checker die tegen de
   data toetst (niet tegen een mening), alleen bij zware output.
4. Chat laat het cijfer duiden (goed/slecht nieuws?). Waarom niet: duiding vraagt context die
   niet in de data zit en per instelling verschilt — corona is hét voorbeeld. Een model dat dat
   invult, gokt uit voorkennis (precies wat we bij cluster A verbieden). Duiding blijft bij de
   gebruiker.

WAT ZIJN EVAL-SCORES: het cijfer op 100 uit onze testset (golden dataset). Elk model krijgt
dezelfde productievragen; per vraag checkt een script 6 dingen (juiste tools · data opgehaald ·
via script gerekend · grafiek · niets verzonnen · bronnen vermeld). Bij ons: DeepSeek R1 88,
Hy3 82, Haiku 60. Daarom kiezen we "selecteren op eval-scores" i.p.v. het model bijtrainen.

RODE DRAAD: geen idee is onzin, ze passen alleen niet bij dit probleem — of lossen iets op wat
we anders al opgelost hebben. Dat onderscheid maken is het echte werk.
-->

---

<!-- STAP 6 — openstaand (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat nog openstaat

<p class="np-subtitle">Eerlijk over de randen — wat nog niet af is.</p>

<div style="font-size: 0.9rem; line-height: 1.55; margin-top: 0.3rem;">

- **Elk getal automatisch narekenen** — een controle die elk getal in de tekst terugzoekt in de opgehaalde cijfers.
- **Duim omhoog / omlaag** — een knop om een fout antwoord aan te wijzen. Elke bevestigde fout wordt een testvraag.
- **Strikvragen in de testset** — data met een onmogelijke combinatie: geeft het model dat toe of strijkt het glad?
- **Proberen de chat te misleiden** — weerbaarheidstest tegen instructies verstopt in een geüpload bestand.
- **Begrippen vastleggen in code** — één plek waar staat wat "instroom" of "marktaandeel" precies is. Regel wordt garantie.

</div>

</div>

<!--
PRESENTER — ± 4 min · vertellen. Kort houden, geen uitweiding — dit is een rijtje.
Correspondeert met de open/deels-problemen (2, 14, 15, 18, 19).
Toelichting per punt indien gevraagd:
· Narekencontrole = het grootste resterende gat, met gewone code te dichten.
· Strikvragen = de testset test nu vooral het makkelijke pad; de gevaarlijkste fout is een
  zelfverzekerd antwoord op een vraag die de data niet kan beantwoorden.
· Misleiden = nu de tool bij externe gebruikers ligt, is prompt-injection relevant.
· Begrippen in code (semantische laag) = het grootste knelpunt dat IR'ers noemen is niet het
  gebrek aan cijfers, maar het harmoniseren van definities.
-->

---

<!-- DIVIDER — Stap 7 (Slide14.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Jullie beurt</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Speel er zelf mee</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Stel je eigen vragen — en let op waar het antwoord wringt</p>
  </div>
</div>

<!--
PRESENTER — ± 12 min · SAMEN DOEN. De kern van een summer school-workshop: niet laten zien
dát het werkt, maar samen ontdekken waar het (nog) niet klopt. Laat de zaal vragen aandragen
— ook de twee die je in de demo noteerde — en stel ze live in de app.

GOEDE VRAGEN OM AAN TE REIKEN (elk raakt een cluster uit stap 4):
· Iets over een schooljaar — wordt het juiste jaar gebruikt? (cluster B)
· Voortijdig schoolverlaten — welke bron wordt gekozen? (cluster B)
· Een marktaandeel in een regio — gaat het over waar de student woont of waar de school staat?
  (cluster B)
· Iets historisch over instellingen of locaties — wordt het register gebruikt waar dat niet
  hoort? (cluster B)
· Upload een eigen bestand en stel er een rekenvraag over. (cluster A / veiligheid)
· Iets waarvan je zeker weet dat de data het niet kan beantwoorden — geeft de chat dat toe of
  verzint hij iets? (cluster C / eval)

AFSLUITEN — zeg dit hardop: "Vond iemand een fout? Geef de vraag, het antwoord en het moment
door." Met het logboek is terug te halen welke datasets zijn overwogen, welke is gekozen en
welke berekening is gedaan. Elke bevestigde fout kan een testvraag worden — en dan kan hij niet
stil terugkeren. Sluit af: feedback en suggesties zijn precies waarvoor deze sessie bedoeld is.
-->

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
