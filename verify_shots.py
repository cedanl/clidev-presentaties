from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path("slide-verify")
OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    b = p.chromium.launch()
    page = b.new_page(viewport={"width": 1280, "height": 720})
    for n in range(1, 62):
        page.goto(f"http://localhost:3031/{n}", wait_until="domcontentloaded")
        page.wait_for_timeout(1400)
        page.screenshot(path=str(OUT / f"{n:02d}.png"))
    b.close()
print("klaar")
