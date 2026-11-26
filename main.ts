import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Two stars. He shows up every day smelling like every dog in the neighborhood, shoves my mail through the slot, and still won't admit the treats in his bag are clearly mine.";

// The gate requires 1–200 characters; keep the line well inside it.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
