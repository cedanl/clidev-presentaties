---
theme: default
title: "Data in 3 delen: Het fundament, de single source of truth en democratie met AI"
info: >
  De wereld van data en AI staat onder creatieve spanning. Enerzijds is er met AI steeds meer
  mogelijk, tegelijkertijd is het data fundament bij veel instellingen nog niet op orde. Daarbij
  is er steeds meer wet- en regelgeving. Hoe komen we als onderwijs concreet een duurzame stap
  verder?
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
  <h1 style="font-size: 2.8rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Data in 3 delen</h1>
  <p style="font-size: 1.1rem; color: var(--np-dark-gray); max-width: 640px; line-height: 1.55; margin-bottom: 1.2rem;">
    Het fundament, de single source of truth en democratie met AI
  </p>
  <p style="font-size: 0.92rem; color: var(--np-mid-gray); max-width: 640px; line-height: 1.5; margin-bottom: 1rem; font-style: italic;">
    "Hoe komen we als onderwijs concreet een duurzame stap verder?"
  </p>
  <div style="font-size: 0.9rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.8rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

---

<!-- AGENDA (Slide2.PNG) — tekst rechts -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Vandaag</p>
  <h1 style="font-size: 1.9rem !important; margin-bottom: 1rem;">3 delen</h1>
  <div style="display: flex; flex-direction: column; gap: 0.6rem;">

    <!-- Deel 1: Fundament -->
    <div style="display: flex; align-items: flex-start; gap: 0.8rem;">
      <span class="np-num" style="flex-shrink: 0; margin-top: 0.1rem;">1</span>
      <div>
        <strong>Fundament</strong>
        <div style="display: flex; flex-direction: column; gap: 0.15rem; margin-top: 0.3rem; padding-left: 0.5rem; border-left: 2px solid var(--np-blue);">
          <span class="muted" style="font-size: 0.78rem;">↳ Governance / Regie</span>
          <span class="muted" style="font-size: 0.78rem;">↳ Data</span>
          <span class="muted" style="font-size: 0.78rem;">↳ Machine Learning</span>
        </div>
      </div>
    </div>

    <!-- Deel 2: Analytics Portal -->
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange); flex-shrink: 0;">2</span>
      <div><strong>Analytics Portal</strong><br/><span class="muted" style="font-size: 0.78rem;">Dashboards &amp; rapportage</span></div>
    </div>

    <!-- Deel 3: Agentic Portal -->
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green); flex-shrink: 0;">3</span>
      <div><strong>Agentic Portal</strong><br/><span class="muted" style="font-size: 0.78rem;">Data democratie &amp; ad-hoc AI</span></div>
    </div>

  </div>
</div>

---

<!-- ARCHITECTUUR DIAGRAM — 3 delen, Fundament-box (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill" style="padding: 1rem 2.2rem;">

<h1 style="font-size: 1.8rem; margin-bottom: 0.15rem;">Data Analytics Platform</h1>
<p class="np-subtitle" style="margin-bottom: 0.55rem;">3 delen — fundament, portals en democratie</p>

<div style="display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.8rem;">

  <!-- Portals bovenaan -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
    <div style="display: flex; flex-direction: column; gap: 0.2rem;">
      <div style="font-size: 0.68rem; font-weight: 700; color: var(--np-blue); letter-spacing: 0.06em; text-transform: uppercase; text-align: center;">Deel 2</div>
      <div style="background: #EBF0FD; border: 2px solid var(--np-blue); border-radius: 8px; padding: 0.5rem 0.8rem; text-align: center;">
        <div style="font-weight: 700; color: var(--np-blue); font-size: 0.8rem;">ANALYTICS PORTAL</div>
        <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.12rem;">dashboards · factsheets · ML-apps</div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 0.2rem;">
      <div style="font-size: 0.68rem; font-weight: 700; color: var(--np-orange); letter-spacing: 0.06em; text-transform: uppercase; text-align: center;">Deel 3</div>
      <div style="background: #FEF0E8; border: 2px solid var(--np-orange); border-radius: 8px; padding: 0.5rem 0.8rem; text-align: center;">
        <div style="font-weight: 700; color: var(--np-orange); font-size: 0.8rem;">AGENTIC PORTAL</div>
        <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.12rem;">agents · agentic apps · chatbots</div>
      </div>
    </div>
  </div>

  <!-- Pijl tweerichtingen -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; text-align: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1; padding: 0.1rem 0;">
    <div>↕</div><div>↕</div>
  </div>

  <!-- Fundament box -->
  <div style="border: 2.5px solid var(--np-green); border-radius: 10px; padding: 0.55rem 0.7rem; background: #F5FBF9;">
    <div style="font-size: 0.68rem; font-weight: 700; color: #007A5A; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.35rem;">Deel 1 — Fundament</div>

    <!-- Regie -->
    <div style="background: #E6F7F2; border: 2px solid var(--np-green); border-radius: 7px; padding: 0.4rem 0.7rem; text-align: center; margin-bottom: 0.3rem;">
      <div style="font-weight: 700; color: #007A5A; font-size: 0.78rem;">REGIE-LAAG &nbsp;·&nbsp; policy enforcement point</div>
      <div style="color: var(--np-dark-gray); font-size: 0.68rem; margin-top: 0.1rem;">beheer · autorisatie · toetsing · logging · compliance (NIS2 · EU AI Act · AVG)</div>
    </div>

    <!-- Pijl tweerichtingen -->
    <div style="text-align: center; color: var(--np-mid-gray); font-size: 0.9rem; line-height: 1; margin-bottom: 0.3rem;">↕</div>

    <!-- Data + ML naast elkaar -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.35rem;">
      <div style="background: #EBF0FD; border: 2px solid var(--np-blue); border-radius: 7px; padding: 0.4rem 0.7rem;">
        <div style="font-weight: 700; color: var(--np-blue); font-size: 0.78rem;">DATA</div>
        <div style="color: var(--np-dark-gray); font-size: 0.68rem; margin-top: 0.1rem; line-height: 1.4;">brons · zilver · goud · platinum<br/>opslag · pipeline · validatie</div>
      </div>
      <div style="background: #FEF0E8; border: 2px solid var(--np-orange); border-radius: 7px; padding: 0.4rem 0.7rem;">
        <div style="font-weight: 700; color: var(--np-orange); font-size: 0.78rem;">ML</div>
        <div style="color: var(--np-dark-gray); font-size: 0.68rem; margin-top: 0.1rem; line-height: 1.4;">modellen · training<br/>monitoring · feedback</div>
      </div>
    </div>
  </div>

</div>

<div class="np-bottomline" style="margin-top: 0.5rem; font-size: 0.82rem;">
  Portals zijn pas krachtig als <strong>het fundament op orde is</strong> — data, ML en regie.
</div>

</div>

---

<!-- SECTIE: LAAG 1 — GOVERNANCE / REGIE (Slide13.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Laag 1</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Governance / Regie</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">Regelgeving, compliance en digitale soevereiniteit</p>
  </div>
</div>

---

<!-- REGIE — inhoud (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Governance / Regie

<p class="np-subtitle">De basis die alles draagt — en steeds zwaarder weegt</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; gap: 1.2rem;">
<div style="font-size: 0.88rem; line-height: 1.75;">

**Regelgeving stapelt zich op**

- **NIS2** — cybersecurity verplicht, incidentmelding 24/72u
- **EU AI Act** — onderwijs = *hoog risico* (Bijlage III), deadline aug 2026
- **AVG / GDPR** — DPIA bij gevoelige data, verwerkersovereenkomsten
- **Data Act** — eigenaarschap en portabiliteit van data

</div>
<div style="display: flex; flex-direction: column; gap: 0.7rem;">
  <div class="np-card accent-green">
    <span class="np-badge green">Digitale soevereiniteit</span>
    <p style="font-size: 0.84rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Gevoelige data (BSN, studieresultaten, HR) stroomt nu via <strong>Azure &amp; Microsoft Fabric</strong>. Zonder regie-laag geen uitweg uit vendor lock-in.
    </p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Ben je klaar voor migratie?</span>
    <p style="font-size: 0.84rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.3rem 0 0;">
      SURF heeft een soeverein Office-pakket (Nextcloud) en AI Hub. Voor data-infrastructuur en governance willen we ook een alternatief — daar werkt CEDA aan.
    </p>
  </div>
</div>
</div>

<div class="np-bottomline" style="margin-top: 0.6rem; font-size: 0.82rem;">
  MORA (mbo Referentie Architectuur) geeft het kader: <a href="https://www.wikixl.nl/wiki/mora/index.php/Hoofdpagina" style="color: #fff; text-decoration: underline;">wikixl.nl/wiki/mora</a>
</div>

</div>

---

<!-- REGIE — VRAAG (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 2.5rem;">
  <p class="eyebrow">Vraag voor jullie</p>
  <h1 style="font-size: 2.2rem; line-height: 1.2; max-width: 720px; margin-bottom: 1.2rem;">
    Heb je contact met een <span style="color: var(--np-blue);">data architect</span> en/of <span style="color: var(--np-blue);">enterprise architect</span> binnen je instelling?
  </h1>
  <div class="np-grid-2" style="max-width: 700px; text-align: left; gap: 0.8rem;">
    <div class="np-card accent-blue" style="font-size: 0.85rem;">
      <strong style="color: var(--np-blue);">Data architect</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0; line-height: 1.55;">Heeft overzicht over de data-architectuur, data flows en datastandaarden. Communiceert hierover naar stakeholders en borgt traceerbaarheid van data door de organisatie.</p>
    </div>
    <div class="np-card accent-blue" style="font-size: 0.85rem;">
      <strong style="color: var(--np-blue);">Enterprise architect</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0; line-height: 1.55;">Bewaakt de strategische samenhang tussen IT, data en bedrijfsprocessen. Zorgt dat architectuurkeuzes compliance borgen en de hele organisatie overspannen.</p>
    </div>
  </div>
  <div class="np-bottomline" style="margin-top: 1rem; font-size: 0.84rem; max-width: 640px;">
    Zonder architectuurrol: geen <strong>strategische alignment</strong>, geen geborgde compliance in de infrastructuur.
  </div>
</div>

</div>

---

<!-- SECTIE: LAAG 2 — DATA (Slide14.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Laag 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Data</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">Van ruwe bron naar betrouwbare single source of truth</p>
  </div>
</div>

---

<!-- DATA — inhoud (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill" style="padding: 1.4rem 2.5rem;">

# Data

<p class="np-subtitle">Data doorloopt vier kwaliteitslagen naar bruikbare inzichten</p>

<div style="margin-top: 0.5rem;">

<div class="np-pipeline" style="margin-bottom: 0.9rem; gap: 0.3rem;">
  <div class="np-step blue" style="flex: 1; padding: 0.4rem 0.5rem;">
    <strong style="font-size: 0.8rem;">🥉 Brons</strong>
    <small style="font-size: 0.72rem;">Ruwe data as-is · AES-256 · logging</small>
  </div>
  <div class="np-arrow" style="font-size: 0.9rem;">→</div>
  <div class="np-step orange" style="flex: 1; padding: 0.4rem 0.5rem;">
    <strong style="font-size: 0.8rem;">🥈 Zilver</strong>
    <small style="font-size: 0.72rem;">Gestandaardiseerd · RBAC · herkomst</small>
  </div>
  <div class="np-arrow" style="font-size: 0.9rem;">→</div>
  <div class="np-step green" style="flex: 1; padding: 0.4rem 0.5rem;">
    <strong style="font-size: 0.8rem;">🥇 Goud</strong>
    <small style="font-size: 0.72rem;">Business logic · pseudoniem · TLS</small>
  </div>
  <div class="np-arrow" style="font-size: 0.9rem;">→</div>
  <div style="background: linear-gradient(135deg, #3D68EC 0%, #DD784B 100%); border-radius: 8px; flex: 1; padding: 0.4rem 0.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
    <strong style="font-size: 0.8rem; color: #fff;">💎 Platinum</strong>
    <small style="font-size: 0.72rem; color: rgba(255,255,255,0.9);">Verrijkt met ML</small>
  </div>
</div>

<div class="np-grid-2" style="align-items: start; gap: 0.9rem;">
<div style="font-size: 0.84rem; line-height: 1.7;">

**Datadomeinen mbo**
- *SIS* — studiesucces, verloop, inschrijvingen
- *Arbeidsmarkt* — regionale arbeidsmarktbehoeftes
- *Persoonlijke data* — vooropleiding, achtergrond

**Bronnen**
1CijferMBO · DUO open data · SIS · Studielink

</div>
<div>
  <div class="np-card accent-orange">
    <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
      <span class="np-badge orange">CEDA repo</span>
      <span style="font-size: 0.78rem; background: #FFF3E0; color: #B84A00; border-radius: 4px; padding: 0.1rem 0.4rem; font-weight: 600;">🚧 work in progress</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">duo-mbo-datafiles</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.3rem 0 0;">
      DUO open data voor het mbo — gestandaardiseerd en klaar voor gebruik in R en Python.
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      <a href="https://github.com/cedanl/duo-mbo-datafiles" style="color: var(--np-blue);">github.com/cedanl/duo-mbo-datafiles</a>
    </p>
  </div>
</div>
</div>
</div>

</div>

---

<!-- DATA — VRAAG (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 3rem;">
  <p class="eyebrow">Vraag voor jullie</p>
  <h1 style="font-size: 2.4rem; line-height: 1.2; max-width: 700px; margin-bottom: 1.2rem;">
    Gebruik je voor data-analyse alleen <span style="color: var(--np-blue);">SQL</span>, of ook <span style="color: var(--np-orange);">Python</span>?
  </h1>
  <div class="np-grid-2" style="max-width: 680px; text-align: left; gap: 0.8rem;">
    <div class="np-card accent-blue" style="font-size: 0.85rem;">
      <strong>SQL</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;">Queries, rapportages, vaste structuur. Goed voor brons→zilver transitie.</p>
    </div>
    <div class="np-card accent-orange" style="font-size: 0.85rem;">
      <strong>Python</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;">Transformatie, validatie, ML. Nodig voor zilver→goud→platinum.</p>
    </div>
  </div>

</div>

</div>

---

<!-- SECTIE: LAAG 3 — ML (Slide15.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Laag 3</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Machine Learning</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">Van data naar voorspelling en vroeg-signalering</p>
  </div>
</div>

---

<!-- ML — inhoud (Slide3.PNG) + illustratie rechtsonder -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<img src="/npuls/powerpoint_illustrations/brains.svg" style="position: absolute; bottom: 1.5rem; right: 1.5rem; width: 110px; opacity: 0.18; z-index: 0;" />

<div class="fill" style="position: relative; z-index: 1;">

# Machine Learning

<p class="np-subtitle">Modellen die concreet werken voor mbo-instellingen</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; gap: 1rem;">
<div style="font-size: 0.88rem; line-height: 1.75;">

**EU AI Act — onderwijs = hoog risico**
- Menselijk toezicht verplicht (Art. 14)
- Conformiteitsbeoordeling vóór deployment
- Registratie in algoritmeregister

**Data governance in de ML-cyclus**

Herkomst-tracking · bias-detectie · drift-monitoring · auditlogs (10 jaar bewaring)

</div>
<div style="display: flex; flex-direction: column; gap: 0.6rem;">
  <div class="np-card accent-blue">
    <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
      <span class="np-badge blue">CEDA</span>
      <span class="np-badge ghost" style="background: #E8EDFF; color: var(--np-blue); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">Uitnodigingsregel</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.25rem 0 0;">
      ML-model: welke studenten verdienen extra aandacht? Gebouwd samen met instellingen.
    </p>
    <p style="margin-top: 0.4rem; font-size: 0.79rem;">
      <a href="https://github.com/cedanl/Uitnodigingsregel" style="color: var(--np-blue);">cedanl/Uitnodigingsregel</a>
    </p>
  </div>
  <div class="np-card accent-orange">
    <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
      <span class="np-badge orange">CEDA</span>
      <span class="np-badge ghost" style="background: #FEF0E8; color: var(--np-orange); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">Uitnodigingsregel_datapreparatie</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.25rem 0 0;">
      Data-preparatie scripts voor de Uitnodigingsregel — brondata klaarmaken voor het model.
    </p>
    <p style="margin-top: 0.4rem; font-size: 0.79rem;">
      <a href="https://github.com/cedanl/Uitnodigingsregel_datapreparatie" style="color: var(--np-blue);">cedanl/Uitnodigingsregel_datapreparatie</a>
    </p>
  </div>
</div>
</div>

</div>

---

<!-- ML — VRAAG (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 3rem;">
  <p class="eyebrow">Vraag voor jullie</p>
  <h1 style="font-size: 2.6rem; line-height: 1.2; max-width: 680px; margin-bottom: 1rem;">
    Doet jullie instelling al aan <span style="color: var(--np-green);">machine learning</span>?
  </h1>
  <div class="np-grid-2" style="max-width: 580px; text-align: left; gap: 0.8rem; margin-bottom: 1rem;">
    <div class="np-card accent-green" style="text-align: center;">
      <div style="font-size: 2rem; margin-bottom: 0.3rem;">✅</div>
      <strong>Ja</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;">Welk model? Uitval, instroom, iets anders?</p>
    </div>
    <div class="np-card accent-blue" style="text-align: center;">
      <div style="font-size: 2rem; margin-bottom: 0.3rem;">❌</div>
      <strong>Nee</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;">Goede data + simpel model verslaat altijd een spreadsheet</p>
    </div>
  </div>
</div>

</div>

---

<!-- SECTIE: LAAG 4 — DASHBOARD (Slide13.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Laag 4</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Dashboard</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">De single source of truth voor de organisatie</p>
  </div>
</div>

---

<!-- DASHBOARD — versie A: doelgroepen (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Dashboard

<p class="np-subtitle">Voor wie maak je dashboards — en waarvoor?</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: stretch; gap: 0.8rem;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Bestuur</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Strategisch</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Instellingsbrede KPI's, sectorale benchmark, meerjarige trends. Koersbepaling en verantwoording.
    </p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Bedrijfsvoering</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Tactisch</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Doorstroom per opleiding, capaciteitsplanning, financiële prognoses. Sturend voor management.
    </p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Onderwijs</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Operationeel</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Studentoverzicht, signaleringsscores, voortgang per klas. Dagelijks bruikbaar voor docent.
    </p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem; font-size: 0.84rem;">
  Het dashboard is de <strong>single source of truth</strong> voor de organisatie — één gedeelde werkelijkheid.
</div>

</div>

---

<!-- SECTIE: LAAG 5 — AGENTIC (Slide14.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Laag 5</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Agentic / AI</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">Data democratie — toegankelijk voor iedereen</p>
  </div>
</div>

---

<!-- DATA DEMOCRATIE — inhoud (Slide4.PNG — rustiger) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Data democratie

<p class="np-subtitle">Twee complementaire portals — SSoT én ad-hoc AI</p>

<div class="np-grid-3" style="margin-top: 0.4rem; align-items: start; gap: 0.8rem;">

<!-- Kolom 1: Analytics Portal -->
<div class="np-card accent-blue" style="font-size: 0.84rem;">
  <span class="np-badge blue">Analytics Portal</span>
  <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">Single source of truth</h3>
  <p style="font-size: 0.8rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.3rem 0 0;">
    Dashboards geven de organisatie één gedeelde werkelijkheid. Strategisch · tactisch · operationeel.
  </p>
  <ul style="font-size: 0.78rem; color: var(--np-dark-gray); margin: 0.4rem 0 0; padding-left: 1rem; line-height: 1.6;">
    <li>Bestuur: instellingsbrede KPI's</li>
    <li>Management: capaciteitsplanning</li>
    <li>Docent: studentoverzicht</li>
  </ul>
</div>

<!-- Kolom 2: uitleg -->
<div style="font-size: 0.86rem; line-height: 1.7;">

**Twee complementaire portals**

Niet elke vraag past in een dashboard. Maatwerk vragen:

- "Hoe doet mijn klas het dit kwartaal?"
- "Uitvaltrends BBL dit jaar?"
- "Vergelijk ons met vergelijkbare instellingen"

**Agentic Portal** vangt de ad-hoc stroom op — interactief, toegankelijk, geen BI-kennis nodig.

</div>

<div style="display: flex; flex-direction: column; gap: 0.65rem;">
  <div class="np-card accent-blue">
    <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
      <span class="np-badge blue">CEDA tool</span>
      <span class="np-badge ghost" style="background: #E8EDFF; color: var(--np-blue); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">samenwijzer</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.25rem 0 0;">
      AI-assistent voor opleidingskeuze — profiel × arbeidsmarktdata. Ontwikkeld via de Data Coalitie.
    </p>
    <p style="margin-top: 0.4rem; font-size: 0.79rem;">
      <a href="https://github.com/cedanl/samenwijzer" style="color: var(--np-blue);">cedanl/samenwijzer</a>
    </p>
  </div>
  <div class="np-card accent-orange">
    <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
      <span class="np-badge orange">CEDA tool</span>
      <span class="np-badge ghost" style="background: #FEF0E8; color: var(--np-orange); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">SkillsRadar</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.25rem 0 0;">
      Radar die arbeidsmarktvaardigheden koppelt aan mbo-opleidingen per regio. Live →
    </p>
    <p style="margin-top: 0.4rem; font-size: 0.79rem;">
      <a href="https://github.com/cedanl/SkillsRadar" style="color: var(--np-blue);">cedanl/SkillsRadar</a>
    </p>
  </div>
</div>

</div>

</div>

---

<!-- SKILLSRADAR LIVE — iframe vult de hele slide, geen np-bg -->
<style scoped>
.pdf-content { display: none; }
@media print {
  .live-content { display: none !important; }
  .pdf-content { display: block !important; }
}
</style>

<!-- achtergrond via een plain div, NIET np-bg (anders blokkeer je pointer events) -->
<div style="position: absolute; inset: 0; background: #f0f4f8; z-index: 0;"></div>

<!-- titel boven iframe -->
<div class="live-content" style="position: absolute; top: 0; left: 0; right: 0; z-index: 5; padding: 0.8rem 1.8rem 0; pointer-events: none;">
  <h1 style="font-size: 1.7rem; margin: 0; color: var(--np-ink);">SkillsRadar — live</h1>
</div>

<!-- iframe zelf: absolute, start onder de titel -->
<iframe
  class="live-content"
  src="https://ceda-skillsradar.fly.dev/radar?opleiding=5&regio=NL"
  style="position: absolute; top: 68px; left: 0; right: 0; bottom: 0; width: 100%; height: calc(100% - 68px); border: none; z-index: 10; display: block;"
  frameborder="0"
  scrolling="yes"
  allow="fullscreen">
</iframe>

<!-- PDF: screenshot -->
<div class="pdf-content" style="position: absolute; inset: 0; background: #f0f4f8; padding: 1.2rem 2rem; z-index: 10;">
  <h1 style="font-size: 1.7rem; margin: 0 0 0.4rem;">SkillsRadar — live</h1>
  <p style="font-size: 0.78rem; color: var(--np-mid-gray); margin: 0 0 0.6rem;">
    <a href="https://ceda-skillsradar.fly.dev" style="color: var(--np-blue);">ceda-skillsradar.fly.dev</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/cedanl/SkillsRadar" style="color: var(--np-blue);">cedanl/SkillsRadar</a>
  </p>
  <img src="/shots/skillsradar.png" style="width: 100%; height: calc(100% - 80px); object-fit: contain; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
