const siteUrl = "https://portal-gob-mx.vercel.app";

/** /gob redirige directo al portal; no se muestra ninguna página intermedia. */
export async function GET() {
  return new Response(null, {
    status: 302,
    headers: { Location: siteUrl },
  });
}
