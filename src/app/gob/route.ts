const siteUrl = "https://portal-gob-mx.vercel.app";
const gobUrl = `${siteUrl}/gob`;

/** User-Agents de crawlers que deben ver los meta tags sin redirección */
const CRAWLER_UA = [
  "facebookexternalhit",
  "whatsapp",
  "twitterbot",
  "linkedinbot",
  "telegrambot",
  "slackbot",
  "discordbot",
  "googlebot",
];

function isCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLER_UA.some((bot) => ua.includes(bot));
}

/** HTML con vista previa: og:url apunta a /gob para que la caché sea por esta URL */
const htmlWithMeta = `<!DOCTYPE html>
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
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Portal Gob MX">
  <meta name="twitter:description" content="El portal gob.mx permite consultar el listado de trámites y programas sociales federales disponibles y a los cuales tienes acceso.">
  <meta name="twitter:image" content="${siteUrl}/og.png">
  <link rel="canonical" href="${siteUrl}">
  <link rel="icon" href="https://ext.same-assets.com/2098432521/920971351.ico" type="image/x-icon">
</head>
<body>
  <p>Portal Gob MX</p>
</body>
</html>`;

/** HTML para navegadores: redirige al portal */
const htmlRedirect = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Portal Gob MX</title>
  <meta http-equiv="refresh" content="0;url=${siteUrl}">
  <link rel="canonical" href="${siteUrl}">
</head>
<body>
  <p>Redirigiendo a Portal Gob MX...</p>
  <script>window.location.href="${siteUrl}";</script>
</body>
</html>`;

export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent");
  const forCrawler = isCrawler(userAgent);
  const html = forCrawler ? htmlWithMeta : htmlRedirect;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Robots-Tag": forCrawler ? "noindex" : "noindex",
    },
  });
}
