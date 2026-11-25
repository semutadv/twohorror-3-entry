// Two-Sentence Horror — batch3 entry (twohorror)
// Exactly two sentences. The second one re-reads the first
// and takes the comfort out of it.
// Writes the story to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY_TEXT =
  "The baby monitor crackled and a voice whispered, 'He's finally asleep — lower him gently.' I was holding my son, and I live alone.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), STORY_TEXT, "utf8");
}

main();
