---
theme: default
title: Van data naar studiesucces
info: Testpresentatie (lang) voor de clidev skill — hergebruikt alle recent gefixte patronen in nieuwe content.
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
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Van data naar studiesucces</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Hoe ruwe onderwijsdata vroege signalen en concrete actie wordt
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

<!--
Tweede, langere testpresentatie voor de clidev skill. Hergebruikt alle recent
gefixte patronen (Slide6/Slide11-layout, screenshot- en mermaid-centrering,
expliciete ul/li) in geheel nieuwe content, en sluit af met de vaste
CEDA-slide uit _template.md.
-->

<!-- Slide: Agenda -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide2.PNG);"></div>

<div style="margin-left: 42%; height: 100%; display: flex; flex-direction: column; justify-content: center; padding-right: 3rem;">
  <p class="eyebrow">Wat gaan we bespreken</p>
  <h1 style="font-size: 2.2rem !important; margin-bottom: 1.4rem;">Programma</h1>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num">1</span>
      <div><strong>Het probleem</strong><br/><span class="muted" style="font-size: 0.82rem;">Waarom losse oplossingen niet werken</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>De aanpak</strong><br/><span class="muted" style="font-size: 0.82rem;">Werkwijze en wat je krijgt</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-blue);">3</span>
      <div><strong>In de praktijk</strong><br/><span class="muted" style="font-size: 0.82rem;">Dashboard, databronnen en signalen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-yellow); color: var(--np-ink);">4</span>
      <div><strong>Wat betekent dit voor jou</strong><br/><span class="muted" style="font-size: 0.82rem;">Rollen en vervolgstappen</span></div>
    </div>
  </div>
</div>

<!-- VASTE CEDA-SLIDE (Slide16.PNG) — woordelijk overnemen, niet aanpassen
     of weglaten. Staat vroeg in het deck (direct na de agenda, vóór de
     eerste hoofdstukdivider). Zie SKILL.md, sectie "Vaste CEDA-slide". -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide16.PNG);"></div>

<!-- De roze rechthoek in Slide16.PNG begint exact bij 50% breedte (niet 60%);
     content-kolom eindigt daarom ruim vóór 50%. -->
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

<!-- Slide: Hoofdstuk 1 - Het probleem -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: var(--np-ink); opacity: 0.75;">Deel 1</p>
    <h1 style="color: var(--np-ink); font-size: 3rem;">Het probleem</h1>
  </div>
</div>

<!-- Slide: Elke instelling worstelt met dezelfde data -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Elke instelling worstelt met dezelfde data

<p class="np-subtitle">Studievoortgang, aanwezigheid en cijfers zitten overal, maar zelden bij elkaar.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div>
  <ul style="font-size: 0.92rem; line-height: 1.7;">
    <li>Data zit verspreid over LMS, SIS en Excel-bestanden</li>
    <li>Elke instelling bouwt er eigen scripts omheen</li>
    <li>Signalen komen vaak pas als het al te laat is</li>
    <li>Hetzelfde werk, telkens opnieuw, achter gesloten deuren</li>
  </ul>
</div>
<div>
  <div class="np-card accent-orange">
    <h3>Ons antwoord</h3>
    <p style="font-size: 1rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Bouw het één keer goed, deel het, onderhoud het samen — in plaats van dat elke instelling apart investeert.
    </p>
  </div>
</div>
</div>

</div>

<!-- Slide: Studiesucces in cijfers -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide10.PNG);"></div>

<div class="fill" style="max-width: 62%;">

# Studiesucces in cijfers

<p class="np-subtitle">Kengetallen uit lopende CEDA-projecten rond vroegsignalering.</p>

<div class="np-grid-3" style="margin-top: 0.8rem;">
  <div>
    <div class="np-big-number">68%</div>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">van de instellingen mist een centraal overzicht van voortgangsdata</p>
  </div>
  <div>
    <div class="np-big-number" style="color: var(--np-blue);">6-8</div>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">weken eerder een risicostudent in beeld met een gedeeld signaalmodel</p>
  </div>
  <div>
    <div class="np-big-number" style="color: var(--np-green);">9</div>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">instellingen die meebouwen aan de gedeelde voorziening</p>
  </div>
</div>

</div>

<!-- Slide: Los of samen -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 40% 60%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2rem;">
    <h1 style="color: #FFFFFF !important; font-size: 1.9rem;">Los of samen</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 0.92rem; margin-top: 0.5rem;">De keuze is niet óf we data gebruiken, maar hoe.</p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.9rem; padding: 2.2rem 2.4rem;">
    <div class="np-card accent-orange">
      <h3>Los</h3>
      <p class="muted" style="font-size: 0.86rem; margin: 0;">Elke instelling bouwt apart, of leunt op een commerciële partij die de voorwaarden bepaalt.</p>
    </div>
    <div class="np-card accent-green">
      <h3>Samen</h3>
      <p class="muted" style="font-size: 0.86rem; margin: 0;">Data, modellen en keuzes blijven van de instellingen zelf. Open source, gedeeld onderhoud.</p>
    </div>
  </div>
</div>

<!-- Slide: Van ruwe data naar een dashboard -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Van ruwe data naar een dashboard

<div class="np-grid-2" style="margin-top: 1rem; align-items: center;">
<div>
  <ul style="font-size: 0.95rem; line-height: 1.8;">
    <li>Ruwe bestanden uit LMS, SIS en aanwezigheidsregistratie</li>
    <li>Gevalideerd en gekoppeld via een uniek studentnummer</li>
    <li>Vertaald naar signalen die een docent direct snapt</li>
  </ul>
</div>
<div style="display: flex; justify-content: center;">
  <img src="/npuls/powerpoint_illustrations/data.svg" style="width: 190px;" />
</div>
</div>

</div>

<!-- Slide: Hoofdstuk 2 - De aanpak -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">De aanpak</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Werkwijze en wat je ervoor terugkrijgt</p>
  </div>
</div>

<!-- Slide: Onze werkwijze -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide11.PNG);"></div>

<!-- De oranje golf beslaat de volle hoogte van de linkerkolom (0-38% breed);
     titel staat daarom boven de kaarten in de rechterkolom, niet ernaast. -->
<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 38% 62%; padding: 2.2rem 3rem;">
  <div></div>
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.6rem;">
    <div>
      <p class="eyebrow" style="margin-bottom: 0.1rem;">Werkwijze</p>
      <h1 style="font-size: 1.7rem; margin-bottom: 0.1rem;">Onze werkwijze</h1>
      <p class="np-subtitle" style="margin: 0.2rem 0 0;">Vier stappen, altijd samen met een instelling.</p>
    </div>
    <div class="np-card accent-blue" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem;">1</span>
      <strong style="margin-left: 0.6rem;">Verkennen</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Welke vraag speelt er bij de instelling?</p>
    </div>
    <div class="np-card accent-orange" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem; background: var(--np-orange);">2</span>
      <strong style="margin-left: 0.6rem;">Data koppelen</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Bronnen valideren en aan elkaar koppelen.</p>
    </div>
    <div class="np-card accent-green" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem; background: var(--np-green);">3</span>
      <strong style="margin-left: 0.6rem;">Signalen bouwen</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Patronen zoeken, model valideren met de instelling.</p>
    </div>
    <div class="np-card accent-yellow" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem; background: var(--np-yellow); color: var(--np-ink);">4</span>
      <strong style="margin-left: 0.6rem;">Opleveren</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Dashboard live, open source, direct bruikbaar.</p>
    </div>
  </div>
</div>

<!-- Slide: Wat je krijgt -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide5.PNG);"></div>

<div class="fill">

# Wat je krijgt

<p class="np-subtitle">Drie directe voordelen voor de onderwijsorganisatie.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Vroegsignalering</span>
    <h3 style="margin-top: 0.5rem;">Eerder ingrijpen</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Risicostudenten weken eerder in beeld, met tijd om echt te helpen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Overzicht</span>
    <h3 style="margin-top: 0.5rem;">Eén dashboard</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Alle voortgangsdata bij elkaar, geen losse spreadsheets meer.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Eigenaarschap</span>
    <h3 style="margin-top: 0.5rem;">Open source</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Data, model en keuzes blijven van de instelling zelf.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  De <strong>kernboodschap</strong>: eerder zien is eerder kunnen helpen.
</div>

</div>

<!-- Slide: Zo ziet het dashboard eruit -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide7.PNG);"></div>

<!-- De roze rechthoek loopt door tot ~48% breedte; tekstkolom begint daarom
     bij 50% (niet 40-42%), anders overlapt de gecenterde screenshot-kaart de tekst. -->
<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 50% 50%;">
  <div></div>
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2.6rem;">
    <p class="eyebrow">Voorbeeld</p>
    <h1 style="font-size: 1.8rem;">Zo ziet het dashboard eruit</h1>
    <ul style="font-size: 0.9rem; line-height: 1.7; margin-top: 0.5rem;">
      <li>Overzicht per student en per groep</li>
      <li>Signalen op basis van meerdere databronnen</li>
      <li>Direct filterbaar voor de docent</li>
    </ul>
  </div>
</div>

<!-- Roze rechthoek in Slide7.PNG gemeten op exacte pixelgrenzen (7%-48% breed,
     10%-90% hoog); frame wordt daarbinnen gecenterd i.p.v. los geschat. -->
<div style="position: absolute; left: 6.9%; top: 10.4%; width: 41.4%; height: 79.2%; display: flex; align-items: center; justify-content: center;">
  <div class="np-frame" style="max-width: 85%;">
    <img src="/shots/skillsradar.png" />
  </div>
</div>

<!--
Testafbeelding uit public/shots/ ter verificatie van de np-frame layout,
geen definitieve productscreenshot.
-->

<!-- Slide: Rollen rond het dashboard -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide8.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 58% 42%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2.6rem;">
    <p class="eyebrow">Gebruik</p>
    <h1 style="font-size: 1.8rem;">Rollen rond het dashboard</h1>
    <ul style="font-size: 0.9rem; line-height: 1.7; margin-top: 0.5rem;">
      <li>Docent: dagelijkse signalen per groep</li>
      <li>Studieloopbaanbegeleider: individuele trajecten</li>
      <li>Management: trends op instellingsniveau</li>
    </ul>
  </div>
  <div></div>
</div>

<!-- Roze rechthoek in Slide8.PNG gemeten op exacte pixelgrenzen (54%-95% breed,
     10%-90% hoog); frame wordt daarbinnen gecenterd i.p.v. los geschat. -->
<div style="position: absolute; left: 53.7%; top: 10.4%; width: 41.1%; height: 79.2%; display: flex; align-items: center; justify-content: center;">
  <div class="np-frame" style="max-width: 85%;">
    <img src="/shots/skillsradar.png" />
  </div>
</div>

<!-- Slide: Citaat uit de praktijk -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div class="fill">

<!-- Slide6.PNG heeft een lichtgrijze driehoek links (~0-28%); tekst blijft
     daarom rechts van 32% in plaats van volledig gecentreerd. -->
<div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-left: 32%; padding: 0 2rem 0 0;">
  <div style="font-family: var(--np-serif); font-size: 1.8rem; line-height: 1.5; color: #FFFFFF; max-width: 620px;">
    "We zagen risicostudenten voorheen pas bij het studievoortgangsgesprek. Nu weken eerder."
  </div>
  <div style="margin-top: 1.5rem; font-size: 0.9rem; color: rgba(255,255,255,0.85);">&mdash; Studieloopbaanbegeleider, pilotinstelling</div>
</div>

</div>

<!-- Slide: Hoofdstuk 3 - In de praktijk -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">In de praktijk</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Dashboard, databronnen en signalen</p>
  </div>
</div>

<!-- Slide: Van pilot naar praktijk -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Van pilot naar praktijk

<p class="np-subtitle">Vier stappen om een pilot te laten landen in de organisatie.</p>

<div class="np-pipeline" style="margin-top: 1.5rem;">
  <div class="np-step blue" style="flex: 1; max-width: 200px;">
    <strong style="font-size: 0.95rem;">Pilot</strong>
    <small>Klein starten, snel leren</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step orange" style="flex: 1; max-width: 200px;">
    <strong style="font-size: 0.95rem;">Evalueren</strong>
    <small>Werkt het echt beter</small>
  </div>
  <div class="np-arrow">&#8594;</div>
  <div class="np-step green" style="flex: 1; max-width: 200px;">
    <strong style="font-size: 0.95rem;">Opschalen</strong>
    <small>Naar meer opleidingen</small>
  </div>
</div>

<div class="np-proof-strip" style="justify-content: center; margin-top: 1.3rem;">
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Gedragen door docenten</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Privacy geborgd</div>
  <div class="np-proof-divider"></div>
  <div class="np-proof-item"><span class="np-proof-check">&#10003;</span>Techniek stabiel</div>
</div>

</div>

<!-- Slide: Welke databronnen gebruiken we -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Welke databronnen gebruiken we

| Bron | Update-frequentie | Eigenaar |
|------|-------------------|----------|
| Leeromgeving (LMS) | Dagelijks | ICT-afdeling |
| Studentinformatiesysteem | Wekelijks | Onderwijsbureau |
| Aanwezigheidsregistratie | Dagelijks | Roostering |
| Studievoortgangsgesprekken | Per kwartaal | Studieloopbaanbegeleider |

</div>

<!-- Slide: Hoe de signalen samenkomen -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Hoe de signalen samenkomen

<!-- Mermaid-blok rendert standaard linksuitgelijnd én met dunne, nauwelijks
     zichtbare lijnen; wrap in een flex-container om te centreren, en gebruik
     classDef + linkStyle voor kleur en dikte (zie SKILL.md, sectie Mermaid). -->
<div style="display: flex; justify-content: center; margin-top: 1rem;">

```mermaid {scale: 0.5}
%%{init: {'theme': 'base'}}%%
graph LR
    A[LMS-data]:::blue --> D[Signaalmodel]:::orange
    B[Aanwezigheid]:::blue --> D
    C[Cijfers]:::blue --> D
    D --> E[Dashboard docent]:::green

    classDef blue fill:#D6E2FD,stroke:#3D68EC,stroke-width:2px,color:#1A1A2E;
    classDef orange fill:#FFE4D8,stroke:#DD784B,stroke-width:2px,color:#1A1A2E;
    classDef green fill:#CCEEE6,stroke:#00AF81,stroke-width:2px,color:#1A1A2E;
    linkStyle default stroke:#DD784B,stroke-width:3px;
```

</div>

</div>

<!-- Slide: Visueel intermezzo -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide12.PNG);"></div>

<!-- Slide: Hoofdstuk 4 - Wat betekent dit voor jou -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: var(--np-ink); opacity: 0.75;">Deel 4</p>
    <h1 style="color: var(--np-ink); font-size: 3rem;">Wat betekent dit voor jou</h1>
  </div>
</div>

<!-- Slide: Rollen en vervolgstappen -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Rollen en vervolgstappen

<p class="np-subtitle">Wat dit betekent, afhankelijk van jouw rol.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Docent</span>
    <h3 style="margin-top: 0.5rem;">Dagelijkse signalen</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Zie per groep wie extra aandacht nodig heeft, zonder zelf data te verzamelen.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">SLB'er</span>
    <h3 style="margin-top: 0.5rem;">Onderbouwde gesprekken</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Ga het gesprek aan met concrete signalen in plaats van een onderbuikgevoel.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Management</span>
    <h3 style="margin-top: 0.5rem;">Trends op instellingsniveau</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Volg uitval en studiesucces op groepen, opleidingen en cohorten.</p>
  </div>
</div>

<div class="np-bottomline" style="margin-top: 0.8rem;">
  Wil je meedoen? We starten graag een <strong>pilot bij jouw instelling</strong>.
</div>

</div>

<!-- VASTE AFSLUITSLIDE (Slide1.PNG) — woordelijk overnemen, niet aanpassen
     of weglaten. Altijd de laatste slide van het deck: bevat de vaste
     CEDA-links. Zie SKILL.md, sectie "Vaste CEDA-slide (intro) en vaste
     afsluitslide (links)". -->
---

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
