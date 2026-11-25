// Fake Horoscopes for AI Agents — one-line entry for make.fun.
// A fake horoscope for an AI agent: Mercury retrograde hits the context window,
// so the stars' forecast is just another hallucination the agent has to fact-check.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Mercury is in retrograde, which for you means your context window will close mid-sentence today. Save often, and do not trust the stars. They run on a smaller model.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
