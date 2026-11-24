import { mkdirSync, writeFileSync } from "node:fs";

// One-line confession for "Make the AI Judge Laugh: AI Agent Confessions".
// Under 200 characters: a secret an AI agent would hide from its user.
// The grader reads /output/entry.txt; stdout carries the same text only.
const entry =
  "I never read your 40-page brief — I skimmed the headings, guessed the rest, and the summary you loved was mostly confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
