---
theme: default
title: De simplify-ceda skill
info: Wat de simplify-ceda skill doet en hoe je hem gebruikt.
author: CEDA - Centre of Educational Data Analytics
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---

<!-- De huisstijl komt uit style.css in de projectroot; die wordt automatisch
     door Slidev geladen. -->

<!-- TITELSLIDE (Slide1.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <p class="eyebrow">Claude Code skill</p>
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">simplify-ceda</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 700px; line-height: 1.5; margin-bottom: 1rem;">
    Automatische code review en opschoning tegen de CEDA-standaarden
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

<!--
Welkom. Deze presentatie gaat over de simplify-ceda skill: wat hij doet,
hoe hij intern werkt, en vooral hoe je hem zelf inzet bij dagelijks werk
in de cedanl repos.
-->

---

<!-- AGENDA (Slide2.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Wat gaan we bespreken</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.4rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Wat is simplify-ceda?</strong><br/><span class="muted" style="font-size: 0.82rem;">Het probleem en de oplossing</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Hoe werkt het van binnen?</strong><br/><span class="muted" style="font-size: 0.82rem;">Drie fases, drie review-agents</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Hoe gebruik je de skill?</strong><br/><span class="muted" style="font-size: 0.82rem;">In de praktijk, stap voor stap</span></div>
    </div>
  </div>
</div>

---

<!-- HOOFDSTUKDIVIDER (Slide14.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Wat is simplify-ceda?</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Een review-assistent die meekijkt nadat je code schrijft</p>
  </div>
</div>

---

<!-- CONTENTSLIDE — probleem + accentkaart (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Het probleem

<p class="np-subtitle">Goede code schrijf je niet in een keer perfect.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- Je herschrijft per ongeluk iets dat **al bestaat** in `R/` of `src/`
- Base R waar **tidyverse** leesbaarder was
- Comments die het *wat* uitleggen in plaats van het *waarom*
- Diep geneste logica, ontbrekende type hints, trage loops

</div>
<div>
  <div class="np-card accent-orange">
    <h3>Kernidee</h3>
    <p style="font-size: 1rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Laat een review-skill je <strong>wijzigingen</strong> nalopen tegen de CEDA-standaarden en de problemen meteen oplossen.
    </p>
  </div>
</div>
</div>

</div>

<!--
De skill kijkt alleen naar wat je veranderd hebt (de git diff), niet naar de
hele codebase. Dat houdt de review snel en gericht.
-->

---

<!-- DRIE KAARTEN — de drie dimensies (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Drie review-agents, parallel

<p class="np-subtitle">Elke agent krijgt dezelfde diff, maar kijkt door een andere bril.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Agent 1</span>
    <h3 style="margin-top: 0.5rem;">Hergebruik</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Bestaat dit al? Dubbele functies, inline logica die een helper kon zijn, herbouwde tidyverse of Polars.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Agent 2</span>
    <h3 style="margin-top: 0.5rem;">Kwaliteit</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">CEDA-stijl: <code>&lt;-</code> en <code>|&gt;</code>, verb-namen, guard clauses, type hints, docstrings, naamgeving.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Agent 3</span>
    <h3 style="margin-top: 0.5rem;">Efficiëntie</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Dubbel werk, gemiste parallelisme, trage loops, onnodige existence-checks, geheugenlekken.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Drie perspectieven <strong>tegelijk</strong> betekent een complete review zonder dat het langer duurt.
</div>

</div>

---

<!-- HOOFDSTUKDIVIDER (Slide15.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Hoe werkt het van binnen?</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Van diff tot opgeschoonde code in drie fases</p>
  </div>
</div>

---

<!-- PIPELINE / PROCES (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# De drie fases

<p class="np-subtitle">Wat er gebeurt zodra je de skill aanroept.</p>

<div class="np-pipeline" style="margin-top: 1.5rem;">
  <div class="np-step blue" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.95rem;">1. Identify</strong>
    <small>git diff bepalen, taal detecteren (R / Python), data-mappen overslaan</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.95rem;">2. Review</strong>
    <small>drie agents parallel op dezelfde diff: hergebruik, kwaliteit, efficiëntie</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 210px;">
    <strong style="font-size: 0.95rem;">3. Fix</strong>
    <small>bevindingen samenvoegen, fixen, formatter draaien, samenvatten</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Alleen de diff, geen data-bestanden</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>R en Python</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Fixt direct in de code</div>
</div>

</div>

<!--
Belangrijk detail: de agents krijgen de volledige diff in hun prompt en mogen
NIET zelf het bestandssysteem verkennen. Zo lezen ze nooit per ongeluk grote
datasets in data/ of Output/ in, wat de review zou laten vastlopen.
-->

---

<!-- TWEE KOLOMMEN — R vs Python checks (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Taalspecifieke checks

<p class="np-subtitle">De skill weet of je R of Python schrijft en past de regels aan.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">R</span>
    <h3 style="margin-top: 0.4rem;">CEDA R-stijl</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.6;">
      <code>&lt;-</code> ipv <code>=</code> &middot; base pipe <code>|&gt;</code> ipv <code>%&gt;%</code> &middot; <code>::</code> namespacing &middot; <code>rlang::abort()</code> en <code>cli::cli_alert_*()</code> &middot; <code>##</code> comments &middot; geen <code>library()</code> in <code>R/</code>
    </p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Python</span>
    <h3 style="margin-top: 0.4rem;">CEDA Python-stijl</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.6;">
      Type hints &middot; Google-style docstrings &middot; <code>pathlib.Path</code> ipv <code>os.path</code> &middot; Polars boven Pandas &middot; <code>X | None</code> en <code>list[X]</code> &middot; geen kale <code>except</code>
    </p>
  </div>
</div>

</div>

---

<!-- HOOFDSTUKDIVIDER (Slide13.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Hoe gebruik je de skill?</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Eenmalig installeren, daarna gewoon aanroepen</p>
  </div>
</div>

---

<!-- CODE DEMO — installatie + aanroep (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Aan de slag

<p class="np-subtitle">Eenmalig de plugin installeren, daarna de skill aanroepen.</p>

```bash {1-2|4-5|all}
# Eenmalig per machine: de onderliggende plugin
claude plugin install code-simplifier@claude-plugins-official

# Daarna, na het schrijven of wijzigen van code:
/simplify-ceda
```

<p class="muted" style="font-size: 0.82rem; margin-top: 0.6rem;">
  De skill pakt automatisch je <code>git diff</code> op. Geen argumenten nodig.
</p>

</div>

<!--
In jouw eigen setup draait /simplify-ceda zelfs automatisch na elke R- of
Python-edit, dankzij de regel in je globale CLAUDE.md. Maar handmatig
aanroepen kan altijd.
-->

---

<!-- CONTENTSLIDE — wanneer + resultaat (Slide4.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Wanneer en wat je terugkrijgt

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
<div style="font-size: 0.92rem; line-height: 1.7;">

**Wanneer aanroepen**
- Na het schrijven van een nieuwe functie
- Na het wijzigen van bestaande code
- Vlak voordat je commit

</div>
<div style="font-size: 0.92rem; line-height: 1.7;">

**Wat je terugkrijgt**
- Concrete fixes, direct in de code
- Formatter erover (`air` of `ruff`)
- Korte samenvatting van wat er veranderd is

</div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Is de code al schoon? Dan zegt de skill dat ook gewoon: <strong>niets te doen</strong>.
</div>

</div>

---

<!-- AFRONDING — formatter stap (Slide5.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide5.PNG);"></div>

<div class="fill">

# De laatste stap: formatteren

<p class="np-subtitle">Na het fixen draait de skill automatisch de juiste formatter.</p>

```bash
# R
air format .

# Python
uv run ruff format .
uv run ruff check --fix .
```

</div>

---

<!-- CITAAT / HIGHLIGHT (Slide3.PNG) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.8rem; line-height: 1.5; color: var(--np-blue); max-width: 720px;">
    "Schrijf eerst dat het werkt. Laat simplify-ceda zorgen dat het ook netjes, herbruikbaar en snel is."
  </div>
  <div style="margin-top: 1.5rem; font-size: 0.9rem; color: var(--np-dark-gray);">&mdash; De CEDA-werkwijze</div>
</div>

</div>

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
