---
theme: default
title: De Selectie-Evaluatietool
info: Hoe evalueer je of je selectieprocedure werkt? Een dashboard dat het antwoord geeft.
author: CEDA - Centre of Educational Data Analytics
drawings:
  persist: false
  enabled: false
transition: slide-left
mdc: true
---



<!-- SLIDE 1: TITELSLIDE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide1.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 4rem; z-index: 1;">
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Bijeenkomst Selectie Evaluatietool Project</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    De selectie-evaluatietool: van selectiedata naar inzicht in studiesucces
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> · Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls · 16-06-2026</div>
</div>

<!--
Welkom iedereen.

Vandaag laten we jullie een tool zien die een vraag beantwoordt die bij veel opleidingen leeft: **werkt onze selectieprocedure eigenlijk?** Selecteren we de juiste studenten? En voorspellen de onderdelen die we inzetten ook echt iets over hoe het later gaat in de studie?

De selectie-evaluatietool geeft antwoord op die vragen. In deze presentatie laten we zien hoe de tool werkt, welke data je nodig hebt, en wat je ermee kunt doen. Geen code, geen technische details, maar gewoon: wat levert het je op?
-->

---

<!-- SLIDE 1b: DAGPROGRAMMA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div class="fill">


<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">

# Programma van vandaag

<p class="np-subtitle">Het verloop van de middag.</p>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-blue); min-width: 115px;">13:00 - 13:15</span>
    <div>Introductie<br/><span class="muted" style="font-size: 0.8rem;">Corneel</span></div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-blue); min-width: 115px;">13:15 - 14:00</span>
    <div>Bespreking Selectie<br/><span class="muted" style="font-size: 0.8rem;">Sanne Schreurs</span></div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-mid-gray); min-width: 115px;">14:00 - 14:10</span>
    <div class="muted">Pauze</div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-blue); min-width: 115px;">14:10 - 14:20</span>
    <div>Overzicht<br/><span class="muted" style="font-size: 0.8rem;">Corneel: wat is gedaan, wat gaan we nog doen?</span></div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-orange); min-width: 115px;">14:20 - 14:30</span>
    <div>1CijferHO-tool voor selectie-evaluatie<br/><span class="muted" style="font-size: 0.8rem;">Aslam</span></div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-orange); min-width: 115px;">14:30 - 15:00</span>
    <div>Configuratie en dashboard<br/><span class="muted" style="font-size: 0.8rem;">Aslam</span></div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-green); min-width: 115px;">15:00 - 15:30</span>
    <div>Dashboard testen in groepjes (live demo + post-its)<br/><span class="muted" style="font-size: 0.8rem;">Twee groepen: Nijmegen en Leiden</span></div>
  </div>
  <div style="display: flex; gap: 1rem; align-items: baseline;">
    <span style="font-weight: 700; color: var(--np-green); min-width: 115px;">15:30 - 16:00</span>
    <div>Brainstorm<br/><span class="muted" style="font-size: 0.8rem;">Groepen presenteren hun post-its</span></div>
  </div>

</div>

</div>

<!--
Voordat we inhoudelijk beginnen, eerst het programma van de middag, zodat iedereen weet wat we gaan doen.

We starten om 13:00 met een korte introductie door Corneel. Van kwart over een tot twee uur is de bespreking selectie door Sanne Schreurs. Om twee uur een korte pauze.

Na de pauze pakken wij het op. Van 14:10 tot 14:20 geeft Corneel een kort overzicht: wat is er gedaan, en wat gaan we nog doen? Van 14:20 tot 14:30 neemt Aslam de 1CijferHO-tool door. Van 14:30 tot 15:00 de configuratie en het dashboard. Van 15:00 tot 15:30 gaan jullie zelf in twee groepjes het dashboard testen, een groep Nijmegen en een groep Leiden. Dit is meteen het live-demo-onderdeel: je schrijft je bevindingen op post-its. En van 15:30 tot 16:00 presenteren de groepen hun post-its en brainstormen we samen verder.
-->
---


<!-- MAIN-DIVIDER: BESPREKING SELECTIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">13:15 - 14:00</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Selectieprocedures</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.6rem; max-width: 640px; margin-left: auto; margin-right: auto;">met Sanne Schreurs</p>
  </div>
</div>

<!--
Dit is het blok van Sanne Schreurs, van 13:15 tot 14:00.

Sanne presenteert en gaat in gesprek over hoe selectie in de praktijk werkt: hoe procedures worden opgezet, welke afwegingen daarbij spelen, en welke uitdagingen er zijn. Dit is bewust een ruime buffer. De tijd is van Sanne en de zaal; wij pakken daarna het stokje weer op met de tool.
-->

---

<!-- MAIN-DIVIDER: PAUZE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">14:00 - 14:10</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Pauze</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Tot zo</p>
  </div>
</div>

<!--
Korte pauze van tien minuten. Daarna pakken wij het op met het overzicht en de tool.
-->

---

<!-- MAIN-DIVIDER: OVERZICHT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">14:10 - 14:20</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Overzicht</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Wat is gedaan, wat gaan we nog doen?</p>
  </div>
</div>

<!--
Na de pauze geeft Corneel in tien minuten het overzicht: waar staan we in het project, wat is af, wat komt nog en wat valt bewust buiten de scope? Twee slides, daarna door naar de tool.
-->

---

<!-- SLIDE 1c: PROJECTFASERING / ROADMAP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:10 - 14:20</p>

# Waar staan we in het project?

<p class="np-subtitle">Een traject van tien weken, in co-creatie met de instellingen. We zitten nu in <strong>week 9-10</strong>.</p>

<div style="display: flex; gap: 0.7rem; margin-top: 0.7rem; align-items: stretch;">

  <div class="np-card" style="flex: 1; padding: 0.8rem; opacity: 0.65;">
    <p class="eyebrow" style="font-size: 0.7rem;">Week 1</p>
    <h3 style="font-size: 0.92rem; margin: 0.1rem 0 0.3rem;">Fundering</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0;">1CijferHO-module, handleiding en dummy data</p>
  </div>

  <div class="np-card" style="flex: 1; padding: 0.8rem; opacity: 0.65;">
    <p class="eyebrow" style="font-size: 0.7rem;">Week 2-5</p>
    <h3 style="font-size: 0.92rem; margin: 0.1rem 0 0.3rem;">Co-creatie</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0;">Validatie- en configuratiemodule, dummy data prepareren</p>
  </div>

  <div class="np-card accent-orange" style="flex: 1; padding: 0.8rem;">
    <p class="eyebrow" style="font-size: 0.7rem; color: var(--np-orange);">Week 6-9</p>
    <h3 style="font-size: 0.92rem; margin: 0.1rem 0 0.3rem;">Datavalidatie</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0;">Hands-on hulp, modules verbeterd op basis van feedback</p>
  </div>

  <div class="np-card accent-green" style="flex: 1; padding: 0.8rem;">
    <p class="eyebrow" style="font-size: 0.7rem; color: var(--np-green);">Week 10</p>
    <h3 style="font-size: 0.92rem; margin: 0.1rem 0 0.3rem;">Dashboarding</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0;">Feedback verwerken, dashboard, roadmap voor opschaling</p>
  </div>

</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  <strong>We zijn hier:</strong> de datavalidatie afronden en het dashboard opleveren. Vandaag halen we vooral jullie feedback op.
</div>

</div>

<!--
Even kort waar we staan in het project, zodat jullie de context hebben.

Dit is een traject van ongeveer tien weken, dat we in co-creatie met de instellingen doen. Het begon met de fundering: de 1CijferHO-module, een handleiding en dummy data. Daarna, week 2 tot 5, de co-creatiefase: de eerste versie van de validatie- en configuratiemodule, en het prepareren van dummy data met de instellingen. Week 6 tot 9 stond in het teken van datavalidatie: hands-on hulp bij de selectiedata en de modules verbeteren op basis van feedback.

En nu, week 9 tot 10, zitten we in de dashboarding-fase. We ronden de datavalidatie af en leveren het dashboard op. Deze sessie hoort daar middenin: we laten zien wat er staat, en we halen vooral jullie feedback op om de roadmap voor de opschaling te bepalen.
-->

---

<!-- SLIDE 1d: SCOPE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:10 - 14:20</p>

# Wat is af, wat komt nog, wat niet

<p class="np-subtitle">Stand van zaken: gedaan, nog te doen, en wat bewust buiten de MVP valt.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <span class="np-badge green">Gedaan</span>
    <ul style="font-size: 0.8rem; line-height: 1.5; margin: 0.5rem 0 0; padding-left: 1.1rem;">
      <li>Doorstroom en diploma als uitkomst uit 1CHO</li>
      <li>Dashboard: scores, demografie en verschiltoets</li>
      <li>Correlatie- en regressieanalyse</li>
      <li>Config wizard en PDF-rapport</li>
      <li>Analyse voor &eacute;&eacute;n cohort tegelijk</li>
      <li>Lokaal draaien: data blijft bij jou</li>
      <li>Voorbeeldconfigs en demodata klaar</li>
    </ul>
  </div>
  <div class="np-card accent-blue">
    <span class="np-badge blue">Binnen scope</span>
    <ul style="font-size: 0.8rem; line-height: 1.5; margin: 0.5rem 0 0; padding-left: 1.1rem;">
      <li>Meer opleidingen testen met eigen data</li>
      <li>VAKHAVW: per-vak VO-cijfers koppelen</li>
      <li>Cohorten vergelijken (nog niet ingebouwd)</li>
      <li>GenAI veilig en verantwoord inzetten bij het opstellen van de config</li>
    </ul>
  </div>
  <div class="np-card accent-orange" style="border-top-color: var(--np-mid-gray);">
    <span class="np-badge orange">Buiten scope</span>
    <ul style="font-size: 0.8rem; line-height: 1.5; margin: 0.5rem 0 0; padding-left: 1.1rem;">
      <li>Centrale hosting of dataopslag in de cloud</li>
      <li>Geavanceerde statistiek en machine learning</li>
      <li>Multi-instelling data-sharing</li>
      <li>Uitspraken over individuele kandidaten: de procedure, niet personen</li>
      <li>Causale uitspraken: de tool toont samenhang, geen oorzaak</li>
    </ul>
  </div>
</div>

</div>

<!--
Even kort waar we staan: wat is af, wat komt nog, en wat valt er bewust buiten. Drie kolommen.

Wat is af: de tool leidt doorstroom en diploma af uit 1CHO, heeft een volledig dashboard met scores, demografie, verschiltoets, correlatie en regressie, een config wizard en een PDF-rapport. De analyse werkt nu voor een cohort tegelijk. Hij draait lokaal, dus je data blijft bij jou. Er zijn al voorbeeldconfigs en demodata klaar, maar het echt testen met opleidingen als Farmacie en Psychologie moet nog gebeuren.

Wat nog binnen scope valt: meer opleidingen laten testen, per-vak VO-cijfers via VAKHAVW, en ook cijfers per vak zijn haalbaar zolang we van tevoren goed afspreken hoe de data eruit moet zien. Cohorten vergelijken zit er nu nog niet in, dat is een wens. En GenAI inzetten bij het opstellen van het configbestand.

En wat er bewust buiten valt: centrale hosting of dataopslag in de cloud, juist vanwege de privacy. Geavanceerde statistiek en machine learning, en data delen tussen instellingen, vallen buiten deze MVP. De tool doet geen uitspraken over individuele kandidaten; hij evalueert de procedure, niet personen. En geen causale uitspraken: hij laat samenhang zien, geen oorzaak en gevolg.
-->

---

<!-- MAIN-DIVIDER: DE 1CIJFERHO-TOOL -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">14:20 - 14:30</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">De 1cijferho-tool</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">De data klaarzetten voor de analyse</p>
  </div>
</div>

<!--
We beginnen met een onderdeel op zichzelf: de 1cijferho-tool. Dit is de tool waarmee je de ruwe 1CHO-data klaarzet voordat je hem in de evaluatietool laadt.

Dit blok duurt ongeveer tien minuten. Geen aparte demo deze keer; we laten kort zien wat de tool doet en gaan daarna door naar de evaluatietool zelf.
-->

---

<!-- 1CIJFERHO WAARDE: VAN MAANDEN NAAR MINUTEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:20 - 14:30</p>

# Van maanden naar minuten

<p class="np-subtitle">Ruwe 1CHO-data bruikbaar maken was altijd een karwei. Niet meer.</p>

<div class="np-pipeline" style="margin-top: 1.2rem;">
  <div class="np-step orange" style="flex: 1; max-width: 300px;">
    <strong style="font-size: 0.95rem;">Vroeger</strong>
    <small>Handmatig uitpakken, kolommen ontcijferen, koppelen en filteren. Werk van weken tot maanden, foutgevoelig en bij iedereen net anders.</small>
  </div>
  <div class="np-arrow" style="font-size: 2rem;">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 300px;">
    <strong style="font-size: 0.95rem;">Nu met de 1cijferho-tool</strong>
    <small>Inladen, preset kiezen, filteren op opleiding en cohort. Een bruikbaar bestand in minuten, en reproduceerbaar voor iedereen.</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Open source</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Reproduceerbaar</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Geen handwerk meer</div>
</div>

</div>

<!--
Even de 1cijferho-tool aanprijzen, want dit is echt een gamechanger voor de datavoorbereiding.

Ruwe 1CHO-data bruikbaar maken was vroeger een karwei. Je moest het bestand handmatig uitpakken, uitzoeken wat al die kolommen betekenen, de juiste velden koppelen en filteren. Dat kostte zo weken tot maanden, het was foutgevoelig, en iedereen deed het net even anders.

Met de 1cijferho-tool is dat: inladen, de preset kiezen, filteren op opleiding en cohort, klaar. Een bruikbaar bestand in minuten. En omdat het in de tool gebeurt is het reproduceerbaar: iedereen krijgt op dezelfde manier hetzelfde resultaat.

Van maanden naar minuten, dus. En het is open source.
-->

---

<!-- 1CIJFERHO TOOL FEATURES -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:20 - 14:30</p>

# De 1cijferho-tool maakt het werk klaar

<p class="np-subtitle">Speciaal voor dit project zijn er drie nieuwe functies bijgekomen.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Nieuw</span>
    <h3 style="margin-top: 0.5rem;">Studentnummer &harr; BSN</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Koppelt het studentnummer uit de selectiedata aan het persoonsgebonden nummer in 1CHO. Daarmee sluiten beide bestanden op elkaar aan.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Nieuw</span>
    <h3 style="margin-top: 0.5rem;">Evaluatietool-preset</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Een preset levert precies de velden en het formaat op die deze evaluatietool verwacht. Geen handwerk om kolommen te selecteren.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Nieuw</span>
    <h3 style="margin-top: 0.5rem;">Filter op opleiding en cohortjaar</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Beperk de 1CHO-data meteen tot de opleiding en het cohort dat je wilt evalueren. Dat scheelt opschonen achteraf.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Zo rolt er uit de 1cijferho-tool een bestand dat je <strong>direct</strong> in de evaluatietool laadt.
</div>

</div>

<!--
Speciaal voor dit project zijn er drie functies aan de 1cijferho-tool toegevoegd die het voorbereiden van de data flink makkelijker maken.

De eerste: een koppeling tussen studentnummer en BSN. De selectiedata gebruikt vaak het studentnummer, terwijl 1CHO werkt met het persoonsgebonden nummer dat van het BSN is afgeleid. De tool legt die twee aan elkaar, zodat de bestanden straks netjes op elkaar aansluiten.

De tweede: een preset speciaal voor deze evaluatietool. In plaats van zelf uit te zoeken welke kolommen je nodig hebt, kies je de preset en krijg je precies de velden en het formaat die de evaluatietool verwacht.

De derde: een filter op opleiding en cohortjaar. Je geeft aan welke opleiding en welk cohort je wilt evalueren, en de tool levert alleen die data. Dat scheelt een hoop opschonen achteraf.

Het resultaat is een bestand dat je direct in de evaluatietool kunt laden, zonder tussenstappen.
-->

---

<!-- SCREENSHOT: 1CIJFERHO TOOL -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:20 - 14:30</p>

# Zo ziet de 1cijferho-tool eruit

<div style="display: flex; justify-content: center; margin-top: 0.2rem;">
  <img src="/shots/1cijferho_evaluatietool.png" style="max-height: 430px; width: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.12);" />
</div>

</div>

<!--
Dit is de 1cijferho-tool. Hier zet je de ruwe 1CHO-data om naar een bestand dat je direct in de evaluatietool laadt: met de studentnummer-BSN koppeling, de evaluatietool-preset en het filter op opleiding en cohortjaar.
-->

---

<!-- MAIN-DIVIDER: CONFIGURATIE EN DASHBOARD -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">14:30 - 15:00</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Configuratie en dashboard</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.6rem; max-width: 680px; margin-left: auto; margin-right: auto;">In drie onderdelen: de vraag, de data en het dashboard</p>
  </div>
</div>

<!--
Nu het hoofdblok: configuratie en dashboard. We doorlopen dit in drie onderdelen. Eerst de vraag: waarom selectie evalueren? Dan de data: wat heb je nodig en hoe stel je de configuratie op? En tot slot het dashboard zelf. De gele tussenslides kondigen telkens een nieuw onderdeel aan.
-->

---

<!-- SUB-DIVIDER: DE VRAAG -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(0,0,0,0.6);">14:30 - 15:00 · Onderdeel 1</p>
    <h1 style="color: #000000 !important; font-size: 3rem;">De vraag</h1>
    <p style="color: rgba(0,0,0,0.7); font-size: 1.15rem; margin-top: 0.5rem;">Waarom selectie evalueren?</p>
  </div>
</div>

<!--
Laten we beginnen bij het begin. Waarom zou je je selectieprocedure evalueren?
-->

---

<!-- SLIDE 4: DE SITUATIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Selectie in het hoger onderwijs

<p class="np-subtitle">Opleidingen met een numerus fixus selecteren studenten. Maar werkt dat?</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- Steeds meer opleidingen gebruiken een **selectieprocedure** om studenten toe te laten
- Selectie kost **veel tijd en geld**: ontwerpen, afnemen, beoordelen
- De aanname is dat hogere selectiescores leiden tot **beter studiesucces**
- **GenAI** zet de selectie onder druk. Voorbeeld: bij Radboud BSc Psychologie weegt het **rapportcijfer** nu zwaarder
- Maar wordt die aanname ooit **getoetst**?

</div>
<div>
  <div class="np-card accent-orange">
    <h3>De kernvraag</h3>
    <p style="font-size: 1rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Scoren studenten die het goed deden bij de selectie ook beter in hun studie? Of selecteren we op dingen die er uiteindelijk niet toe doen?
    </p>
  </div>
</div>
</div>

</div>

<!--
Veel opleidingen in het hoger onderwijs selecteren hun studenten. Dat gebeurt met competentietesten, motivatiegesprekken, portfoliobeoordelingen, noem maar op. Het kost flink wat tijd en geld.

De gedachte is logisch: wie beter scoort bij de selectie, doet het straks ook beter in de studie. Maar de vraag is: **klopt dat ook?** En als bepaalde onderdelen van de selectie helemaal niets voorspellen, moeten we die dan niet aanpassen?

En er is een nieuwe uitdaging bij gekomen: GenAI. Onderdelen die kandidaten makkelijk met AI kunnen maken, zoals open opdrachten en motivatiebrieven, zeggen mogelijk steeds minder over de kandidaat zelf. Je ziet opleidingen daarop reageren: bij de bachelor Psychologie van de Radboud weegt het rapportcijfer uit het schooldiploma inmiddels zwaarder mee, juist omdat dat moeilijker met AI te maken is. De vraag is dan of die verschuiving terecht is, en precies dat kun je met deze tool toetsen.

Dat is precies de vraag die deze tool beantwoordt.
-->

---

<!-- SLIDE 5: WAAROM NU -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Waarom is dit belangrijk?

<div class="np-grid-3" style="margin-top: 0.5rem;">
  <div class="np-card accent-blue" style="text-align: center;">
    <div style="height: 80px; width: 80px; margin: 0 auto 0.4rem; background: url(/npuls/powerpoint_illustrations/learninganalystics.svg) center/contain no-repeat;"></div>
    <span class="np-badge blue">Verantwoording</span>
    <h3 style="margin-top: 0.6rem;">Laat zien dat selectie werkt</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Richting bestuur, accreditatie en de maatschappij: onderbouw je keuzes met data.</p>
  </div>
  <div class="np-card accent-green" style="text-align: center;">
    <div style="height: 80px; width: 80px; margin: 0 auto 0.4rem; background: url(/npuls/powerpoint_illustrations/verrekijker.svg) center/contain no-repeat;"></div>
    <span class="np-badge green">Verbetering</span>
    <h3 style="margin-top: 0.6rem;">Verbeter je procedure</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Ontdek welke onderdelen voorspellend zijn en welke je kunt weglaten of aanpassen.</p>
  </div>
  <div class="np-card accent-orange" style="text-align: center;">
    <div style="height: 80px; width: 80px; margin: 0 auto 0.4rem; background: url(/npuls/powerpoint_illustrations/gesprek.svg) center/contain no-repeat;"></div>
    <span class="np-badge orange">Demografie</span>
    <h3 style="margin-top: 0.6rem;">Kijk naar de demografie</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Scoren of presteren bepaalde groepen studenten anders? Zijn ze over- of ondervertegenwoordigd?</p>
  </div>
</div>

</div>

<!--
Er zijn drie redenen waarom dit belangrijk is.

**Verantwoording.** Accreditatiecommissies vragen steeds vaker om onderbouwing van de selectie. Met deze tool kun je laten zien dat je keuzes gebaseerd zijn op data, niet op gevoel.

**Verbetering.** Misschien blijkt dat het motivatiegesprek helemaal niets voorspelt. Of dat juist de kennistoets de sterkste voorspeller is. Die informatie helpt je om de procedure te verbeteren en tijd te besparen.

**Demografie.** Je wilt weten hoe verschillende groepen studenten zich verhouden: scoren of presteren mannen en vrouwen, of studenten met een verschillende vooropleiding, anders? De tool laat je per demografische groep kijken naar de scores en naar de uitkomst.
-->

---

<!-- SLIDE 6: DE TOOL IN HET KORT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Wat doet de tool?

<p class="np-subtitle">In een zin: de tool koppelt selectiescores aan studiesucces en maakt dat visueel.</p>

<div class="np-pipeline" style="margin-top: 1.5rem;">
  <div class="np-step blue" style="flex: 1; max-width: 200px;">
    <div style="height: 50px; width: 50px; margin: 0 auto; background: url(/npuls/powerpoint_illustrations/Document.svg) center/contain no-repeat;"></div>
    <strong style="font-size: 0.95rem;">Selectiedata</strong>
    <small>De scores van de selectie</small>
  </div>
  <div class="np-arrow">+</div>
  <div class="np-step orange" style="flex: 1; max-width: 200px;">
    <div style="height: 50px; width: 50px; margin: 0 auto; background: url(/npuls/powerpoint_illustrations/Combineren.svg) center/contain no-repeat;"></div>
    <strong style="font-size: 0.95rem;">Configuratie</strong>
    <small>Welke kolommen tellen mee?</small>
  </div>
  <div class="np-arrow">+</div>
  <div class="np-step green" style="flex: 1; max-width: 200px;">
    <div style="height: 50px; width: 50px; margin: 0 auto; background: url(/npuls/powerpoint_illustrations/data.svg) center/contain no-repeat;"></div>
    <strong style="font-size: 0.95rem;">1CHO-data</strong>
    <small>Studiesucces uit DUO</small>
  </div>
</div>

<div style="display: flex; justify-content: center; margin-top: 1rem;">
  <div class="np-arrow" style="font-size: 2rem;">&#8595;</div>
</div>

<div style="display: flex; justify-content: center;">
  <div class="np-card accent-blue" style="max-width: 400px; text-align: center; padding: 1rem 1.5rem;">
    <h3>Dashboard met analyses</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Grafieken, tabellen en een PDF-rapport</p>
  </div>
</div>

</div>

<!--
De tool werkt als volgt. Je combineert drie dingen: de scores van je selectieprocedure, een configuratiebestand dat vertelt welke kolommen relevant zijn, en studiesuccesdata uit 1CHO.

De tool koppelt die bestanden aan elkaar via het studentnummer en maakt er een interactief dashboard van. Daar kun je precies zien hoe de selectiescores samenhangen met hoe het later ging in de studie.

Klinkt ingewikkeld? Dat valt mee. Laten we per bestand bekijken wat je nodig hebt.
-->

---

<!-- SUB-DIVIDER: DE DATA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(0,0,0,0.6);">14:30 - 15:00 · Onderdeel 2</p>
    <h1 style="color: #000000 !important; font-size: 3rem;">De data</h1>
    <p style="color: rgba(0,0,0,0.7); font-size: 1.15rem; margin-top: 0.5rem;">Wat heb je nodig en waar haal je het vandaan?</p>
  </div>
</div>

<!--
Nu naar het praktische gedeelte. Welke data heb je nodig, en waar vind je die?
-->

---

<!-- SLIDE 8: DRIE BESTANDEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Drie bestanden, dat is alles

<p class="np-subtitle">De tool verwacht drie uploads. Je hebt ze waarschijnlijk al.</p>

<div class="np-grid-3" style="margin-top: 0.5rem;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Bestand 1</span>
    <h3 style="margin-top: 0.6rem;">Selectiedata</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Het Excel-bestand met de resultaten van de selectie. Elke rij is een kandidaat, de kolommen zijn de scores.</p>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); margin-top: 0.6rem; line-height: 1.5;">Krijg je van de opleiding zelf of het testbureau.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Bestand 2</span>
    <h3 style="margin-top: 0.6rem;">Configuratie</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Vertelt de tool welke kolommen scores zijn en hoe ze heten in het dashboard.</p>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); margin-top: 0.6rem; line-height: 1.5;">Kun je <strong>automatisch laten genereren</strong> door de tool zelf.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Bestand 3</span>
    <h3 style="margin-top: 0.6rem;">1CHO-data</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Studiesuccesgegevens van DUO: wie is gestart, wie is doorgestroomd naar jaar 2.</p>
    <p style="font-size: 0.82rem; color: var(--np-dark-gray); margin-top: 0.6rem; line-height: 1.5;">Beschikbaar via je instelling of met de <strong>1cijferHO-tool</strong> van CEDA.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Alle data die je nodig hebt, heb je <strong>al binnen je eigen instelling</strong>.
</div>

</div>

<!--
Je hebt drie bestanden nodig. Dat is alles.

**Het selectiebestand** is het Excel-bestand dat de opleiding al heeft: de uitslag van de selectie met de scores van alle kandidaten. Dat krijg je van de opleiding of het testbureau.

**Het configuratiebestand** vertelt de tool welke kolommen in dat Excel relevant zijn. De slimme versie: je hoeft het niet zelf te maken. De tool heeft een config wizard die je selectiebestand leest en automatisch detecteert welke kolommen scores zijn. Je checkt het even en klikt op bevestigen.

**De 1CHO-data** is de studiesuccesdata die vanuit DUO beschikbaar is. Die kun je opvragen bij je instelling of verwerken met de 1cijferHO-tool van CEDA. Dit bestand vertelt ons hoe het met die studenten verder is gegaan.

Het mooie is: al deze data zit al binnen je instelling. Er hoeft niets nieuws verzameld te worden.
-->

---

<!-- SLIDE 9: SELECTIEDATA IN DETAIL -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Het selectiebestand

<p class="np-subtitle">Gewoon het Excel-bestand dat de opleiding al heeft.</p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div>

<div style="font-size: 0.92rem; line-height: 1.7;">

- Elke rij is een **kandidaat**
- Kolommen bevatten de **scores** van de selectie
- Er moet een **uniek nummer** per kandidaat in zitten (studentnummer of aanvraagnummer)
- Maakt niet uit als er ook namen, e-mailadressen of datums in staan; de tool slaat die automatisch over

</div>

</div>
<div>
  <div class="np-card accent-blue">
    <h3>Voorbeeld</h3>
    <div style="font-size: 0.78rem; overflow-x: auto;">

| Studentnr | Toets | Gesprek | SJT | Totaal |
|---|---|---|---|---|
| 12345678 | 7.2 | 2 | 85 | 72.5 |
| 23456789 | 5.1 | 3 | 91 | 68.0 |
| 34567890 | 8.0 | 1 | 78 | 80.2 |

</div>
    <p class="muted" style="font-size: 0.78rem; margin-top: 0.5rem;">Elke opleiding heeft een ander selectiebestand. De tool past zich aan.</p>
  </div>
</div>
</div>

</div>

<!--
Het selectiebestand is het meest vanzelfsprekende bestand. De meeste opleidingen hebben dit al in een Excel staan na afloop van de selectie.

Elke rij is een kandidaat. De kolommen bevatten de scores op de verschillende onderdelen. Dat kan van alles zijn: toetsscores, beoordelingen van een gesprek, een situational judgement test, een portfolioscore.

Het enige vereiste is dat er een **uniek nummer** per kandidaat in zit. Dat kan een studentnummer zijn, een aanvraagnummer, wat de opleiding ook gebruikt. Dat nummer gebruiken we later om de koppeling te maken met de studiedata.

Er mogen gerust ook andere kolommen in zitten: namen, e-mailadressen, datumvelden. De tool negeert die automatisch.
-->

---

<!-- SLIDE 10: CONFIG WIZARD -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# De config wizard

<p class="np-subtitle">De tool leest je selectiebestand en zoekt zelf uit welke kolommen ertoe doen.</p>

<div class="np-grid-2" style="align-items: center; margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

De wizard detecteert automatisch:

- Op welk **blad** de data staat
- Op welke **rij** de kolomnamen beginnen
- Welke kolom het **studentnummer** is
- Welke kolommen **scores** bevatten
- Hoe de scores **gegroepeerd** kunnen worden (per instrument)

Je krijgt een overzichtstabel te zien waar je alles nog kunt aanpassen. Klik op bevestigen en je bent klaar.

</div>
<div>
  <div class="np-card accent-orange">
    <h3>Waarom een configuratie?</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Elke opleiding heeft een ander selectiebestand: andere kolommen, andere schalen, andere namen. De configuratie vertaalt jouw bestand naar wat de tool nodig heeft.</p>
    <div style="margin-top: 0.8rem;">
      <span class="np-badge orange">Eenmalig per bestand</span>
    </div>
  </div>
  <div class="np-card accent-green" style="margin-top: 0.8rem;">
    <h3>Bewaar en hergebruik</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Download de config als Excel. De volgende keer hoef je alleen te uploaden, zonder wizard.</p>
  </div>
</div>
</div>

</div>

<!--
Nu het configuratiebestand. Dit klinkt misschien technisch, maar het is het simpelste onderdeel.

Het probleem is: elk selectiebestand ziet er anders uit. De ene opleiding heeft twintig kolommen, de andere vijf. De ene noemt het "Totaalscore", de andere "Eindscore". De tool moet weten welke kolommen relevant zijn.

Daar is de **config wizard** voor. Je klikt in het uploadscherm op "config automatisch genereren", de tool leest je selectiebestand, en detecteert automatisch welke kolommen scores bevatten. Je ziet een overzichtstabel, kunt nog dingen aanpassen als dat nodig is, en klikt op bevestigen.

De config kun je daarna downloaden als Excel. Als je volgend jaar dezelfde opleiding wilt evalueren, upload je gewoon die config en het gaat meteen.

Dit hoef je dus maar een keer te doen per opleiding.
-->

---

<!-- SCREENSHOT: CONFIG WIZARD -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet de config wizard eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/config_wizard.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Dit is de config wizard. De tool heeft het selectiebestand ingelezen en de gedetecteerde scorekolommen in een tabel gezet, met per kolom het instrument, item en criterium. Je controleert het, past zo nodig iets aan, verwijdert kolommen die niet meetellen, en bevestigt. Daarna kun je de config downloaden voor hergebruik.
-->

---

<!-- SLIDE 10b: DRIE NIVEAUS IN DE CONFIG -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Drie niveaus in de configuratie

<p class="np-subtitle">De config beschrijft je selectie-opzet in drie lagen: van breed naar specifiek.</p>

<div style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-top: 0.8rem;">

<div class="np-card accent-blue" style="flex: 1; text-align: center; padding: 1.2rem;">
  <div style="height: 60px; width: 60px; margin: 0 auto 0.5rem; background: url(/npuls/powerpoint_illustrations/Blokken%20stapel.svg) center/contain no-repeat;"></div>
  <h3 style="color: var(--np-blue); font-size: 1.1rem;">Instrument</h3>
  <p class="muted" style="font-size: 0.82rem; margin: 0;">Het meetmiddel als geheel</p>
  <p style="font-size: 0.78rem; margin: 0.4rem 0 0; color: var(--np-dark-gray);">bv. <em>Cognitieve toets</em>, <em>Schooldiploma</em>, <em>Motivatievragenlijst</em></p>
</div>

<div style="font-size: 2rem; color: var(--np-orange);">&rsaquo;</div>

<div class="np-card accent-orange" style="flex: 1; text-align: center; padding: 1.2rem;">
  <div style="height: 60px; width: 60px; margin: 0 auto 0.5rem; background: url(/npuls/powerpoint_illustrations/Document.svg) center/contain no-repeat;"></div>
  <h3 style="color: var(--np-orange); font-size: 1.1rem;">Item</h3>
  <p class="muted" style="font-size: 0.82rem; margin: 0;">De vraag of deelvraag</p>
  <p style="font-size: 0.78rem; margin: 0.4rem 0 0; color: var(--np-dark-gray);">bv. <em>Vraag 1</em>, <em>Vraag 2</em>, <em>Vraag 3</em></p>
</div>

<div style="font-size: 2rem; color: var(--np-orange);">&rsaquo;</div>

<div class="np-card accent-green" style="flex: 1; text-align: center; padding: 1.2rem;">
  <div style="height: 60px; width: 60px; margin: 0 auto 0.5rem; background: url(/npuls/powerpoint_illustrations/verrekijker.svg) center/contain no-repeat;"></div>
  <h3 style="color: var(--np-green); font-size: 1.1rem;">Criterium</h3>
  <p class="muted" style="font-size: 0.82rem; margin: 0;">De eigenschap die je meet</p>
  <p style="font-size: 0.78rem; margin: 0.4rem 0 0; color: var(--np-dark-gray);">bv. <em>Analytisch denken</em>, <em>Studiemotivatie</em>, <em>Profielsterkheid</em></p>
  <div style="margin-top: 0.5rem;"><span class="np-badge green">Optioneel</span></div>
</div>

</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  De analist kiest zelf de namen. De tool schrijft niets voor, alleen de <strong>structuur</strong>.
</div>

</div>

<!--
Wat doet de configuratie precies? Het organiseert de kolommen uit je selectiebestand in drie niveaus.

Het eerste niveau is het **instrument**: dat is het meetmiddel als geheel. Denk aan een cognitieve toets, een motivatievragenlijst, of een beoordeling van het schooldiploma.

Het tweede niveau is het **item**: dat is de specifieke score. Binnen een cognitieve toets heb je misschien logisch redeneren, datavisualisatie, numerieke vaardigheden. Elk item is een kolom in je selectiebestand.

Het derde niveau is het **criterium**: dat beschrijft welke eigenschap je met dat item probeert te meten. Logisch redeneren en methodologie meten allebei "analytisch denken". Door een criterium toe te voegen kun je later in het dashboard groeperen op wat je meet, in plaats van hoe je het meet.

Belangrijk: het criterium is optioneel. Als je selectie simpel is en je hoeft niet op dat niveau te groeperen, laat je het gewoon leeg.

En de namen kies je helemaal zelf. De tool schrijft niets voor. Als jouw opleiding het "Kennistoets" noemt in plaats van "Cognitieve toets", dan typ je dat in.
-->

---

<!-- SLIDE 10c: FLEXIBEL VOOR ELKE SELECTIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Flexibel voor elke selectie

<p class="np-subtitle">Van uitgebreide universitaire selecties tot een simpele loting met motivatiebrief.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">

<div class="np-card accent-blue" style="padding: 1rem 1.2rem;">
  <h3 style="color: var(--np-blue); margin-bottom: 0.6rem;">Uitgebreid voorbeeld</h3>
  <p class="muted" style="font-size: 0.78rem; margin: 0 0 0.6rem;">Gezondheidskunde: 4 instrumenten, 10 items, elk met criterium</p>
  <div style="font-size: 0.75rem; line-height: 1.5; color: var(--np-dark-gray);">
    <div style="padding: 0.3rem 0.5rem; background: #EEF2FF; border-radius: 6px; margin-bottom: 0.3rem;"><strong style="color: var(--np-blue);">Instrument:</strong> Analytische Vaardigheden Toets</div>
    <div style="padding: 0.2rem 0.5rem 0.2rem 1.2rem;">Item: Logisch redeneren</div>
    <div style="padding: 0.2rem 0.5rem 0.2rem 2rem; color: var(--np-green);">Criterium: Analytisch denken</div>
    <div style="padding: 0.2rem 0.5rem 0.2rem 1.2rem;">Item: Datavisualisatie</div>
    <div style="padding: 0.2rem 0.5rem 0.2rem 2rem; color: var(--np-green);">Criterium: Methodologisch inzicht</div>
    <div style="padding: 0.3rem 0.5rem; background: #EEF2FF; border-radius: 6px; margin: 0.3rem 0;"><strong style="color: var(--np-blue);">Instrument:</strong> Reflectie-opdracht</div>
    <div style="padding: 0.3rem 0.5rem; background: #EEF2FF; border-radius: 6px; margin: 0.3rem 0;"><strong style="color: var(--np-blue);">Instrument:</strong> SJT-B</div>
    <div style="padding: 0.3rem 0.5rem; background: #EEF2FF; border-radius: 6px; margin: 0.3rem 0;"><strong style="color: var(--np-blue);">Instrument:</strong> Wetenschappelijk Redeneren</div>
  </div>
</div>

<div class="np-card accent-green" style="padding: 1rem 1.2rem;">
  <h3 style="color: var(--np-green); margin-bottom: 0.6rem;">Minimaal voorbeeld</h3>
  <p class="muted" style="font-size: 0.78rem; margin: 0 0 0.6rem;">Loting + motivatiebrief: 1 instrument, 1 item, geen criterium</p>
  <div style="font-size: 0.75rem; line-height: 1.5; color: var(--np-dark-gray);">
    <div style="padding: 0.3rem 0.5rem; background: #F0FDF4; border-radius: 6px; margin-bottom: 0.3rem;"><strong style="color: var(--np-green);">Instrument:</strong> Motivatiebrief</div>
    <div style="padding: 0.2rem 0.5rem 0.2rem 1.2rem;">Item: Eindscore motivatie</div>
    <div style="padding: 0.2rem 0.5rem 0.2rem 2rem; color: var(--np-mid-gray); font-style: italic;">Geen criterium nodig</div>
  </div>
  <div style="margin-top: 1rem; padding: 0.6rem 0.8rem; background: #F0FDF4; border-radius: 8px; border-left: 3px solid var(--np-green);">
    <p style="font-size: 0.8rem; margin: 0; color: var(--np-dark-gray);">De tool werkt ook met twee items, of twintig. Met criteria of zonder. Jouw selectie bepaalt de structuur, niet andersom.</p>
  </div>
</div>

</div>

<div class="np-proof-strip" style="margin-top: 0.7rem; justify-content: center;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>1 item genoeg</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Criterium is optioneel</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Vrije naamgeving</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Elke schaal welkom</div>
</div>

</div>

<!--
Dit is belangrijk: de tool is niet alleen voor uitgebreide universitaire selecties met tien items en vier instrumenten.

Links zien jullie een voorbeeld van Gezondheidskunde: een universitaire selectie met een cognitieve toets, een reflectie-opdracht, een SJT en een casus. Elk item heeft een criterium, zodat je in het dashboard kunt filteren op welke eigenschap je meet.

Maar rechts zien jullie het minimale voorbeeld. Stel je hebt een loting met een motivatiebrief als enige selectie-instrument. Dan is je config een instrument, een item en geen criterium. En dat werkt prima. De tool past zich aan aan wat jij nodig hebt.

Of je nu twee items hebt of twintig, of je criteria gebruikt of niet, of je scores op een schaal van 1 tot 3 of van 0 tot 100 hebt. Jouw selectie bepaalt de structuur, niet andersom.

Dit was een bewust ontwerpbesluit. We wilden niet dat de tool een bepaald selectiemodel afdwingt. Elke opleiding is anders, en de tool moet zich daaraan aanpassen.
-->

---

<!-- SLIDE 10c2: CONFIG VOORBEELD (FARMACIE LEIDEN) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Een echte config: Farmacie (Leiden)

<p class="np-subtitle">Het blad <code>kolommen</code>: elke scorekolom krijgt een instrument, item en criterium.</p>

<div style="font-size: 0.68rem; overflow-x: auto; margin-top: 0.3rem;">

| kolom_naam | instrument | item | criterium |
|---|---|---|---|
| ctb_reflecteren_Schaalscore | Competentietest | Reflecteren schaalscore | Reflectievermogen |
| ct_steunzoeken_Schaalscore | Competentietest | Steun zoeken schaalscore | Copingstijl |
| ct_problemenvermijden_Schaalscore | Competentietest | Problemen vermijden schaalscore | Copingstijl |
| Beoordeling_reflectievermogen | Open vraag | Beoordeling reflectie (1-2-3) | Reflectievermogen |
| sjts_totaal_Schaalscore | SIT-S | Sociale intelligentie | Sociale intelligentie |
| wetenschappelijkecasus_Schaalscore | Wetenschappelijke casus | Schaalscore casus | Wetenschappelijk redeneren |

</div>

<div class="np-grid-2" style="margin-top: 0.6rem;">
  <div class="np-card accent-green" style="padding: 0.7rem 1rem;">
    <p style="font-size: 0.82rem; margin: 0;">Meerdere items onder een criterium: <strong>Copingstijl</strong> bundelt steun zoeken, problemen aanpakken en problemen vermijden.</p>
  </div>
  <div class="np-card accent-blue" style="padding: 0.7rem 1rem;">
    <p style="font-size: 0.82rem; margin: 0;">Steeds de <strong>schaalscore</strong>, niet ook de normscore: twee maten voor hetzelfde zou de regressie er weer uitgooien.</p>
  </div>
</div>

</div>

<!--
Even een echte config erbij om het concreet te maken. Dit is een deel van de configuratie van de Farmacie-selectie in Leiden.

Elke rij is een scorekolom uit het selectiebestand, met daarachter het instrument, het item en het criterium. Je ziet de structuur die we net bespraken nu echt terug.

Twee dingen vallen op. Ten eerste: meerdere items kunnen onder hetzelfde criterium vallen. Steun zoeken, problemen aanpakken en problemen vermijden horen allemaal bij het criterium Copingstijl. Zo kun je in het dashboard op dat niveau groeperen.

Ten tweede: er is bewust gekozen voor de schaalscore en niet ook de normscore van de competentietest. Die twee meten hetzelfde; allebei meenemen zou alleen maar ruis en overlap toevoegen, en de regressie zou ze er toch weer uitgooien.

Deze config is overigens gewoon een Excel die je kunt downloaden en hergebruiken. Voor een nieuwe opleiding maak je er een aan met de config wizard, of je past een bestaande aan.
-->

---

<!-- SLIDE 10d: WEL/NIET MEENEMEN (KEUZEVAKKEN) -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Wat neem je wel en niet mee?

<p class="np-subtitle">Niet elke kolom met een getal is een bruikbaar item. Een echt voorbeeld uit Psychologie.</p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div>
  <div class="np-card accent-orange">
    <h3 style="color: var(--np-orange);">Niet bruikbaar: losse keuzevakken</h3>
    <div style="font-size: 0.7rem; overflow-x: auto; margin-top: 0.4rem;">

| Student | V1 | V1 score | V2 | V2 score |
|---|---|---|---|---|
| A | Nederlands | 3,45 | Frans | 3,75 |
| B | French lit. | 3,50 | Art | 3,90 |
| C | German | 3,41 | History | 3,01 |

</div>
    <p class="muted" style="font-size: 0.8rem; margin: 0.5rem 0 0;">"V1" is voor elke student een <strong>ander vak</strong>, op een andere schaal. "V1 score" vergelijken tussen studenten is appels met peren. Niet meenemen.</p>
  </div>
</div>
<div>
  <div class="np-card accent-green">
    <h3 style="color: var(--np-green);">Wel bruikbaar: de samengevoegde score</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De score die alle keuzevakken samenvat tot een getal (<code>V1-V10 + combinatiecijfer</code>) is wel vergelijkbaar tussen studenten. Die neem je mee als item.</p>
  </div>
  <div class="np-card accent-blue" style="margin-top: 0.8rem;">
    <h3>De vuistregel</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Neem alleen kolommen mee die voor iedere kandidaat <strong>hetzelfde</strong> meten op <strong>dezelfde schaal</strong>. Twijfel je? Kies de samengevoegde score boven de losse onderdelen.</p>
  </div>
</div>
</div>

</div>

<!--
Een belangrijke les uit de praktijk: niet elke kolom met een getal erin is een bruikbaar selectie-item. Hier een echt voorbeeld uit de Psychologie-data.

Links zie je de keuzevakken. Elke student kiest eigen vakken. Voor student A is "V1" Nederlands, voor student B is "V1" Franse literatuur, voor student C Duits. De kolom heet wel overal "V1", maar er staat steeds een ander vak in, vaak ook nog op een andere cijferschaal. Als je "V1 score" tussen studenten vergelijkt, vergelijk je dus eigenlijk verschillende vakken met elkaar. Dat is statistisch betekenisloos. Die losse keuzevak-kolommen neem je niet mee.

Wat wel werkt: de opleiding heeft een samengevoegde score gemaakt die alle keuzevakken plus het combinatiecijfer samenvat tot een getal. Dat getal betekent voor iedere student hetzelfde: hoe sterk is het keuzevakkenpakket als geheel. Die neem je wel mee als item.

De vuistregel is simpel: een item is alleen bruikbaar als het voor elke kandidaat hetzelfde meet, op dezelfde schaal. Twijfel je tussen losse onderdelen en een aggregaat? Kies de aggregaat.
-->

---

<!-- SLIDE 11: 1CHO DATA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# 1CHO-data: studiesucces

<p class="np-subtitle">De studiesuccesgegevens komen van DUO, via 1 Cijfer HO.</p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div>
  <div class="np-card accent-green">
    <h3>Wat is 1CHO?</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0 0 0.4rem;">Een landelijke DUO-dataset met inschrijvingsgegevens van alle studenten in het hoger onderwijs. De ruwe levering is groot en complex: haal er met de <strong>1cijferho-tool</strong> een bruikbaar bestand uit.</p>
    <div style="font-size: 0.76rem; margin-top: 0.2rem;">

| Veld | Wat het is |
|---|---|
| `persoonsgebonden_nummer` | Studentnummer |
| `inschrijvingsjaar` | Jaar van inschrijving |
| `eerste_jaar_aan_...` | Eerste studiejaar |

</div>
    <div style="margin-top: 0.4rem;"><span class="np-badge green">github.com/cedanl/1cijferho</span></div>
  </div>
</div>
<div style="font-size: 0.86rem; line-height: 1.6;">

**Komt mee uit de 1cijferho-tool:**

- **Geslacht** voor de demografische analyse
- **Vooropleiding** (VWO, HAVO, MBO, HO)
- **Diploma behaald** voor eenjarige opleidingen (masters)

<div class="np-card accent-orange" style="margin-top: 0.7rem; padding: 0.7rem 1rem;">
  <p style="font-size: 0.82rem; margin: 0;"><strong>De koppel-uitdaging:</strong> 1CHO kent het persoonsgebonden nummer (uit BSN), je selectiedata het studentnummer. Die aan elkaar koppelen en het BSN daarna weer verwijderen is lastig, maar de <strong>1cijferho-tool</strong> doet dat voor je.</p>
</div>

</div>
</div>

</div>

<!--
Het derde bestand is de studiesuccesdata. Dat is 1CHO-data, oftewel 1 Cijfer HO. Dit is een landelijke dataset die DUO beheert met inschrijvingsgegevens van alle studenten in het hoger onderwijs.

De tool heeft een paar velden nodig: het studentnummer, het inschrijvingsjaar, en het eerste studiejaar. Hiermee berekent de tool wie is doorgestroomd naar jaar 2 en wie niet. Maar let op: dit is geen kwestie van zelf drie kolommen bij elkaar zoeken uit een ruw DUO-bestand. Dat ruwe bestand is groot en complex. Je gebruikt de 1cijferho-tool van CEDA, te vinden op GitHub via github.com/cedanl/1cijferho, die het ruwe 1CHO-bestand omzet naar een bruikbaar bestand met precies deze velden. Dat is de bedoelde route.

Naast die basisvelden komen er uit de 1cijferho-tool standaard ook gegevens over geslacht, herkomst, vooropleiding en diploma mee. Daarmee draait de tool de demografische analyses. Dit is dus niet iets wat je zelf optioneel hoeft toe te voegen; het rolt mee uit de tool.

Een belangrijke uitdaging die de 1cijferho-tool oplost: 1CHO werkt met het persoonsgebonden nummer, dat van het BSN is afgeleid, terwijl je selectiedata het studentnummer gebruikt. Die twee aan elkaar koppelen, en daarna het BSN weer netjes verwijderen voor de privacy, is lastig handwerk. De 1cijferho-tool neemt dat van je over.

Het punt is: deze data zit al bij je instelling. Waarschijnlijk heeft de afdeling informatiemanagement het, of kun je het opvragen bij DUO. Je kunt ook CEDA's 1cijferHO-tool gebruiken om de juiste kolommen uit het ruwe bestand te halen.
-->

---

<!-- SLIDE 11b: DE KERN - BINAIRE UITKOMSTEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Waar kijkt de tool naar?

<p class="np-subtitle">Alle analyses draaien om een paar simpele ja/nee-vragen.</p>

<div class="np-grid-3" style="margin-top: 0.7rem;">
  <div class="np-card accent-orange" style="text-align: center; padding: 1.2rem;">
    <div style="height: 56px; width: 56px; margin: 0 auto 0.4rem; background: url(/npuls/powerpoint_illustrations/Combineren.svg) center/contain no-repeat;"></div>
    <span class="np-badge orange">Binair</span>
    <h3 style="margin-top: 0.4rem;">Gestart?</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Ja of nee. Is de geselecteerde kandidaat ook echt aan de opleiding begonnen? Dit bepaalt wie meetelt.</p>
  </div>
  <div class="np-card accent-green" style="text-align: center; padding: 1.2rem;">
    <div style="height: 56px; width: 56px; margin: 0 auto 0.4rem; background: url(/npuls/powerpoint_illustrations/verrekijker.svg) center/contain no-repeat;"></div>
    <span class="np-badge green">Binair</span>
    <h3 style="margin-top: 0.4rem;">Doorgestroomd naar jaar 2?</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Ja of nee. De succesmaat bij meerjarige opleidingen (bachelors).</p>
  </div>
  <div class="np-card accent-blue" style="text-align: center; padding: 1.2rem;">
    <div style="height: 56px; width: 56px; margin: 0 auto 0.4rem; background: url(/npuls/powerpoint_illustrations/Document.svg) center/contain no-repeat;"></div>
    <span class="np-badge blue">Binair</span>
    <h3 style="margin-top: 0.4rem;">Diploma gehaald?</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Ja of nee. De succesmaat bij eenjarige opleidingen (masters).</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.9rem;">
  Eerst <strong>gestart of niet</strong>, dan bij de gestarte studenten <strong>doorstroom</strong> of <strong>diploma</strong>. Alles wat je in het dashboard ziet, gaat over deze ja/nee-vragen.
</div>

</div>

<!--
Voordat we de groepen en de analyses induiken, even het allerbelangrijkste vooropgesteld: waar kijkt de tool eigenlijk naar?

Alle analyses in de tool draaien om een paar simpele ja/nee-vragen. De eerste, en die komt logisch voorop: is de geselecteerde kandidaat ook echt gestart, ja of nee? Wie niet is gestart, is afgewezen of heeft de plek niet aangenomen, en telt niet mee in de analyses over studiesucces.

Bij de studenten die wel zijn gestart, kijken we vervolgens naar twee uitkomsten. Is de student doorgestroomd naar jaar 2, ja of nee? Dat is de succesmaat bij een meerjarige opleiding zoals een bachelor. En: is er een diploma gehaald, ja of nee? Dat is de succesmaat bij een eenjarige opleiding zoals een master.

Alle drie zijn het binaire uitkomsten: ja of nee. En dat is precies wat de verschiltoets en de regressie verderop voorspellen. Houd dat in je achterhoofd: alles wat je straks in het dashboard ziet, gaat uiteindelijk over deze ja/nee-vragen.
-->

---

<!-- SLIDE 12: HOE KOPPELT DE TOOL DE DATA -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Hoe bepaalt de tool studiesucces?

<p class="np-subtitle">Uit die twee ja/nee-maten leidt de tool een indeling in vier groepen af.</p>

<div class="np-grid-2" style="margin-top: 0.4rem;">
  <div class="np-card accent-green">
    <h3 style="color: var(--np-green);">Doorgestroomd naar jaar 2</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De student heeft een inschrijving in het jaar na het eerste studiejaar. Dit is de succesmaat bij meerjarige opleidingen.</p>
  </div>
  <div class="np-card accent-blue">
    <h3 style="color: var(--np-blue);">Diploma gehaald</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Geen jaar 2, maar wel een diploma in het eerste jaar. De succesmaat bij eenjarige opleidingen zoals masters.</p>
  </div>
  <div class="np-card accent-orange">
    <h3 style="color: var(--np-orange);">Gestart, niet naar jaar 2</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De student is begonnen maar heeft geen vervolgjaar. Gestopt of overgestapt.</p>
  </div>
  <div class="np-card accent-pink" style="border-top-color: var(--np-mid-gray);">
    <h3 style="color: var(--np-mid-gray);">Niet gestart</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De kandidaat staat in de selectiedata maar niet in de studiedata. Afgewezen of nooit begonnen.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  De groepindeling wordt <strong>automatisch berekend</strong>. Daar hoef je niets voor te doen.
</div>

</div>

<!--
Een belangrijk concept: hoe bepaalt de tool eigenlijk of iemand het goed heeft gedaan?

Het begint met twee binaire ja/nee-maten. De eerste: is de student doorgestroomd naar jaar 2, ja of nee? De tweede: is er een diploma gehaald, ja of nee? Dat zijn de twee kernvariabelen waar de analyses op draaien, en allebei zijn ze dus binair. Pas daarna, als je die twee binaire maten combineert met de kandidaten die nooit zijn gestart, ontstaat de variabele met meerdere categorieën: de indeling in vier groepen.

De tool maakt dus vier groepen op basis van het inschrijfpatroon. Als een student in het jaar na het eerste studiejaar nog staat ingeschreven, is die doorgestroomd naar jaar 2. Dat is de positieve uitkomst bij meerjarige opleidingen als een bachelor.

Bij eenjarige opleidingen zoals een master is er geen jaar 2. Daar kijkt de tool of iemand het diploma heeft gehaald.

Studenten die wel begonnen zijn maar geen vervolgjaar hebben en geen diploma, die zijn uitgevallen. En kandidaten die in de selectie zitten maar nooit begonnen zijn, dat is de groep "niet gestart".

Het mooie is: dit wordt helemaal automatisch berekend. De tool kijkt naar het patroon in de 1CHO-data en deelt iedereen in. Jij hoeft daar niets voor te doen.
-->

---

<!-- SLIDE 13: KOPPELING -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">
  <div style="font-family: 'Cooper Light BT', serif; font-size: 1.6rem; line-height: 1.5; color: var(--np-blue); max-width: 700px;">
    "De tool koppelt selectiescores aan studiesucces via het studentnummer. Dat is de brug tussen twee werelden: de wereld van de selectie en de wereld van de studie."
  </div>

  <div style="margin-top: 2rem; display: flex; align-items: center; justify-content: center; gap: 2rem;">
    <div style="text-align: center;">
      <div style="height: 90px; width: 90px; margin: 0 auto; background: url(/npuls/powerpoint_illustrations/Document.svg) center/contain no-repeat;"></div>
      <p style="font-size: 0.85rem; margin-top: 0.4rem; color: var(--np-dark-gray);"><strong>Selectie</strong><br/>Scores per kandidaat</p>
    </div>
    <div style="font-size: 3rem; color: var(--np-orange);">&#8596;</div>
    <div style="text-align: center;">
      <div style="height: 90px; width: 90px; margin: 0 auto; background: url(/npuls/powerpoint_illustrations/data.svg) center/contain no-repeat;"></div>
      <p style="font-size: 0.85rem; margin-top: 0.4rem; color: var(--np-dark-gray);"><strong>1CHO</strong><br/>Studiesucces</p>
    </div>
  </div>
</div>

</div>

<!--
De kern van de tool is de koppeling. Links heb je de selectiedata: scores per kandidaat. Rechts heb je de studiedata uit 1CHO: hoe is het die kandidaat vergaan.

De brug tussen die twee werelden is het studentnummer. Zolang het studentnummer in beide bestanden hetzelfde is, kan de tool alles aan elkaar koppelen.

Dat is ook het enige waar je op moet letten: dat het nummer in beide bestanden hetzelfde formaat heeft. Geen voorloopnullen in het ene bestand en wel in het andere, bijvoorbeeld.
-->

---

<!-- SLIDE 14: PRIVACY -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Privacy en dataveiligheid

<div class="np-grid-2" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-green">
    <h3>Je data blijft bij jou</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De tool draait lokaal op je eigen computer. Niets wordt ge-upload naar een server of naar CEDA. Jouw data verlaat nooit je instelling.</p>
  </div>
  <div class="np-card accent-blue">
    <h3>Open source</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De volledige broncode is openbaar. Je kunt precies zien wat de tool doet. Geen black box.</p>
  </div>
  <div class="np-card accent-orange">
    <h3>Ontwikkeld met fictieve data</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Wij bij CEDA werken nooit met echte studentgegevens. Alle ontwikkeling en testen gebeurt met verzonnen data.</p>
  </div>
  <div class="np-card accent-yellow">
    <h3>Geen account nodig</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Gewoon downloaden en starten. Geen registratie, geen login, geen afhankelijkheid van externe diensten.</p>
  </div>
</div>

</div>

<!--
Voordat we het dashboard laten zien, even over privacy. Want we hebben het hier over studentdata met persoonsgegevens.

De tool draait **volledig lokaal** op je eigen computer. Er wordt niets naar een server gestuurd, niets naar de cloud, niets naar CEDA. Jouw data verlaat nooit je instelling.

De broncode is volledig openbaar op GitHub. Je kunt precies zien wat de tool doet. Geen verborgen functionaliteit, geen tracking, niets.

En wij bij CEDA ontwikkelen altijd met fictieve, verzonnen data. Echte studentgegevens komen nooit bij ons.

Je hebt ook geen account nodig. Gewoon downloaden, starten, en klaar.
-->

---

<!-- SUB-DIVIDER: HET DASHBOARD -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(0,0,0,0.6);">14:30 - 15:00 · Onderdeel 3</p>
    <h1 style="color: #000000 !important; font-size: 3rem;">Het dashboard</h1>
    <p style="color: rgba(0,0,0,0.7); font-size: 1.15rem; margin-top: 0.5rem;">Zes tabbladen, één vraag: werkt onze selectie?</p>
  </div>
</div>

<!--
Nu het leukste gedeelte: het dashboard zelf. Het dashboard heeft zes tabbladen, elk met een eigen invalshoek op dezelfde vraag: werkt onze selectie?
-->

---

<!-- SLIDE 16: OVERZICHT TABS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Het dashboard in vogelvlucht

<div class="np-grid-3" style="margin-top: 0.5rem;">
  <div class="np-card accent-blue" style="text-align: center;">
    <div style="height: 54px; width: 54px; margin: 0 auto 0.3rem; background: url(/npuls/powerpoint_illustrations/Lamp.svg) center/contain no-repeat;"></div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">1. Wat valt op</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0.3rem 0 0;">Automatische samenvatting van de opvallendste bevindingen</p>
  </div>
  <div class="np-card accent-green" style="text-align: center;">
    <div style="height: 54px; width: 54px; margin: 0 auto 0.3rem; background: url(/npuls/powerpoint_illustrations/learninganalystics.svg) center/contain no-repeat;"></div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">2. Selectiescores</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0.3rem 0 0;">Boxplots per item, per groep</p>
  </div>
  <div class="np-card accent-orange" style="text-align: center;">
    <div style="height: 54px; width: 54px; margin: 0 auto 0.3rem; background: url(/npuls/powerpoint_illustrations/gesprek.svg) center/contain no-repeat;"></div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">3. Demografie</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0.3rem 0 0;">Achtergrond en uitkomst per groep</p>
  </div>
</div>

<div class="np-grid-3" style="margin-top: 0.6rem;">
  <div class="np-card accent-blue" style="text-align: center;">
    <div style="height: 54px; width: 54px; margin: 0 auto 0.3rem; background: url(/npuls/powerpoint_illustrations/verrekijker.svg) center/contain no-repeat;"></div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">4. Verschiltoets</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0.3rem 0 0;">Is het verschil per item significant?</p>
  </div>
  <div class="np-card accent-green" style="text-align: center;">
    <div style="height: 54px; width: 54px; margin: 0 auto 0.3rem; background: url(/npuls/powerpoint_illustrations/Connecties.svg) center/contain no-repeat;"></div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">5. Correlatie</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0.3rem 0 0;">Meten items hetzelfde of vullen ze elkaar aan?</p>
  </div>
  <div class="np-card accent-orange" style="text-align: center;">
    <div style="height: 54px; width: 54px; margin: 0 auto 0.3rem; background: url(/npuls/powerpoint_illustrations/data.svg) center/contain no-repeat;"></div>
    <h3 style="margin-top: 0.4rem; font-size: 0.95rem;">6. Regressie</h3>
    <p class="muted" style="font-size: 0.76rem; margin: 0.3rem 0 0;">Welke items voorspellen doorstroom het sterkst?</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  En met één klik download je een <strong>PDF-rapport</strong> met alle analyses erin.
</div>

</div>

<!--
Laten we het dashboard doorlopen. Er zijn zes tabbladen, plus een PDF-rapport.

Het eerste, **Wat valt op**, is een automatische samenvatting van de opvallendste bevindingen: welke items voorspellen succes, en zijn er verschillen tussen groepen?

**Selectiescores** toont de scores per item in boxplots, uitgesplitst per groep.

**Demografie** laat zien hoe geslacht en vooropleiding samenhangen met de uitkomst.

**Verschiltoets** toetst per item formeel of een verschil significant is.

**Correlatie** laat zien of items hetzelfde meten of elkaar aanvullen.

**Regressie** berekent welke items samen het sterkst voorspellen of iemand doorstroomt.

En tot slot kun je een **PDF-rapport** downloaden met alle analyses in een deelbaar document.

Laten we de belangrijkste tabbladen een voor een bekijken.
-->

---

<!-- SLIDE 17: WAT VALT OP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Tab: Wat valt op

<p class="np-subtitle"><span class="np-badge blue">Het eerste dat je ziet bij het openen van het dashboard</span></p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- Automatische samenvatting van de **opvallendste bevindingen**
- Elke regel volgt direct uit de data: effectgroottes en p-waarden
- Twee invalshoeken:
  - Welke items voorspellen **studiesucces**?
  - Zijn er **verschillen tussen groepen** (geslacht, vooropleiding)?
- Dezelfde bevindingen komen terug in het **PDF-rapport**

</div>
<div>
  <div class="np-card accent-blue">
    <h3>Datagedreven, geen interpretatie</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Elke conclusie is afgeleid uit een statistische toets. Er wordt niets bijbedacht. Jij maakt de interpretatie.</p>
  </div>
  <div class="np-card accent-green" style="margin-top: 0.8rem;">
    <h3>Startpunt voor het gesprek</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Gebruik dit tabblad als startpunt om met de opleiding in gesprek te gaan over de selectie.</p>
  </div>
</div>
</div>

</div>

<!--
Het eerste tabblad dat je ziet is "Wat valt op". Dit is een automatische samenvatting van de belangrijkste bevindingen uit de data.

De tool kijkt naar alle statistische toetsen die het draait en pikt de opvallendste resultaten eruit. Welke selectie-items onderscheiden het best tussen studenten die slagen en studenten die uitvallen? En zijn er items waar bepaalde demografische groepen significant anders scoren?

Elke regel is direct afgeleid uit de data. Er wordt niets verzonnen of geinterpreteerd door de tool. De interpretatie is aan jou, aan de opleiding, aan het beleid.

Dit tabblad is ook het startpunt van het PDF-rapport: dezelfde bevindingen vormen de conclusiesectie. Zo vertellen dashboard en rapport hetzelfde verhaal.
-->

---

<!-- SCREENSHOT: WAT VALT OP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet "Wat valt op" eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/01_wat_valt_op.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/?demo=leiden&tab=bevindingen" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Dit is het tabblad "Wat valt op" in de tool. Je ziet de automatische samenvatting: per bevinding een regel met de effectgrootte en p-waarde, rechtstreeks uit de toetsen op deze data.
-->

---

<!-- SLIDE 18: TAB SELECTIESCORES -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Tab: Selectiescores

<p class="np-subtitle"><span class="np-badge green">Boxplots per item, uitgesplitst per groep</span></p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- **Boxplots** per item, uitgesplitst per groep
- Doorstromers in het groen, uitvallers in het oranje
- De formele **verschiltoets** zit in een eigen tabblad (zie verderop)
- **"Groepeer op"** knop: wissel tussen uitkomstgroep, geslacht of vooropleiding
- Filteren op **instrument**, **criterium** en **item**

</div>
<div>
  <div class="np-card accent-green">
    <h3>Hoe lees je de boxplots?</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0 0 0.5rem;">Als de groene balk (doorstromers) structureel <strong>hoger</strong> ligt dan de oranje (uitvallers), dan hangt dat item samen met studiesucces.</p>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Als ze grotendeels overlappen, voegt dat item weinig toe.</p>
  </div>
  <div class="np-card accent-orange" style="margin-top: 0.8rem;">
    <h3>Groepeer op geslacht of vooropleiding</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Kies een andere groepering om te zien of bepaalde achtergrondgroepen structureel hoger of lager scoren.</p>
  </div>
</div>
</div>

</div>

<!--
Het tabblad Selectiescores laat de scores per groep zien in boxplots. Dat zijn die diagrammen met een balk en uitsteeksels: de balk is waar de middelste 50% van de scores zit, en de uitsteeksels laten de spreiding zien.

Elke boxplot is uitgesplitst per groep. Als de doorstromers, de groene groep, structureel hoger scoren dan de uitvallers in het oranje, dan weet je: dit onderdeel heeft voorspellende waarde.

Nieuw is de **"Groepeer op"** functie. Standaard groepeer je op uitkomstgroep: succes versus uitval. Maar je kunt ook groeperen op geslacht of vooropleiding. Dan zie je per item of mannen anders scoren dan vrouwen, of VWO-ers anders dan HAVO-ers. Dat is nuttig als je naar de demografische samenstelling van je selectie kijkt.

Je kunt filteren op instrument, criterium en item om per onderdeel in te zoomen.
-->

---

<!-- SCREENSHOT: SELECTIESCORES -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet "Selectiescores" eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/02_selectiescores.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/?demo=leiden&tab=scores" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Het tabblad Selectiescores. Bovenaan de "Groepeer op"-keuze en de filters, daaronder de boxplots per item en een tabel met de gemiddelden per groep. Groen zijn de doorstromers, oranje de uitvallers.
-->

---

<!-- SLIDE 19: VERSCHILTOETS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# De verschiltoets: is het verschil echt?

<p class="np-subtitle">Een eigen tabblad dat per item formeel toetst of het verschil significant is.</p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div>
  <div class="np-card accent-blue">
    <h3>Uitkomstgroepen vergelijken</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0 0 0.3rem;">Scoorden succesvolle studenten echt hoger?</p>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Toets: <strong>Mann-Whitney U</strong>. Vergelijkt twee groepen (succes vs. uitval) zonder aan te nemen dat de scores een bepaalde verdeling volgen. Robuust voor scheve data en kleine groepen.</p>
  </div>
  <div class="np-card accent-orange" style="margin-top: 0.8rem;">
    <h3>Demografische groepen vergelijken</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0 0 0.3rem;">Scoren mannen anders dan vrouwen? VWO-ers anders dan HAVO-ers?</p>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Toets: <strong>Kruskal-Wallis</strong>. Vergelijkt meer dan twee groepen tegelijk, ook zonder aannames over de verdeling.</p>
  </div>
</div>
<div style="font-size: 0.92rem; line-height: 1.7;">

**Wat de tabel per item toont:**

- **Effectgrootte**: hoe groot is het verschil, op een vergelijkbare schaal (-1 tot +1)
- **95%-interval**: hoe zeker zijn we?
- **p-waarde**: zou dit verschil ook door toeval kunnen ontstaan?

Een item met een sterk, significant effect is het waard om te behouden. Een item met een verwaarloosbaar effect voegt weinig toe.

<p class="muted" style="font-size: 0.8rem; margin-top: 0.6rem;">Let op: deze toets kijkt alleen naar <strong>geselecteerde kandidaten die zijn gestart</strong>, en of ze wel of niet doorstromen. Afgewezen kandidaten zitten er niet in.</p>

</div>
</div>

</div>

<!--
De verschiltoets heeft een eigen tabblad. Waar de boxplots op het vorige tabblad je visueel laten zien of er een verschil is, berekent de verschiltoets of dat verschil ook statistisch significant is.

De tool gebruikt twee soorten toetsen, afhankelijk van wat je vergelijkt.

Bij **uitkomstgroepen** vergelijk je succes versus uitval. Dat zijn twee groepen. Daar gebruiken we de **Mann-Whitney U**-toets. Die is gekozen omdat selectiescores vaak niet mooi verdeeld zijn: je hebt veel studenten met middelmatige scores en een paar uitschieters. De Mann-Whitney werkt prima met dat soort scheve data en is betrouwbaar bij kleine groepen.

Bij **demografische groepen**, zoals geslacht of vooropleiding, heb je vaak meer dan twee groepen (man/vrouw/anders, of VWO/HAVO/MBO). Daar gebruiken we de **Kruskal-Wallis**-toets. Die doet hetzelfde als de Mann-Whitney, maar dan voor drie of meer groepen.

Per item zie je een effectgrootte, een betrouwbaarheidsinterval, en een p-waarde. De effectgrootte vertelt je hoe groot het verschil is. De p-waarde vertelt of dat verschil niet gewoon toeval kan zijn. Samen geven ze je de onderbouwing om te zeggen: dit onderdeel maakt echt verschil, of juist niet.
-->

---

<!-- SCREENSHOT: VERSCHILTOETS -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet "Verschiltoets" eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/04_verschiltoets.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/?demo=leiden&tab=verschil" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Het tabblad Verschiltoets. Per item zie je de effectgrootte, het betrouwbaarheidsinterval en de p-waarde. De significante items zijn gemarkeerd, zodat je in een oogopslag ziet welke onderdelen echt onderscheid maken.
-->

---

<!-- SLIDE 20a: TAB CORRELATIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Tab: Correlatie

<p class="np-subtitle"><span class="np-badge green">Een heatmap: meten items hetzelfde of vullen ze elkaar aan?</span></p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div>
  <div class="np-card accent-green">
    <h3>Hoe hangen items samen?</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">De heatmap laat per itempaar zien hoe sterk ze samenhangen. Een hoge correlatie betekent dat twee items grotendeels hetzelfde meten.</p>
  </div>
  <div class="np-card accent-blue" style="margin-top: 0.8rem;">
    <h3>Waarom dit nuttig is</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Meten twee onderdelen hetzelfde, dan is er overlap en is een van de twee misschien overbodig. Vullen ze elkaar juist aan, dan dragen ze allebei iets eigens bij.</p>
  </div>
</div>
<div style="font-size: 0.92rem; line-height: 1.7;">

**Wat kun je hiermee?**

- Zie welke onderdelen **overlappen** en dus mogelijk vervangbaar zijn
- Zie welke items elkaar juist **aanvullen**
- De tool **standaardiseert** alle scores eerst naar z-scores, zodat items met verschillende schalen vergelijkbaar worden

</div>
</div>

<div class="np-bottomline" style="margin-top: 0.6rem;">
  De analyse kijkt op <strong>itemniveau</strong>: de weging binnen een instrument of criterium is niet eenvoudig te bepalen en ligt niet voor de hand.
</div>

</div>

<!--
Het tabblad Correlatie laat met een heatmap zien hoe de selectie-onderdelen onderling samenhangen. Als een competentietest en een motivatiegesprek heel sterk correleren, dan meten ze waarschijnlijk hetzelfde. Dan kun je je afvragen of je ze allebei nodig hebt. Vullen items elkaar juist aan, dan dragen ze allebei iets eigens bij.

Omdat selectiescores op heel verschillende schalen zitten, van 1-3 beoordelingen tot 0-100 schaalscores, standaardiseren we alle scores eerst naar z-scores. Zo worden de items vergelijkbaar.

We kijken bewust op itemniveau, niet op het niveau van instrument of criterium. Hoe je de losse items binnen een instrument tot een totaal zou moeten wegen, is namelijk niet eenvoudig te bepalen en ligt niet voor de hand.
-->

---

<!-- SCREENSHOT: CORRELATIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet "Correlatie" eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/05_correlatie.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/?demo=leiden&tab=correlatie" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Het tabblad Correlatie. De heatmap laat per itempaar zien hoe sterk ze samenhangen. Donkere vlakken betekenen sterke overlap: die items meten waarschijnlijk hetzelfde.
-->

---

<!-- SLIDE 20b: TAB REGRESSIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Tab: Regressie

<p class="np-subtitle"><span class="np-badge blue">Welke items voorspellen doorstroom het sterkst?</span></p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div>
  <div class="np-card accent-blue">
    <h3>Logistische regressie</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0 0 0.3rem;">Voorspelt welke items het sterkst bijdragen aan doorstroom.</p>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Waarom logistisch? Omdat de uitkomst binair is: een student stroomt door, of niet. Logistische regressie is ontworpen voor precies dat soort ja/nee-voorspellingen.</p>
  </div>
  <div class="np-card accent-orange" style="margin-top: 0.8rem;">
    <h3>Automatisch opgeschoond</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Items met te weinig data of te veel overlap worden automatisch weggelaten en gerapporteerd.</p>
  </div>
</div>
<div style="font-size: 0.92rem; line-height: 1.7;">

**Wat kun je hiermee?**

- Ontdek welke onderdelen **het meest bijdragen** aan de voorspelling
- Check of onderdelen **overlappen** en dus vervangbaar zijn
- De tool **normaliseert** alle scores eerst (z-scores), zodat items met verschillende schalen vergelijkbaar worden

<p class="muted" style="font-size: 0.8rem; margin-top: 0.4rem;">De regressie kijkt alleen naar <strong>ingeschreven studenten</strong>: van de kandidaten die zijn gestart, wie stroomt door en wie niet.</p>

</div>
</div>

<div class="np-bottomline" style="margin-top: 0.6rem;">
  Net als de correlatie kijkt de regressie op <strong>itemniveau</strong> en <strong>standaardiseert</strong> de scores naar z-scores.
</div>

</div>

<!--
Het tabblad Regressie gaat een stap verder dan de correlatie. De logistische regressie kijkt naar alle items tegelijk en berekent welk item het sterkst bijdraagt aan het voorspellen van doorstroom. We gebruiken logistische regressie omdat de uitkomst binair is: een student stroomt door, of niet. Gewone regressie is bedoeld voor continue uitkomsten zoals een cijfer; logistische regressie is specifiek voor ja/nee-uitkomsten.

Omdat selectiescores op hele verschillende schalen zitten worden alle scores eerst genormaliseerd naar z-scores. Elk effect drukt dan uit wat een standaarddeviatie verschil doet, ongeacht de oorspronkelijke schaal.

De tool laat onderdelen weg als er te weinig studenten zijn voor het aantal items, of als items te veel overlappen. Dat wordt netjes gemeld in het dashboard. Ook hier kijken we op itemniveau.
-->

---

<!-- SLIDE: REGRESSIE - UNIVARIAAT VS GEZAMENLIJK -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Regressie: twee blikken op dezelfde vraag

<p class="np-subtitle">De tool toont elk item eerst apart, en daarna alle items tegelijk.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
  <div class="np-card accent-green">
    <h3>Univariaat: elk item apart</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Elk selectie-onderdeel wordt op zichzelf getoetst tegen doorstroom. Hier valt niets weg: je ziet de "rauwe" voorspellende kracht van elk item los van de rest.</p>
  </div>
  <div class="np-card accent-blue">
    <h3>Gezamenlijk: alle items samen</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Alle items in een model tegelijk. Nu zie je welk item nog een eigen bijdrage levert bovenop de andere. Items kunnen hier hun significantie verliezen door overlap.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Juist het verschil is leerzaam: een item dat alleen univariaat sterk is, <strong>overlapt</strong> waarschijnlijk met een ander onderdeel.
</div>

</div>

<!--
Een belangrijk detail over de regressie: de tool laat hem op twee manieren zien, en dat is bewust.

Eerst univariaat. Dan toetsen we elk selectie-onderdeel op zichzelf tegen doorstroom, los van alle andere. Hier valt niets weg. Je ziet per item de rauwe voorspellende kracht: voorspelt dit onderdeel in zijn eentje of iemand doorstroomt?

Daarna het gezamenlijke model. Dan stoppen we alle items tegelijk in een model. Nu is de vraag niet meer of een item voorspelt, maar of het nog iets toevoegt bovenop de andere items. En dat is precies waar het interessant wordt: een item dat univariaat sterk leek, kan in het gezamenlijke model zijn significantie verliezen. Dat betekent meestal dat het overlapt met een ander onderdeel dat dezelfde informatie al levert.

Door allebei te tonen zie je niet alleen wat voorspelt, maar ook wat uniek bijdraagt. Dat is waardevolle informatie als je wilt nadenken over welke onderdelen je kunt schrappen.
-->

---

<!-- SCREENSHOT: REGRESSIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet "Regressie" eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/06_regressie.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/?demo=leiden&tab=regressie" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Het tabblad Regressie. Eerst het univariate model, dan het gezamenlijke model. Per item de coefficient, de odds ratio en de p-waarde. Bij weinig studenten worden de zwakste items automatisch weggelaten; dat staat erboven gemeld.
-->

---

<!-- SLIDE 21: DEMOGRAFISCH VIA GROEPEREN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Demografie bekijken via "Groepeer op"

<p class="np-subtitle"><span class="np-badge orange">Verschillen tussen demografische groepen in beeld</span></p>

<div class="np-grid-2" style="align-items: start; margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

Naast een eigen **Demografie-tab** kies je op de Selectiescores- en Verschiltoets-tab via **"Groepeer op"** waarop je wilt splitsen:

- **Uitkomstgroep** (standaard): succes vs. uitval
- **Geslacht**: scoren mannen anders dan vrouwen?
- **Vooropleiding**: scoren VWO-ers anders dan HAVO-ers of MBO-ers?

De boxplots en de verschiltoets passen zich automatisch aan.

</div>
<div>
  <div class="np-card accent-orange">
    <h3>Waarom dit ertoe doet</h3>
    <p style="font-size: 0.9rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Als een selectie-item structureel lager scoort voor een bepaalde groep, kan dat wijzen op bias in het instrument. Die informatie helpt bij het verbeteren van de selectie.
    </p>
  </div>
  <div class="np-card accent-blue" style="margin-top: 0.8rem;">
    <h3>Beperking</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Achtergrondgegevens komen uit 1CHO en zijn er alleen voor ingeschreven studenten, niet voor alle kandidaten.</p>
  </div>
</div>
</div>

</div>

<!--
Een van de krachtigste functies is de "Groepeer op" knop. Standaard zie je de boxplots uitgesplitst op uitkomstgroep: succes versus uitval. Maar je kunt ook kiezen voor geslacht of vooropleiding.

Dan zie je per selectie-item of er structurele verschillen zijn. Scoren vrouwen systematisch lager op de kennistoets? Scoren MBO-ers lager op het gesprek? Dat soort patronen zijn belangrijk om te kennen als je naar de demografische samenstelling van je selectie kijkt.

En het mooie is: de verschiltoets eronder past zich automatisch aan. Bij twee groepen, zoals mannen en vrouwen, krijg je een Mann-Whitney U. Bij meer dan twee groepen, zoals VWO/HAVO/MBO, krijg je een Kruskal-Wallis. Zo krijg je meteen een formele onderbouwing.

Belangrijk om te weten: de achtergrondgegevens komen uit de 1CHO-data en zijn er alleen voor studenten die daadwerkelijk ingeschreven zijn. Je kunt dus vergelijken binnen de ingeschreven groep, maar niet alle kandidaten die ooit hebben gesolliciteerd.
-->

---

<!-- SCREENSHOT: DEMOGRAFIE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Zo ziet "Demografie" eruit

<div class="embed-wrap" style="position: relative; width: 880px; height: 450px; margin: 0.2rem auto 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
  <img src="/shots/03_demografie.png" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; background: white;" />
  <iframe class="embed-live" src="http://127.0.0.1:8050/?demo=leiden&tab=demografie" style="position: absolute; top: 0; left: 0; width: 1257px; height: 643px; transform: scale(0.70); transform-origin: top left; border: 0; background: white;" loading="lazy"></iframe>
</div>

</div>

<!--
Het tabblad Demografie. Hier kies je een achtergrondkenmerk, zoals geslacht of vooropleiding, en zie je hoe dat samenhangt met de studieuitkomst. Zo krijg je een beeld van de samenstelling van de groep en mogelijke verschillen.
-->

---

<!-- SLIDE 21: PDF RAPPORT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# PDF-rapport genereren

<p class="np-subtitle">Alle analyses in een document dat je kunt delen.</p>

<div class="np-grid-2" style="align-items: center; margin-top: 0.5rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

- Eenknop-download vanuit het dashboard
- Bevat **alle analyses uit het dashboard** met grafieken en tabellen
- Inclusief een **automatische samenvatting** met de belangrijkste bevindingen
- Geschikt om te delen met collega's, bestuur of accreditatiecommissie
- PDF-formaat, dus overal te openen

</div>
<div>
  <div class="np-card accent-blue" style="text-align: center; padding: 1.5rem;">
    <div style="height: 80px; width: 80px; margin: 0 auto 0.6rem; background: url(/npuls/powerpoint_illustrations/Document.svg) center/contain no-repeat;"></div>
    <h3>Rapport downloaden</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Klik op de downloadknop in het dashboard. Binnen een minuut heb je een volledig rapport.</p>
  </div>
</div>
</div>

</div>

<!--
Naast het interactieve dashboard kun je ook een PDF-rapport genereren. Dat is handig als je de resultaten wilt delen met collega's die niet zelf met de tool gaan werken, of als je het wilt opnemen in een accreditatiedossier.

Het rapport bevat alle analyses uit het dashboard: selectiescores, demografie, verschiltoets, correlatie en regressie. Inclusief alle grafieken en tabellen. En er zit een automatische samenvatting bij die de belangrijkste bevindingen op een rij zet.

Je klikt gewoon op de downloadknop in het dashboard en binnen een minuut heb je het rapport.
-->

---

<!-- SLIDE 22: VOOR WIE IS DIT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Voor wie is deze tool?

<div class="np-grid-2" style="margin-top: 0.5rem;">
  <div class="np-card accent-blue">
    <h3>Opleidingsdirecteuren</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Onderbouw beslissingen over de selectieprocedure. Laat zien welke onderdelen werken en welke niet.</p>
  </div>
  <div class="np-card accent-green">
    <h3>Beleidsmedewerkers</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Bereid beleidsstukken voor met data. Vergelijk cohorten, signaleer trends, onderbouw aanbevelingen.</p>
  </div>
  <div class="np-card accent-orange">
    <h3>Kwaliteitszorg</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Neem de resultaten op in accreditatiedossiers. Laat zien dat de selectie objectief getoetst is.</p>
  </div>
  <div class="np-card accent-yellow">
    <h3>Institutional research</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Combineer met eigen analyses. De data en de config zijn herbruikbaar.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Je hoeft <strong>niet technisch</strong> te zijn om de tool te gebruiken. Uploaden, klikken, lezen.
</div>

</div>

<!--
Voor wie is deze tool dan? Eigenlijk voor iedereen die betrokken is bij selectie in het hoger onderwijs.

**Opleidingsdirecteuren** kunnen ermee onderbouwen welke onderdelen van de selectie werken en welke niet.

**Beleidsmedewerkers** kunnen de resultaten gebruiken in beleidsstukken: cohorten vergelijken, trends signaleren, aanbevelingen onderbouwen.

**Kwaliteitszorg** kan de PDF-rapporten opnemen in accreditatiedossiers.

En voor **institutional research** is het een startpunt: de data en configuratie zijn herbruikbaar als je zelf verder wilt analyseren.

En je hoeft niet technisch te zijn. De tool is ontworpen voor mensen die werken met beleid en onderwijs, niet met code.
-->

---

<!-- SLIDE 23: STAP VOOR STAP -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# In vijf stappen aan de slag

<div style="display: flex; flex-direction: column; gap: 0.9rem; margin-top: 0.8rem;">

<div style="display: flex; align-items: center; gap: 1rem;">
  <span class="np-num">1</span>
  <div style="flex: 1;">
    <strong>Verzamel je selectiebestand</strong>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Het Excel met de scores. Heb je al.</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
  <span class="np-num" style="background: var(--np-orange);">2</span>
  <div style="flex: 1;">
    <strong>Haal de 1CHO-data op</strong>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Vraag het op bij informatiemanagement of gebruik de 1cijferHO-tool.</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
  <span class="np-num" style="background: var(--np-green);">3</span>
  <div style="flex: 1;">
    <strong>Start de tool en upload</strong>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Upload je selectiebestand en laat de config wizard het werk doen.</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
  <span class="np-num" style="background: var(--np-yellow); color: var(--np-black);">4</span>
  <div style="flex: 1;">
    <strong>Verken het dashboard</strong>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Bekijk de tabbladen en filter op wat je interesseert.</p>
  </div>
</div>

<div style="display: flex; align-items: center; gap: 1rem;">
  <span class="np-num" style="background: var(--np-pink); color: var(--np-black);">5</span>
  <div style="flex: 1;">
    <strong>Download het rapport</strong>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Genereer een PDF en deel het met je collega's.</p>
  </div>
</div>

</div>

</div>

<!--
Hoe kom je van nul naar inzicht? Vijf stappen.

**Stap 1:** Pak je selectiebestand erbij. Dat heb je al.

**Stap 2:** Zorg dat je de 1CHO-data hebt. Vraag het op bij informatiemanagement of gebruik de 1cijferHO-tool van CEDA om het uit het ruwe bestand te halen.

**Stap 3:** Start de tool, upload je selectiebestand, en laat de config wizard de rest doen. Die detecteert automatisch welke kolommen scores zijn.

**Stap 4:** Verken het dashboard. Klik door de tabbladen, filter op wat je interesseert.

**Stap 5:** Download het PDF-rapport en deel het met je collega's, de opleidingsdirecteur, of de accreditatiecommissie.

Vijf stappen. Geen code, geen technische kennis. Gewoon uploaden en lezen.
-->

---

<!-- SLIDE 24: MEERDERE OPLEIDINGEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Werkt voor elke opleiding

<p class="np-subtitle">De tool past zich aan aan jouw selectieprocedure, niet andersom.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div>
  <div class="np-card accent-blue">
    <h3>Bachelors</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Studiesucces = doorstroom naar jaar 2. Typisch meerdere selectie-onderdelen, grote cohorten.</p>
  </div>
  <div class="np-card accent-orange" style="margin-top: 0.8rem;">
    <h3>Masters</h3>
    <p class="muted" style="font-size: 0.86rem; margin: 0;">Studiesucces = diploma gehaald. Eenjarige opleiding, geen jaar 2, dus andere succesmaat.</p>
  </div>
</div>
<div style="font-size: 0.92rem; line-height: 1.7;">

Wat maakt het flexibel?

- Het **configuratiebestand** vertaalt elk selectieformaat naar hetzelfde model
- De **groep-indeling** past zich automatisch aan: doorstroom voor bachelors, diploma voor masters
- Analyse werkt nu **per cohort**; meerdere cohorten vergelijken is nog niet ingebouwd
- De demodata bevat voorbeelden van beide typen

</div>
</div>

</div>

<!--
Belangrijk om te weten: de tool werkt voor elke opleiding die selecteert. Of het nu een bacheloropleiding is met vijf selectie-onderdelen of een masteropleiding met twee.

Bij een meerjarige bachelor is succes: doorstroom naar jaar 2. Bij een eenjarige master is succes: diploma gehaald. De tool schakelt automatisch over op basis van wat er in de data zit.

En doordat je voor elke opleiding een eigen configuratie kunt maken, past de tool zich aan aan jouw selectiebestand. Niet andersom. Je hoeft je bestand niet om te bouwen.
-->

---

<!-- SLIDE 24b2: BEPERKINGEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Beperkingen

<p class="np-subtitle">Waar je rekening mee houdt, en waar we aan willen werken.</p>

<div class="np-grid-2" style="margin-top: 0.3rem; align-items: start;">
<div>
  <div class="np-card accent-blue">
    <h3>Analyse vooral op itemniveau</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0 0 0.5rem;">Items krijgen een score en zijn daarom het meest voor de hand liggend om statistisch te toetsen. Op <strong>instrument-</strong> en <strong>criteriumniveau</strong> toetsen we (nog) niet; daar kun je wel op <strong>filteren</strong>.</p>
    <span class="np-badge blue">Wens vanuit Leiden: hier meer aandacht aan</span>
  </div>
</div>
<div style="display: flex; flex-direction: column; gap: 0.6rem;">
  <div class="np-card accent-orange" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">Alleen numerieke scores</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Tekstvelden, categorische beoordelingen (voldoende/onvoldoende, A/B/C) en open antwoorden kunnen niet getoetst worden.</p>
  </div>
  <div class="np-card accent-green" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">Demografie is een eerste signaal</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">De groepsverschillen geven een indicatie, geen volledige fairness-beoordeling.</p>
  </div>
  <div class="np-card accent-yellow" style="padding: 0.7rem 1rem;">
    <h3 style="font-size: 0.95rem;">Een selectiebestand per keer</h3>
    <p class="muted" style="font-size: 0.82rem; margin: 0;">Meerdere bestanden per selectieprocedure samenvoegen kan nog niet.</p>
  </div>
</div>
</div>

<div class="np-bottomline" style="margin-top: 0.7rem;">
  Het dashboard is een <strong>momentopname</strong>: het toont de data zoals je die hebt ge&uuml;pload en ververst niet vanzelf.
</div>

</div>

<!--
Even eerlijk over de beperkingen van de tool.

De belangrijkste: we analyseren vooral op itemniveau. Dat is een bewuste keuze. Items zijn de onderdelen die een score krijgen, en die kun je dus het meest voor de hand liggend statistisch toetsen. Op het niveau van instrument of criterium doen we dat nu niet; daar kun je wel op filteren, maar er draaien geen aparte toetsen op. Vanuit Leiden is er expliciet behoefte om hier meer aandacht aan te besteden, dus dat nemen we mee als aandachtspunt.

Daarnaast werkt de tool alleen met numerieke scores. Tekst, categorische beoordelingen zoals voldoende/onvoldoende, en open antwoorden kunnen niet worden getoetst; die laat je weg uit de config of zet je eerst om naar een getal.

De demografische analyse is een eerste signaal, geen volledige fairness-beoordeling. Ze laat zien of groepen anders scoren, maar een gevalideerd oordeel over eerlijkheid vraagt om meer.

En je kunt nu een selectiebestand per keer uploaden; meerdere bestanden per selectieprocedure samenvoegen kan nog niet.
-->

---

<!-- SLIDE 24c: VERVOLGSTAPPEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Vervolgstap: gerichter vergelijken

<p class="np-subtitle">Van het gemiddelde cijfer naar het cijfer dat er echt toe doet.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">DUO</span>
    <h3 style="margin-top: 0.5rem;">VAKHAVW koppelen</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Eindexamencijfers per vak uit havo/vwo, in plaats van alleen het gemiddelde.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Over de tijd</span>
    <h3 style="margin-top: 0.5rem;">Cohorten vergelijken</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;"><strong>Nog niet ingebouwd:</strong> nu een cohort tegelijk. De wens: meerdere jaargangen naast elkaar.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  De tool is open source: <strong>vervolgstappen bepalen we samen met de instellingen</strong>.
</div>

</div>

<!--
Een concrete vervolgstap die vaak terugkomt: rijkere data over de vooropleiding.

Nu vergelijken we, als dat er is, met het gemiddelde eindexamencijfer. Maar DUO heeft ook VAKHAVW-data: de eindexamencijfers per vak uit havo en vwo. Daarmee kun je veel gerichter kijken. Voorspelt het selectie-onderdeel iets bovenop het cijfer voor wiskunde, of bovenop biologie? Dat is veel informatiever dan een algemeen gemiddelde.

En je kunt een opleidingsvak en een selectie-onderdeel slim aan elkaar koppelen. Let op: dit gaat om een vak uit de opleiding zelf, niet uit de vooropleiding. Bij Leiden bijvoorbeeld ligt het voor de hand om het opleidingsvak Wetenschappelijke Vaardigheden naast het selectie-onderdeel te leggen dat hetzelfde beoogt te meten, zoals de wetenschappelijke casus. De vraag is dan: voorspelt de selectie het cijfer voor dat vak?

Verder denken we aan het vergelijken van cohorten over meerdere jaren. Let op: dat zit er nu nog niet in, je analyseert op dit moment een cohort tegelijk.

Dit zijn ideeen, geen beloftes. De tool is open source, en welke vervolgstap we als eerste oppakken bepalen we samen met de instellingen.
-->

---

<!-- SLIDE 25: CEDA CONTEXT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">14:30 - 15:00</p>

# Gebouwd door CEDA

<p class="np-subtitle">Onderdeel van een breder landelijk programma voor data in het onderwijs.</p>

<div class="np-grid-2" style="align-items: center; margin-top: 0.3rem;">
<div style="font-size: 0.92rem; line-height: 1.7;">

**CEDA** is het Centre of Educational Data Analytics, een team binnen Npuls dat concrete dataproducten bouwt voor het hoger onderwijs.

- De selectie-evaluatietool is een van **meerdere open source tools** die CEDA ontwikkelt
- Gebouwd in **co-creatie** met opleidingen die selecteren
- Beschikbaar voor **elke instelling** in Nederland
- Onderdeel van de **Npuls** missie: data en AI inzetten voor beter onderwijs

</div>
<div>
  <div class="np-card accent-blue">
    <h3>Meer CEDA-tools</h3>
    <ul style="font-size: 0.86rem;">
      <li><strong>1cijferHO-tool</strong> voor datavoorbereiding</li>
      <li><strong>Staat van Onderwijsinstelling</strong> voor KPI-dashboards</li>
      <li><strong>Studentprognose</strong> voor instroomvoorspelling</li>
      <li><strong>Onderwijsdata-chat</strong> voor vragen aan je data</li>
    </ul>
    <div style="margin-top: 0.6rem;"><span class="np-badge blue">github.com/cedanl</span></div>
  </div>
</div>
</div>

</div>

<!--
Even de context. Deze tool is gebouwd door CEDA, het Centre of Educational Data Analytics. CEDA is een team binnen Npuls dat concrete, werkende tools bouwt voor data in het onderwijs. Allemaal open source, allemaal beschikbaar voor elke instelling.

De selectie-evaluatietool is een van meerdere producten. We bouwen ook tools voor datavoorbereiding, dashboards voor instellings-KPI's, en een instroomprognosemodel dat al in productie draait bij meerdere universiteiten.

Alles wat we bouwen is open source en draait op je eigen infrastructuur.
-->

---

<!-- MAIN-DIVIDER: DASHBOARD TESTEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">15:00 - 15:30</p>
    <h1 style="color: #FFFFFF !important; font-size: 2.8rem;">Dashboard testen in groepjes</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.1rem; margin-top: 0.6rem; max-width: 680px; margin-left: auto; margin-right: auto;">Twee groepen, Nijmegen en Leiden, testen het dashboard met fictieve data en schrijven hun bevindingen op post-its.</p>
  </div>
</div>

<!--
DEMO: Schakel over naar de browser met de tool op localhost:8050. Budget: 10-15 minuten.

Plan:
1. Laat het uploadscherm zien
2. Kies de demodata (Gezondheidskunde Univ Noordstad 2026)
3. Loop door de validatie en open het dashboard
4. Laat elk tabblad zien met de filters
5. Laat de config wizard zien: upload het selectiebestand opnieuw en laat zien hoe de wizard het detecteert
6. Genereer het PDF-rapport
7. Open eventueel de tweede demoset (Sportkunde HS Westland) om het verschil te laten zien

Sleutelzinnen voor de demo:
- "Kijk hoe de groene boxplot hier hoger ligt: dat onderdeel voorspelt doorstroom"
- "En hier zien we dat de competentietest en het gesprek sterk correleren, dat betekent dat ze misschien hetzelfde meten"
- "Dit is helemaal automatisch, je hoeft zelf niks te berekenen"

Belangrijk: vraag de aanwezigen om tijdens de demo hun bevindingen, vragen en ideeen op post-its te schrijven. Die halen we daarna op en gebruiken we voor de bespreking. Dit is een fysieke sessie, dus maak daar gebruik van.
-->

---

<!-- LIVE DASHBOARD EMBED -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; overflow: hidden;">
  <iframe
    src="http://127.0.0.1:8050/?demo=leiden&tab=bevindingen"
    style="width: 1280px; height: 720px; transform: scale(0.74); transform-origin: center center; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,0.15); background: white;"
    loading="lazy"
  ></iframe>
</div>

<!--
Dit is het echte dashboard, live ingebed in de slide (draait op localhost:8050). Hiermee kun je tijdens de sessie direct door de tool klikken zonder van scherm te wisselen.

Let op: dit werkt alleen zolang de tool lokaal draait. In een geexporteerde PDF is dit een lege of statische plek; gebruik daarvoor de screenshots.
-->

---

<!-- DEMO: VRAGEN OP POST-IT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<p class="eyebrow">15:00 - 15:30</p>

# Schrijf op je post-it

<p class="np-subtitle">We willen vooral weten of de tool begrijpelijk en werkbaar is. Noteer je antwoorden.</p>

<div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 0.8rem;">
  <div style="display: flex; align-items: center; gap: 0.9rem;">
    <span class="np-num">1</span>
    <div>Zijn de <strong>statistische toetsen</strong> te begrijpen? Zo niet: wat zou het begrijpbaarder maken?</div>
  </div>
  <div style="display: flex; align-items: center; gap: 0.9rem;">
    <span class="np-num" style="background: var(--np-orange);">2</span>
    <div>Is het <strong>dashboard</strong> prettig en logisch in gebruik? Waar liep je vast?</div>
  </div>
  <div style="display: flex; align-items: center; gap: 0.9rem;">
    <span class="np-num" style="background: var(--np-green);">3</span>
    <div>Welke <strong>vraag</strong> zou je aan je eigen selectiedata willen stellen?</div>
  </div>
  <div style="display: flex; align-items: center; gap: 0.9rem;">
    <span class="np-num" style="background: var(--np-yellow); color: var(--np-black);">4</span>
    <div>Geeft de tool <strong>antwoord</strong> op die vraag?</div>
  </div>
</div>

</div>

<!--
Tijdens de demo willen we vooral weten of de tool begrijpelijk en bruikbaar is. Houd deze vragen in je achterhoofd en schrijf je antwoorden op een post-it. Die halen we daarna op.

Een: zijn de statistische toetsen te begrijpen? En als dat niet zo is, wat zou helpen om het begrijpbaarder te maken? Dit is voor ons extra waardevol, want de statistiek mag geen drempel zijn.
Twee: is het dashboard prettig en logisch in gebruik? Waar liep je vast of moest je zoeken?
Drie: welke vraag zou je aan je eigen selectiedata willen stellen?
Vier: en geeft de tool daar antwoord op?

Het hoeven geen perfecte of diepe antwoorden te zijn; je eerste indrukken zijn precies wat we zoeken.
-->

---

<!-- MAIN-DIVIDER: BRAINSTORM -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">15:30 - 16:00</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Brainstorm</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.6rem; max-width: 680px; margin-left: auto; margin-right: auto;">De groepen presenteren hun post-its, daarna denken we samen verder.</p>
  </div>
</div>

<!--
Tot slot de brainstorm, van 15:30 tot 16:00. De twee groepen presenteren hun post-its. We clusteren de bevindingen, bespreken de opvallendste punten en denken samen verder over de vervolgstappen.
-->

---

<!-- SLIDE 27: VRAGEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

<div style="display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 2rem;">

<div style="height: 120px; width: 120px; margin: 0 auto 1rem; background: url(/npuls/powerpoint_illustrations/gesprek.svg) center/contain no-repeat;"></div>

<h1 style="font-size: 2.5rem;">Vragen?</h1>

<p style="font-size: 1.1rem; color: var(--np-dark-gray); max-width: 600px; line-height: 1.6; margin-top: 0.5rem;">
  Waar ben je benieuwd naar? Over de data, het dashboard, of hoe je het kunt inzetten bij je instelling?
</p>

</div>

</div>

<!--
Nu is er tijd voor vragen. Stel gerust alles wat je wilt weten: over de data die je nodig hebt, over hoe het dashboard werkt, of over hoe je de tool kunt inzetten binnen je instelling.

Budget: 5-10 minuten voor vragen.
-->

---

<!-- SLIDE 28: WAT KUN JE MORGEN AL DOEN -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat kun je morgen al doen?

<div class="np-grid-3" style="margin-top: 0.8rem;">
  <div class="np-card accent-blue text-center">
    <h3>Check je selectiedata</h3>
    <p class="muted" style="font-size: 0.85rem; margin: 0;">Ga na of je het Excel-bestand met selectiescores kunt vinden. Meestal zit het bij de opleiding of het testbureau.</p>
  </div>
  <div class="np-card accent-green text-center">
    <h3>Vraag de 1CHO-data op</h3>
    <p class="muted" style="font-size: 0.85rem; margin: 0;">Neem contact op met informatiemanagement en vraag de 1CHO-data aan voor de relevante cohorten.</p>
  </div>
  <div class="np-card accent-orange text-center">
    <h3>Probeer de demodata</h3>
    <p class="muted" style="font-size: 0.85rem; margin: 0;">Start de tool en laad de fictieve data. Zo kun je alvast zien wat het oplevert, zonder eigen data nodig te hebben.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 1rem;">
  De tool is <strong>nu beschikbaar</strong> en gratis te gebruiken.
</div>

</div>

<!--
Tot slot: wat kun je morgen al doen?

**Een:** ga na of je het selectiebestand kunt vinden. Meestal zit het bij de opleiding zelf of bij het testbureau dat de afnames doet.

**Twee:** neem contact op met informatiemanagement en vraag de 1CHO-data aan voor de cohorten die je wilt evalueren.

**Drie:** als je alvast wilt kijken, start dan de tool en laad de demodata. Dan kun je door het hele dashboard klikken zonder eigen data nodig te hebben. Zo weet je precies wat het oplevert voordat je er tijd in steekt.
-->

---

<!-- SLIDE 29: CONTACT -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Meer weten?

<div class="np-grid-3" style="margin-top: 0.8rem;">
  <div class="np-card accent-blue text-center">
    <h3>De tool op GitHub</h3>
    <p class="muted" style="font-size: 0.85rem; margin: 0;">Alles open, alles gratis.</p>
    <div style="margin-top: 0.6rem;"><span class="np-badge blue">github.com/cedanl</span></div>
  </div>
  <div class="np-card accent-green text-center">
    <h3>Data &amp; AI community</h3>
    <p class="muted" style="font-size: 0.85rem; margin: 0;">Deel ervaringen met collega's uit het hele land.</p>
    <div style="margin-top: 0.6rem;"><span class="np-badge green">community.npuls.nl/groups/data-ai</span></div>
  </div>
  <div class="np-card accent-orange text-center">
    <h3>Neem contact op</h3>
    <p class="muted" style="font-size: 0.85rem; margin: 0;">Vragen, feedback of ideeën?</p>
    <div style="margin-top: 0.6rem;"><span class="np-badge orange">ceda@surf.nl</span></div>
  </div>
</div>

</div>

<!--
Drie manieren om in contact te blijven.

**GitHub**: daar staat de tool, de broncode, en de documentatie. Alles open.

**De Npuls Data en AI community**: de plek om ervaringen te delen met collega's van andere instellingen.

**Email**: voor vragen, feedback of ideeën: ceda@surf.nl.
-->

---

<!-- SLIDE 30: AFSLUITSLIDE -->
<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>

<!--
Dank jullie wel. Fijn dat jullie er waren. We hopen dat jullie enthousiast zijn geworden om de selectie-evaluatietool uit te proberen bij jullie instelling. Als je ergens tegenaan loopt, neem dan gerust contact op.
-->
