This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Despliegue (relanzar sin Netlify)

El proyecto usa **Firebase Firestore** para la base de datos en tiempo real ([Firebase Console](https://console.firebase.google.com)). Las “dos páginas” son parte del mismo sitio:

- **/** — Página principal (formulario)
- **/verificar-folios** — Verificación de folios
- **/admin** — Panel de administración

### Opción recomendada: Vercel (gratis, ideal para Next.js)

1. **Sube el código a GitHub** (repositorio: `sistema de fraude gob-mx`).
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
3. **Import** → elige el repo `sistema de fraude gob-mx` (o el nombre exacto del repo).
4. **Variables de entorno**: en la configuración del proyecto, añade estas variables (valores desde [Firebase Console](https://console.firebase.google.com) → tu proyecto → ⚙️ Configuración → Tus apps):
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
5. **Deploy**. Vercel te dará una URL (ej. `tu-proyecto.vercel.app`). Todas las rutas (/, /verificar-folios, /admin) funcionan en ese mismo dominio.

En Firebase Console, en **Authentication** → **Authorized domains**, añade el dominio de Vercel (ej. `tu-proyecto.vercel.app`) si usas auth.

### Opción alternativa: Firebase Hosting

Para hospedar el front en el mismo proyecto que Firestore:

1. Instala Firebase CLI: `npm i -g firebase-tools`
2. En la raíz del proyecto: `firebase init hosting`
3. Elige “Use an existing project” y tu proyecto de Firebase.
4. **Build**: `npm run build`. Para Hosting estático con Next.js suele usarse export estático (`output: 'export'` en `next.config.js`) o un adaptador; si quieres SSR completo, Vercel es más sencillo.

### Variables de entorno locales

Copia `.env.example` a `.env.local` y rellena los valores de Firebase para desarrollo. No subas `.env.local` a GitHub.

---

## Deploy on Vercel (referencia)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
