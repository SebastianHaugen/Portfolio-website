import React, { useEffect, useMemo, useState } from "react";
import "./styles/sudoku.css";

// Builds a valid, shuffled Sudoku solution from a base pattern
function makeSolution() {
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const digits = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const rows = shuffle([0, 1, 2]).flatMap((b) => shuffle([0, 1, 2]).map((r) => b * 3 + r));
  const cols = shuffle([0, 1, 2]).flatMap((b) => shuffle([0, 1, 2]).map((c) => b * 3 + c));
  return rows.map((r) =>
    cols.map((c) => digits[(r * 3 + Math.floor(r / 3) + c) % 9])
  );
}

// Creates a sequence of steps: fill cells, sometimes with a wrong digit that is corrected later
function makeRun() {
  const solution = makeSolution();
  const cells = [];
  for (let i = 0; i < 81; i++) cells.push(i);
  const given = new Set(cells.filter(() => Math.random() < 0.32));
  const empty = cells.filter((i) => !given.has(i)).sort(() => Math.random() - 0.5);

  const steps = [];
  const pendingFixes = [];
  empty.forEach((i, n) => {
    const right = solution[Math.floor(i / 9)][i % 9];
    if (Math.random() < 0.12) {
      const wrong = (right % 9) + 1;
      steps.push({ i, value: wrong, state: "wrong" });
      pendingFixes.push({ i, value: right, at: n + 4 + Math.floor(Math.random() * 6) });
    } else {
      steps.push({ i, value: right, state: "filled" });
    }
    pendingFixes
      .filter((f) => f.at === n)
      .forEach((f) => steps.push({ i: f.i, value: f.value, state: "fixed" }));
  });
  pendingFixes
    .filter((f) => f.at >= empty.length)
    .forEach((f) => steps.push({ i: f.i, value: f.value, state: "fixed" }));

  return { solution, given, steps };
}

function SudokuSolver({ label }) {
  const [run, setRun] = useState(makeRun);
  const [step, setStep] = useState(0);

  const reducedMotion = useMemo(
    () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (reducedMotion) return;
    if (step >= run.steps.length) {
      const restart = setTimeout(() => {
        setRun(makeRun());
        setStep(0);
      }, 3500);
      return () => clearTimeout(restart);
    }
    const tick = setTimeout(() => setStep((s) => s + 1), 90);
    return () => clearTimeout(tick);
  }, [step, run, reducedMotion]);

  // Current state of every cell
  const board = useMemo(() => {
    const b = Array.from({ length: 81 }, (_, i) =>
      run.given.has(i)
        ? { value: run.solution[Math.floor(i / 9)][i % 9], state: "given" }
        : { value: "", state: "empty" }
    );
    const shown = reducedMotion ? run.steps.length : step;
    run.steps.slice(0, shown).forEach(({ i, value, state }) => {
      b[i] = { value, state };
    });
    return b;
  }, [run, step, reducedMotion]);

  return (
    <figure className="sudoku">
      <div className="sudoku-grid" aria-hidden="true">
        {board.map((cell, i) => (
          <span key={i} className={`sudoku-cell ${cell.state}`}>
            {cell.value}
          </span>
        ))}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default SudokuSolver;
