import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// El runtime de Node rompe al prerenderizar en Windows (fileURLToPath en @vercel/og).
export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(to bottom right, #0a0f2c, #1e0033)",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#00ff99",
            fontSize: 28,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#00ff99",
            }}
          />
          {"> disponible para trabajar"}
        </div>

        <div style={{ display: "flex", color: "#00f0ff", fontSize: 76 }}>
          {SITE.name}
        </div>

        <div
          style={{
            display: "flex",
            color: "#ff00cc",
            fontSize: 44,
            marginTop: 12,
          }}
        >
          {SITE.role}
        </div>

        <div
          style={{
            display: "flex",
            color: "#cccccc",
            fontSize: 30,
            marginTop: 28,
          }}
        >
          React · Next.js · TypeScript · NestJS · PostgreSQL
        </div>

        <div
          style={{
            display: "flex",
            color: "#888888",
            fontSize: 26,
            marginTop: 48,
          }}
        >
          {SITE.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size
  );
}
