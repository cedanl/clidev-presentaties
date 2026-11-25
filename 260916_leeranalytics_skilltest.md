---
theme: default
title: Leeranalytics in het onderwijs
info: Testpresentatie voor de clidev skill — oefent elke achtergrond, kleurencombinatie en componentklasse uit.
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
  <h1 style="font-size: 3.2rem; line-height: 1.15; margin-bottom: 0.6rem; color: var(--np-ink);">Leeranalytics in het onderwijs</h1>
  <p style="font-size: 1.15rem; color: var(--np-dark-gray); max-width: 680px; line-height: 1.5; margin-bottom: 1rem;">
    Van studeergedrag naar concrete inzichten voor docent en student
  </p>
  <div style="font-size: 0.92rem; color: var(--np-ink);">
    <strong>CEDA</strong> &middot; Centre of Educational Data Analytics
  </div>
  <div style="font-size: 0.82rem; color: var(--np-mid-gray); margin-top: 0.3rem;">Npuls &middot; 2026</div>
</div>

<!--
Testdeck voor de clidev skill na herinstallatie: oefent alle achtergronden (Slide1-17),
kleurencombinaties en componentklassen uit ter verificatie.
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
      <div><strong>Waarom leeranalytics</strong><br/><span class="muted" style="font-size: 0.82rem;">Context en cijfers</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-orange);">2</span>
      <div><strong>Hoe pakken we het aan</strong><br/><span class="muted" style="font-size: 0.82rem;">Aanpak en proces</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-green);">3</span>
      <div><strong>Wat betekent dit voor jou</strong><br/><span class="muted" style="font-size: 0.82rem;">Rollen en vervolgstappen</span></div>
    </div>
    <div style="display: flex; align-items: center; gap: 0.8rem;">
      <span class="np-num" style="background: var(--np-yellow); color: var(--np-ink);">4</span>
      <div><strong>Vragen</strong><br/><span class="muted" style="font-size: 0.82rem;">Ruimte voor discussie</span></div>
    </div>
  </div>
</div>

<!-- Slide: Hoofdstuk 1 - Waarom leeranalytics -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide13.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: var(--np-ink); opacity: 0.75;">Deel 1</p>
    <h1 style="color: var(--np-ink); font-size: 3rem;">Waarom leeranalytics</h1>
  </div>
</div>

<!-- Slide: Wat is leeranalytics? -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide3.PNG);"></div>

<div class="fill">

# Wat is leeranalytics?

<p class="np-subtitle">Data inzetten om het leerproces te begrijpen en te verbeteren.</p>

<div class="np-grid-2" style="margin-top: 0.3rem;">
<div>
  <ul style="font-size: 0.92rem; line-height: 1.7;">
    <li>Studeergedrag in beeld brengen</li>
    <li>Vroeg signaleren wie dreigt uit te vallen</li>
    <li>Docenten ondersteunen met concrete inzichten</li>
    <li>Beleid baseren op bewijs, niet op aannames</li>
  </ul>
</div>
<div>
  <div class="np-card accent-orange">
    <h3>Kernpunt</h3>
    <p style="font-size: 1rem; color: var(--np-dark-gray); line-height: 1.6; margin: 0.4rem 0 0;">
      Leeranalytics is geen doel op zich, maar een hulpmiddel voor betere begeleiding.
    </p>
  </div>
</div>
</div>

</div>

<!-- Slide: Leeranalytics in cijfers -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide10.PNG);"></div>

<div class="fill" style="max-width: 62%;">

# Leeranalytics in cijfers

<p class="np-subtitle">Enkele kengetallen uit lopende CEDA-projecten.</p>

<div class="np-grid-3" style="margin-top: 0.8rem;">
  <div>
    <div class="np-big-number">73%</div>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">van de instellingen gebruikt al vorm van studievoortgangsdata</p>
  </div>
  <div>
    <div class="np-big-number" style="color: var(--np-blue);">4x</div>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">sneller signaleren van studievertraging</p>
  </div>
  <div>
    <div class="np-big-number" style="color: var(--np-green);">12</div>
    <p class="muted" style="font-size: 0.84rem; margin: 0.3rem 0 0;">deelnemende instellingen in de pilot</p>
  </div>
</div>

</div>

<!-- Slide: Kans en risico -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide9.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 40% 60%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 2rem;">
    <h1 style="color: #FFFFFF !important; font-size: 1.9rem;">Kans en risico</h1>
    <p style="color: rgba(255,255,255,0.85); font-size: 0.92rem; margin-top: 0.5rem;">Twee kanten van dezelfde data.</p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.9rem; padding: 2.2rem 2.4rem;">
    <div class="np-card accent-blue">
      <h3>Kans</h3>
      <p class="muted" style="font-size: 0.86rem; margin: 0;">Eerder ingrijpen, gerichter begeleiden, minder uitval.</p>
    </div>
    <div class="np-card accent-orange">
      <h3>Risico</h3>
      <p class="muted" style="font-size: 0.86rem; margin: 0;">Verkeerde interpretatie zonder zorgvuldig privacybeleid.</p>
    </div>
  </div>
</div>

<!-- Slide: Van data naar inzicht -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide4.PNG);"></div>

<div class="fill">

# Van data naar inzicht

<div class="np-grid-2" style="margin-top: 1rem; align-items: center;">
<div>
  <ul style="font-size: 0.95rem; line-height: 1.8;">
    <li>Ruwe logdata uit de leeromgeving</li>
    <li>Bewerkt tot herkenbare patronen</li>
    <li>Vertaald naar een dashboard voor de docent</li>
  </ul>
</div>
<div style="display: flex; justify-content: center;">
  <img src="/npuls/powerpoint_illustrations/learninganalystics.svg" style="width: 200px;" />
</div>
</div>

</div>

<!-- Slide: Hoofdstuk 2 - Hoe pakken we het aan -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide14.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 2</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Hoe pakken we het aan</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Van pilot naar structurele aanpak</p>
  </div>
</div>

<!-- Slide: Ons stappenplan -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide11.PNG);"></div>

<!-- De oranje golf beslaat de volle hoogte van de linkerkolom (0-38% breed);
     titel staat daarom boven de kaarten in de rechterkolom, niet ernaast,
     om overlap met de decoratie te voorkomen. -->
<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 38% 62%; padding: 2.2rem 3rem;">
  <div></div>
  <div style="display: flex; flex-direction: column; justify-content: center; gap: 0.6rem;">
    <div>
      <p class="eyebrow" style="margin-bottom: 0.1rem;">Aanpak</p>
      <h1 style="font-size: 1.7rem; margin-bottom: 0.1rem;">Ons stappenplan</h1>
      <p class="np-subtitle" style="margin: 0.2rem 0 0;">Vier stappen van idee naar dashboard.</p>
    </div>
    <div class="np-card accent-blue" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem;">1</span>
      <strong style="margin-left: 0.6rem;">Verkennen</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Welke vraag speelt er bij de docent?</p>
    </div>
    <div class="np-card accent-orange" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem; background: var(--np-orange);">2</span>
      <strong style="margin-left: 0.6rem;">Data verzamelen</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Bronnen koppelen, kwaliteit checken.</p>
    </div>
    <div class="np-card accent-green" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem; background: var(--np-green);">3</span>
      <strong style="margin-left: 0.6rem;">Analyseren</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Patronen zoeken, model valideren.</p>
    </div>
    <div class="np-card accent-yellow" style="padding: 0.7rem 1rem;">
      <span class="np-num" style="width: 26px; height: 26px; font-size: 0.8rem; background: var(--np-yellow); color: var(--np-ink);">4</span>
      <strong style="margin-left: 0.6rem;">Opleveren</strong>
      <p class="muted" style="font-size: 0.8rem; margin: 0.2rem 0 0 2.1rem;">Dashboard live bij de docent.</p>
    </div>
  </div>
</div>

<!-- Slide: Wat het oplevert -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide5.PNG);"></div>

<div class="fill">

# Wat het oplevert

<p class="np-subtitle">Drie directe voordelen voor de onderwijsorganisatie.</p>

<div class="np-grid-3" style="margin-top: 0.5rem; align-items: start;">
  <div class="np-card accent-blue">
    <span class="np-badge blue">Vroegsignalering</span>
    <h3 style="margin-top: 0.5rem;">Eerder ingrijpen</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Studenten met risico op uitval worden weken eerder zichtbaar.</p>
  </div>
  <div class="np-card accent-green">
    <span class="np-badge green">Overzicht</span>
    <h3 style="margin-top: 0.5rem;">Eén dashboard</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Alle voortgangsdata bij elkaar, geen losse spreadsheets meer.</p>
  </div>
  <div class="np-card accent-orange">
    <span class="np-badge orange">Onderbouwing</span>
    <h3 style="margin-top: 0.5rem;">Beter beleid</h3>
    <p class="muted" style="font-size: 0.84rem; margin: 0;">Keuzes baseren op patronen in plaats van losse signalen.</p>
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
     bij 50% (niet 42%), anders overlapt de gecenterde screenshot-kaart de tekst. -->
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
  <div class="np-frame" style="max-width: 92%;">
    <img src="/shots/skillsradar.png" />
  </div>
</div>

<!-- Slide: Citaat uit de pilot -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide6.PNG);"></div>

<div class="fill">

<!-- Slide6.PNG heeft een lichtgrijze driehoek links (~0-28%); tekst blijft
     daarom rechts van 32% in plaats van volledig gecentreerd, anders valt
     de witte tekst weg tegen het lichte vlak. -->
<div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-left: 32%; padding: 0 2rem 0 0;">
  <div style="font-family: var(--np-serif); font-size: 1.8rem; line-height: 1.5; color: #FFFFFF; max-width: 620px;">
    "Voor het eerst zie ik als docent wie er dreigt af te haken, voordat het te laat is."
  </div>
  <div style="margin-top: 1.5rem; font-size: 0.9rem; color: rgba(255,255,255,0.85);">&mdash; Docent, pilotinstelling</div>
</div>

</div>

<!-- Slide: Hoofdstuk 3 - Wat betekent dit voor jou -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide15.PNG);"></div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <p class="eyebrow" style="color: rgba(255,255,255,0.85);">Deel 3</p>
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Wat betekent dit voor jou</h1>
    <p style="color: rgba(255,255,255,0.88); font-size: 1.15rem; margin-top: 0.5rem;">Rollen, randvoorwaarden en vervolgstappen</p>
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

<!-- Mermaid-blok rendert standaard linksuitgelijnd; wrap in een flex-container
     om het diagram te centreren binnen de slide. -->
<div style="display: flex; justify-content: center; margin-top: 1rem;">

```mermaid {scale: 0.5}
graph LR
    A[LMS-data] --> D[Signaalmodel]
    B[Aanwezigheid] --> D
    C[Cijfers] --> D
    D --> E[Dashboard docent]
```

</div>

</div>

<!-- Slide: Visueel intermezzo -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide12.PNG);"></div>

<!-- Slide: Contact -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide16.PNG);"></div>

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 60% 40%;">
  <div style="display: flex; flex-direction: column; justify-content: center; padding: 2.2rem 3.5rem 2.2rem 3rem;">
    <p class="eyebrow">Meer weten</p>
    <h1 style="font-size: 2rem;">Over ons</h1>
    <p class="np-subtitle" style="margin-top: 0.4rem; max-width: 100%;">CEDA ondersteunt onderwijsinstellingen bij het datagedreven werken.</p>
    <ul style="font-size: 0.9rem; line-height: 1.7;">
      <li>Advies en implementatie leeranalytics</li>
      <li>Gedeelde infrastructuur voor mbo, hbo en wo</li>
      <li>Privacy en ethiek als vast onderdeel</li>
    </ul>
  </div>
  <div></div>
</div>

<!-- Slide: Afsluitslide -->
---

<div class="np-bg" style="background-image: url(/npuls/powerpoint_slides/Slide17.PNG);"></div>
