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

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Onderwijs in Beweging</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Van data naar betere studenten — leeranalytics in de praktijk
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
  <p class="eyebrow">Programma</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.4rem;">Wat we bespreken</h1>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Het probleem</strong><br/><span class="muted" style="font-size: 0.82rem;">Uitval, late signalering en gemiste kansen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>De aanpak</strong><br/><span class="muted" style="font-size: 0.82rem;">Bewijs, principes en vier stappen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Beginnen</strong><br/><span class="muted" style="font-size: 0.82rem;">Concrete eerste stappen voor je instelling</span></div>
    </div>
  </div>
</div>

---

<!-- Slide: Hoofdstuk 1 - Het Probleem -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Het Probleem</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Uitval, late signalering en gemiste kansen</p>
  </div>
</div>

---

<!-- Slide: Wat er mis gaat -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat er mis gaat

<p class="np-subtitle">Studenten vallen uit, maar niemand ziet het aankomen.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: center;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- Uitvalrisico wordt pas zichtbaar als de student al weg is
- Studieadviseurs bereiken studenten te laat — of helemaal niet
- Data is er al wel, maar wordt niet systematisch ingezet
- Docenten vertrouwen op gevoel, zonder objectieve signalen
- Instellingen weten niet welke interventies echt werken

</div>
<div style="display: flex; justify-content: center;">
  <img src="/npuls/powerpoint_illustrations/learninganalystics.svg" style="width: 200px;" />
</div>
</div>

</div>

---

<!-- Slide: De sector in cijfers -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide10.PNG);"></div>

<div class="fill">

# De sector in cijfers

<p class="np-subtitle">Het probleem is meetbaar — en groot.</p>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 62%; margin-top: 0.8rem;">
  <div class="np-card accent-blue">
    <div style="font-size: 2.4rem; font-weight: 700; color: var(--np-blue); line-height: 1;">27%</div>
    <h3 style="margin-top: 0.4rem; font-size: 1rem;">uitval jaar 1</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Van eerstejaars stopt binnen het eerste jaar.</p>
  </div>
  <div class="np-card accent-orange">
    <div style="font-size: 2.4rem; font-weight: 700; color: var(--np-orange); line-height: 1;">3×</div>
    <h3 style="margin-top: 0.4rem; font-size: 1rem;">vroeger signaal</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Instellingen met analytics zien uitvalrisico 3× eerder.</p>
  </div>
  <div class="np-card accent-green">
    <div style="font-size: 2.4rem; font-weight: 700; color: var(--np-green); line-height: 1;">62%</div>
    <h3 style="margin-top: 0.4rem; font-size: 1rem;">studenten open</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Bereid data te delen als begeleiding er beter van wordt.</p>
  </div>
</div>

</div>

---

<!-- Slide: Twee manieren van werken -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div style="display: grid; grid-template-columns: 40% 60%; height: 100%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2rem 1.5rem 2rem 2.5rem; color: var(--np-white, #fff);">
    <p class="eyebrow" style="color: rgba(255,255,255,0.8);">Vergelijking</p>
    <h2 style="color: var(--np-white, #fff); font-size: 2rem; line-height: 1.2; margin-bottom: 0.5rem;">Twee manieren van werken</h2>
    <p style="color: rgba(255,255,255,0.85); font-size: 0.9rem; line-height: 1.5;">Dezelfde ambitie, fundamenteel andere aanpak.</p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2rem 2.5rem 2rem 1.5rem; gap: 0.8rem;">
    <div class="np-card accent-orange" style="margin: 0;">
      <span class="np-badge orange">Reactief</span>
      <ul style="font-size: 0.84rem; margin: 0.4rem 0 0; padding-left: 1.2rem; line-height: 1.7;">
        <li>Signaleren als de student al in de problemen zit</li>
        <li>Interveniëren vanuit gevoel en toeval</li>
        <li>Beleid op populatieniveau, niet op individu</li>
      </ul>
    </div>
    <div class="np-card accent-blue" style="margin: 0;">
      <span class="np-badge blue">Proactief</span>
      <ul style="font-size: 0.84rem; margin: 0.4rem 0 0; padding-left: 1.2rem; line-height: 1.7;">
        <li>Vroeg signaleren op basis van gedragspatronen</li>
        <li>Gerichte interventie op het juiste moment</li>
        <li>Leren van wat werkt en continu verbeteren</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- Slide: Hoofdstuk 2 - De Aanpak -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">De Aanpak</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Bewijs, principes en vier stappen</p>
  </div>
</div>

---

<!-- Slide: Wat het verschil maakt -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat het verschil maakt

<p class="np-subtitle">Instellingen die vooropliggen, doen dit anders.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: center;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- **Tijdige feedback** verlaagt uitval met gemiddeld 12 procentpunt
- Kleine interventies hebben groot effect op het juiste moment
- Docenten gebruiken dashboards alleen als ze begrijpelijk zijn
- Studenten reageren op persoonlijke begeleiding, niet op bulk-berichten
- Succes begint bij **vertrouwen in data**, niet bij technologie

</div>
<div style="display: flex; justify-content: center;">
  <img src="/npuls/powerpoint_illustrations/hersenen.svg" style="width: 200px;" />
</div>
</div>

</div>

---

<!-- Slide: Vier stappen naar impact -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide11.PNG);"></div>

<div style="display: grid; grid-template-columns: 38% 62%; height: 100%; align-items: center;">
  <div style="padding: 2rem 1rem 2rem 2.5rem;">
    <p class="eyebrow">Aanpak</p>
    <h2 style="font-size: 2rem; line-height: 1.2;">Vier stappen<br/>naar impact</h2>
    <p class="muted" style="font-size: 0.88rem; margin-top: 0.5rem;">Van data verzamelen naar studenten die beter slagen.</p>
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.6rem; padding: 2rem 2.5rem 2rem 1rem;">
    <div class="np-card accent-blue" style="margin: 0; display: flex; align-items: center; gap: 1rem; padding: 0.7rem 1rem;">
      <span class="np-badge blue">1</span>
      <div><strong style="font-size: 0.9rem;">Datakwaliteit op orde</strong><br/><span class="muted" style="font-size: 0.8rem;">Begrijpen wat je meet en of het klopt.</span></div>
    </div>
    <div class="np-card accent-orange" style="margin: 0; display: flex; align-items: center; gap: 1rem; padding: 0.7rem 1rem;">
      <span class="np-badge orange">2</span>
      <div><strong style="font-size: 0.9rem;">Inzichten vertalen</strong><br/><span class="muted" style="font-size: 0.8rem;">Data omzetten naar begrijpelijke signalen voor docenten.</span></div>
    </div>
    <div class="np-card accent-green" style="margin: 0; display: flex; align-items: center; gap: 1rem; padding: 0.7rem 1rem;">
      <span class="np-badge green">3</span>
      <div><strong style="font-size: 0.9rem;">Interventies uitvoeren</strong><br/><span class="muted" style="font-size: 0.8rem;">Gericht handelen op basis van signalen, op tijd.</span></div>
    </div>
    <div class="np-card accent-yellow" style="margin: 0; display: flex; align-items: center; gap: 1rem; padding: 0.7rem 1rem;">
      <span class="np-badge yellow">4</span>
      <div><strong style="font-size: 0.9rem;">Leren van resultaten</strong><br/><span class="muted" style="font-size: 0.8rem;">Meten of interventies werken en aanpassen.</span></div>
    </div>
  </div>
</div>

---

<!-- Slide: Citaat -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center; max-width: 640px; padding: 2rem;">
    <p style="font-family: var(--np-font-secondary, 'Cooper Light', Georgia, serif); font-size: 2.1rem; line-height: 1.45; color: var(--np-white, #fff); margin-bottom: 1.5rem;">
      "Data gaat niet over studenten vervangen door cijfers. Het gaat over docenten helpen om op het juiste moment de juiste vraag te stellen."
    </p>
    <p style="font-size: 0.95rem; color: rgba(255,255,255,0.85);">Leeranalytics Consortium &middot; 2025</p>
  </div>
</div>

<!--
Dit is de kern. Analytics is geen vervanging van de menselijke relatie — het is een hulpmiddel om die relatie beter te maken.
-->

---

<!-- Slide: Hoofdstuk 3 - Beginnen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3</p>
    <h1 style="color: var(--np-white, #fff); font-size: 3rem;">Beginnen</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Concrete eerste stappen voor je instelling</p>
  </div>
</div>

---

<!-- Slide: Drie concrete stappen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie concrete stappen

<p class="np-subtitle">Geen grote verbouwing nodig. Begin klein, leer snel.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Stap 1</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Kies één use case</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Start met uitval in jaar 1. Nood is hoog en data is al beschikbaar.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Stap 2</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Betrek docenten vroeg</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Dashboards die niemand begrijpt worden niet gebruikt. Co-design is geen luxe.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Stap 3</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Maak privacy concreet</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Niet als compliance, maar als gesprek met studenten over hun verwachtingen.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Het gaat niet om de beste technologie — het gaat om de <strong>beste vragen stellen met de data die je al hebt</strong>.
</div>

</div>

---

<!-- Slide: Kies je ingang -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div style="display: grid; grid-template-columns: 40% 60%; height: 100%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2rem 1.5rem 2rem 2.5rem; color: var(--np-white, #fff);">
    <p class="eyebrow" style="color: rgba(255,255,255,0.8);">Volgende stap</p>
    <h2 style="color: var(--np-white, #fff); font-size: 2rem; line-height: 1.2; margin-bottom: 0.5rem;">Kies je ingang</h2>
    <p style="color: rgba(255,255,255,0.85); font-size: 0.9rem; line-height: 1.5;">Twee routes, afhankelijk van waar je nu staat.</p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2rem 2.5rem 2rem 1.5rem; gap: 1rem;">
    <div class="np-card accent-pink" style="margin: 0;">
      <span class="np-badge pink">Route A</span>
      <h3 style="margin-top: 0.5rem; font-size: 1rem;">Nog geen leeranalytics</h3>
      <p class="muted" style="font-size: 0.82rem; margin: 0;">Sluit aan bij een Npuls community of practice. Leer van instellingen die een jaar verder zijn.</p>
    </div>
    <div class="np-card accent-blue" style="margin: 0;">
      <span class="np-badge blue">Route B</span>
      <h3 style="margin-top: 0.5rem; font-size: 1rem;">Al een pilot</h3>
      <p class="muted" style="font-size: 0.82rem; margin: 0;">Laat je aanpak reviewen door CEDA. We helpen je van pilot naar institutionele schaal.</p>
    </div>
  </div>
</div>

---

<!-- Slide: Afsluitslide -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
