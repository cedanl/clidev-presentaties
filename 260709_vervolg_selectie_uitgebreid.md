---
theme: default
title: Evaluatietool Selectie — Het vervolg (uitgebreid)
info: Doorontwikkel- en opschalingsvoorstel voor de Evaluatietool Selectie, na het MVP. Voor het NKO-kernteam.
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
  <p class="eyebrow" style="margin-bottom: 0.6rem;">Doorontwikkeling &amp; opschaling — voorstel</p>
  <h1 style="font-size: 3rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Evaluatietool Selectie: het vervolg</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 720px; line-height: 1.5; margin-bottom: 1rem;">
    Van een werkend MVP naar een volwaardige evaluatietool — in werkpakketten, in co-creatie met de instellingen.
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics &middot; voor het NKO-kernteam
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

<!--
Uitgebreide versie: elk onderdeel meerdere slides. Er is ook een compacte variant
(260709_vervolg_selectie_compact.md) met één slide per deel.
Verhaallijn: vertrekpunt = het Handboek Selectie (samenhang selectie ↔ opleiding);
MVP-afronding + Deel 1 leveren dat idee op; Deel 2 en (mogelijk) Deel 3 bouwen daarop voort.
Financiering: twee activiteiten — software (drie werkpakketten van €50k) + adoptie (plafond €30k/jaar).
-->

---

<!-- AGENDA (Slide2.PNG) — tekst rechts -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Wat we doorlopen</p>
  <h1 style="font-size: 2rem !important; margin-bottom: 1rem;">Van vertrekpunt naar voorstel</h1>
  <div style="display: flex; flex-direction: column; gap: 0.68rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Het vertrekpunt</strong><br/><span class="muted" style="font-size: 0.8rem;">Het Handboek Selectie en de missing link</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Waar staan we</strong><br/><span class="muted" style="font-size: 0.8rem;">MVP afgerond — en meer dan dat</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>De evaluatietool in drie delen</strong><br/><span class="muted" style="font-size: 0.8rem;">De inhoudelijke doorontwikkeling</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-dark-blue);">4</span>
      <div><strong>Fasering &amp; werkpakketten</strong><br/><span class="muted" style="font-size: 0.8rem;">Planning 2026–2027 + meerjarenlijn</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-mid-gray);">5</span>
      <div><strong>Financiering</strong><br/><span class="muted" style="font-size: 0.8rem;">Wat we vragen, en waarvoor</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">6</span>
      <div><strong>Randvoorwaarden &amp; licentie</strong><br/><span class="muted" style="font-size: 0.8rem;">Open source, EUPL, co-creatie</span></div>
    </div>
  </div>
</div>

---

<!-- DIVIDER — Vertrekpunt -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 0 · Vertrekpunt</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Waar staan we</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Van het Handboek Selectie naar een werkend MVP</p>
  </div>
</div>

---

<!-- Vertrekpunt: het Handboek Selectie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Vertrekpunt</p>

# Het Handboek Selectie als vertrekpunt

<p class="np-subtitle">Waar dit project op voortbouwt — en wat we ermee opleveren.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.88rem; line-height: 1.6;">

- Het <a href="https://www.onderwijskennis.nl/sites/onderwijskennis/files/media-files/UU_HANDBOEK_SELECT_DIGI_DEFFF%20%28002%29.pdf" target="_blank"><strong>Handboek Selectie Hoger Onderwijs</strong></a> (UU) — **holistisch** georiënteerd; bundelt de bredere kennis over het evalueren van selectie
- Meer specifieke opdrachtomschrijving voor **"Evaluatietool Selectie Hoger Onderwijs"**, incl. uitwerkingen van Dialogic en Yard
- Kernidee: evalueer de **samenhang tussen resultaten in de selectie en resultaten in de opleiding**

</div>
<div>
  <div class="np-card accent-orange">
    <h3>Wat we opleveren</h3>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.4rem 0 0;">
      De <strong>afronding van het MVP en het voorgestelde Werkpakket 1</strong> verwezenlijken dit idee in een gebruiksvriendelijke tool.
    </p>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.5rem 0 0;">
      Op basis van het Handboek Selectie zijn er <strong>meer mogelijkheden voor tooling</strong> om te ondersteunen bij de evaluatie. Werkpakketen 2 en 3 richten zich op de evaluatie binnen het selectieproces (2) en de weging van de verschillende onderdelen (3).
    </p>
  </div>
</div>
</div>

</div>

---

<!-- MVP afgerond + meer dan dat -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Vertrekpunt</p>

# Het MVP is af — en meer dan dat

<p class="np-subtitle">We beloofden vier modules en een mock-up. We leverden een werkende tool op echte data.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.65;">

- **Werkend dashboard** op echte instellingsdata — beloofd was een mock-up met synthetische data
- **Statistiek ingebouwd:** correlatie, logistische regressie én een **verschiltoets** (Mann-Whitney U / Kruskal-Wallis met effectgroottes en 95%-BI)
- **Automatisch PDF-rapport** met "wat valt op"-duiding
- **Gevalideerd** met **2 instellingen** — gebouwd én getoetst bij gebruikers

</div>
<div>
  <div class="np-card accent-green">
    <h3>Koppeling met 1CijferHO</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">
      De tool draait lokaal, is open source en koppelt selectiescores gestandaardiseerd aan 1CijferHO. Dat betekent: doelvariabelen (doorstroom, diploma) zónder dat de opleiding zelf resultaten hoeft aan te leveren.
    </p>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.5rem 0 0;">
      Om de validatie te verbreden bieden we <strong>Universiteit Maastricht (Biomedische wetenschappen)</strong> aan om als 3e instelling aan te sluiten.
    </p>
  </div>
</div>
</div>

</div>

---

<!-- De laatste hand aan het MVP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Vertrekpunt · afronding</p>

# De laatste hand aan het MVP

<p class="np-subtitle">Enkele punten ronden we af — de basis onder alle vervolgstappen.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.7;">

- **Gebruiksvriendelijkheid:** de eerste tabbladen toegankelijker maken — directe feedback uit de feedbacksessie
- **Validatie:** de volledige workflow doorlopen met **2 instellingen / opleidingen**, op echte data
- **Extra uitsplitsingen** op basis van 1CijferHO in het dashboard

</div>
<div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Derde instelling</span>
    <h3 style="margin-top: 0.5rem;">Universiteit Maastricht</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">
      We doen <strong>Biomedische wetenschappen</strong> een aanbod om als derde instelling / opleiding de workflow te doorlopen. Zo verbreden we de validatie van 2 naar 3 en toetsen we de tool op een nieuwe selectie-opzet.
    </p>
  </div>
</div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Doordat het dashboard écht werkt, kunnen we <strong>nu pas goed met gebruikers valideren</strong> — en die feedback direct verwerken.
</div>

</div>

---

<!-- DIVIDER — Doorontwikkeling -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 1 · Doorontwikkeling</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">De evaluatietool in drie delen</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Een natuurlijke opbouw om het vervolg aan op te hangen</p>
  </div>
</div>

---

<!-- Overzicht evaluatietool in 3 delen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Doorontwikkeling</p>

# De evaluatietool groeit in drie delen

<p class="np-subtitle">Eerst de evaluatietool afmaken, dan de selectie zelf onder de loep, dan verkennen.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Deel 1</span>
    <h3 style="margin-top: 0.5rem;">Volwaardige evaluatietool</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">Van MVP naar de tool zoals oorspronkelijk omschreven: vakresultaten, meer analyses, rapport en Handboek-verwijzingen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Deel 2</span>
    <h3 style="margin-top: 0.5rem;">Interne evaluatie selectie</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">Niet alleen "werkt de selectie voor studiesucces", maar ook: hoe verloopt de selectie zélf? Uitsplitsingen over alle kandidaten.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Deel 3 · scope aanpasbaar</span>
    <h3 style="margin-top: 0.5rem;">Voorstel: Weging</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">Weging per item, instrument en criterium doorgeven en de gevolgen van andere wegingen simuleren.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Deel 1 levert het vertrekpunt-idee op; <strong>Deel 2 en Deel 3 zijn extra daarbovenop</strong> — scope bepalen we samen met het NKO.
</div>

</div>

---

<!-- Deel 1a — preparatie & robuustheid -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 1 · van MVP naar evaluatietool</p>

# Bredere preparatie en robuustere tool

<p class="np-subtitle">Twee fundamenten: de tool moet méér selectie-opzetten aankunnen en betrouwbaarder draaien.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.7;">

- **Preparatie breder maken:** naast de huidige flow (selectie × 1CijferHO) ook een flow voor **alléén instrumenten** — op basis van overleg met Sanne Scheurs
- **Robuuster maken:** goed omgaan met **missende waardes**, aanvullende controle op de data en verbetering van de code

</div>
<div>
  <div class="np-card accent-blue">
    <h3>Kick-off eind november</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.4rem 0 0;">
      We starten deel 1 met een <strong>opschalingsworkshop</strong>: het MVP delen, brede interesse wekken en de actieve groep vormen. Deel 1 bevat ook extra technisch testen en valideren.
    </p>
  </div>
</div>
</div>

</div>

---

<!-- Deel 1b — vakresultaten uit de opleiding -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 1 · van MVP naar evaluatietool</p>

# Vakresultaten uit de opleiding

<p class="np-subtitle">Hiermee komen de eisen uit de oorspronkelijke opdracht in beeld die bewust buiten het MVP bleven.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.7;">

- **Vakresultaten toevoegen** — nieuwe preparatie, nieuwe doelvariabelen
- **Nieuwe typen doelvariabelen:** naast binair ook **continu en ordinaal**
- **Nieuwe analyses:** multipele lineaire regressie, correlatie met uitkomstvariabelen, frequentietabel

</div>
<div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Terugkerend thema</span>
    <h3 style="margin-top: 0.5rem;">Opleidingscijfers</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.4rem 0 0;">
      <strong>Meerdere requirements zijn gekoppeld aan opleidingscijfers</strong> (multipele lineaire regressie, 1-cijfer-per-regel). Het MVP werkte bewust zónder — met deze stap komen ze binnen bereik.
    </p>
  </div>
</div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Apart spoor: <strong>cijfers middelbare school</strong> op basis van 1CijferHO — zowel school- als centraal examen.
</div>

</div>

---

<!-- Deel 1c — rapport, cohorten, handboek -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 1 · van MVP naar evaluatietool</p>

# Rapport, cohorten en het Handboek

<p class="np-subtitle">Vier afrondende stappen om de tool "compleet" te maken.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <h3>Rapport</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">Goed exporteerbaar maken en instelbaar. Optioneel (en alleen geaggregeerd) delen met CEDA. <strong>Out of scope:</strong> interactie via chat (AI Hub).</p>
  </div>
  <div class="np-card accent-blue">
    <h3>Verwijzing Handboek Selectie</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">In de tool verwijzen naar het Handboek voor toelichting en beleidskeuzes bij de uitkomsten.</p>
  </div>
  <div class="np-card accent-orange">
    <h3>Cohorten</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">Onderscheid tussen selectie per jaar en cohorten — meerdere jaargangen naast elkaar kunnen vergelijken.</p>
  </div>
  <div class="np-card accent-yellow">
    <h3>Template selectiedata</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">Alvast experimenteren met een rijkere template — de brug naar deel 2 (interne evaluatie).</p>
  </div>
</div>

</div>

---

<!-- Deel 2 — interne evaluatie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 2 · interne evaluatie selectie</p>

# De selectie zélf onder de loep

<p class="np-subtitle">Van "voorspelt de selectie studiesucces?" naar "hoe verloopt de selectie voor álle kandidaten?"</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.7;">

- **Uitsplitsingsvariabelen** voor álle selectie-studenten: extra data toevoegen via koppel-ID of in het selectiedatabestand — de template uitbreiden en verbeteren
- **Meer variabeletypen** in de configuratie van selectiedata (tenminste categorisch)
- Een **"interne" selectie-evaluatie** als tweede deel van de evaluatietool

</div>
<div>
  <div class="np-card accent-green">
    <span class="np-badge green">Optioneel</span>
    <h3 style="margin-top: 0.5rem;">Itemanalyses</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">
      Instellingen gebruiken nu al deels toets-software. De vraag is of er behoefte is aan itemanalyses <strong>dáárbuiten</strong> — bovenop wat die software levert. Dit verkennen we met de actieve groep.
    </p>
  </div>
</div>
</div>

</div>

---

<!-- Deel 3 — weging -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Deel 3 · scope aanpasbaar</p>

# Voorstel: Weging simuleren

<p class="np-subtitle">Een verkennend derde deel — de scope bepalen we samen met het NKO.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.7;">

- Mogelijkheid om **weging door te geven** per **item, instrument en criterium**
- De **gevolgen van andere wegingen simuleren** — wat gebeurt er met de selectie als je anders weegt?
- Onderbouwd door onderzoek: **Pareto-optimalisatie** versus fixed-weight selectiesystemen

</div>
<div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Scope aanpasbaar</span>
    <h3 style="margin-top: 0.5rem;">Vorm volgt de feedback</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">
      Op basis van feedback van instellingen en opleidingen tijdens de ontwikkeling van deel 1 en 2 kan deel 3 anders worden vormgegeven. Uiteraard in afstemming met het NKO.
    </p>
  </div>
</div>
</div>

</div>

---

<!-- DIVIDER — planning -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2 · Planning</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Fasering &amp; werkpakketten</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Drie werkpakketten en een meerjarige adoptie- en borgingslijn</p>
  </div>
</div>

---

<!-- Werkpakketten -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Planning · november 2026 – december 2027</p>

# Drie werkpakketten

<p class="np-subtitle">Elk werkpakket levert een deel op — steeds in co-creatie met een actieve groep van 3 à 4 instellingen.</p>

<div class="np-grid-3" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">WP1 · nov '26 – feb '27</span>
    <h3 style="margin-top: 0.5rem;">Resultaten + kick-off</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Kick-off opschalingsworkshop, verbetering MVP en integratie van <strong>vakresultaten</strong> uit opleiding en vooropleidingscijfers.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">WP2 · mrt – jun '27</span>
    <h3 style="margin-top: 0.5rem;">Fairnes binnen selectie</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Focus op data die bekend is van alle deelnemers aan de selectie met als resultaat inzicht in de <strong>diversiteit en fairness</strong> van de selectiepprocedure.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">WP3 · sep – dec '27</span>
    <h3 style="margin-top: 0.5rem;">Weging binnen selectie</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0.3rem 0 0; line-height: 1.5;">Weging van diverse onderdelen evalueren en d.m.v. simulatie optimale weging adviseren. <strong>Scope aanpasbaar</strong> in afstemming met het NKO</p>
  </div>
</div>


</div>

---

<!-- Support & kennisdeling -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Planning · doorlopend</p>

# Adoptie: onboarding en kennisdeling

<p class="np-subtitle">Naast de werkpakketten (software) een doorlopende adoptie-lijn om gebruik en overdracht te borgen.</p>

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
<div style="font-size: 0.92rem; line-height: 1.8;">

- **Onboarding** van nieuwe instellingen en opleidingen
- **Ondersteuning** bij het gebruik van de tool
- **Updates** en onderhoud van de code
- **Kennisdeling** — workshops, webinars, ondersteuningsmateriaal
- **Overdracht** richting duurzame borging

</div>
<div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Adoptie</span>
    <h3 style="margin-top: 0.5rem;">Plafond €30k per jaar</h3>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.4rem 0 0;">
      Voor 2027, 2028, 2029 en 2030 geldt een plafond van <strong>€30.000 per jaar</strong>, op basis van de daadwerkelijk gemaakte kosten.
    </p>
  </div>
</div>
</div>

</div>

---

<!-- Meerjarenlijn 2027-2030 -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Planning · meerjarenlijn</p>

# 2027 – 2030: adoptie en borgen

<p class="np-subtitle">Na de werkpakketten verschuift de nadruk van bouwen naar verspreiden, evalueren en borgen.</p>

<div class="np-grid-4" style="margin-top: 0.4rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">2027</span>
    <p style="font-size: 0.72rem; color: var(--np-dark-gray); line-height: 1.45; margin: 0.4rem 0 0;">
      ≥1 workshop + 1 webinar (vóór en na de zomer). Start <strong>website met ondersteuningsmateriaal</strong> — gebruik én randvoorwaarden (databronnen, netwerken, compliance). Presentaties bij overleggen en conferenties.
    </p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">2028</span>
    <p style="font-size: 0.72rem; color: var(--np-dark-gray); line-height: 1.45; margin: 0.4rem 0 0;">
      ≥1 workshop + 1 webinar. <strong>Evaluatie met de betrokken instellingen</strong>. Website afronden. Presentaties + ad-hoc ondersteuning. Start verkenning duurzame borging.
    </p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">2029</span>
    <p style="font-size: 0.72rem; color: var(--np-dark-gray); line-height: 1.45; margin: 0.4rem 0 0;">
      Inventarisatie van instellingen / opleidingen die de tool gebruiken. Ad-hoc ondersteuning. Verkenning afronden en <strong>besluit duurzame borging</strong>.
    </p>
  </div>
  <div class="np-card accent-yellow">
    <span class="np-badge yellow">2030</span>
    <p style="font-size: 0.72rem; color: var(--np-dark-gray); line-height: 1.45; margin: 0.4rem 0 0;">
      Ad-hoc ondersteuning. <strong>Overdracht</strong> conform het besluit over duurzame borging. Afronding vanuit Npuls.
    </p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Alle presentaties, borging en overdracht gebeuren <strong>in afstemming met het NKO</strong>.
</div>

</div>

---

<!-- DIVIDER — financiering -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3 · Financiering</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Wat we vragen</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Software in werkpakketten en een meerjarig adoptie-plafond</p>
  </div>
</div>

---

<!-- Begroting -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Financiering</p>

# De begroting op een rij

<p class="np-subtitle">Software met een vaste prijs, adoptie op basis van werkelijke kosten.</p>

<div class="np-grid-2" style="margin-top: 0.4rem; align-items: start;">
<div>

| Onderdeel | Periode | Bedrag |
|-----------|---------|-------:|
| **WP1** — Deel 1 + kick-off | nov '26 – feb '27 | € 50.000 |
| **WP2** — Deel 2 interne evaluatie | mrt – jun '27 | € 50.000 |
| **WP3** — Deel 3 weging | sep – dec '27 | € 50.000 |
| **Werkpakketten samen** | 2026 – 2027 | **€ 150.000** |

</div>
<div>
  <div class="np-card accent-orange">
    <h3>Twee typen activiteiten</h3>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.4rem 0 0;">
      <strong>Software</strong> — de werkpakketten, vaste prijs €50k, elk een concreet deel als resultaat.
    </p>
    <p style="font-size: 0.88rem; color: var(--np-dark-gray); line-height: 1.55; margin: 0.5rem 0 0;">
      <strong>Adoptie</strong> — plafond €30k/jaar (2027–2030), alleen benut naar daadwerkelijk gemaakte kosten.
    </p>
  </div>
</div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Gevraagd: <strong>€150k</strong> software (werkpakketten, 2026–2027) + <strong>adoptie</strong> tot <strong>€30k/jaar</strong> (2027–2030) o.b.v. werkelijke kosten.
</div>

</div>

---

<!-- DIVIDER — randvoorwaarden -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 4 · Randvoorwaarden</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Hoe we blijven werken</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Open source, co-creatie en een heldere licentie</p>
  </div>
</div>

---

<!-- Randvoorwaarden + licentie -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Randvoorwaarden</p>

# Open source, lokaal en in co-creatie

<p class="np-subtitle">De uitgangspunten van het MVP blijven staan — met een expliciete licentiekeuze.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.9rem; line-height: 1.75;">

- **Open source, modulair en gedocumenteerd** — instellingen kunnen losse onderdelen hergebruiken
- **Data blijft lokaal** bij de instelling; geen hosting of verwerkersovereenkomst nodig
- **Co-creatie:** elke fase een actieve groep van 3 à 4 instellingen / opleidingen
- **In afstemming met het NKO** voor scope, presentaties en borging

</div>
<div>
  <div class="np-card accent-green">
    <span class="np-badge green">Licentie</span>
    <h3 style="margin-top: 0.5rem;">EUPL 1.2 & CC-BY-SA 4.0</h3>
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">
      Adoptiematerialen worden beschikbaar gesteeld onder de binnen Npuls gebruikte <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA 4.0-licentie</a>. Delen mag, mits met bronvermelding en onder dezelfde voorwaarden.</p> 
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">Voor de code wordt de Europese software-variant van gebruikt: De <a href="https://eupl.eu/1.2/en/" target="_blank">European Union Public Licence 1.2</a>.</p> 
    <p style="font-size: 0.86rem; color: var(--np-dark-gray); line-height: 1.5; margin: 0.4rem 0 0;">Onderdeel van deze licentie zijn <strong>disclaimers</strong> op gebied van <strong>garanties</strong> (Artikel 7) en <strong>aansprakelijkheid</strong> (Artikel 8).
    </p>
  </div>
</div>
</div>

</div>

---

<!-- Vervolgstappen -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">Tot slot</p>

# De vervolgstappen

<p class="np-subtitle">Van het afronden van het MVP naar de start van werkpakket 1.</p>

<div style="display: flex; flex-direction: column; gap: 0.7rem; margin-top: 0.6rem;">
  <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
    <span class="np-num">1</span>
    <div><strong style="color: var(--np-blue);">MVP afronden (zomer 2026)</strong><br/><span class="muted" style="font-size: 0.84rem;">Validatie met 2 instellingen; Maastricht — Biomedische wetenschappen als 3e.</span></div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
    <span class="np-num" style="background: var(--np-orange);">2</span>
    <div><strong style="color: var(--np-blue);">Afspraken SURF &amp; NKO</strong><br/><span class="muted" style="font-size: 0.84rem;">Afspraken over de doorontwikkeling en de werkpakketten-financiering.</span></div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
    <span class="np-num" style="background: var(--np-green);">3</span>
    <div><strong style="color: var(--np-blue);">Actieve groep werven</strong><br/><span class="muted" style="font-size: 0.84rem;">3 à 4 instellingen / opleidingen voor de co-creatie in WP1.</span></div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 0.9rem;">
    <span class="np-num" style="background: var(--np-dark-blue);">4</span>
    <div><strong style="color: var(--np-blue);">Kick-off opschalingsworkshop (nov 2026)</strong><br/><span class="muted" style="font-size: 0.84rem;">MVP delen, brede interesse wekken en werkpakket 1 starten.</span></div>
  </div>
</div>

</div>

---

<!-- AFSLUITSLIDE (Slide17.PNG) — geen tekst -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
