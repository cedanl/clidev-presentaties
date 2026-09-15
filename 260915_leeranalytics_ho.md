---
theme: default
title: Leeranalytics in het Hoger Onderwijs
info: Van data naar actie — hoe leeranalytics studentsucces ondersteunt.
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
  <h1 style="font-size: 3rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Leeranalytics in het Hoger Onderwijs</h1>
  <p style="font-size: 1.1rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Van data naar actie — hoe we studentsucces ondersteunen met bewijs
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

---

<!-- Slide: Agenda -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Vier onderdelen</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.4rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 0.9rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Wat is leeranalytics?</strong><br/><span class="muted" style="font-size: 0.82rem;">Definitie en typen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>De staat van het veld</strong><br/><span class="muted" style="font-size: 0.82rem;">Cijfers, pipeline en spanningsvelden</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Ethiek en privacy</strong><br/><span class="muted" style="font-size: 0.82rem;">Principes en het citaat dat telt</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-blue);">4</span>
      <div><strong>Implementatie</strong><br/><span class="muted" style="font-size: 0.82rem;">Stappen en quick wins</span></div>
    </div>
  </div>
</div>

---

<!-- Slide: Hoofdstuk 1 - Wat is leeranalytics? -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Wat is leeranalytics?</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Definitie en typen</p>
  </div>
</div>

---

<!-- Slide: Definitie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat is leeranalytics?

<p class="np-subtitle">De meting, verzameling en analyse van data over lerenden en hun context.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- Data over studeergedrag, prestaties en betrokkenheid
- Doel: **begrijpen en optimaliseren** van leerprocessen
- Schaal: van individuele student tot instelling
- Tijdshorizon: real-time tot longitudinaal

</div>
<div>
  <div class="np-card accent-blue">
    <h3>LAK-definitie (2011)</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      "The measurement, collection, analysis and reporting of data about learners and their contexts, for purposes of understanding and optimising learning and the environments in which it occurs."
    </p>
  </div>
</div>
</div>

</div>

---

<!-- Slide: Drie typen leeranalytics -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie typen leeranalytics

<p class="np-subtitle">Van beschrijven naar voorspellen naar adviseren.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Descriptief</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat is er gebeurd?</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Dashboards, rapporten en historische trends. Startpunt van elke analyse.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Predictief</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat gaat er gebeuren?</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Uitvalrisico, slagingskans, studietempo op basis van historische data.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Prescriptief</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat moet er gebeuren?</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Concrete aanbevelingen voor student of docent op basis van data.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  De meeste instellingen zitten nog in de <strong>descriptieve fase</strong> — dat is het startpunt, niet het eindpunt.
</div>

</div>

---

<!-- Slide: Hoofdstuk 2 - De staat van het veld -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">De staat van het veld</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Cijfers, pipeline en spanningsvelden</p>
  </div>
</div>

---

<!-- Slide: Cijfers en feiten -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Waar staan we?

<p class="np-subtitle">Leeranalytics is volwassen geworden — maar schaal blijft lastig.</p>

<div style="font-size: 0.92rem; line-height: 1.7;">

- **72%** van Europese universiteiten verzamelt data over studeergedrag
- Slechts **23%** gebruikt die data voor actieve interventies
- Gemiddeld **2,4 jaar** tussen pilot en instellingsbrede uitrol
- **Studenten** zijn positiever dan **docenten** over datagebruik
- Grootste blokkade: gebrek aan **data-infrastructuur**, niet aan interesse

</div>

</div>

---

<!-- Slide: Pipeline van data naar interventie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Van data naar interventie

<p class="np-subtitle">Vijf stappen — en waar het het vaakst vastloopt.</p>

<div class="np-pipeline" style="margin-top: 1.2rem; gap: 0.3rem;">
  <div class="np-step blue" style="flex: 1;">
    <strong style="font-size: 0.88rem;">Verzamelen</strong>
    <small>LMS, SIS, toetsen</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1;">
    <strong style="font-size: 0.88rem;">Integreren</strong>
    <small>Koppelen en opschonen</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step blue" style="flex: 1;">
    <strong style="font-size: 0.88rem;">Analyseren</strong>
    <small>Modellen en patronen</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1;">
    <strong style="font-size: 0.88rem;">Visualiseren</strong>
    <small>Dashboard of alert</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1;">
    <strong style="font-size: 0.88rem;">Interveniëren</strong>
    <small>Actie door mens</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.2rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Stap 1–2 lukt technisch</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Stap 3–4 vraagt datascience</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Stap 5 vraagt organisatieverandering</div>
</div>

</div>

---

<!-- Slide: Kansen versus uitdagingen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Kansen en uitdagingen

<p class="np-subtitle">Leeranalytics biedt veel — maar niet zonder voorbehoud.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Kansen</span>
    <h3 style="margin-top: 0.5rem;">Wat het oplevert</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Vroeg signaleren van uitval, gepersonaliseerde feedback, betere curriculumkeuzes op basis van bewijs.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Uitdagingen</span>
    <h3 style="margin-top: 0.5rem;">Wat het vraagt</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Privacywetgeving, datakwaliteit, verandering in werkwijze van docenten en studieadviseurs.</p>
  </div>
</div>

</div>

---

<!-- Slide: Hoofdstuk 3 - Ethiek en privacy -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Ethiek en privacy</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Principes en grenzen</p>
  </div>
</div>

---

<!-- Slide: Vier ethische principes -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Vier ethische principes

<p class="np-subtitle">Geen goed leeranalytics zonder ethisch fundament.</p>

<div class="np-grid-4" style="margin-top: 0.8rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">1</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Transparantie</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Studenten weten welke data gebruikt wordt en waarvoor.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">2</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Doelbeperking</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Data alleen voor het opgegeven doel gebruiken.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">3</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Menselijke regie</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Een algoritme signaleert — een mens beslist. Altijd.</p>
  </div>
  <div class="np-card accent-pink">
    <span class="np-badge pink">4</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.9rem;">Gelijke kansen</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Modellen mogen geen ongelijkheid versterken.</p>
  </div>
</div>

</div>

---

<!-- Slide: Citaat -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 3rem;">
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.7rem; line-height: 1.6; color: var(--np-blue); max-width: 750px;">
    "Data over studenten gebruiken om hen te helpen is ethisch verplicht. Data over studenten gebruiken om hen te beoordelen zonder hun medeweten is ethisch onaanvaardbaar."
  </div>
  <div style="margin-top: 1.5rem; font-size: 0.9rem; color: var(--np-dark-gray);">&mdash; George Siemens, Learning Analytics Summit 2022</div>
</div>

</div>

---

<!-- Slide: Hoofdstuk 4 - Implementatie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 4</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Implementatie</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Stappen en quick wins</p>
  </div>
</div>

---

<!-- Slide: Vier implementatiestappen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Vier stappen naar implementatie

<p class="np-subtitle">Klein beginnen, breed leren, dan schalen.</p>

<div class="np-pipeline" style="margin-top: 1.5rem;">
  <div class="np-step blue" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.9rem;">Inventariseer</strong>
    <small>Welke data heb je al?</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.9rem;">Pilot</strong>
    <small>Één opleiding, één vraag</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step blue" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.9rem;">Evalueer</strong>
    <small>Meet effect op student</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.9rem;">Schaal</strong>
    <small>Breed uitrollen met bewijs</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Start met een concrete vraag</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Betrek studenten vanaf dag 1</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Mislukken mag — leer ervan</div>
</div>

</div>

---

<!-- Slide: Quick wins -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie quick wins

<p class="np-subtitle">Resultaat binnen drie maanden, zonder grote investering.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Week 1</span>
    <h3 style="margin-top: 0.5rem;">LMS-activiteit</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Exporteer logindata uit Canvas of Brightspace — je hebt al een vroeg signaal.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Maand 1</span>
    <h3 style="margin-top: 0.5rem;">Eenvoudig dashboard</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Bouw een Power BI-overzicht per opleiding. Betrek studieadviseurs bij het ontwerp.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Maand 3</span>
    <h3 style="margin-top: 0.5rem;">Eerste interventie</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Stuur een persoonlijk bericht naar studenten die drie weken niet inloggen.</p>
  </div>
</div>

</div>

---

<!-- Slide: Conclusie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat neem je mee?

<p class="np-subtitle">Drie kernpunten voor de weg terug naar kantoor.</p>

<div style="font-size: 0.95rem; line-height: 1.8; margin-top: 0.5rem;">

- Leeranalytics is **geen technologieproject** — het is een organisatieverandering
- Begin **klein en concreet**: één vraag, één opleiding, één semester
- Ethiek is geen rem — het is de **voorwaarde** voor vertrouwen en schaal

</div>

<div class="np-bottomline" style="margin-top: 1.2rem;">
  De vraag is niet óf je data gebruikt — het is <strong>hoe je dat verantwoord doet</strong>.
</div>

</div>

---

<!-- Slide: Afsluitslide -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
