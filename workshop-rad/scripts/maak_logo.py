"""Maakt het volledige horizontale Npuls-logo (stippenring + woordmerk) als transparante PNG.

Bron: public/npuls/powerpoint_slides/Slide16.PNG (roze vlak met het echte logo). De achtergrond wordt
weggehaald via de helderheid; het resultaat is zwart of wit op transparant.

Gebruik (vanuit de root van clidev-presentaties):
    python workshop-rad/scripts/maak_logo.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
BRON = ROOT / "public/npuls/powerpoint_slides/Slide16.PNG"
UIT = ROOT / "workshop-rad/assets"
BOX = (740, 272, 1210, 446)  # ring + woordmerk
ACHTERGROND = 226  # helderheid van het roze vlak (243, 217, 220)
SCHAAL = 4

lum = Image.open(BRON).convert("L").crop(BOX)
lum = lum.resize((lum.width * SCHAAL, lum.height * SCHAAL), Image.LANCZOS)
alpha = lum.point(lambda v: max(0, min(255, round((ACHTERGROND - v) / ACHTERGROND * 255 * 1.08))))
bbox = alpha.point(lambda v: 255 if v > 40 else 0).getbbox()
pad = 6 * SCHAAL
bbox = (max(0, bbox[0] - pad), max(0, bbox[1] - pad), min(alpha.width, bbox[2] + pad), min(alpha.height, bbox[3] + pad))
alpha = alpha.crop(bbox)

for naam, kleur in (("zwart", (0, 0, 0)), ("wit", (255, 255, 255))):
    img = Image.new("RGBA", alpha.size, kleur + (0,))
    img.putalpha(alpha)
    img.save(UIT / f"npuls-logo-horizontaal-{naam}.png")
    print(naam, img.size)
