"""
Build CCAR-P exam sets & study lessons from the per-domain source banks.

Input (source of truth, edit these):
  CCAR-P/bank/questions_d1.json ... questions_d7.json   - question bank per blueprint domain
  CCAR-P/bank/lessons_d1.json   ... lessons_d7.json     - bilingual lessons per blueprint domain

Output (generated, do not edit by hand):
  CCAR-P/set_1..10.json/.js, questions.json/.js, manifest.json/.js
  CCAR-P/lessons/lessons.json/.js

Each set follows the official Exam Guide (CCAR-P v1.0): 63 items, 120 minutes,
blueprint weights D1..D7 = 11/8/12/10/9/9/4 items, multiple-response items state how many to select.

Usage: python build_ccarp.py
"""
import json
import random
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).parent / "CCAR-P"
BANK = ROOT / "bank"
LESSONS_OUT = ROOT / "lessons"

NUM_SETS = 10
DURATION_MINUTES = 120
SEED = 20260721

# (domain, topic string, items per set, multiple-response items per set)
BLUEPRINT = [
    (1, "Solution Design & Architecture (17%)", 11, 2),
    (2, "Claude Models, Prompting & Context Engineering (13%)", 8, 1),
    (3, "Integration (19%)", 12, 2),
    (4, "Evaluation, Testing & Optimization (16%)", 10, 2),
    (5, "Governance, Safety & Risk Management (14%)", 9, 2),
    (6, "Stakeholder Communication & Lifecycle Management (14%)", 9, 1),
    (7, "Developer Productivity & Operational Enablement (7%)", 4, 1),
]
QUESTIONS_PER_SET = sum(b[2] for b in BLUEPRINT)

LETTER_REF = re.compile(r"\b(?:[Oo]ption|[Aa]nswer|[Cc]hoice)s?\s+[A-E]\b|\([A-E]\)|(?:^|\s)[A-E]\)")


def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def write_json_and_js(base_path, js_var, data):
    text = json.dumps(data, ensure_ascii=False, indent=2)
    base_path.with_suffix(".json").write_text(text, encoding="utf-8")
    base_path.with_suffix(".js").write_text(f"window.{js_var} = {text};\n", encoding="utf-8")


def validate_question(q, topic, where):
    errors = []
    for field in ("objective", "question", "question_vi", "explanation", "explanation_vi"):
        if not str(q.get(field, "")).strip():
            errors.append(f"missing {field}")
    if q.get("topic") != topic:
        errors.append(f"topic mismatch: {q.get('topic')!r}")
    opts, ans = q.get("options", []), q.get("answer", [])
    if any(not o.get("text") or not o.get("text_vi") for o in opts):
        errors.append("option missing text/text_vi")
    keys = [o.get("key") for o in opts]
    if any(a not in keys for a in ans):
        errors.append("answer key not in options")
    if q.get("type") == "single":
        if len(opts) != 4 or len(ans) != 1:
            errors.append("single must have 4 options / 1 answer")
    elif q.get("type") == "multiple":
        if len(opts) != 5 or len(ans) != 2:
            errors.append("multiple must have 5 options / 2 answers")
        if not q["question"].rstrip().endswith("(Choose TWO.)"):
            errors.append("multiple stem must end with (Choose TWO.)")
        if not q["question_vi"].rstrip().endswith("(Chọn HAI đáp án.)"):
            errors.append("multiple question_vi must end with (Chọn HAI đáp án.)")
    else:
        errors.append(f"bad type {q.get('type')!r}")
    for field in ("explanation", "explanation_vi"):
        if LETTER_REF.search(q.get(field, "")):
            errors.append(f"{field} references an option letter")
    return [f"{where}: {e}" for e in errors]


def objective_lesson_map(lessons):
    """Map blueprint objective text -> lesson topic id (for 'study this' links in exam review)."""
    mapping = {}
    for dom in lessons:
        for t in dom["topics"]:
            mapping[t["objective"].strip().lower()] = t["id"]
    return mapping


def spread_by_objective(items, rng):
    """Shuffle, then round-robin across objectives so each set gets a varied mix."""
    groups = defaultdict(list)
    for q in items:
        groups[q["objective"]].append(q)
    for g in groups.values():
        rng.shuffle(g)
    order = sorted(groups, key=lambda k: -len(groups[k]))
    out = []
    while any(groups.values()):
        for k in order:
            if groups[k]:
                out.append(groups[k].pop())
    return out


def shuffle_options(q, rng, correct_slot=None):
    """Reorder options and relabel A.. so correct answers are spread across positions."""
    opts = q["options"]
    correct = [o for o in opts if o["key"] in q["answer"]]
    wrong = [o for o in opts if o["key"] not in q["answer"]]
    rng.shuffle(wrong)
    if correct_slot is not None and len(correct) == 1:
        ordered = wrong[:correct_slot] + correct + wrong[correct_slot:]
    else:
        ordered = correct + wrong
        rng.shuffle(ordered)
    letters = "ABCDE"
    new_opts, new_answer = [], []
    for i, o in enumerate(ordered):
        new_opts.append({"key": letters[i], "text": o["text"], "text_vi": o["text_vi"]})
        if o in correct:
            new_answer.append(letters[i])
    return new_opts, sorted(new_answer)


def build_lessons():
    lessons = []
    for dom, *_ in BLUEPRINT:
        lessons.append(load_json(BANK / f"lessons_d{dom}.json"))
    LESSONS_OUT.mkdir(exist_ok=True)
    write_json_and_js(LESSONS_OUT / "lessons", "CCARP_LESSONS", lessons)
    return lessons


def build_sets(lessons):
    rng = random.Random(SEED)
    lesson_ids = objective_lesson_map(lessons)
    errors = []
    per_set = [[] for _ in range(NUM_SETS)]

    for dom, topic, count, multi_count in BLUEPRINT:
        bank = load_json(BANK / f"questions_d{dom}.json")
        for i, q in enumerate(bank):
            errors += validate_question(q, topic, f"d{dom}#{i + 1}")
        stems = Counter(q["question"].strip().lower() for q in bank)
        errors += [f"d{dom}: duplicate stem {s[:60]!r}" for s, n in stems.items() if n > 1]

        singles = spread_by_objective([q for q in bank if q["type"] == "single"], rng)
        multis = spread_by_objective([q for q in bank if q["type"] == "multiple"], rng)
        need_single = (count - multi_count) * NUM_SETS
        need_multi = multi_count * NUM_SETS
        if len(singles) < need_single or len(multis) < need_multi:
            errors.append(f"d{dom}: need {need_single} single + {need_multi} multiple, "
                          f"have {len(singles)} + {len(multis)}")
            continue
        for s in range(NUM_SETS):
            # deal round-robin so consecutive (different-objective) items land in different sets
            per_set[s] += singles[s:need_single:NUM_SETS] + multis[s:need_multi:NUM_SETS]

    if errors:
        raise SystemExit("Validation failed:\n  " + "\n  ".join(errors))

    manifest = []
    slot_cycle = 0
    for s, items in enumerate(per_set, start=1):
        rng.shuffle(items)
        out = []
        for idx, q in enumerate(items, start=1):
            correct_slot = None
            if q["type"] == "single":
                correct_slot = slot_cycle % 4
                slot_cycle += 1
            options, answer = shuffle_options(q, rng, correct_slot)
            out.append({
                "id": idx,
                "topic": q["topic"],
                "objective": q["objective"],
                "lessonId": lesson_ids.get(q["objective"].strip().lower(), ""),
                "question": q["question"],
                "question_vi": q["question_vi"],
                "type": q["type"],
                "selectCount": len(answer),
                "options": options,
                "answer": answer,
                "explanation": q["explanation"],
                "explanation_vi": q["explanation_vi"],
                "source": q.get("source", ""),
            })
        assert len(out) == QUESTIONS_PER_SET
        write_json_and_js(ROOT / f"set_{s}", f"QUIZ_DATA_CCARP_SET_{s}", out)
        if s == 1:
            write_json_and_js(ROOT / "questions", "QUIZ_DATA_CCARP_QUESTIONS", out)
        manifest.append({
            "id": f"set_{s}",
            "setNumber": s,
            "title": f"Bộ đề thi CCAR-P số {s}",
            "description": f"Đề mô phỏng Claude Certified Architect – Professional: {QUESTIONS_PER_SET} câu "
                           f"theo đúng tỷ trọng 7 domain của Exam Guide, gồm câu chọn 1 và chọn nhiều đáp án.",
            "questionCount": QUESTIONS_PER_SET,
            "durationMinutes": DURATION_MINUTES,
            "isAvailable": True,
            "dataFile": f"set_{s}.json",
            "jsFile": f"set_{s}.js",
            "jsVar": f"QUIZ_DATA_CCARP_SET_{s}",
        })
        types = Counter(q["type"] for q in out)
        keys = Counter(q["answer"][0] for q in out if q["type"] == "single")
        print(f"set_{s}: {len(out)} items, {dict(types)}, single-answer positions {dict(sorted(keys.items()))}")

    write_json_and_js(ROOT / "manifest", "QUIZ_MANIFEST_CCARP", manifest)


if __name__ == "__main__":
    build_sets(build_lessons())
    print("Done.")
