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
  <h1 style="font-size: 1.9rem !important; margin-bottom: 1.1rem;">5 lagen, 5 vragen</h1>
  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Governance / Regie</strong><br/><span class="muted" style="font-size: 0.78rem;">Regelgeving &amp; digitale soevereiniteit</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Data</strong><br/><span class="muted" style="font-size: 0.78rem;">Single source of truth</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Machine Learning</strong><br/><span class="muted" style="font-size: 0.78rem;">Voorspelling &amp; signalering</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-blue);">4</span>
      <div><strong>Dashboard</strong><br/><span class="muted" style="font-size: 0.78rem;">Single source of truth voor de organisatie</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-pink); color: var(--np-ink);">5</span>
      <div><strong>Agentic / AI</strong><br/><span class="muted" style="font-size: 0.78rem;">Data democratie &amp; ad-hoc toegankelijkheid</span></div>
    </div>
  </div>
</div>

---

<!-- DIAGRAM 1: zonder Agentic Portal + GenAI (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill" style="padding: 1.2rem 2.5rem;">

<h1 style="font-size: 1.9rem; margin-bottom: 0.2rem;">Data Analytics Platform</h1>
<p class="np-subtitle" style="margin-bottom: 0.7rem;">Waar staan de meeste mbo-instellingen nu</p>

<div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.8rem;">

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.35rem;">
    <div style="background: #EBF0FD; border: 2px solid var(--np-blue); border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
      <div style="font-weight: 700; color: var(--np-blue); font-size: 0.78rem; letter-spacing: 0.04em;">ANALYTICS PORTAL</div>
      <div style="color: var(--np-dark-gray); font-size: 0.72rem; margin-top: 0.15rem;">dashboards · factsheets · ML-apps</div>
    </div>
    <div style="background: #F5F5F5; border: 2px dashed #C0C0C0; border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
      <div style="font-weight: 700; color: #B0B0B0; font-size: 0.78rem; letter-spacing: 0.04em;">AGENTIC PORTAL</div>
      <div style="color: #B0B0B0; font-size: 0.72rem; margin-top: 0.15rem; font-style: italic;">nog niet aanwezig</div>
    </div>
  </div>

  <div style="display: flex; justify-content: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1;">↕&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

  <div style="background: #E6F7F2; border: 2.5px solid var(--np-green); border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
    <div style="font-weight: 700; color: #007A5A; font-size: 0.82rem; letter-spacing: 0.04em;">REGIE-LAAG &nbsp;·&nbsp; policy enforcement point</div>
    <div style="color: var(--np-dark-gray); font-size: 0.72rem; margin-top: 0.12rem;">beheer · autorisatie · toetsing · logging · compliance (NIS2 · EU AI Act · AVG)</div>
  </div>

  <div style="display: flex; justify-content: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1;">↕&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

  <div style="display: grid; grid-template-columns: 1fr 1fr 0.65fr; gap: 0.35rem;">
    <div style="background: #EBF0FD; border: 2px solid var(--np-blue); border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: var(--np-blue); font-size: 0.78rem;">DATA</div>
      <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45;">brons · zilver · goud · platinum<br/>opslag · pipeline · validatie</div>
    </div>
    <div style="background: #FEF0E8; border: 2px solid var(--np-orange); border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: var(--np-orange); font-size: 0.78rem;">ML</div>
      <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45;">modellen · training<br/>monitoring · feedback</div>
    </div>
    <div style="background: #F5F5F5; border: 2px dashed #C0C0C0; border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: #B0B0B0; font-size: 0.78rem;">GEN AI HUB</div>
      <div style="color: #B0B0B0; font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45; font-style: italic;">nog niet</div>
    </div>
  </div>

</div>

<div class="np-bottomline" style="margin-top: 0.6rem; font-size: 0.82rem;">
  Fundament is data + ML + regie. Agentic Portal en GenAI Hub komen <strong>bovenop</strong> dit fundament.
</div>

</div>

---

<!-- DIAGRAM 2: andersom — alleen Agentic Portal + GenAI actief (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill" style="padding: 1.2rem 2.5rem;">

<h1 style="font-size: 1.9rem; margin-bottom: 0.2rem;">Data Analytics Platform — wat er bijkomt</h1>
<p class="np-subtitle" style="margin-bottom: 0.7rem;">Agentic Portal en GenAI Hub bouwen op het fundament</p>

<div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.8rem;">

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.35rem;">
    <div style="background: #F5F5F5; border: 2px dashed #C0C0C0; border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
      <div style="font-weight: 700; color: #B0B0B0; font-size: 0.78rem; letter-spacing: 0.04em;">ANALYTICS PORTAL</div>
      <div style="color: #B0B0B0; font-size: 0.72rem; margin-top: 0.15rem; font-style: italic;">al aanwezig</div>
    </div>
    <div style="background: #FEF0E8; border: 2px solid var(--np-orange); border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
      <div style="font-weight: 700; color: var(--np-orange); font-size: 0.78rem; letter-spacing: 0.04em;">AGENTIC PORTAL ✦ nieuw</div>
      <div style="color: var(--np-dark-gray); font-size: 0.72rem; margin-top: 0.15rem;">agents · agentic apps · chatbots</div>
    </div>
  </div>

  <div style="display: flex; justify-content: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1;">↕&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

  <div style="background: #F5F5F5; border: 2px dashed #C0C0C0; border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
    <div style="font-weight: 700; color: #B0B0B0; font-size: 0.82rem; letter-spacing: 0.04em;">REGIE-LAAG &nbsp;·&nbsp; al aanwezig</div>
    <div style="color: #B0B0B0; font-size: 0.72rem; margin-top: 0.12rem; font-style: italic;">beheer · autorisatie · toetsing · logging</div>
  </div>

  <div style="display: flex; justify-content: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1;">↕&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

  <div style="display: grid; grid-template-columns: 1fr 1fr 0.65fr; gap: 0.35rem;">
    <div style="background: #F5F5F5; border: 2px dashed #C0C0C0; border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: #B0B0B0; font-size: 0.78rem;">DATA &nbsp;·&nbsp; al aanwezig</div>
      <div style="color: #C0C0C0; font-size: 0.7rem; margin-top: 0.1rem; font-style: italic;">brons · zilver · goud · platinum</div>
    </div>
    <div style="background: #F5F5F5; border: 2px dashed #C0C0C0; border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: #B0B0B0; font-size: 0.78rem;">ML &nbsp;·&nbsp; al aanwezig</div>
      <div style="color: #C0C0C0; font-size: 0.7rem; margin-top: 0.1rem; font-style: italic;">modellen · monitoring</div>
    </div>
    <div style="background: #FBF7E8; border: 2px solid #C9A227; border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: #8B6914; font-size: 0.78rem;">GEN AI HUB ✦ nieuw</div>
      <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45;">completions<br/>multimodal · RAG</div>
    </div>
  </div>

</div>

<div class="np-bottomline" style="margin-top: 0.6rem; font-size: 0.82rem;">
  Agentic Portal en GenAI Hub zijn pas krachtig als <strong>data, ML en regie al op orde zijn</strong>.
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
  <p style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 1rem; max-width: 560px;">
    Hoe haal je DUO-data op dit moment binnen — vaste export of live koppeling?
  </p>
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
  Het dashboard is de <strong>single source of truth</strong> voor de organisatie — één gedeelde werkelijkheid, geborgd in de data-laag.
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

<p class="np-subtitle">Dashboard = single source of truth · AI = ad-hoc vragen voor iedereen</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; gap: 1rem;">
<div style="font-size: 0.88rem; line-height: 1.75;">

**Twee complementaire lagen**

Het dashboard geeft de organisatie één gedeelde werkelijkheid. Maar niet elke vraag past in een dashboard.

- Docent wil weten: "Hoe doet mijn klas het dit kwartaal?"
- Teamleider vraagt: "Wat zijn de uitvaltrends voor BBL dit jaar?"
- Bestuurder: "Vergelijk ons met vergelijkbare instellingen"

**Agentic AI vangt de ad-hoc stroom op** — interactief, toegankelijk, geen BI-kennis nodig. De kracht zit in de onderliggende data-lagen.

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

<!-- SKILLSRADAR LIVE — volledige iframe, eigen achtergrond, geen np-bg -->
<style scoped>
/* Geen Npuls-achtergrond op deze slide — iframe is het visuele middelpunt */
.live-content { display: flex; }
.pdf-content { display: none; }
@media print {
  .live-content { display: none !important; }
  .pdf-content { display: flex !important; }
}
</style>

<!-- HTML: iframe vult de hele slide, met eigen achtergrond en titel erboven -->
<div class="live-content" style="
  position: absolute; inset: 0; z-index: 10;
  background: #f0f4f8;
  flex-direction: column;
  padding: 0.9rem 1.8rem 0.8rem;
  pointer-events: all;
">
  <h1 style="font-size: 1.7rem; margin: 0 0 0.5rem; flex-shrink: 0; color: var(--np-ink);">SkillsRadar — live</h1>
  <div style="flex: 1; min-height: 0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.15); pointer-events: all;">
    <iframe
      src="https://ceda-skillsradar.fly.dev/radar?opleiding=5&regio=NL"
      style="display: block; width: 100%; height: 100%; border: none;"
      frameborder="0"
      scrolling="yes"
      allow="fullscreen">
    </iframe>
  </div>
</div>

<!-- PDF: screenshot met titel -->
<div class="pdf-content" style="
  position: absolute; inset: 0; z-index: 10;
  background: #f0f4f8;
  flex-direction: column;
  padding: 1.2rem 2rem;
">
  <h1 style="font-size: 1.7rem; margin: 0 0 0.4rem; flex-shrink: 0;">SkillsRadar — live</h1>
  <p style="font-size: 0.78rem; color: var(--np-mid-gray); margin: 0 0 0.6rem; flex-shrink: 0;">
    <a href="https://ceda-skillsradar.fly.dev" style="color: var(--np-blue);">ceda-skillsradar.fly.dev</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/cedanl/SkillsRadar" style="color: var(--np-blue);">cedanl/SkillsRadar</a>
  </p>
  <img src="/shots/skillsradar.png" style="flex: 1; min-height: 0; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
