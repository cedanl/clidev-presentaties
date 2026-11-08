---
theme: default
title: Inlezen van TBG-I en Registratieoverzicht
info: Datacoalitie werkgroep 2. Demo van mbo-bekostiging-bestanden en de vraag wat instellingen met deze DUO-bestanden willen.
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
  <p class="eyebrow">Datacoalitie &middot; werkgroep 2</p>
  <h1 style="font-size: 3rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Inlezen van TBG-I en Registratieoverzicht</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Wat kan er nu met deze DUO-bestanden, en wat willen jullie ermee?
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    Willem-Jan &middot; Corneel &middot; Tomer &middot; Aslam &middot; Steven
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;"><strong>CEDA</strong> &middot; Npuls &middot; 2026</div>
</div>

<!-- Slide: Agenda -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Wat gaan we doen</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.2rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 0.9rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>De bestanden</strong><br/><span class="muted" style="font-size: 0.82rem;">Wat DUO levert en waarom het lastig is</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Demo</strong><br/><span class="muted" style="font-size: 0.82rem;">mbo-bekostiging-bestanden in actie</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>De vraag</strong><br/><span class="muted" style="font-size: 0.82rem;">Wat willen jullie met deze bestanden?</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">4</span>
      <div><strong>Doorkijk hbo en wo</strong><br/><span class="muted" style="font-size: 0.82rem;">Wat daar kan, en wat voor mbo</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">5</span>
      <div><strong>Zelf proberen</strong><br/><span class="muted" style="font-size: 0.82rem;">In vier stappen op je eigen laptop</span></div>
    </div>
  </div>
</div>

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

<!-- Slide: Hoofdstuk 1 - De bestanden -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">De bestanden</h1>
  </div>
</div>

<!-- Slide: Drie bestanden van DUO -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie bestanden van DUO

<p class="np-subtitle">Elke mbo-instelling krijgt ze van DUO.</p>

<div class="np-grid-3" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">RO &middot; csv</span>
    <h3 style="margin-top: 0.5rem;">Registratieoverzicht</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Alle inschrijvingen en diploma's in een selectieperiode.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">TBG-I &middot; xml</span>
    <h3 style="margin-top: 0.5rem;">Terugkoppeling Bekostigingsgrondslagen</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Grondslagen per inschrijving en diploma, met signalen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Grondslag IP &middot; csv</span>
    <h3 style="margin-top: 0.5rem;">Afslag register-levering</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Bekostigingsrelevante data voor peildatum 1 oktober.</p>
  </div>
</div>

</div>

<!-- Slide: Waarom het lastig is -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Waarom het lastig is

<div style="display: grid; grid-template-columns: 30% 64%; gap: 2rem; align-items: center; max-width: 94%; margin-top: 0.4rem;">
  <div style="text-align: center;">
    <img src="/presentations/261105_werkgroep2_tbgi_ro/pve-ro-opbouw.png" style="height: 330px; width: auto; border: 1px solid var(--np-light-blue); border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
    <p class="muted" style="font-size: 0.7rem; margin: 0.4rem 0 0;">Programma van Eisen MBO-instelling (DUO)</p>
  </div>
  <div>
    <div style="display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.86rem;">
      <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num">1</span><div><strong>Handleiding van 224 pagina's</strong>, 32 alleen voor deze drie bestanden</div></div>
      <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num" style="background: var(--np-orange);">2</span><div><strong>Geen kolomkoppen</strong>: wat een veld betekent, zoek je op</div></div>
      <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num" style="background: var(--np-green);">3</span><div><strong>Elf soorten regels</strong> door elkaar in één bestand</div></div>
      <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num">4</span><div><strong>Drie formaten</strong>: andere scheidingstekens, datums en XML</div></div>
    </div>
    <div style="margin-top: 0.9rem; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.15);">
<pre style="margin: 0; background: var(--np-ink); color: var(--np-white, #fff); font-size: 0.6rem; line-height: 1.55; padding: 0.55rem 0.8rem;"><span style="color: var(--np-light-blue);">RO</span>        ISP|BSN1||C3|<span style="color: var(--np-yellow);">2023-01-30</span>|25655|BBL||J||100A501|101X591||
<span style="color: var(--np-light-green);">Grondslag</span> ISP;BSN1;27DV;C3;<span style="color: var(--np-yellow);">20230130</span>;20250116;25655;;BBL;;1;100A501;…
<span style="color: var(--np-light-orange);">TBG-I</span>     &lt;DatumInschrijving&gt;<span style="color: var(--np-yellow);">2024-02-01</span>&lt;/DatumInschrijving&gt;</pre>
    </div>
    <p class="muted" style="font-size: 0.68rem; margin: 0.3rem 0 0;">Ruwe regels uit de drie bestanden. Fictieve demo-data.</p>
  </div>
</div>

</div>

<!-- Slide: Wat de tool doet -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat mbo-bekostiging-bestanden doet

<p class="np-subtitle">Van ruw DUO-bestand naar tabellen die je in Excel, Power BI, R of Python opent.</p>

<div class="np-pipeline" style="margin-top: 1.4rem;">
  <div class="np-step blue" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">Ruwe bestanden</strong>
    <small>RO, TBG-I, Grondslag</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">Werkbare data</strong>
    <small>Per levering, leesbaar</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">Analysemodel</strong>
    <small>Leveringen samengevoegd</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step blue" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">Dashboard</strong>
    <small>Plus download als CSV</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Draait alleen lokaal</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Persoonsgegevens gepseudonimiseerd</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Open source</div>
</div>

<p class="muted" style="font-size: 0.82rem; text-align: center; margin-top: 1rem;">Met dank aan <strong>Con Tong Luu</strong></p>

</div>

<!-- Slide: Hoofdstuk 2 - Demo -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Demo</h1>
  </div>
</div>

<!-- Slide: Demo-video mbo-bekostiging-bestanden -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div style="position: absolute; inset: 0; padding: 1.4rem 2.5rem 1.4rem; display: flex; flex-direction: column; z-index: 1;">
  <p class="eyebrow" style="margin: 0;">Demo &middot; 3 minuten</p>
  <h1 style="font-size: 1.6rem; margin: 0.1rem 0 0.6rem;">mbo-bekostiging-bestanden</h1>
  <video src="/presentations/261105_werkgroep2_tbgi_ro/mbo-bekostiging-demo.mp4#t=2" preload="metadata" controls style="flex: 1; min-height: 0; width: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);"></video>
</div>

<!-- Slide: Vraag aan de werkgroep (emphasis) -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div style="position: absolute; left: 32%; right: 4rem; top: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center;">
  <p class="eyebrow" style="color: var(--np-ink);">Deel 3 &middot; De vraag</p>
  <p style="font-family: var(--np-serif); font-size: 2.2rem; line-height: 1.3; color: var(--np-white, #fff); margin: 0;">
    Wat zouden jullie willen en kunnen met deze bestanden?
  </p>
  <p style="font-size: 1rem; color: var(--np-ink); margin-top: 1.2rem;">Wat doe je er nu mee? Wat mist er?</p>
</div>

<!-- Slide: Samen verder -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Snel verder, samen met jullie

<p class="np-subtitle">We kunnen snel verder bouwen. Daarvoor hebben we mensen nodig die de tool echt testen en gebruiken.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; max-width: 88%;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Wij</span>
    <h3 style="margin-top: 0.5rem;">Bouwen en verbeteren</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Nieuwe pagina's en analyses op basis van wat jullie nodig hebben. Open source, voor elke instelling.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Jullie</span>
    <h3 style="margin-top: 0.5rem;">Testen met eigen bestanden</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Draaien op je eigen laptop, melden wat niet klopt of ontbreekt, meedenken over de volgende stap.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem; max-width: 88%;">
  Zin in <strong>co-creatie</strong>? Laat het ons weten.
</div>

</div>

<!-- Slide: Hoofdstuk 4 - Doorkijk hbo en wo -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 4</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Doorkijk hbo en wo</h1>
  </div>
</div>

<!-- Slide: Staat van de onderwijsinstelling -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Staat van de onderwijsinstelling

<p class="np-subtitle">Hetzelfde idee voor hbo en wo: het 1CHO-bestand van DUO inlezen en omzetten naar indicatoren.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: center; grid-template-columns: 1fr 220px; max-width: 86%;">
<div>
  <ul style="font-size: 0.92rem; line-height: 1.8;">
    <li>Vier indicatoren per instroomcohort</li>
    <li>Instroom, rendement, uitval en studiewissel</li>
    <li>Dashboard: 1CHO-bestand uploaden en filteren</li>
    <li>R-package, te installeren via CRAN</li>
    <li>Gestart bij Avans, doorontwikkeld door CEDA</li>
  </ul>
</div>
<div style="text-align: center;">
  <img src="/presentations/261105_werkgroep2_tbgi_ro/qr-staat.svg" style="width: 180px; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
  <p class="muted" style="font-size: 0.7rem; margin: 0.4rem 0 0;">github.com/cedanl/<br/>staat-van-onderwijsinstelling</p>
</div>
</div>

</div>

<!-- Slide: Demo-video staat-van-onderwijsinstelling -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div style="position: absolute; inset: 0; padding: 1.4rem 2.5rem 1.4rem; display: flex; flex-direction: column; z-index: 1;">
  <p class="eyebrow" style="margin: 0;">Demo</p>
  <h1 style="font-size: 1.6rem; margin: 0.1rem 0 0.6rem;">Staat van de onderwijsinstelling</h1>
  <video src="/presentations/261105_werkgroep2_tbgi_ro/staat-demo.mp4#t=2" preload="metadata" controls style="flex: 1; min-height: 0; width: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);"></video>
</div>

<!-- Slide: Andere mogelijkheden -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Andere mogelijkheden

<p class="np-subtitle">Twee andere hbo/wo-tools van CEDA, en wat daarvan met de mbo-bestanden kan.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start; max-width: 92%;">
  <div class="np-card accent-orange">
    <span class="np-badge yellow">Deels</span>
    <h3 style="margin-top: 0.5rem;">Wisselstroom</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0 0 0.4rem;">Hbo/wo: van welke opleiding of instelling naar welke.</p>
    <ul style="font-size: 0.8rem; line-height: 1.5; margin: 0;">
      <li>Kan: wisselen van opleiding, niveau, BOL/BBL, locatie</li>
      <li>Kan niet: naar welke andere instelling iemand gaat</li>
    </ul>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge pink">Te onderzoeken</span>
    <h3 style="margin-top: 0.5rem;">No Fairness Without Awareness</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0 0 0.4rem;">Hbo/wo: hebben alle groepen studenten even veel kans op succes?</p>
    <ul style="font-size: 0.8rem; line-height: 1.5; margin: 0;">
      <li>Kenmerken als geslacht, leeftijd en herkomst staan erin</li>
      <li>Uitkomsten als diploma en uitschrijving ook</li>
    </ul>
  </div>
</div>

</div>

<!-- Slide: Hoofdstuk 5 - Zelf proberen -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: var(--np-ink);">Deel 5</p>
    <h1 style="color: var(--np-ink); font-size: 3rem;">Zelf proberen</h1>
  </div>
</div>

<!-- Slide: Zelf proberen in vier stappen (QR) -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide7.PNG);"></div>

<div style="position: absolute; left: 6.9%; top: 10.4%; width: 41.4%; height: 79.2%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.7rem;">
  <img src="/presentations/261105_werkgroep2_tbgi_ro/qr-mbo-bekostiging.svg" style="width: 210px; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
  <p style="margin: 0; font-size: 0.82rem; font-weight: 600; color: var(--np-ink);">github.com/cedanl/mbo-bekostiging-bestanden</p>
</div>

<div style="position: absolute; left: 50%; right: 3rem; top: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center;">
  <p class="eyebrow">Op je eigen laptop</p>
  <h1 style="font-size: 1.8rem; margin-bottom: 1.1rem;">In vier stappen</h1>
  <div style="display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.95rem;">
    <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num">1</span><strong>Download de map</strong></div>
    <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num" style="background: var(--np-orange);">2</span><strong>Open de terminal</strong></div>
    <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num" style="background: var(--np-green);">3</span><strong>Installeer uv</strong><span class="muted">(eenmalig)</span></div>
    <div style="display: flex; gap: 0.7rem; align-items: center;"><span class="np-num">4</span><strong>Start de app</strong></div>
  </div>
  <p class="muted" style="font-size: 0.8rem; margin-top: 1.1rem;">Geen eigen bestanden nodig: de app bevat demo-data. Volgende keer alleen stap 2 en 4.</p>
</div>

<!-- Slide: Stap 1 - Download -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Stap 1</p>

# Download de map

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: center; max-width: 90%;">
  <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.92rem;">
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num">1</span><div>Scan de QR-code of ga naar<br/><strong>github.com/cedanl/mbo-bekostiging-bestanden</strong></div></div>
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num">2</span><div>Klik op de groene knop <strong>Code</strong></div></div>
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num">3</span><div>Klik op <strong>Download ZIP</strong></div></div>
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num">4</span><div>Pak het ZIP-bestand uit<br/><span class="muted">Mac: dubbelklik. Windows: rechtermuisklik, <strong>Alles uitpakken</strong>.</span></div></div>
  </div>
  <div class="np-card accent-blue">
    <h3>Resultaat</h3>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">Een map <strong>mbo-bekostiging-bestanden-main</strong>. Daarin staat onder andere een map <strong>app</strong>. Dat is de map die je in stap 4 nodig hebt.</p>
  </div>
</div>

</div>

<!-- Slide: Stap 2 - Open de terminal -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Stap 2</p>

# Open de terminal

<p class="np-subtitle">Een venster waarin je opdrachten typt. Het staat al op je computer.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; max-width: 90%;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Mac</span>
    <h3 style="margin-top: 0.5rem;">Heet: Terminal</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0;">Druk <strong>Cmd + spatie</strong>, typ <strong>Terminal</strong> en druk <strong>Enter</strong>.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Windows</span>
    <h3 style="margin-top: 0.5rem;">Heet: PowerShell</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0;">Klik op <strong>Start</strong>, typ <strong>PowerShell</strong> en druk <strong>Enter</strong>.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem; max-width: 90%;">
  Opdracht plakken: <strong>Cmd + V</strong> (Mac) of <strong>Ctrl + V</strong> (Windows). Daarna <strong>Enter</strong>.
</div>

</div>

<!-- Slide: Stap 3 - Installeer uv -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Stap 3 &middot; eenmalig</p>

# Installeer uv

<p class="np-subtitle">uv regelt Python en alles wat de app nodig heeft. Plak de regel in de terminal en druk Enter.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; max-width: 92%;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Mac</span>
    <p style="margin: 0.7rem 0 0;"><code style="display: block; padding: 0.5rem 0.7rem; font-size: 0.72rem; line-height: 1.6;">curl -LsSf https://astral.sh/uv/install.sh | sh</code></p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Windows</span>
    <p style="margin: 0.7rem 0 0;"><code style="display: block; padding: 0.5rem 0.7rem; font-size: 0.68rem; line-height: 1.6;">powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem; max-width: 92%;">
  Klaar? <strong>Sluit de terminal en open een nieuwe.</strong> Pas dan kent de terminal uv.
</div>

<p class="muted" style="font-size: 0.78rem; margin-top: 0.6rem;">Lukt installeren niet op een laptop van je werk? Dan is het waarschijnlijk geblokkeerd. Vraag je IT-afdeling.</p>

</div>

<!-- Slide: Stap 4 - Start de app -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Stap 4</p>

# Start de app

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: center; max-width: 92%; grid-template-columns: 62% 34%;">
  <div style="display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.88rem;">
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num">1</span><div><strong>Ga naar de map</strong><br/><span class="muted">Typ <code>cd</code> en een spatie. Sleep de map <strong>mbo-bekostiging-bestanden-main</strong> in het terminalvenster. Druk Enter.</span></div></div>
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num" style="background: var(--np-orange);">2</span><div><strong>Start de app</strong><br/><code style="font-size: 0.74rem;">uv run streamlit run app/main.py</code><br/><span class="muted">De eerste keer duurt dit een paar minuten.</span></div></div>
    <div style="display: flex; gap: 0.7rem; align-items: flex-start;"><span class="np-num" style="background: var(--np-green);">3</span><div><strong>Open je browser</strong><br/><span class="muted">Ga naar</span> <strong>localhost:8501</strong></div></div>
  </div>
  <div class="np-card accent-orange">
    <h3>Stoppen</h3>
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">Klik in de terminal en druk <strong>Ctrl + C</strong>. Laat de terminal open zolang je de app gebruikt.</p>
  </div>
</div>

</div>

<!-- Slide: Vaste afsluitslide -->
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
