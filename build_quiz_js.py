"""Regenerate Quiz_data/set_N.js and questions.json/js from the set_N.json source files.

Usage: python build_quiz_js.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent / "Quiz_data"
NUM_SETS = 10


def write_js(path, var, data):
    path.write_text(f"window.{var} = {json.dumps(data, ensure_ascii=False, indent=2)};\n", encoding="utf-8")


def main():
    for i in range(1, NUM_SETS + 1):
        data = json.loads((ROOT / f"set_{i}.json").read_text(encoding="utf-8"))
        write_js(ROOT / f"set_{i}.js", f"QUIZ_DATA_SET_{i}", data)
        if i == 1:  # questions.json mặc định trỏ về set_1
            (ROOT / "questions.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
            write_js(ROOT / "questions.js", "QUIZ_DATA_QUESTIONS", data)
    print(f"Rebuilt {NUM_SETS} sets")


if __name__ == "__main__":
    main()
