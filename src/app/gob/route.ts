const siteUrl = "https://portal-gob-mx.vercel.app";
const gobUrl = `${siteUrl}/gob`;
/** ID de app de Facebook (obligatorio para el depurador). Crear en https://developers.facebook.com/apps/ y poner en Vercel como NEXT_PUBLIC_FB_APP_ID */
const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID || "0";

/**
 * Siempre devolvemos el mismo HTML con TODOS los meta tags.
 * WhatsApp a veces pide la URL desde el teléfono con User-Agent de navegador,
 * no de bot; si le dábamos la versión "redirect" (sin og:), no había vista previa.
 * Ahora todo el mundo recibe los og: tags; el redirect sigue en la página para navegadores.
 */
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Portal Gob MX</title>
  <meta name="description" content="El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Portal Gob MX">
  <meta property="og:title" content="Portal Gob MX">
  <meta property="og:description" content="El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.">
  <meta property="og:url" content="${gobUrl}">
  <meta property="og:image" content="${siteUrl}/og.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="es_MX">
  <meta property="fb:app_id" content="${fbAppId}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Portal Gob MX">
  <meta name="twitter:description" content="El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.">
  <meta name="twitter:image" content="${siteUrl}/og.png">
  <link rel="canonical" href="${siteUrl}">
  <link rel="icon" href="https://ext.same-assets.com/2098432521/920971351.ico" type="image/x-icon">
</head>
<body style="font-family:system-ui;text-align:center;padding:2rem;background:#f5f5f5;">
  <h1 style="color:#6B1839;">Portal Gob MX</h1>
  <p>El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles.</p>
  <a href="${siteUrl}" style="display:inline-block;margin-top:1rem;padding:12px 24px;background:#6B1839;color:white;text-decoration:none;border-radius:8px;">Ir al portal</a>
</body>
</html>`;

export async function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
