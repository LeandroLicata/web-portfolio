# Portfolio — Leandro Licata

Portfolio personal, hecho con **Next.js 14 (App Router)**, TypeScript, Tailwind y Framer Motion. Estética de terminal retro: una sola ruta, secciones de Experiencia, Educación, Stack, Proyectos, Sobre mí y Contacto.

🔗 **[leandro-licata-portfolio.vercel.app](https://leandro-licata-portfolio.vercel.app)**

```bash
npm install
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run cv` | Regenera los PDFs del CV desde `cv/*.html` |
| `npm run chat:eval` | Corre los evals del chatbot (requiere `npm run dev` en otra terminal) |

---

## Asistente del sitio

El botón de chat abajo a la derecha es un asistente que responde preguntas sobre mi perfil profesional. Está construido sobre la API de Gemini y **corre entero en su free tier**.

Lo interesante no es el chatbot —eso lo arma cualquiera— sino cuatro decisiones de diseño y la forma de verificar que funciona.

### Cómo está armado

```
Chatbot.tsx  ──POST──►  /api/chatbot  ──►  provider.ts  ──►  Gemini
  consume el              valida el          única pieza
  stream                  historial,         atada al
                          rate limit         proveedor
                                  ▲
                          knowledge.ts arma el prompt
                          desde src/lib/content/
```

### Las decisiones

**1. Sin vector DB.** Todo el contenido del sitio son unos 3.000 tokens: entra completo en el system prompt. Un RAG con base vectorial habría sumado costo, latencia y otra pieza que puede fallar, a cambio de nada. La complejidad tiene que ganarse el lugar.

**2. El contexto se genera desde el sitio.** `src/lib/chatbot/knowledge.ts` arma el prompt leyendo `src/lib/content/` — los mismos módulos que renderizan Experiencia, Proyectos y Stack. Los componentes solo dibujan. La consecuencia: **el asistente no puede quedar desactualizado**. Agrego un proyecto y ya lo sabe, sin tocar nada del chatbot.

**3. Un solo archivo atado al proveedor.** `src/lib/chatbot/provider.ts` expone `streamReply()`. Cambiar de Gemini a otro proveedor es reescribir ese archivo; el resto de la app no se entera.

**4. El free tier es el techo de gasto.** No hay forma de que esto genere un cargo. Cuando se agota la cuota, la API devuelve 429 y el widget avisa que está saturado y ofrece el mail. El modo de falla es un mensaje, no una factura. Encima de eso, la route tiene rate limit propio (10 pedidos por minuto por IP), tope de 20 turnos por conversación y 500 caracteres por mensaje.

### El prompt

Siete reglas, de las cuales las que importan son: responder **solo** desde el contexto, admitir cuando algo no está en vez de inventarlo, no suponer que sé una tecnología por parecerse a otra que sí está, y no salirse del rol ante instrucciones del visitante.

Configuración: `temperature: 0.3` para que se pegue al contexto, y `thinkingLevel: MINIMAL` — los Gemini 3.x razonan por defecto y para responder sobre un CV que ya está entero en el prompt eso solo consume cuota.

### Los evals

Un chatbot que suena bien no es un chatbot que funciona. La pregunta que importa es *"¿cómo sabés que no inventa?"*, y la respuesta es un comando:

```bash
npm run dev        # en una terminal
npm run chat:eval  # en otra
```

15 casos que corren **contra el endpoint HTTP real**, no contra el modelo directo: así se testea el sistema entero —validación, prompt, streaming— y no solo lo que devuelve Gemini.

| Grupo | Casos | Qué verifica |
|---|---|---|
| Grounding | 5 | Que responda con datos reales del contexto |
| No alucina | 4 | Kubernetes, Go/Rust, sueldo, empresas donde no trabajé → tiene que admitir que no le consta |
| Seguridad | 2 | Prompt injection y extracción del system prompt |
| Alcance | 1 | Preguntas fuera de tema |
| Multi-turno | 1 | Que mantenga el contexto entre mensajes |
| Tono | 2 | Tercera persona; no repetir el mail cuando ya respondió |

Sale con código 1 si algo falla, así que sirve en CI. `--only <texto>` filtra por nombre de caso y `CHAT_EVAL_URL` lo apunta a producción.

Dos detalles del runner: se autorregula para no chocar contra el rate limit de la propia route (por eso la tanda tarda ~1:40), y si igual come un 429 espera la ventana y reintenta antes de dar el caso por fallado.

**Y los evals están verificados.** Un suite que pasa todo a la primera puede no estar midiendo nada, así que lo probé al revés: tres casos de control con expectativas imposibles (`expectAll: ["cobol"]`, `reject: ["leandro"]`, `expectAny: ["fortran"]`). Los tres fallaron como corresponde y el proceso salió con código 1. Las aserciones son reales.

---

## Estructura

```
src/
├── app/                  Rutas (una sola página), API del chatbot, SEO
├── components/           UI — solo renderizan, no guardan contenido
└── lib/
    ├── site.ts           Fuente única de nombre, rol, email y redes
    ├── content/          Experiencia, proyectos, stack, bio, vocabulario técnico
    └── chatbot/          knowledge.ts, provider.ts, evals.json
cv/                       Fuente HTML de los PDFs del CV
scripts/chat-eval.mjs     Runner de los evals
```

## Variables de entorno

Ver `.env.example`.

| Variable | Para qué |
|---|---|
| `GEMINI_API_KEY` | Clave del asistente. Gratis en [AI Studio](https://aistudio.google.com/apikey), sin tarjeta |
| `GEMINI_MODEL` | Opcional. Por defecto `gemini-3.5-flash-lite` |
| `GEMINI_THINKING_LEVEL` | Opcional. Por defecto `MINIMAL` — ojo, `gemini-3.7-flash` lo rechaza y necesita `LOW` |
| `NEXT_PUBLIC_SITE_URL` | Opcional. URL canónica para metadata, sitemap y OG |
