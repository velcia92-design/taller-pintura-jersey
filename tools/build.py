#!/usr/bin/env python3
"""Build the SVR website from the fuente.html files.

Usage:
    python3 tools/build.py

What it does:
- copies the three editable sources to their public HTML files;
- rebuilds assets/translations.js from traducciones-*.json;
- checks that every image and asset the pages ask for exists.

The pages use the optimised images in images/web/. The originals in images/
are kept untouched for the workshop to replace later.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PAGES = {
    "fuente.html": "index.html",
    "services-fuente.html": "services.html",
    "car-check-fuente.html": "car-check.html",
}

LANGS = ("es", "pt", "pl", "ro")


def build_translations() -> None:
    data = {}
    for lang in LANGS:
        path = ROOT / f"traducciones-{lang}.json"
        data[lang] = json.loads(path.read_text(encoding="utf-8"))
    out = ROOT / "assets" / "translations.js"
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    out.write_text(
        "/* Traducciones generadas desde traducciones-*.json. No editar a mano. */\n"
        f"window.SVR_LANGS={body};\n",
        encoding="utf-8",
    )
    print(f"translations: {out.relative_to(ROOT)} ({out.stat().st_size / 1024:.0f} KB)")


def check_assets(html: str, page: str) -> list[str]:
    missing = []
    for match in re.finditer(r'(?:src|href)="([^"#?]+)"', html):
        ref = match.group(1)
        if ref.startswith(("http://", "https://", "mailto:", "tel:", "data:")):
            continue
        if ref.endswith("/") or ref == "":
            continue
        if not (ROOT / ref).exists():
            missing.append(f"{page}: {ref}")
    return missing


def build_pages() -> list[str]:
    missing = []
    for source, target in PAGES.items():
        src = ROOT / source
        dst = ROOT / target
        html = src.read_text(encoding="utf-8")
        dst.write_text(html, encoding="utf-8")
        missing += check_assets(html, target)
        print(f"page: {source} -> {target} ({dst.stat().st_size / 1024:.0f} KB)")
    return missing


def main() -> int:
    build_translations()
    missing = build_pages()
    if missing:
        print("\nMissing files:", file=sys.stderr)
        for item in missing:
            print("  " + item, file=sys.stderr)
        return 1
    print("\nOK. Open index.html or run a local server to review.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
