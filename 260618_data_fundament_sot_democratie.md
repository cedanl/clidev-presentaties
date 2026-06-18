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
      <div><strong>Dashboard</strong><br/><span class="muted" style="font-size: 0.78rem;">Visualisatie &amp; rapportage</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-pink); color: var(--np-ink);">5</span>
      <div><strong>Agentic / AI</strong><br/><span class="muted" style="font-size: 0.78rem;">Data democratie</span></div>
    </div>
  </div>
</div>

---

<!-- ARCHITECTUUR DIAGRAM (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill" style="padding: 1.2rem 2.5rem;">

<h1 style="font-size: 1.9rem; margin-bottom: 0.2rem;">Data Analytics Platform</h1>
<p class="np-subtitle" style="margin-bottom: 0.7rem;">De 5-laagse architectuur van het mbo data ecosysteem</p>

<div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.8rem;">

  <!-- Applicatielaag: portals -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.35rem;">
    <div style="background: #EBF0FD; border: 2px solid var(--np-blue); border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
      <div style="font-weight: 700; color: var(--np-blue); font-size: 0.78rem; letter-spacing: 0.04em;">ANALYTICS PORTAL</div>
      <div style="color: var(--np-dark-gray); font-size: 0.72rem; margin-top: 0.15rem;">dashboards · factsheets · ML-apps</div>
    </div>
    <div style="background: #FEF0E8; border: 2px solid var(--np-orange); border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
      <div style="font-weight: 700; color: var(--np-orange); font-size: 0.78rem; letter-spacing: 0.04em;">AGENTIC PORTAL</div>
      <div style="color: var(--np-dark-gray); font-size: 0.72rem; margin-top: 0.15rem;">agents · agentic apps · chatbots</div>
    </div>
  </div>

  <!-- Pijl omlaag -->
  <div style="display: flex; justify-content: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1;">↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</div>

  <!-- Regie-laag -->
  <div style="background: #E6F7F2; border: 2.5px solid var(--np-green); border-radius: 8px; padding: 0.45rem 0.8rem; text-align: center;">
    <div style="font-weight: 700; color: #007A5A; font-size: 0.82rem; letter-spacing: 0.04em;">REGIE-LAAG &nbsp;·&nbsp; policy enforcement point</div>
    <div style="color: var(--np-dark-gray); font-size: 0.72rem; margin-top: 0.12rem;">beheer · autorisatie · toetsing · logging · compliance (NIS2 · EU AI Act · AVG)</div>
  </div>

  <!-- Pijl omlaag -->
  <div style="display: flex; justify-content: center; color: var(--np-mid-gray); font-size: 1rem; line-height: 1;">↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</div>

  <!-- Data + ML + GenAI -->
  <div style="display: grid; grid-template-columns: 1fr 1fr 0.65fr; gap: 0.35rem;">
    <div style="background: #EBF0FD; border: 2px solid var(--np-blue); border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: var(--np-blue); font-size: 0.78rem;">DATA</div>
      <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45;">
        brons · zilver · goud · platinum<br/>opslag · pipeline · validatie
      </div>
    </div>
    <div style="background: #FEF0E8; border: 2px solid var(--np-orange); border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: var(--np-orange); font-size: 0.78rem;">ML</div>
      <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45;">
        modellen · training<br/>monitoring · feedback
      </div>
    </div>
    <div style="background: #FBF7E8; border: 2px solid #C9A227; border-radius: 8px; padding: 0.45rem 0.8rem;">
      <div style="font-weight: 700; color: #8B6914; font-size: 0.78rem;">GEN AI HUB</div>
      <div style="color: var(--np-dark-gray); font-size: 0.7rem; margin-top: 0.1rem; line-height: 1.45;">
        completions<br/>multimodal · RAG
      </div>
    </div>
  </div>

</div>

<div class="np-bottomline" style="margin-top: 0.6rem; font-size: 0.82rem;">
  Alle lagen zijn <strong>open source</strong>, modulair en draaibaar in eigen infrastructuur of op SURF — de instelling blijft in de regie.
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

<!-- REGIE — inhoud: regelgeving + compliance + soevereiniteit -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

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

<p style="font-size: 0.8rem; color: var(--np-mid-gray); margin-top: 0.5rem;">
Bij operationele druk en snelle opeenvolging van wetgeving is compliance sector-breed onzeker. Instellingen missen capaciteit om dit zelfstandig te borgen.
</p>

</div>
<div style="display: flex; flex-direction: column; gap: 0.7rem;">
  <div class="np-card accent-green">
    <span class="np-badge green">Digitale soevereiniteit</span>
    <p style="font-size: 0.84rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Gevoelige data (BSN, studieresultaten, HR) stroomt nu via <strong>Azure &amp; Microsoft Fabric</strong> — Amerikaanse ecosystemen. Zonder regie-laag: geen uitweg.
    </p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">MORA</span>
    <p style="font-size: 0.84rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.3rem 0 0;">
      mbo Referentie Architectuur — gedeeld begrippenkader voor data-architectuurvraagstukken in het mbo.
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      <a href="https://www.wikixl.nl/wiki/mora/index.php/Hoofdpagina" style="color: var(--np-blue);">wikixl.nl/wiki/mora</a>
    </p>
  </div>
</div>
</div>

</div>

---

<!-- REGIE — VRAAG (aparte slide) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide5.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 3rem;">
  <p class="eyebrow">Vraag voor jullie</p>
  <h1 style="font-size: 2.4rem; line-height: 1.2; max-width: 700px; margin-bottom: 1.2rem;">
    Heb je contact met een <span style="color: var(--np-orange);">data architect</span> en/of <span style="color: var(--np-blue);">enterprise architect</span> binnen je instelling?
  </h1>
  <div class="np-grid-2" style="max-width: 680px; text-align: left; gap: 0.8rem;">
    <div class="np-card accent-orange" style="font-size: 0.85rem;">
      <strong>Data architect</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;">Bepaalt welke data waarheen stroomt, bewaakt privacy by design, beheert bronnen</p>
    </div>
    <div class="np-card accent-blue" style="font-size: 0.85rem;">
      <strong>Enterprise architect</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;">Verbindt systemen op strategisch niveau, borgt compliance in de architectuur</p>
    </div>
  </div>
  <p style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 1rem; max-width: 560px;">
    Zonder regie-laag bouwen teams langs elkaar — elke afdeling een eigen werkelijkheid, geen compliance-borging.
  </p>
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

<!-- DATA — inhoud: kwaliteitslagen + domeinen + repo -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div class="fill" style="padding: 1.4rem 2.5rem;">

# Data

<p class="np-subtitle">Data doorloopt vier kwaliteitslagen naar bruikbare inzichten</p>

<div style="margin-top: 0.6rem;">

<!-- Kwaliteitslagen pipeline -->
<div class="np-pipeline" style="margin-bottom: 0.9rem; gap: 0.3rem;">
  <div class="np-step blue" style="flex: 1; padding: 0.4rem 0.5rem;">
    <strong style="font-size: 0.8rem;">🥉 Brons</strong>
    <small style="font-size: 0.72rem;">Ruwe data as-is — ingest, logging, AES-256</small>
  </div>
  <div class="np-arrow" style="font-size: 0.9rem;">→</div>
  <div class="np-step orange" style="flex: 1; padding: 0.4rem 0.5rem;">
    <strong style="font-size: 0.8rem;">🥈 Zilver</strong>
    <small style="font-size: 0.72rem;">Gestandaardiseerd — RBAC, herkomst-tracking</small>
  </div>
  <div class="np-arrow" style="font-size: 0.9rem;">→</div>
  <div class="np-step green" style="flex: 1; padding: 0.4rem 0.5rem;">
    <strong style="font-size: 0.8rem;">🥇 Goud</strong>
    <small style="font-size: 0.72rem;">Business logic — pseudoniem, TLS-export</small>
  </div>
  <div class="np-arrow" style="font-size: 0.9rem;">→</div>
  <div style="background: linear-gradient(135deg, #3D68EC 0%, #DD784B 100%); border-radius: 8px; flex: 1; padding: 0.4rem 0.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
    <strong style="font-size: 0.8rem; color: #fff;">💎 Platinum</strong>
    <small style="font-size: 0.72rem; color: rgba(255,255,255,0.9);">Verrijkt met ML-uitkomsten</small>
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
    <span class="np-badge orange">CEDA repo &nbsp;🚧 WIP</span>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">duo-mbo-datafiles</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.3rem 0 0;">
      DUO open data voor het mbo — gestandaardiseerd en klaar voor gebruik. <em>Werk in uitvoering.</em>
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

<!-- DATA — VRAAG -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide7.PNG);"></div>

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
    SQL + Python samen = maximale flexibiliteit. Hoe haal je DUO-data op dit moment binnen?
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

<!-- ML — inhoud + repos (Data Coalitie) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide8.PNG);"></div>

<div class="fill">

# Machine Learning

<p class="np-subtitle">Modellen die concreet werken voor mbo-instellingen</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start; gap: 1rem;">
<div style="font-size: 0.88rem; line-height: 1.75;">

**De ML-levenscyclus**

<div class="np-pipeline" style="margin: 0.5rem 0; gap: 0.2rem; flex-wrap: wrap;">
  <div class="np-step blue" style="padding: 0.3rem 0.5rem; font-size: 0.75rem;"><strong>Data<br/>governance</strong></div>
  <div class="np-arrow" style="font-size: 0.8rem;">→</div>
  <div class="np-step orange" style="padding: 0.3rem 0.5rem; font-size: 0.75rem;"><strong>Model-<br/>ontwikkeling</strong></div>
  <div class="np-arrow" style="font-size: 0.8rem;">→</div>
  <div class="np-step green" style="padding: 0.3rem 0.5rem; font-size: 0.75rem;"><strong>Uitrol</strong></div>
  <div class="np-arrow" style="font-size: 0.8rem;">→</div>
  <div class="np-step blue" style="padding: 0.3rem 0.5rem; font-size: 0.75rem;"><strong>Monitoring</strong></div>
</div>

**EU AI Act — onderwijs = hoog risico**
- Menselijk toezicht verplicht (Art. 14)
- Conformiteitsbeoordeling vóór deployment
- Registratie in algoritmeregister

</div>
<div style="display: flex; flex-direction: column; gap: 0.6rem;">
  <div class="np-card accent-blue">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.3rem;">
      <span class="np-badge blue">CEDA repo</span>
      <span class="np-badge ghost" style="background: #E8EDFF; color: var(--np-blue); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">Uitnodigingsregel</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.25rem 0 0;">
      ML-model: welke studenten verdienen extra aandacht? Ontwikkeld samen met instellingen via de Data Coalitie.
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      <a href="https://github.com/cedanl/Uitnodigingsregel" style="color: var(--np-blue);">github.com/cedanl/Uitnodigingsregel</a>
    </p>
  </div>
  <div class="np-card accent-orange">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.3rem;">
      <span class="np-badge orange">CEDA repo</span>
      <span class="np-badge ghost" style="background: #FEF0E8; color: var(--np-orange); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">uitnodigingsregel-prepare</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.25rem 0 0;">
      Data-preparatie pipeline voor de Uitnodigingsregel — brondata klaarmaken voor het model.
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      <a href="https://github.com/cedanl" style="color: var(--np-blue);">github.com/cedanl</a>
    </p>
  </div>
</div>
</div>

</div>

---

<!-- ML — VRAAG -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 0 3rem;">
  <p class="eyebrow">Vraag voor jullie</p>
  <h1 style="font-size: 2.4rem; line-height: 1.2; max-width: 700px; margin-bottom: 1.2rem;">
    Doet jullie instelling al aan <span style="color: var(--np-green);">machine learning</span>?
  </h1>
  <div class="np-grid-3" style="max-width: 780px; text-align: left; gap: 0.7rem;">
    <div class="np-card accent-blue" style="font-size: 0.82rem;">
      <strong>Voorspellen</strong>
      <p class="muted" style="font-size: 0.78rem; margin: 0.3rem 0 0;">Uitval, doorstroom of instroomprognoses</p>
    </div>
    <div class="np-card accent-orange" style="font-size: 0.82rem;">
      <strong>Signaleren</strong>
      <p class="muted" style="font-size: 0.78rem; margin: 0.3rem 0 0;">Studenten die extra aandacht verdienen</p>
    </div>
    <div class="np-card accent-green" style="font-size: 0.82rem;">
      <strong>Nog niet</strong>
      <p class="muted" style="font-size: 0.78rem; margin: 0.3rem 0 0;">Maar goede data + simpel model verslaat altijd een spreadsheet</p>
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
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">Inzicht op het juiste niveau, voor de juiste persoon</p>
  </div>
</div>

---

<!-- DASHBOARD — versie A: doelgroepen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide10.PNG);"></div>

<div class="fill">

# Dashboard — Versie A

<p class="np-subtitle">Voor wie maak je dashboards?</p>

<div class="np-grid-3" style="margin-top: 0.6rem; align-items: stretch; gap: 0.8rem;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Bestuur</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Strategisch</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Instellingsbrede KPI's, sectorale benchmark, meerjarige trends. Beslissingen over beleid en koers.
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

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Goed dashboard = juiste data, juiste persoon, juist moment — <strong>niet meer, niet minder</strong>.
</div>

</div>

---

<!-- DASHBOARD — versie B: tabellen vs trendanalyses (alternatief) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide11.PNG);"></div>

<div class="fill">

# Dashboard — Versie B

<p class="np-subtitle">Van statische tabel naar dynamische trendanalyse</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start; gap: 1rem;">
<div>
  <div class="np-card accent-blue" style="margin-bottom: 0.7rem;">
    <span class="np-badge blue">Fase 1</span>
    <h3 style="margin-top: 0.4rem;">Tabellen & exports</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Starre standaardrapportages, handmatige Excel-exports, &gt;80% tijd besteed aan data-ontsluiting. Herkenbaar?
    </p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Fase 2</span>
    <h3 style="margin-top: 0.4rem;">Interactieve dashboards</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Drill-down, filters, live data. Vergelijken over jaren, opleidingen, regio's.
    </p>
  </div>
</div>
<div>
  <div class="np-card accent-green">
    <span class="np-badge green">Fase 3</span>
    <h3 style="margin-top: 0.4rem;">Trendanalyse &amp; prognose</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.55;">
      Descriptive → diagnostic → predictive. Wat gaat er <em>gebeuren</em>, niet alleen wat <em>is</em> er gebeurd.
    </p>
  </div>
  <div class="np-card accent-blue" style="margin-top: 0.7rem; background: #F0F4FF; border-top-color: var(--np-blue);">
    <p class="eyebrow" style="font-size: 0.72rem; margin-bottom: 0.3rem;">Vraag voor jullie</p>
    <p style="font-size: 0.85rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0;">
      <strong>Voor wie</strong> zijn jullie dashboards: bestuur, bedrijfsvoering of onderwijs? En zijn het tabellen of ook trendanalyses?
    </p>
  </div>
</div>
</div>

</div>

---

<!-- SECTIE: LAAG 5 — AGENTIC (Slide14.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Laag 5</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Agentic / AI</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 1.1rem; margin-top: 0.5rem;">Data democratie als eindbestemming</p>
  </div>
</div>

---

<!-- DATA DEMOCRATIE — inhoud + tools (Data Coalitie) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide12.PNG);"></div>

<div class="fill" style="padding: 1.4rem 2.5rem;">

# Data democratie

<p class="np-subtitle">AI maakt data toegankelijk voor iedereen — niet alleen data-experts</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start; gap: 1rem;">
<div style="font-size: 0.88rem; line-height: 1.75;">

**Het einddoel van alle lagen**

Data moet werken voor mensen. Niet andersom.

- Docent stelt vraag → AI haalt antwoord uit data
- Student ontdekt mogelijkheden via AI-gesprek
- Bestuurder vraagt trend op zonder dashboard te openen

**Van advies naar actie**

Zonder de analytics lagen is de agent dom. Dankzij alle onderliggende lagen leveren agentic tools pas echt waarde op.

</div>
<div style="display: flex; flex-direction: column; gap: 0.65rem;">
  <div class="np-card accent-blue">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.3rem; flex-wrap: wrap;">
      <span class="np-badge blue">CEDA tool</span>
      <span class="np-badge ghost" style="background: #E8EDFF; color: var(--np-blue); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">samenwijzer</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.25rem 0 0;">
      AI-assistent die studenten begeleidt bij opleidingskeuze — profiel × arbeidsmarktdata. Samen met instellingen gebouwd via de Data Coalitie.
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      <a href="https://github.com/cedanl/samenwijzer" style="color: var(--np-blue);">github.com/cedanl/samenwijzer</a>
    </p>
  </div>
  <div class="np-card accent-orange">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.3rem; flex-wrap: wrap;">
      <span class="np-badge orange">CEDA tool</span>
      <span class="np-badge ghost" style="background: #FEF0E8; color: var(--np-orange); font-size: 0.72rem;">Data Coalitie</span>
    </div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">SkillsRadar</h3>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.25rem 0 0;">
      Radar die arbeidsmarktvaardigheden koppelt aan mbo-opleidingen per regio. Live demo volgt →
    </p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      <a href="https://github.com/cedanl/SkillsRadar" style="color: var(--np-blue);">github.com/cedanl/SkillsRadar</a>
    </p>
  </div>
</div>
</div>

</div>

---

<!-- SKILLSRADAR LIVE — scrollbare iframe -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<style scoped>
.slidev-layout { overflow: hidden; }
.only-html { display: block; }
.only-print { display: none; }
@media print {
  .only-html { display: none !important; }
  .only-print { display: block !important; }
}
</style>

<div class="fill" style="padding: 0.8rem 2rem 0.5rem;">

<div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
  <h1 style="font-size: 1.7rem; margin: 0;">SkillsRadar — live</h1>
  <span style="font-size: 0.82rem; color: var(--np-mid-gray);">Scroll binnen het venster voor meer vaardigheden ↕</span>
</div>

<div class="only-html" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.15); height: 420px;">
  <iframe
    src="https://ceda-skillsradar.fly.dev/radar?opleiding=5&regio=NL"
    width="100%"
    height="420"
    frameborder="0"
    scrolling="yes"
    style="border-radius: 10px; display: block; overflow: auto;">
  </iframe>
</div>

<div class="only-print" style="display: flex; justify-content: center;">
  <img src="/shots/skillsradar.png" style="max-height: 400px; width: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

<p style="font-size: 0.76rem; color: var(--np-mid-gray); margin-top: 0.4rem; text-align: right;">
  <a href="https://ceda-skillsradar.fly.dev" style="color: var(--np-blue);">ceda-skillsradar.fly.dev</a>
  &nbsp;·&nbsp;
  <a href="https://github.com/cedanl/SkillsRadar" style="color: var(--np-blue);">github.com/cedanl/SkillsRadar</a>
</p>

</div>

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
