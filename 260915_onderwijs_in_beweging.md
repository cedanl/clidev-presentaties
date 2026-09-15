---
theme: default
title: Onderwijs in Beweging
info: Van data naar betere studenten — leeranalytics in de praktijk.
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

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 5rem; z-index: 1;">
  <p class="eyebrow" style="margin-bottom: 0.8rem;">CEDA &middot; Centre of Educational Data Analytics</p>
  <h1 style="font-size: 3.6rem; line-height: 1.1; margin-bottom: 0.8rem; color: var(--np-ink);">
    Onderwijs in Beweging
  </h1>
  <p style="font-size: 1.2rem; color: var(--np-dark-gray); max-width: 620px; line-height: 1.55;">
    Hoe leeranalytics uitval vermindert, docenten ondersteunt en studenten verder brengt
  </p>
  <p style="font-size: 0.85rem; color: var(--np-mid-gray); margin-top: 1.2rem;">Npuls &middot; 2026</p>
</div>

---

<!-- Slide: Agenda -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3.5rem;">
  <p class="eyebrow">Programma</p>
  <h1 style="font-size: 2rem !important; margin-bottom: 1.6rem; color: var(--np-orange);">Wat we bespreken</h1>
  <div style="display: flex; flex-direction: column; gap: 1.1rem;">
    <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
      <span class="np-num" style="flex-shrink: 0; margin-top: 0.1rem;">1</span>
      <div>
        <strong style="color: var(--np-dark-blue);">Het probleem</strong>
        <p class="muted" style="font-size: 0.82rem; margin: 0.1rem 0 0;">Waarom uitval zo moeilijk te voorkomen is</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
      <span class="np-num" style="background: var(--np-blue); flex-shrink: 0; margin-top: 0.1rem;">2</span>
      <div>
        <strong style="color: var(--np-dark-blue);">De aanpak</strong>
        <p class="muted" style="font-size: 0.82rem; margin: 0.1rem 0 0;">Vier stappen van data naar impact</p>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
      <span class="np-num" style="background: var(--np-green); flex-shrink: 0; margin-top: 0.1rem;">3</span>
      <div>
        <strong style="color: var(--np-dark-blue);">Beginnen</strong>
        <p class="muted" style="font-size: 0.82rem; margin: 0.1rem 0 0;">Concrete eerste stappen voor je instelling</p>
      </div>
    </div>
  </div>
</div>

---

<!-- Slide: Hoofdstuk 1 - Het Probleem -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.8); margin-bottom: 0.5rem;">Deel 1</p>
    <h1 style="color: #FFFFFF !important; font-size: 3.2rem; line-height: 1.1;">Het Probleem</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.6rem;">Waarom uitval zo moeilijk te voorkomen is</p>
  </div>
</div>

---

<!-- Slide: Wat er mis gaat -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat er mis gaat

<p class="np-subtitle">Uitval wordt zichtbaar als het al te laat is.</p>

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: center; gap: 2.5rem;">
<ul style="font-size: 0.9rem; line-height: 1.8; padding-left: 1.3rem; margin: 0;">
  <li>Risicosignalen zijn zichtbaar in data, maar niemand leest ze</li>
  <li>Studieadviseurs reageren op meldingen — niet op patronen</li>
  <li>Elke instelling herontdekt hetzelfde wiel, apart</li>
  <li>Interventies zijn niet gekoppeld aan bewijs van wat werkt</li>
  <li>Privacy-angst blokkeert datagebruik voordat het begint</li>
</ul>
<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/npuls/powerpoint_illustrations/learninganalystics.svg" style="width: 210px;" />
</div>
</div>

</div>

---

<!-- Slide: De sector in cijfers -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide10.PNG);"></div>

<div class="fill" style="max-width: 62%;">

# De sector in cijfers

<p class="np-subtitle">Het probleem is meetbaar — en groot.</p>

<div class="np-grid-3" style="margin-top: 0.8rem; align-items: start;">
  <div class="np-card accent-blue" style="padding: 1rem;">
    <div style="font-size: 2.6rem; font-weight: 700; color: var(--np-blue); line-height: 1; margin-bottom: 0.3rem;">27%</div>
    <h3 style="font-size: 0.95rem; margin: 0 0 0.3rem;">uitval jaar 1</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0; line-height: 1.5;">Van eerstejaars stopt binnen het eerste studiejaar.</p>
  </div>
  <div class="np-card accent-orange" style="padding: 1rem;">
    <div style="font-size: 2.6rem; font-weight: 700; color: var(--np-orange); line-height: 1; margin-bottom: 0.3rem;">3×</div>
    <h3 style="font-size: 0.95rem; margin: 0 0 0.3rem;">eerder signaal</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0; line-height: 1.5;">Instellingen met analytics zien risico veel vroeger.</p>
  </div>
  <div class="np-card accent-green" style="padding: 1rem;">
    <div style="font-size: 2.6rem; font-weight: 700; color: var(--np-green); line-height: 1; margin-bottom: 0.3rem;">62%</div>
    <h3 style="font-size: 0.95rem; margin: 0 0 0.3rem;">studenten open</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0; line-height: 1.5;">Bereid data te delen als begeleiding er beter van wordt.</p>
  </div>
</div>

</div>

---

<!-- Slide: Vergelijking - Reactief vs Proactief -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div style="display: grid; grid-template-columns: 40% 60%; height: 100%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.5rem 1.5rem 2.5rem 2.8rem;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.75);">Vergelijking</p>
    <h2 style="color: #FFFFFF !important; font-size: 2rem; line-height: 1.2; margin-bottom: 0.6rem;">
      Twee manieren<br/>van werken
    </h2>
    <p style="color: rgba(255,255,255,0.8); font-size: 0.88rem; line-height: 1.6;">
      Zelfde ambitie — fundamenteel andere aanpak.
    </p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.9rem; padding: 2.5rem 2.8rem 2.5rem 1.5rem;">
    <div class="np-card accent-orange" style="margin: 0;">
      <span class="np-badge orange">Reactief</span>
      <ul style="font-size: 0.83rem; margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.7; color: var(--np-dark-gray);">
        <li>Signaleren als de student al in problemen zit</li>
        <li>Handelen op basis van gevoel en toeval</li>
        <li>Beleid op populatieniveau, niet op individu</li>
      </ul>
    </div>
    <div class="np-card accent-blue" style="margin: 0;">
      <span class="np-badge blue">Proactief</span>
      <ul style="font-size: 0.83rem; margin: 0.5rem 0 0; padding-left: 1.2rem; line-height: 1.7; color: var(--np-dark-gray);">
        <li>Vroeg signaleren op basis van gedragspatronen</li>
        <li>Gerichte interventie op het juiste moment</li>
        <li>Meten wat werkt en continu verbeteren</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- Slide: Hoofdstuk 2 - De Aanpak -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.8); margin-bottom: 0.5rem;">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3.2rem; line-height: 1.1;">De Aanpak</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.6rem;">Vier stappen van data naar impact</p>
  </div>
</div>

---

<!-- Slide: Wat de wetenschap zegt -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat de wetenschap zegt

<p class="np-subtitle">Instellingen die vooropliggen, doen vier dingen anders.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: center; gap: 2.5rem;">
<ul style="font-size: 0.9rem; line-height: 1.8; padding-left: 1.3rem; margin: 0;">
  <li><strong>Tijdige feedback</strong> verlaagt uitval met 8 tot 15 procentpunt</li>
  <li>Studenten reageren op persoonlijk contact, niet op bulk-mail</li>
  <li>Docenten gebruiken dashboards alleen als ze intuïtief zijn</li>
  <li>Kleine interventies op het juiste moment hebben groot effect</li>
  <li>Succes begint bij <strong>vertrouwen in data</strong>, niet bij betere tools</li>
</ul>
<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/npuls/powerpoint_illustrations/hersenen.svg" style="width: 210px;" />
</div>
</div>

</div>

---

<!-- Slide: Vier stappen naar impact -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide11.PNG);"></div>

<div style="display: grid; grid-template-columns: 38% 62%; height: 100%; align-items: center;">
  <div style="padding: 2.5rem 1rem 2.5rem 2.8rem;">
    <p class="eyebrow">Aanpak</p>
    <h2 style="font-size: 1.9rem; line-height: 1.2; margin-bottom: 0.5rem; color: var(--np-ink);">
      Vier stappen<br/>naar impact
    </h2>
    <p class="muted" style="font-size: 0.85rem; line-height: 1.6;">Van data verzamelen naar studenten die beter slagen.</p>
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.55rem; padding: 2.5rem 2.8rem 2.5rem 1rem;">
    <div class="np-card accent-blue" style="margin: 0; display: flex; align-items: center; gap: 0.9rem; padding: 0.65rem 1rem;">
      <span class="np-badge blue" style="flex-shrink: 0;">1</span>
      <div>
        <strong style="font-size: 0.88rem; color: var(--np-dark-blue);">Datakwaliteit op orde</strong>
        <p class="muted" style="font-size: 0.78rem; margin: 0.1rem 0 0;">Begrijpen wat je meet — en of het klopt.</p>
      </div>
    </div>
    <div class="np-card accent-orange" style="margin: 0; display: flex; align-items: center; gap: 0.9rem; padding: 0.65rem 1rem;">
      <span class="np-badge orange" style="flex-shrink: 0;">2</span>
      <div>
        <strong style="font-size: 0.88rem; color: var(--np-dark-blue);">Inzichten vertalen</strong>
        <p class="muted" style="font-size: 0.78rem; margin: 0.1rem 0 0;">Data omzetten naar begrijpelijke signalen voor docenten.</p>
      </div>
    </div>
    <div class="np-card accent-green" style="margin: 0; display: flex; align-items: center; gap: 0.9rem; padding: 0.65rem 1rem;">
      <span class="np-badge green" style="flex-shrink: 0;">3</span>
      <div>
        <strong style="font-size: 0.88rem; color: var(--np-dark-blue);">Interventies uitvoeren</strong>
        <p class="muted" style="font-size: 0.78rem; margin: 0.1rem 0 0;">Gericht handelen op het juiste moment.</p>
      </div>
    </div>
    <div class="np-card accent-yellow" style="margin: 0; display: flex; align-items: center; gap: 0.9rem; padding: 0.65rem 1rem;">
      <span class="np-badge yellow" style="flex-shrink: 0;">4</span>
      <div>
        <strong style="font-size: 0.88rem; color: var(--np-dark-blue);">Leren van resultaten</strong>
        <p class="muted" style="font-size: 0.78rem; margin: 0.1rem 0 0;">Meten of interventies werken en aanpassen.</p>
      </div>
    </div>
  </div>
</div>

---

<!-- Slide: Kernboodschap citaat -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center; max-width: 680px; padding: 2rem;">
    <p style="
      font-family: 'Cooper BT', 'Cooper Light BT', Georgia, 'Times New Roman', serif;
      font-weight: 300;
      font-size: 2rem;
      line-height: 1.5;
      color: #FFFFFF;
      margin-bottom: 1.5rem;
    ">
      "Analytics gaat niet over studenten vervangen door cijfers. Het gaat over docenten helpen om op het juiste moment de juiste vraag te stellen."
    </p>
    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); letter-spacing: 0.04em;">
      Leeranalytics Consortium &middot; 2025
    </p>
  </div>
</div>

---

<!-- Slide: Hoofdstuk 3 - Beginnen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="margin-bottom: 0.5rem;">Deel 3</p>
    <h1 style="color: var(--np-ink) !important; font-size: 3.2rem; line-height: 1.1;">Beginnen</h1>
    <p style="color: var(--np-dark-gray); font-size: 1.1rem; margin-top: 0.6rem;">Concrete eerste stappen voor je instelling</p>
  </div>
</div>

---

<!-- Slide: Drie concrete stappen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie concrete stappen

<p class="np-subtitle">Geen grote verbouwing nodig — begin klein en leer snel.</p>

<div class="np-grid-3" style="margin-top: 0.6rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Stap 1</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Kies één use case</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Start met uitval in jaar 1. Nood is hoog en de data is al beschikbaar.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Stap 2</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Betrek docenten vroeg</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Dashboards die niemand begrijpt worden niet gebruikt. Co-design is geen luxe.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Stap 3</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Maak privacy concreet</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Niet als compliance-oefening, maar als gesprek met studenten over verwachtingen.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Het gaat niet om de beste technologie — het gaat om de <strong>beste vragen stellen met de data die je al hebt</strong>.
</div>

</div>

---

<!-- Slide: Privacy als gesprek -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Privacy als gesprek

<p class="np-subtitle">Vertrouwen is de basis — niet een juridisch checkbox.</p>

<div class="np-grid-2" style="margin-top: 0.6rem; align-items: center; gap: 2.5rem;">
<ul style="font-size: 0.9rem; line-height: 1.8; padding-left: 1.3rem; margin: 0;">
  <li>Studenten accepteren datagebruik als het <strong>doel helder</strong> is</li>
  <li>Transparantie over welke data, waarvoor en hoe lang</li>
  <li>Opt-in werkt beter dan opt-out voor langetermijn vertrouwen</li>
  <li>Recht op inzage en correctie versterkt acceptatie</li>
  <li>Privacy by design is goedkoper dan achteraf repareren</li>
</ul>
<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/npuls/powerpoint_illustrations/Slot.svg" style="width: 140px;" />
</div>
</div>

</div>

---

<!-- Slide: Kies je route -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div style="display: grid; grid-template-columns: 40% 60%; height: 100%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.5rem 1.5rem 2.5rem 2.8rem;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.75);">Volgende stap</p>
    <h2 style="color: #FFFFFF !important; font-size: 2rem; line-height: 1.2; margin-bottom: 0.6rem;">
      Kies je<br/>route
    </h2>
    <p style="color: rgba(255,255,255,0.8); font-size: 0.88rem; line-height: 1.6;">
      Twee ingangen, afhankelijk van waar je nu staat.
    </p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 1rem; padding: 2.5rem 2.8rem 2.5rem 1.5rem;">
    <div class="np-card accent-pink" style="margin: 0;">
      <span class="np-badge pink">Route A</span>
      <h3 style="margin-top: 0.5rem; font-size: 0.95rem;">Nog geen leeranalytics</h3>
      <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Sluit aan bij een Npuls community of practice. Leer van instellingen die al een jaar verder zijn.</p>
    </div>
    <div class="np-card accent-blue" style="margin: 0;">
      <span class="np-badge blue">Route B</span>
      <h3 style="margin-top: 0.5rem; font-size: 0.95rem;">Al een pilot lopende</h3>
      <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Laat je aanpak reviewen door CEDA. We helpen van pilot naar institutionele schaal.</p>
    </div>
  </div>
</div>

---

<!-- Slide: Afsluitslide -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
