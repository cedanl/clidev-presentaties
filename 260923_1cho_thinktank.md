---
theme: default
title: Staat van Onderwijsinstelling - Stand van zaken en vooruitblik
info: Update voor de 1CHO Thinktank over de Staat van Onderwijsinstelling - wat er sinds juni gebouwd is, wat de tool anders maakt, en de weg naar validatie en oplevering in 2026.
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
  <h1 style="font-size: 2.8rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Staat van Onderwijsinstelling</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Stand van zaken en de weg naar december
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; 1CHO Thinktank &middot; 23 september 2026
  </div>
</div>

<!-- Slide: Agenda -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Waar we het over hebben</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.2rem;">Agenda</h1>
  <div style="display: flex; flex-direction: column; gap: 0.9rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Sinds juni</strong><br/><span class="muted" style="font-size: 0.82rem;">Wat is er gebouwd</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Validatie: de ontbrekende stap</strong><br/><span class="muted" style="font-size: 0.82rem;">Eerlijk statusbeeld</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Vraag</strong><br/><span class="muted" style="font-size: 0.82rem;">Wie doet mee?</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">4</span>
      <div><strong>Vooruitblik 2026</strong><br/><span class="muted" style="font-size: 0.82rem;">Waar staan we, waar gaan we heen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">5</span>
      <div><strong>WVTTK</strong></div>
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

<!-- Slide: Hoofdstukdivider 1 -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Sinds juni</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Wat is er gebouwd</p>
  </div>
</div>

<!-- Slide: Input-pagina -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Zo begint het

<p class="np-subtitle">Eén verplicht bestand, twee optioneel &mdash; hetzelfde scherm voor alle drie de bronnen.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: center;">
<div style="font-size: 0.9rem; line-height: 1.7;">

<ul>
<li>Verplicht: het 1CHO-bestand zelf</li>
<li>Optioneel: VAKHAVW (vakcijfers) en VLPBEK (bekostiging), plus analyseniveau</li>
<li>Ontbreekt een kolom? Dat meldt het dashboard direct na uploaden</li>
</ul>

</div>
<div style="display: flex; justify-content: center;">
  <img src="/shots/input_pagina.png" style="max-height: 440px; width: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>
</div>

</div>

<!-- Slide: VAKHAVW gekoppeld -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# VAKHAVW gekoppeld

<p class="np-subtitle"><strong style="color: var(--np-green);">Afgerond.</strong> Niet alleen de vooropleiding, maar de middelbareschoolcijfers zelf zijn nu in te zien, per vak.</p>

<div style="display: flex; justify-content: center; margin-top: 0.3rem;">
  <img src="/shots/vakhawv_dashboard.png" style="max-height: 270px; width: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

<p class="muted" style="font-size: 0.72rem; margin-top: 0.35rem; text-align: center;">Live screenshot op de meegeleverde voorbeelddata (3 studenten) &mdash; te klein voor een patroon. Precies waarom we validatie nodig hebben.</p>

</div>

<!-- Slide: Benchmarkrapport -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Van idee naar rapport

<p class="np-subtitle"><strong style="color: var(--np-blue);">Afgerond.</strong> In juni een pitch op deze slides, nu een download in het dashboard.</p>

<p class="muted" style="font-size: 0.78rem; margin: 0 0 0.3rem; text-align: center;">Juni: "Jouw uitval is 18%, mediaan 14%" &mdash; nu een echte kolom in dit bestand.</p>

<div style="display: flex; justify-content: center;">
  <img src="/shots/benchmarkrapport_excel.png" style="max-height: 240px; width: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

<div class="np-bottomline" style="margin-top: 0.5rem; padding: 0.6rem 1rem; font-size: 0.85rem;">
  Discussie: zouden jullie dit willen <strong>delen met andere instellingen</strong> voor een eerlijke vergelijking?
</div>

</div>

<!-- Slide: Bekostigingsmodule -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Bekostiging: de vierde bron

<p class="np-subtitle"><strong style="color: var(--np-green);">Afgerond.</strong> Eigen tabblad in het dashboard, naast VAKHAVW.</p>

<p class="muted" style="font-size: 0.78rem; margin: 0 0 0.3rem; text-align: center;">Koppelt het VLPBEK-bestand aan de indicatoren &mdash; % bekostigd per sector, vorm en niveau.</p>

<div style="display: flex; justify-content: center;">
  <img src="/shots/bekostiging_dashboard.png" style="max-height: 260px; width: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

<p class="muted" style="font-size: 0.72rem; margin-top: 0.35rem; text-align: center;">Live screenshot op de voorbeelddata (3 studenten).</p>

</div>

<!-- Slide: Ook opgelost instroomjaar-bug -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Ook opgelost: instroomjaar-verwarring

<p class="np-subtitle"><strong style="color: var(--np-orange);">Bug fix.</strong> Besproken in juni &mdash; nu uit elkaar getrokken.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-orange">
    <h3>Het probleem</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">"Eerste jaar in de opleiding" en "eerste jaar aan de instelling" liepen door elkaar bij studenten die van opleiding wisselden.</p>
  </div>
  <div class="np-card accent-green">
    <h3>De oplossing</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Expliciete keuze via Analyseniveau: studentniveau (eerste jaar aan de instelling) of inschrijvingsniveau (eerste jaar in déze opleiding).</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Dezelfde knop die je net op het uploadscherm zag &mdash; nu ook correct doorgerekend.
</div>

</div>

<!-- Slide: Hoofdstukdivider 2 -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Validatie</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">De ontbrekende stap</p>
  </div>
</div>

<!-- Slide: Sinds juni op de planning -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <p class="eyebrow">Sinds juni op de planning</p>
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.9rem; line-height: 1.5; color: var(--np-blue); max-width: 700px;">
    Valideren bij meerdere instellingen &mdash; ook bij Avans.
  </div>
  <div style="margin-top: 1.6rem; font-size: 1.15rem; font-weight: 700; color: var(--np-orange);">
    Die stap is nog niet gezet.
  </div>
</div>

</div>

<!-- Slide: Wat checken we precies -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat checken we precies?

<p class="np-subtitle">Vijf controlepunten &mdash; al ingebouwd in het rapport van net.</p>

<div style="display: flex; justify-content: center; margin-top: 0.4rem;">
  <img src="/shots/benchmarkrapport_validatie.png" style="max-width: 100%; width: 900px; height: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

<p class="muted" style="font-size: 0.76rem; margin-top: 0.5rem; text-align: center;">Echt tabblad "Validatie" uit het benchmarkrapport &mdash; instellingen hoeven dit niet zelf te bedenken, het rapport vertelt je waar je op moet letten.</p>

</div>

<!-- Slide: Wat betekent valideren concreet -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat betekent valideren, concreet?

<p class="np-subtitle">Vijf checkpunten hierboven, uitgevoerd in vier stappen.</p>

<div class="np-pipeline" style="margin-top: 1.5rem;">
  <div class="np-step blue" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">1. Draaien</strong>
    <small>Eigen 1CHO-extract door de package halen</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">2. Vergelijken</strong>
    <small>Uitkomsten naast eigen cijfers leggen</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">3. Signaleren</strong>
    <small>Missen er indicatoren of grafieken die je zou verwachten?</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step blue" style="flex: 1; max-width: 190px;">
    <strong style="font-size: 0.95rem;">4. Terugkoppelen</strong>
    <small>Verschillen, gaten en verrassingen delen met CEDA</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Ongeveer een dagdeel werk</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Geen code nodig</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Ruwe data blijft van jullie &mdash; alleen bevindingen worden gedeeld</div>
</div>

</div>

<!-- Slide: Vraag -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Vraag

<p class="np-subtitle">Jullie zijn al aangesloten en geïnteresseerd &mdash; willen jullie de eerste validatiepartners zijn?</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Avans</span>
    <h3 style="margin-top: 0.5rem;">Oorspronkelijke bron</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0 0 0.5rem;">De indicatoren komen uit jullie eigen Staat van Avans.</p>
    <p style="font-size: 0.86rem; margin: 0; color: var(--np-ink);">Klopt de output nog steeds met wat jullie gewend zijn uit de eigen rapportage?</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Windesheim</span>
    <h3 style="margin-top: 0.5rem;">Eerste externe test</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0 0 0.5rem;">Jullie hebben nog niet met deze tool gewerkt.</p>
    <p style="font-size: 0.86rem; margin: 0; color: var(--np-ink);">Draait de package op jullie eigen 1CHO-data, en kloppen de uitkomsten met wat jullie al weten?</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Streven: uitkomsten terug <strong>voor half november</strong>, ruim vóór het "af"-moment.
</div>

</div>

<!-- Slide: Tijdlijn -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Waar staan we, waar gaan we heen

<p class="np-subtitle">December is het doel. Vandaag is het startpunt.</p>

<div class="np-timeline">
  <div class="np-timeline-point">
    <div class="np-timeline-dot"></div>
  </div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point">
    <div class="np-timeline-marker">VANDAAG</div>
    <div class="np-timeline-dot now"></div>
  </div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point">
    <div class="np-timeline-dot blue"></div>
  </div>
  <div class="np-timeline-line"></div>
  <div class="np-timeline-point">
    <div class="np-timeline-dot green"></div>
  </div>
</div>

<div class="np-timeline-labels">
  <div>
    <strong class="mid-gray">Juni</strong>
    <span>Benchmarking op de planning</span>
  </div>
  <div></div>
  <div>
    <strong class="orange">23 sep</strong>
    <span class="ink">Terugblik + validatie-ask</span>
  </div>
  <div></div>
  <div>
    <strong class="blue">Okt&ndash;nov</strong>
    <span>Valideren met Avans &amp; Windesheim</span>
  </div>
  <div></div>
  <div>
    <strong class="green">December 2026</strong>
    <span>Aanbieden aan HO-instellingen</span>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1.6rem;">
  In <strong>december</strong> bieden we het aan &mdash; geen flashy launch, wel een duidelijk moment.
</div>

</div>

<!-- Slide: WVTTK -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <div style="font-family: 'Cooper Light BT', serif; font-size: 2rem; line-height: 1.5; color: var(--np-blue);">
    WVTTK
  </div>
  <div style="margin-top: 1rem; font-size: 1rem; color: var(--np-dark-gray);">Wat wil jij nog ter tafel brengen?</div>
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
      <p style="margin: 0.5rem 0 0; font-size: 0.86rem; color: var(--np-dark-gray);">github.com/cedanl/staat-van-onderwijsinstelling</p>
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
