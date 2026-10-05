"""Maakt de deelnemersversie van de workshopskills voor de repo cedanl/dair-agentic-coding.

De leidersversie (workshop-rad/skills/) bevat checkpoints met de verwachte uitkomsten en verwijzingen naar
bestanden die alleen in deze repo staan. Die horen niet in een omgeving die deelnemers openen. Dit script
kopieert de skills en haalt dat eruit, zodat de twee versies niet uit elkaar groeien.

Gebruik (vanuit de root van clidev-presentaties):
    python workshop-rad/scripts/maak_deelnemers_skills.py <doelmap>      # bijvoorbeeld <repo>/.claude/skills
"""
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BRON = ROOT / "workshop-rad/skills"


def lees(p):
    return p.read_text(encoding="utf-8").replace("\r\n", "\n")


def verwijder_sectie(tekst, kop, tot_kop):
    """Haalt een sectie weg van `kop` tot (niet inclusief) `tot_kop`."""
    a = tekst.index(kop)
    b = tekst.index(tot_kop, a)
    return tekst[:a] + tekst[b:]


def vervang(tekst, oud, nieuw):
    assert oud in tekst, f"niet gevonden: {oud[:60]}"
    return tekst.replace(oud, nieuw)


def verkennen(t):
    return verwijder_sectie(t, "## Checkpoint (voor de workshopleiding)", "## Let op")


def dashboard(t):
    t = verwijder_sectie(t, "## Checkpoint (voor de workshopleiding)", "## Let op")
    t = vervang(t, "Installeer met\n`pip install -r workshop-rad/requirements.txt` (duckdb, streamlit, plotly).",
                "Installeer wat nodig is met uv in een virtuele omgeving\n(`uv venv` en `uv pip install duckdb streamlit plotly`).")
    t = vervang(t, "3. Controleer de uitkomst tegen het checkpoint hieronder.\n4. Vat samen:", "3. Vat samen:")
    return t


def reflectie(t):
    return vervang(t, " Voor de workshopleiding: verzamel de bestanden of de peilingantwoorden en\ngebruik `workshop-rad/docs/evaluatie-en-vervolg.md` voor de verwerking.", "")


BEWERKINGEN = {"workshop-verkennen": verkennen, "workshop-dashboard": dashboard, "workshop-reflectie": reflectie}


def main(doel):
    doel = Path(doel)
    for naam, bewerk in BEWERKINGEN.items():
        uit = doel / naam
        if uit.exists():
            shutil.rmtree(uit)
        shutil.copytree(BRON / naam, uit)
        skill = uit / "SKILL.md"
        skill.write_text(bewerk(lees(skill)), encoding="utf-8", newline="\n")
        for f in uit.rglob("*"):
            if f.is_file() and f.suffix == ".md":
                tekst = lees(f)
                assert "workshop-rad" not in tekst, f"verwijzing naar workshop-rad in {f}"
                f.write_text(tekst, encoding="utf-8", newline="\n")
        print("klaar:", uit)


if __name__ == "__main__":
    main(sys.argv[1])
