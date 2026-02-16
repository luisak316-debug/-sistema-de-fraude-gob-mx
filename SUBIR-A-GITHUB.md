# Subir el proyecto a GitHub (desde tu PC)

El proyecto está en tu carpeta; para que Vercel lo despliegue, tiene que estar en GitHub.

## Pasos

### 1. Crear el repositorio en GitHub (si no existe)
- Entra en [github.com](https://github.com) e inicia sesión.
- Clic en **+** → **New repository**.
- **Repository name**: `sistema-de-fraude-gob-mx` (o el nombre que uses).
- Deja **Public**.
- **No** marques "Add a README" (deja el repo vacío).
- Clic en **Create repository**.

### 2. Abrir terminal en la carpeta del proyecto
Abre PowerShell o CMD y ve a la carpeta del proyecto (donde está `package.json`):

```powershell
cd "c:\Users\Gothics\COPIA DE SEGURIDAD PAGINA A Y M GOB 12.01.26\gob-mx-clone"
```

### 3. Inicializar Git y subir
Copia y pega estos comandos **uno por uno**. Sustituye `TU_USUARIO` por tu usuario de GitHub (ej. `luisak316`):

```powershell
git init
git add .
git commit -m "Subir proyecto sistema fraude gob-mx"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sistema-de-fraude-gob-mx.git
git push -u origin main
```

Si GitHub te pide usuario y contraseña: usa tu **usuario** y en contraseña un **Personal Access Token** (en GitHub: Settings → Developer settings → Personal access tokens → Generate new token). La contraseña normal ya no sirve para `git push`.

### 4. Después en Vercel
- Vercel → **Add New** → **Project**.
- Importa el repo **sistema-de-fraude-gob-mx**.
- **Root Directory**: déjalo **vacío** (el proyecto ya está en la raíz del repo).
- Añade las variables de entorno de Firebase.
- **Deploy**.
