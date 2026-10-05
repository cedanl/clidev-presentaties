"""Past het ORIGINELE workshopvoorstel (commit 67272a3) minimaal aan.

Wijzigingen, verder niets:
1. Het zelfgetekende stippenlogo (rechtsboven en op de blauwe slides) vervangen door het echte
   Npuls-beeldmerk (de stippenring uit npuls_logo.jpg).
2. Een evaluatieslide toevoegen (in dezelfde stijl als "De opdracht") vóór de afsluiting.
3. Het programma op slide 3 bijwerken: de laatste regel wordt "Evaluatie en afsluiting" (16 min) en de tijden schuiven mee.

Gebruik (vanuit de root van clidev-presentaties):
    python workshop-rad/scripts/patch_voorstel.py
Schrijft workshop-voorstel-RAD_120min.pptx.
"""
import copy
import subprocess
import sys
from io import BytesIO
from pathlib import Path

from pptx import Presentation
from pptx.util import Emu, Inches

ROOT = Path(__file__).resolve().parents[2]
ORIGINEEL_COMMIT = "67272a3"
UIT = ROOT / "workshop-voorstel-RAD_120min.pptx"
ZWART = (ROOT / "workshop-rad/assets/npuls-beeldmerk-zwart.png").read_bytes()
WIT = (ROOT / "workshop-rad/assets/npuls-beeldmerk-wit.png").read_bytes()

blob = subprocess.run(
    ["git", "show", f"{ORIGINEEL_COMMIT}:workshop-voorstel-RAD_120min.pptx"],
    cwd=ROOT, capture_output=True, check=True,
).stdout
prs = Presentation(BytesIO(blob))


def inch(v):
    return int(v * 914400)


def set_text(shape, text):
    """Zet tekst, behoud de opmaak van de eerste run."""
    p = shape.text_frame.paragraphs[0]
    runs = p.runs
    runs[0].text = text
    for r in runs[1:]:
        r._r.getparent().remove(r._r)
    for extra in shape.text_frame.paragraphs[1:]:
        extra._p.getparent().remove(extra._p)


# 1. Logo: image1.png = wit (blauwe slides), image3.png = zwart (lichte slides)
gevonden = 0
for part in prs.part.package.iter_parts():
    naam = str(part.partname)
    if naam == "/ppt/media/image1.png":
        part._blob = WIT
        gevonden += 1
    elif naam == "/ppt/media/image3.png":
        part._blob = ZWART
        gevonden += 1
assert gevonden == 2, "logo-afbeeldingen niet gevonden"

# 3. Programma (slide 3)
s3 = prs.slides[2]
shapes = list(s3.shapes)
tree = s3.shapes._spTree

BLOKKEN = [  # tijd, titel, minuten, omschrijving (None = origineel laten staan)
    ("0:00", "Intro (CEDA)", 5, None),
    ("0:05", "Synthetische data", 6, None),
    ("0:11", "De opdracht en casus", 6, None),
    ("0:17", "Skills en prompts", 8, None),
    ("0:25", "Devcontainer + voorbeeldprompt", 5, None),
    ("0:30", "Ronde 1: data exploratie", 22, None),
    ("0:52", "Spiegelmoment 1", 15, "Bespreek de skill: wat zit erin, wat deed jij anders?"),
    ("1:07", "Ronde 2: dashboard bouwen", 22, None),
    ("1:29", "Spiegelmoment 2", 15, "Bespreek de skill: wat zit erin, wat miste je dashboard?"),
    ("1:44", "Evaluatie en afsluiting", 16, "Terugblik, interesse in een training, wat je wilt leren en wat je meeneemt"),
]

# Balk bovenaan: 10 paren (vorm + tekst) op index 2..21
balken = [(shapes[i], shapes[i + 1]) for i in range(2, 22, 2)]
LINKS, BREEDTE_TOT, GAP = 0.6, 12.13, 0.05
per_min = (BREEDTE_TOT - GAP * (len(BLOKKEN) - 1)) / sum(b[2] for b in BLOKKEN)
x = LINKS
for (vorm, tekst), (_, _, minuten, _) in zip(balken, BLOKKEN):
    w = minuten * per_min
    for sh in (vorm, tekst):
        sh.left, sh.width = inch(x), inch(w)
    set_text(tekst, f"{minuten} min")
    x += w + GAP

# Rijen: 10 rijen met vaste indexbereiken; posities blijven zoals in het origineel
RIJ_BEREIK = [(22, 29), (29, 36), (36, 43), (43, 50), (50, 57), (57, 64), (64, 73), (73, 80), (80, 89), (89, 96)]
rijen = [[shapes[i] for i in range(a_, b_)] for a_, b_ in RIJ_BEREIK]
for rij, (tijd, titel, minuten, omschr) in zip(rijen, BLOKKEN):
    teksten = [sh for sh in rij if sh.has_text_frame and sh.text_frame.text.strip() != ""]
    # volgorde in een rij: nummer, tijd, titel, duur, omschrijving (+ evt. skill-pil)
    set_text(teksten[1], tijd)
    set_text(teksten[2], titel)
    set_text(teksten[3], f"{minuten} min")
    if omschr:
        set_text(teksten[4], omschr)

# 4. Evaluatieslide: kopie van "De opdracht" (slide 5)
bron = prs.slides[4]
nieuwe = prs.slides.add_slide(bron.slide_layout)
for sp in list(nieuwe.shapes):
    sp._element.getparent().remove(sp._element)
bg = bron._element.cSld.find("{http://schemas.openxmlformats.org/presentationml/2006/main}bg")
if bg is not None:
    nieuwe._element.cSld.insert(0, copy.deepcopy(bg))
for sh in bron.shapes:
    if sh.shape_type == 13:  # afbeelding (logo): opnieuw toevoegen met dezelfde positie
        pic = nieuwe.shapes.add_picture(BytesIO(ZWART), sh.left, sh.top, sh.width, sh.height)
    else:
        nieuwe.shapes._spTree.append(copy.deepcopy(sh._element))

VERVANG = {
    "De opdracht": "Evaluatie en afsluiting",
    "Vraag": "Terugblik",
    "Kies de casus": "Wat vond je ervan?",
    "Samen": "Peiling",
    "Werk in tweetallen": "Interesse in een training?",
    "Product": "Open vraag",
    "Lever één dashboard": "Wat wil je leren?",
}
TEKST_PER_KAART = [
    ("Wat ging goed, wat zag je nu pas, wat neem je mee? Via de reflectie-skill of de peiling.",
     "Jouw eigen woorden, anoniem en vrijwillig."),
    ("Meerkeuzevraag: van nee tot een programma van 4 uur per week voor één semester.",
     "Zicht op hoeveel tijd mensen echt willen vrijmaken."),
    ("Wat wil je precies leren in zo'n training? Kort en concreet.",
     "Input voor de inhoud van een vervolg."),
]
hoe, res = [], []
for sh in nieuwe.shapes:
    if not sh.has_text_frame:
        continue
    t = sh.text_frame.text.strip()
    if t in VERVANG:
        set_text(sh, VERVANG[t])
    elif t == "HOE":
        hoe.append(sh)
    elif t == "RESULTAAT":
        res.append(sh)
# de tekstvelden direct na de labels (zelfde y-volgorde): zoek per label het volgende tekstvak in dezelfde kolom
tekstvakken = [s for s in nieuwe.shapes if s.has_text_frame and s.text_frame.text.strip()]
for kolom, (h, r) in enumerate(TEKST_PER_KAART):
    for label, nieuw in ((hoe[kolom], h), (res[kolom], r)):
        kandidaten = [s for s in tekstvakken
                      if abs(s.left - label.left) < inch(0.05) and s.top > label.top and s is not label]
        kandidaten.sort(key=lambda s: s.top)
        set_text(kandidaten[0], nieuw)
for sh in nieuwe.shapes:
    if sh.has_text_frame and sh.text_frame.text.startswith("Er is geen goed of fout"):
        set_text(sh, "Evaluatie en afsluiting vormen één blok van 16 minuten, na de laatste uitleg. De antwoorden bepalen of en hoe CEDA een vervolg inricht.")
NOTITIE = (
    "Evaluatie en afsluiting (16 min, één blok). Vraag eerst toestemming: de antwoorden zijn anoniem en dienen om te bepalen "
    "of er een vervolg komt. Terugblik (4 min) via de reflectie-skill of de peiling; meerkeuzevraag (2 min); "
    "open vraag (4 min); daarna de afsluiting (6 min). Formulering: workshop-rad/skills/workshop-reflectie/references/vragenset.md.")
ns = nieuwe.notes_slide
if ns.notes_text_frame is None:  # notitiemaster zonder tekstvak: neem de structuur van slide 5 over
    for sh in list(ns.shapes):
        sh._element.getparent().remove(sh._element)
    for sh in bron.notes_slide.shapes:
        ns.shapes._spTree.append(copy.deepcopy(sh._element))
ns.notes_text_frame.text = NOTITIE

# Verplaats de nieuwe slide vóór de laatste (afsluiting)
lijst = prs.slides._sldIdLst
ids = list(lijst)
nieuw_id = ids[-1]
lijst.remove(nieuw_id)
lijst.insert(len(ids) - 2, nieuw_id)

try:
    prs.save(UIT)
    doel = UIT
except PermissionError:  # bestand staat open in PowerPoint
    doel = ROOT / "workshop-rad/exports/workshop-voorstel-RAD_120min.pptx"
    prs.save(doel)
    print("LET OP: het bestand in de root is vergrendeld (open in PowerPoint). Gesloten? Draai opnieuw.")
print("geschreven:", doel, "slides:", len(prs.slides))
