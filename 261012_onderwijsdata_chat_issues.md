---
theme: default
title: onderwijsdata-chat - potentiële issues
info: Losse observaties uit de repo-analyse van 12 oktober 2026, gegroepeerd als potentiële issues voor cedanl/onderwijsdata-chat.
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
  <h1 style="font-size: 3rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">onderwijsdata-chat: potentiële issues</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Losse observaties uit de repo-analyse, gegroepeerd en klaar om op te pakken
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Bijlage bij "Praat met je onderwijsdata" &middot; 12 oktober 2026</div>
</div>

---

<!-- OVERZICHT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Twaalf kandidaten in vijf groepen

<p class="np-subtitle">Gecontroleerd tegen alle 128 bestaande issues. Alleen #128 overlapt.</p>

<div class="np-table" style="font-size: 0.84rem; margin-top: 0.3rem;">

| Groep | Soort | Aantal |
|---|---|---|
| **A. Documentatie loopt achter** | <span class="np-badge blue">docs</span> | 2 |
| **B. Nagaan of het nog werkt** | <span class="np-badge yellow">verifiëren</span> | 2 |
| **C. Gaten in de controles** | <span class="np-badge orange">fix</span> | 3 |
| **D. MCP-server** | <span class="np-badge green">feat</span> | 4 |
| **E. Architectuur** | <span class="np-badge pink">refactor / onderzoek</span> | 1 + comment op #128 |

</div>

<p class="muted" style="font-size: 0.8rem; margin-top: 0.6rem;">Elk kandidaat-issue heeft een titel, het waarom, en wanneer het af is.</p>

</div>

---

<!-- A. DOCS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">A &middot; Documentatie loopt achter</p>

# Docs zeggen iets anders dan de code

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">docs</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">docs(tools): run_analysis beschrijft de oude blocklist</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Waarom:</strong> <code>docs/tools.md</code> r. 407 zegt "Dit is geen sandbox" en noemt de regex-blocklist. Sinds #114 (gesloten 2 okt) draait <code>run_analysis</code> in een eigen proces zonder netwerk en schrijfrechten.</p>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Af als:</strong> tools.md en anti-hallucination-architecture.md beschrijven dezelfde sandbox.</p>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">docs</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">docs(readme): publieke pagina toont oudere README</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Waarom:</strong> de publieke GitHub-pagina noemde nog "eigen xlsx/csv-uploads"; de README op <code>main</code> niet meer. Raakt mogelijk #123 (publieke spiegel).</p>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Af als:</strong> spiegel en <code>main</code> tonen dezelfde README, of het verschil is verklaard.</p>
  </div>
</div>

</div>

---

<!-- B. VERIFIEREN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">B &middot; Nagaan of het nog werkt</p>

# Twee dingen die niemand recent bekeek

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">verifiëren</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Werkt upload van eigen bestanden nog?</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Waarom:</strong> #19 en #14 (uploads) zijn gesloten, maar uploads staan niet meer in de README en geen bestand op <code>main</code> heeft "upload" in de naam. Als het werkt, is het een tussenstap naar instellingsdata.</p>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Af als:</strong> getest en gedocumenteerd, of bewust verwijderd en zo vermeld.</p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">verifiëren</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Wat dekt <code>auth/</code>?</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Waarom:</strong> op <code>main</code> staat alleen <code>auth/oidc.py</code>: inloggen, geen rechten per tabel. Voor niet-open data is autorisatie per tabel of gevoeligheidsklasse nodig.</p>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Af als:</strong> korte notitie: wat er is, wat er mist voor stap 3 van spoor B.</p>
  </div>
</div>

</div>

---

<!-- C. CONTROLES -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">C &middot; Gaten in de controles</p>

# Wat grounding nu doorlaat

<p class="np-subtitle">Uit <code>docs/anti-hallucination-architecture.md</code>, zelf al als grens benoemd.</p>

<div class="np-grid-3" style="margin-top: 0.3rem; align-items: start;">
  <div class="np-card accent-orange" style="padding: 0.8rem 1rem;">
    <span class="np-badge orange">fix</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.95rem;">Kleine getallen en jaartallen</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.3rem 0 0;">Getallen onder vier cijfers en jaartallen worden niet getoetst. Juist percentages en kleine aantallen zijn vaak het antwoord.</p>
  </div>
  <div class="np-card accent-orange" style="padding: 0.8rem 1rem;">
    <span class="np-badge orange">fix</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.95rem;">Goed getal, verkeerde groep</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.3rem 0 0;">Een getal dat ergens in de data staat, telt als gedekt. Binden aan rij of groep zou dit vangen. Groeit met meer tabellen per vraag.</p>
  </div>
  <div class="np-card accent-orange" style="padding: 0.8rem 1rem;">
    <span class="np-badge orange">onderzoek</span>
    <h3 style="margin-top: 0.5rem; font-size: 0.95rem;">Interpretatie en causaliteit</h3>
    <p class="muted" style="font-size: 0.78rem; margin: 0.3rem 0 0;">Niet gecontroleerd. Eerst evals die dit meten, dan kiezen: controleren of expliciet labelen.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Wordt <strong>urgenter</strong> in MCP: daar is <code>check_answer</code> de enige controle die een externe client krijgt.
</div>

</div>

---

<!-- D. MCP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">D &middot; MCP-server</p>

# Vier issues voor een eerste MCP-server

<div class="np-table" style="font-size: 0.78rem; margin-top: 0.3rem;">

| Kandidaat-issue | Af als |
|---|---|
| **feat(mcp): MCP-server die de bestaande tools hergebruikt** | Server draait naast de app, zonder de app te wijzigen; werkt vanuit een standaard chatclient op CBS/DUO/RIO |
| **feat(mcp): `check_answer` als expliciete tool** | Grounding, selectie- en labelcontrole aan te roepen op een tekst plus de gebruikte <code>data_key</code>s |
| **feat(mcp): sessiestatus voor `data_key`** | Keys blijven geldig tussen aanroepen binnen één sessie; verlopen daarna |
| **feat(mcp): prompt, snippets en verheldering** | System prompt als MCP-prompt; snippet per resultaat (of als resource); <code>clarify_scope</code> via elicitation met fallback |

</div>

<p class="muted" style="font-size: 0.8rem; margin-top: 0.6rem;">Het eerste issue is de paraplu; de andere drie kunnen sub-issues zijn.</p>

</div>

---

<!-- E. ARCHITECTUUR -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">E &middot; Architectuur</p>

# Bron-adapter en #128

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-pink">
    <span class="np-badge pink">refactor</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">refactor(data): bron-adapter met vaste vorm</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Waarom:</strong> CBS, DUO en RIO hebben elk eigen tools. Een nieuwe bron kost nu een nieuwe set.</p>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Af als:</strong> CBS, DUO en RIO draaien via één interface (catalogus, selectieschema + compiler, loader, metadata per key) en een synthetische 1CijferHO-adapter werkt.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">comment</span>
    <h3 style="margin-top: 0.5rem; font-size: 1rem;">Aanvulling op #128 (Malloy)</h3>
    <p class="muted" style="font-size: 0.8rem; margin: 0.3rem 0 0;"><strong>Geen nieuw issue.</strong> Voeg de MCP-ontwerpvragen toe aan de go/no-go-notitie:</p>
    <ul style="font-size: 0.78rem; line-height: 1.5; margin: 0.3rem 0 0;">
      <li>Hoe werkt Malloy samen met gesloten selectie (ADR-006)?</li>
      <li>Kan een Malloy-model het contract dragen (rij-eenheid, gebruik, klasse, status)?</li>
      <li>Waar zit de controle als Malloy de MCP serveert?</li>
    </ul>
  </div>
</div>

</div>

---

<!-- VERVOLG -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Hoe verder

<div class="np-pipeline" style="margin-top: 1rem;">
  <div class="np-step blue" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.95rem;">Nu oppakken</strong>
    <small>A (docs) en B (verifiëren): klein, geen ontwerpkeuze nodig</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.95rem;">Na de teamsessie</strong>
    <small>D en E: hangen af van discussiepunten 1–3</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 220px;">
    <strong style="font-size: 0.95rem;">Doorlopend</strong>
    <small>C: via de eval-suite, met metingen vóór en na</small>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1.3rem;">
  Nog <strong>niets aangemaakt</strong> op GitHub. Eerst kiezen welke we willen.
</div>

</div>

---

<!-- VASTE AFSLUITSLIDE -->
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
