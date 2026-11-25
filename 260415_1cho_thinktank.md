---
theme: ./theme
title: 1CHO Thinktank
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

<!-- TITELSLIDE -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide1.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div class="title-center">

# 1CHO Thinktank

## Tools en producten rondom 1CHO

<div class="mt-2 title-subtitle">
<strong>CEDA</strong> · 15 april 2026
</div>
</div>

---

<!-- AGENDA -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide2.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="margin-left: 50%; padding-left: 2rem; height: 100%; display: flex; flex-direction: column; justify-content: center;">

## Agenda

<div style="font-size: 0.95rem; line-height: 2.2; margin-top: 1rem;">

- Aanvang <span style="color: #888; font-size: 0.85rem;">5 min</span>
- 1CIJFERHO tool: updates <span style="color: #888; font-size: 0.85rem;">15 min</span>
- Roadmap Staat van Onderwijsinstelling <span style="color: #888; font-size: 0.85rem;">5 min</span>
- Kansengelijkheid: hoe pakt jouw organisatie dit aan? <span style="color: #888; font-size: 0.85rem;">20 min</span>
- WVTTK <span style="color: #888; font-size: 0.85rem;">10 min</span>
- Volgende bijeenkomst inplannen <span style="color: #888; font-size: 0.85rem;">5 min</span>

</div>
</div>

---

<!-- HOOFDSTUK: 1CIJFERHO UPDATES -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide13.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">1CIJFERHO tool</h1>
    <p style="color: #FFFFFF; font-size: 1.3rem; margin-top: 0.5rem;">Wat er is bijgekomen</p>
  </div>
</div>

---

<!-- WAT IS ER VERANDERD -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 2rem 4rem; z-index: 1;">

# Wat er is veranderd

<div class="grid grid-cols-3 gap-5" style="margin-top: 1.2rem; font-size: 0.9rem; line-height: 1.8;">
<div style="background: #f0f4ff; border-left: 4px solid #3D68EC; padding: 0.75rem; border-radius: 4px;">

**Demo modus werkt nu consistent**

De demo-instelling bleef niet bewaard bij navigatie tussen pagina's. Dat is opgelost: de modus houdt zich aan wat je instelt, ook na herstarten.

</div>
<div style="background: #f0fff8; border-left: 4px solid #00AF81; padding: 0.75rem; border-radius: 4px;">

**Verbeterde gebruikersinterface**

De Streamlit-interface is herzien. Stappen zijn duidelijker gegroepeerd en instellingen zijn beter bereikbaar.

</div>
<div style="background: #fff8f0; border-left: 4px solid #DD784B; padding: 0.75rem; border-radius: 4px;">

**run_config.json na elke run**

Na een geslaagde verwerking schrijft de tool automatisch een configuratiebestand naar de outputmap. Zo is altijd terug te halen met welke instellingen een dataset is aangemaakt.

</div>
</div>
</div>

---

<!-- SCREENSHOT NIEUWE UI -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 2rem 4rem; z-index: 1;">

# Nieuwe interface

<div style="margin-top: 1rem; display: flex; justify-content: center;">
  <img src="/presentations/260415_1cho_thinktank/screenshot_ui.png" style="max-height: 340px; border-radius: 6px; box-shadow: 0 2px 12px rgba(0,0,0,0.12);" />
</div>

</div>

---

<!-- WAT HETZELFDE IS GEBLEVEN -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 2rem 4rem; z-index: 1;">

# Wat onveranderd is

De kern van de tool is hetzelfde: je levert DUO-bestanden aan, de tool levert schone, analyseklare data terug.

<div class="grid grid-cols-3 gap-4" style="margin-top: 1.2rem; font-size: 0.88rem; line-height: 1.7;">
<div>

**Drie outputvarianten**

- Origineel (gecodeerde waarden)
- `_decoded`: opzoekkolommen toegevoegd
- `_enriched`: waarden vervangen door leesbare labels

</div>
<div>

**Pipeline in één stap**

```bash
eencijferho pipeline \
  --input invoer/ \
  --output uitvoer/
```

Of via de Streamlit-interface.

</div>
<div>

**Installatie**

```bash
pip install eencijferho
```

Of via de Scoop-installer op Windows.

</div>
</div>
</div>

---

<!-- HOOFDSTUK: STAAT VAN ONDERWIJSINSTELLING -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide14.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <h1 style="color: #FFFFFF !important; font-size: 2.8rem;">Staat van Onderwijsinstelling</h1>
    <p style="color: #FFFFFF; font-size: 1.2rem; margin-top: 0.5rem;">Roadmap</p>
  </div>
</div>

---

<!-- STAAT VAN ONDERWIJSINSTELLING ROADMAP -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 2rem 4rem; z-index: 1;">

# Staat van Onderwijsinstelling

R-scripts die vier studie-indicatoren berekenen op basis van 1CHO-data: instroom, rendement, uitval en studiewissel. Ontwikkeld door Avans Hogeschool, nu verder gebracht als gedeeld product.

<div class="grid grid-cols-3 gap-4" style="margin-top: 1.2rem; font-size: 0.88rem; line-height: 1.7;">
<div style="background: #f0fff8; border-left: 4px solid #00AF81; padding: 0.75rem; border-radius: 4px;">

**Nu**

Werkende scripts voor instroom, rendement, uitval en studiewissel. Draait op 1CHO-data van een instelling, beschikbaar op GitHub.

</div>
<div style="background: #f0f4ff; border-left: 4px solid #3D68EC; padding: 0.75rem; border-radius: 4px;">

**Binnenkort**

Bekende bugs oplossen. Scripts omzetten naar herbruikbare functies. Analyse op student- of inschrijvingsniveau, en uitsplitsen per opleiding.

</div>
<div style="background: #fff8f0; border-left: 4px solid #DD784B; padding: 0.75rem; border-radius: 4px;">

**Later**

VAKHAVW-data koppelen aan het eindbestand. Zo kun je rendement en uitval bekijken in samenhang met de vooropleiding van studenten.

</div>
</div>

<div style="margin-top: 1.2rem; font-size: 0.87rem; color: #555;">
Repo: <span style="color: #3D68EC;">github.com/cedanl/staat-van-onderwijsinstelling</span>
</div>
</div>

---

<!-- HOOFDSTUK: KANSENGELIJKHEID -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide15.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div class="flex items-center justify-center h-full">
  <div style="text-align: center;">
    <h1 style="color: #FFFFFF !important; font-size: 3rem;">Kansengelijkheid</h1>
    <p style="color: #FFFFFF; font-size: 1.2rem; margin-top: 0.5rem;">Hoe pakt jouw organisatie dit aan?</p>
  </div>
</div>

---

<!-- KANSENGELIJKHEID: CONTEXT -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 2rem 4rem; z-index: 1;">

# Wat bedoelen we met kansengelijkheid?

Sommige groepen studenten behalen lagere studieresultaten dan andere, ook bij vergelijkbaar instroomprofiel. Dat patroon is in 1CHO-data zichtbaar, maar handmatig analyseren is foutgevoelig en tijdrovend.

<div class="grid grid-cols-2 gap-6" style="margin-top: 1.2rem; font-size: 0.9rem; line-height: 1.8;">
<div style="background: #f9f9f9; border-left: 4px solid #ccc; padding: 0.75rem; border-radius: 4px;">

**Wat je in de data ziet**

Verschillen in rendement, uitval en studiewissel naar geslacht, vooropleiding, geboorteland of andere kenmerken.

</div>
<div style="background: #f0f4ff; border-left: 4px solid #3D68EC; padding: 0.75rem; border-radius: 4px;">

**Wat CEDA daarvoor bouwt**

No Fairness Without Awareness (NFWA): een R-package dat systematisch fairness-analyses uitvoert op 1CHO-data en een leesbaar PDF-rapport genereert.

</div>
</div>

<div style="margin-top: 1.2rem; font-size: 0.88rem; color: #555;">
Gebaseerd op onderzoek van Theo Bakker (De Haagse Hogeschool) · Repo: <span style="color: #3D68EC;">github.com/cedanl/no-fairness-without-awareness</span>
</div>

</div>

---

<!-- KANSENGELIJKHEID: DISCUSSIE -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 5rem; z-index: 1;">

<div style="font-family: 'Cooper Light BT', serif; font-size: 2rem; line-height: 1.5; color: #3D68EC;">
Hoe pakt jouw organisatie kansengelijkheid aan?
</div>

<div style="margin-top: 2rem; font-size: 0.95rem; color: #000; line-height: 2; max-width: 680px; text-align: left;">

- Kijk je al naar verschillen in rendement of uitval per studentgroep?
- Gebruik je daarvoor 1CHO-data, of andere bronnen?
- Wat zou een bruikbaar rapport voor jou moeten bevatten?

</div>

<div style="margin-top: 2rem; font-size: 1rem; font-weight: 600; color: #DD784B;">
We zijn benieuwd wat er bij jullie speelt
</div>

</div>

---

<!-- WVTTK -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 5rem; z-index: 1;">

<div style="font-family: 'Cooper Light BT', serif; font-size: 2.2rem; line-height: 1.5; color: #3D68EC;">
WVTTK
</div>

<div style="margin-top: 1.5rem; font-size: 1rem; color: #555; line-height: 1.8;">
Wat wil jij nog ter tafel komen?
</div>

</div>

---

<!-- VOLGENDE BIJEENKOMST -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide3.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>

<div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem 5rem; z-index: 1;">

<div style="font-family: 'Cooper Light BT', serif; font-size: 2.2rem; line-height: 1.5; color: #3D68EC;">
Volgende bijeenkomst
</div>

<div style="margin-top: 1.5rem; font-size: 1rem; color: #000; line-height: 2;">
Wanneer spreken we elkaar weer?<br>
Zijn er onderwerpen die we de volgende keer willen behandelen?
</div>

</div>

---

<!-- AFSLUITSLIDE -->
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
  <img src="/npuls/powerpoint_slides/Slide17.PNG" style="width: 100%; height: 100%; object-fit: cover;" />
</div>
