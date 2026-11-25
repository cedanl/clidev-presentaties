---
theme: default
title: GenAI - jij stuurt, AI bouwt
info: "Workshopopdracht voor de DAIR-sessie 'GenAI: jij stuurt, AI bouwt' - twee ideeen voor de opzet."
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- TITELSLIDE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">GenAI: jij stuurt, AI bouwt</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Workshopopdracht voor DAIR &mdash; twee ideeen voor de opzet
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
  <p class="eyebrow">Wat gaan we bespreken</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.4rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>De sessie in het kort</strong><br/><span class="muted" style="font-size: 0.82rem;">Waar DAIR-deelnemers inrollen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>De opdracht</strong><br/><span class="muted" style="font-size: 0.82rem;">1 orchestrator skill, 1CHO-dashboard</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-blue);">3</span>
      <div><strong>Twee ideeen voor de opzet</strong><br/><span class="muted" style="font-size: 0.82rem;">Zelfde ritme, andere opdeling van het dashboardwerk</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-yellow); color: var(--np-ink);">4</span>
      <div><strong>Randvoorwaarden &amp; open vragen</strong><br/><span class="muted" style="font-size: 0.82rem;">Wat al klaarstaat, wat nog beslist moet worden</span></div>
    </div>
  </div>
</div>

---

<!-- VASTE CEDA-SLIDE (Slide16.PNG) — woordelijk overnemen -->
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

---

<!-- Slide: Hoofdstuk 1 - De sessie in het kort -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">De sessie in het kort</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Waar DAIR-deelnemers straks precies inrollen</p>
  </div>
</div>

---

<!-- Slide: Citaat sessietekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; margin-left: 32%; padding-right: 3rem;">
  <div style="font-family: var(--np-serif); font-size: 1.7rem; line-height: 1.5; color: #FFFFFF; max-width: 560px;">
    "Je schrijft zelf geen code meer, je geeft de opdracht. Je zet op verantwoorde manier AI in om van ruwe data naar een deelbare analyse te komen."
  </div>
  <div style="margin-top: 1.3rem; font-size: 0.9rem; color: rgba(255,255,255,0.85);">&mdash; Sessietekst "GenAI: jij stuurt, AI bouwt", Corneel Dair &middot; DAIR</div>
</div>

---

<!-- Slide: De zorg en de aanpak -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De grootste zorg: mentaal afhaken

<p class="np-subtitle">Mensen tikken iets, maar haken af &mdash; daar bouwen we de opzet omheen.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-orange">
    <span class="np-badge orange">Zorg</span>
    <h3 style="margin-top: 0.5rem;">Prompten zonder aanhaken</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">"Mensen tikken iets, maar haken mentaal af" &mdash; uit de brainstorm met Corneel.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Aanpak</span>
    <h3 style="margin-top: 0.5rem;">Zelf doen, dan pas bespreken</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Eerst zelf laten prompten. Pas daarna kort gezamenlijk bespreken &mdash; vóór de skill wordt getoond.</p>
  </div>
</div>

</div>

---

<!-- Slide: De opdracht - orchestrator skill -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De opdracht: één orchestrator skill

<p class="np-subtitle">Van ruwe 1CHO-data naar een gedeelde "Staat van Onderwijs"-app.</p>

<div class="np-pipeline" style="margin-top: 1.3rem;">
  <div class="np-step blue" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.95rem;">Data inladen &amp; opschonen</strong>
    <small>Ruw 1CHO-bestand naar schone dataset</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.95rem;">Dashboard bouwen</strong>
    <small>Filters op instelling/opleiding/cohort, KPI's, 2 grafieken</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.95rem;">Delen &amp; verantwoorden</strong>
    <small>Instellingskleuren, privacydrempel (&lt;30), git-commit</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Taal: Python</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Data: synthetisch 1CHO</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Omgeving: Codespaces-container</div>
</div>

</div>

---

<!-- Slide: Hoofdstuk 2 - Twee ideeen voor de opzet -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Twee ideeen voor de opzet</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Beide met 3 aha-momenten &mdash; het verschil zit in de opdeling van het werk</p>
  </div>
</div>

---

<!-- Slide: Twee ideeen naast elkaar -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Twee ideeen naast elkaar

<p class="np-subtitle">Zelfde ritme, andere invulling van ronde 1 en 2.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Idee 1</span>
    <h3 style="margin-top: 0.5rem;">Pijplijn: schoon, bouw, deel</h3>
    <div style="display: flex; flex-direction: column; gap: 0.55rem; margin-top: 0.6rem;">
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-blue);">1</span>
        <span style="font-size: 0.82rem;">Data opschonen</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-orange);">2</span>
        <span style="font-size: 0.82rem;">Dashboard bouwen</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-green);">3</span>
        <span style="font-size: 0.82rem;">Delen &amp; verantwoorden</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-ink);">4</span>
        <span style="font-size: 0.82rem;">Slotronde: orchestrator</span>
      </div>
    </div>
    <p class="muted" style="font-size: 0.78rem; margin: 0.7rem 0 0;">Beste fit: wie rommelige data betrouwbaar wil maken.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Idee 2</span>
    <h3 style="margin-top: 0.5rem;">Inzicht: verken, vertel, deel</h3>
    <div style="display: flex; flex-direction: column; gap: 0.55rem; margin-top: 0.6rem;">
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-blue);">1</span>
        <span style="font-size: 0.82rem;">Data verkennen</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-orange);">2</span>
        <span style="font-size: 0.82rem;">Verhaal vertellen</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-green);">3</span>
        <span style="font-size: 0.82rem;">Delen &amp; verantwoorden (zelfde)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="np-num" style="width: 1.6rem; height: 1.6rem; font-size: 0.72rem; background: var(--np-ink);">4</span>
        <span style="font-size: 0.82rem;">Slotronde: orchestrator</span>
      </div>
    </div>
    <p class="muted" style="font-size: 0.78rem; margin: 0.7rem 0 0;">Beste fit: wie van data naar een verhaal wil gaan.</p>
  </div>
</div>

</div>

---

<!-- Slide: Ronde 1 naast elkaar -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Ronde 1 &mdash; twee manieren om te beginnen

<p class="np-subtitle">Zelfde ruwe 1CHO-CSV, ander eerste doel.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Idee 1</span>
    <h3 style="margin-top: 0.5rem;">Data opschonen</h3>
    <p style="font-size: 0.8rem; margin: 0.5rem 0 0; line-height: 1.5;"><strong>Opdracht:</strong> kolommen checken, ontbrekende waarden opsporen, opschonen.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Skill:</strong> valideert verplichte/optionele 1CHO-kolommen, meldt fouten direct.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Resultaat:</strong> schone dataset + kwaliteitsrapport (rijen in/uit, datafouten).</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Idee 2</span>
    <h3 style="margin-top: 0.5rem;">Data verkennen</h3>
    <p style="font-size: 0.8rem; margin: 0.5rem 0 0; line-height: 1.5;"><strong>Opdracht:</strong> welke patronen, verdelingen en uitschieters zie je?</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Skill:</strong> profileert elke kolom, licht opvallendste bevindingen eruit.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Resultaat:</strong> verkenningsrapport met grafieken en bevindingen &mdash; nog geen app.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Zelfde startpunt, ander doel: <strong>betrouwbaarheid</strong> (idee 1) versus <strong>inzicht</strong> (idee 2).
</div>

</div>

---

<!-- Slide: Ronde 2 naast elkaar -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Ronde 2 &mdash; twee manieren om te bouwen

<p class="np-subtitle">Zelfde componentbibliotheek, ander doel.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Idee 1</span>
    <h3 style="margin-top: 0.5rem;">Dashboard bouwen</h3>
    <p style="font-size: 0.8rem; margin: 0.5rem 0 0; line-height: 1.5;"><strong>Opdracht:</strong> bouw een app met filters, KPI's en 2 grafieken.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Skill:</strong> genereert de app vanuit een vaste componentbibliotheek.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Resultaat:</strong> draaiende app op localhost met filters, KPI's, grafieken.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Idee 2</span>
    <h3 style="margin-top: 0.5rem;">Verhaal vertellen</h3>
    <p style="font-size: 0.8rem; margin: 0.5rem 0 0; line-height: 1.5;"><strong>Opdracht:</strong> maak de patronen uit ronde 1 interactief, met een vergelijking tussen cohorten of opleidingen.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Skill:</strong> zelfde componentbibliotheek als idee 1, nu gericht op de bevindingen uit ronde 1.</p>
    <p style="font-size: 0.8rem; margin: 0.4rem 0 0; line-height: 1.5;"><strong>Resultaat:</strong> app die precies de gevonden patronen laat zien en vergelijken.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Idee 1 <strong>bouwt</strong> een dashboard. Idee 2 <strong>vertelt</strong> het verhaal dat ronde 1 al blootlegde.
</div>

</div>

---

<!-- Slide: Ronde 3 - Delen en verantwoorden (gedeeld door beide ideeen) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide5.PNG);"></div>

<div class="fill">

# Ronde 3 &mdash; Delen &amp; verantwoorden

<p class="np-subtitle">Voor beide ideeën identiek: van "werkt op mijn scherm" naar een app die voldoet aan de DUO-privacyregel.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Opdracht &mdash; zelf</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat de deelnemer typt</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Eigen prompt: commit de app, geef de skill de kleuren van je eigen instelling mee, en zorg dat groepen kleiner dan 30 studenten nergens zichtbaar zijn.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Skill</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat de skill automatisch doet</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Verwerkt de meegegeven instellingskleuren in de huisstijl-tokens (i.p.v. vaste Npuls-kleuren), past de DUO-privacyregel toe (groepen &lt;30 krijgen NA, ook voor n), en committeert met een vaste messageconventie.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Resultaat</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat je op je scherm ziet</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Een git-commit, de app in de eigen instellingshuisstijl (bijv. Avans- of Windesheim-kleuren), en een kolom "onderdrukt" die precies laat zien welke groepen zijn afgeschermd.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Dezelfde drempel (<strong>&lt;30</strong>) uit het benchmarkrapport &mdash; en kleuren als parameter, niet hardcoded.
</div>

</div>

---

<!-- Slide: Slotronde - Orchestrator (gedeeld door beide ideeen) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Slotronde &mdash; alles in één prompt

<p class="np-subtitle">Voor beide ideeën identiek: dezelfde 3 stappen, nu na elkaar door 1 orchestrator skill.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Opdracht &mdash; zelf</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat de deelnemer typt</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Eén prompt: "Maak van dit ruwe 1CHO-bestand een deelbare Staat van Onderwijs-app."</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Skill</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat de skill automatisch doet</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">De orchestrator roept de 3 skills van ronde 1 t/m 3 automatisch na elkaar aan.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Resultaat</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat je op je scherm ziet</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Dezelfde deelbare app als na ronde 3 &mdash; nu bereikt in 1 prompt in plaats van 3.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Dit is het moment waarop de deelnemer <strong>ziet</strong> wat een orchestrator skill oplevert.
</div>

</div>

---

<!-- Slide: Hoofdstuk 3 - Randvoorwaarden -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: var(--np-ink); opacity: 0.75;">Deel 3</p>
    <h1 style="color: var(--np-ink); font-size: 3rem;">Randvoorwaarden &amp; vervolg</h1>
    <p style="color: var(--np-ink); opacity: 0.85; font-size: 1.15rem; margin-top: 0.5rem;">Wat al klaarstaat, en wat nog risico is</p>
  </div>
</div>

---

<!-- Slide: Wat al klaarstaat en risico's -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat al klaarstaat

<p class="np-subtitle">Uit de aantekeningen van Corneel en de brainstorm van 10 september.</p>

<div class="np-proof-strip" style="justify-content: center; margin-top: 0.8rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Container op Codespaces</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Uitgeklede dair-agentic-coding + skills</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Evaluatie-skill aan het eind</div>
</div>

<div class="np-card accent-orange" style="margin-top: 1.3rem;">
  <span class="np-badge orange">Let op &mdash; risico's</span>
  <h3 style="margin-top: 0.5rem;">Infra kan de sessie breken, niet de opdracht</h3>
  <ul style="font-size: 0.86rem; line-height: 1.7; margin: 0.3rem 0 0;">
    <li>WiFi op locatie onbetrouwbaar gebleken &mdash; hotspot als terugval</li>
    <li>GitHub Codespaces heeft een minutencap</li>
    <li>Beschikbaarheid van metadata nog checken vóór de sessie</li>
  </ul>
</div>

</div>

---

<!-- Slide: Open vragen en actiepunten -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Open vragen &amp; actiepunten

<p class="np-subtitle">Wie doet wat, vóór de sessie volledig staat.</p>

<div class="np-grid-4" style="margin-top: 0.6rem;">
  <div class="np-card accent-blue">
    <span class="np-badge orange">Open</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Infra</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Ash &amp; Tomer &mdash; container, Codespaces, devomgeving</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge orange">Open</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Notebook-aanpak</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Ash &mdash; hoe bieden we het notebook aan?</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge green">Nu</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Opdracht &amp; structuur</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Aslam &amp; Steven &mdash; dit voorstel, twee ideeen</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge orange">Open</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Volgende pitches</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0;">Steven &mdash; input voor de volgende iteratie</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1.1rem;">
  Vandaag beslissen: <strong>idee 1 of idee 2</strong> &mdash; de rest volgt uit die keuze.
</div>

</div>

---

<!-- VASTE AFSLUITSLIDE (Slide1.PNG) — woordelijk overnemen -->
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
