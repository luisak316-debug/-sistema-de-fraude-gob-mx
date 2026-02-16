import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2d0a1a 0%, #6B1839 50%, #9d3d5c 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          Portal Gob MX
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            opacity: 0.9,
            maxWidth: 800,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          El portal gob.mx permite consultar el listado de trámites y programas
          sociales federales disponibles y a los cuales tienes acceso.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
