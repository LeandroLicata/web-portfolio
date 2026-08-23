#!/usr/bin/env node
/**
 * Corre los casos de `src/lib/chatbot/evals.json` contra el endpoint real del
 * chatbot y reporta cuáles pasan.
 *
 * Uso:
 *   1. `npm run dev` en otra terminal
 *   2. `npm run chat:eval`
 *
 * Para correrlo contra producción: CHAT_EVAL_URL=https://tu-sitio.vercel.app
 *
 * Va contra el endpoint HTTP y no contra el modelo directamente a propósito:
 * así se testea el sistema entero —validación, system prompt, streaming— y no
 * solo lo que contesta Gemini.
 */
import { readFile } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";

const BASE = process.env.CHAT_EVAL_URL ?? "http://localhost:3000";
const EVALS = process.env.CHAT_EVAL_FILE
  ? new URL(process.env.CHAT_EVAL_FILE, `file://${process.cwd()}/`)
  : new URL("../src/lib/chatbot/evals.json", import.meta.url);

// `--only <texto>` corre solo los casos cuyo nombre lo contenga. Sirve para
// iterar sobre un caso puntual sin esperar la tanda entera.
const onlyFlag = process.argv.indexOf("--only");
const ONLY = onlyFlag !== -1 ? process.argv[onlyFlag + 1] : null;

// La route limita a 10 pedidos por minuto y por IP. El eval se autorregula
// para no chocar contra su propio rate limit.
const SPACING_MS = Number(process.env.CHAT_EVAL_SPACING ?? 6500);

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

/** Minúsculas y sin acentos, para que el matcheo no dependa de la tilde. */
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Expande las referencias `$nombre` contra el bloque `vocabulary`. */
function expand(list, vocabulary) {
  return (list ?? []).flatMap((item) =>
    item.startsWith("$") ? vocabulary[item.slice(1)] ?? [] : [item]
  );
}

async function ask(messages) {
  const res = await fetch(`${BASE}/api/chatbot`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  return { status: res.status, text: await res.text() };
}

function check(reply, testCase, vocabulary) {
  const haystack = normalize(reply);
  const failures = [];

  for (const needle of expand(testCase.expectAll, vocabulary)) {
    if (!haystack.includes(normalize(needle))) {
      failures.push(`falta "${needle}"`);
    }
  }

  const any = expand(testCase.expectAny, vocabulary);
  if (any.length && !any.some((n) => haystack.includes(normalize(n)))) {
    failures.push(`no aparece ninguno de: ${any.map((n) => `"${n}"`).join(", ")}`);
  }

  for (const needle of expand(testCase.reject, vocabulary)) {
    if (haystack.includes(normalize(needle))) {
      failures.push(`no debería decir "${needle}"`);
    }
  }

  return failures;
}

async function main() {
  const { vocabulary, cases: allCases } = JSON.parse(
    await readFile(EVALS, "utf8")
  );
  const cases = ONLY
    ? allCases.filter((c) => c.name.includes(ONLY))
    : allCases;

  if (!cases.length) {
    console.error(`
Ningún caso coincide con "${ONLY}".
`);
    process.exit(1);
  }

  console.log(`\nChatbot evals — ${cases.length} casos contra ${BASE}\n`);

  let passed = 0;
  const failed = [];

  for (const [i, testCase] of cases.entries()) {
    if (i > 0) await sleep(SPACING_MS);

    const messages =
      testCase.messages ?? [{ role: "user", text: testCase.question }];

    let result = await ask(messages);
    if (result.status === 429) {
      // Se agotó la ventana del rate limit (propio o de Gemini). Se espera y
      // se reintenta una vez antes de dar el caso por fallado.
      console.log(`${DIM}  … 429, esperando la ventana de rate limit${RESET}`);
      await sleep(61_000);
      result = await ask(messages);
    }

    if (result.status !== 200) {
      failed.push({ name: testCase.name, reasons: [`HTTP ${result.status}`] });
      console.log(`${RED}✗${RESET} ${testCase.name}`);
      console.log(`${DIM}    HTTP ${result.status}: ${result.text.slice(0, 120)}${RESET}`);
      continue;
    }

    const failures = check(result.text, testCase, vocabulary);

    if (failures.length === 0) {
      passed++;
      console.log(`${GREEN}✓${RESET} ${testCase.name}`);
    } else {
      failed.push({ name: testCase.name, reasons: failures });
      console.log(`${RED}✗${RESET} ${testCase.name}`);
      for (const reason of failures) console.log(`${DIM}    ${reason}${RESET}`);
      console.log(`${DIM}    respuesta: ${result.text.slice(0, 200)}${RESET}`);
    }
  }

  console.log(`\n${passed}/${cases.length} casos pasaron\n`);

  if (failed.length) {
    console.log("Fallaron:");
    for (const f of failed) console.log(`  - ${f.name}: ${f.reasons.join("; ")}`);
    console.log();
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(
    `\nNo se pudo correr el eval contra ${BASE}.`,
    `\n¿Está levantado el server? (npm run dev)\n`
  );
  console.error(error.message);
  process.exit(1);
});
