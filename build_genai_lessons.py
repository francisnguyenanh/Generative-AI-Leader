"""
Build the Generative AI Leader study lessons from the per-domain source files.

Input (source of truth, edit these):
  Quiz_data/bank/lessons_d1.json ... lessons_d4.json   - bilingual lessons per exam-guide section

Output (generated, do not edit by hand):
  Quiz_data/lessons/lessons.json / lessons.js  (window.GENAI_LESSONS)

Usage: python build_genai_lessons.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).parent / "Quiz_data"
BANK = ROOT / "bank"
OUT = ROOT / "lessons"
NUM_DOMAINS = 4
EXPECTED_WEIGHTS = {1: 30, 2: 35, 3: 20, 4: 15}


def validate(domain, dom):
    errors = []
    if dom.get("domain") != domain:
        errors.append(f"domain {domain}: wrong 'domain' field {dom.get('domain')!r}")
    if dom.get("weight") != EXPECTED_WEIGHTS[domain]:
        errors.append(f"domain {domain}: weight {dom.get('weight')!r} != {EXPECTED_WEIGHTS[domain]}")
    ids = set()
    for t in dom.get("topics", []):
        where = f"{t.get('id')}"
        if t.get("id") in ids or not str(t.get("id", "")).startswith(f"d{domain}-t"):
            errors.append(f"{where}: bad or duplicate id")
        ids.add(t.get("id"))
        for f in ("objective", "title", "title_vi"):
            if not str(t.get(f, "")).strip():
                errors.append(f"{where}: missing {f}")
        if not t.get("sections"):
            errors.append(f"{where}: no sections")
        for s in t.get("sections", []):
            for f in ("heading", "body", "body_vi"):
                if not str(s.get(f, "")).strip():
                    errors.append(f"{where}: section missing {f}")
        for f in ("keyPoints", "examTips"):
            for x in t.get(f, []):
                if not x.get("en") or not x.get("vi"):
                    errors.append(f"{where}: {f} entry missing en/vi")
        if not t.get("keywords"):
            errors.append(f"{where}: no keywords (needed for practice questions)")
    if not dom.get("topics"):
        errors.append(f"domain {domain}: no topics")
    return errors


def main():
    lessons, errors = [], []
    for d in range(1, NUM_DOMAINS + 1):
        path = BANK / f"lessons_d{d}.json"
        dom = json.loads(path.read_text(encoding="utf-8"))
        errors += validate(d, dom)
        lessons.append(dom)
    if errors:
        print("\n".join(errors))
        sys.exit(1)
    OUT.mkdir(exist_ok=True)
    text = json.dumps(lessons, ensure_ascii=False, indent=2)
    (OUT / "lessons.json").write_text(text, encoding="utf-8")
    (OUT / "lessons.js").write_text(f"window.GENAI_LESSONS = {text};\n", encoding="utf-8")
    topics = sum(len(d["topics"]) for d in lessons)
    print(f"Built {len(lessons)} domains, {topics} topics -> {OUT}")


if __name__ == "__main__":
    main()
