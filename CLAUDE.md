# 📝 Portfolio - Arquitectura y Contexto para Claude

Este documento describe la arquitectura y organización del portfolio de Alejandro Moñiz Mesa para facilitar la colaboración con Claude en futuras sesiones.

---

## 🏗️ Arquitectura del Proyecto

### Portfolio Principal (mi-portfolio)

**Tecnologías:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19

**Estructura:**
```
mi-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home (CV/Resume) - EN only
│   │   ├── projects/
│   │   │   ├── page.tsx             # Portfolio de proyectos - EN only
│   │   │   └── [id]/page.tsx        # Detalle de proyecto
│   │   ├── games/
│   │   │   ├── page.tsx             # Landing page de minijuegos - EN only
│   │   │   └── typing/page.tsx      # Redirect a typing game estático
│   │   ├── miniatures/page.tsx      # 3D Printing Miniatures - EN only
│   │   └── contact/page.tsx         # Formulario de contacto - EN only
│   └── components/
│       └── Navbar.tsx               # Navegación principal - EN only
├── public/
│   ├── images/                      # Imágenes del portfolio
│   └── games/                       # ⭐ Juegos como Git Submodules
│       └── typing/                  # Submodule → github.com/iPrydz/games
│           ├── index.html
│           ├── game.js
│           └── style.css
└── CLAUDE.md                        # Este archivo

```

**Deployment:**
- Plataforma: Vercel
- Dominio: `amoniz.dev`
- Auto-deploy en push a `main`

---

## 🎮 Sistema de Juegos (Git Submodules)

### ⚠️ IMPORTANTE: Arquitectura con Submodules

Los minijuegos están organizados como **Git Submodules** para permitir:
- ✅ Desarrollo independiente de cada juego en su propio repositorio
- ✅ Versionado separado por juego
- ✅ Todos los juegos servidos desde `amoniz.dev/games/[nombre-juego]`

### Estructura:

```
mi-portfolio/public/games/
└── typing/          ← Git Submodule
    └── (repo: github.com/iPrydz/games)
```

**URLs:**
- Landing: `amoniz.dev/games` → Lista todos los juegos disponibles
- Typing Defense: `amoniz.dev/games/typing` → Juego completo

### Routing de Juegos:

Los juegos utilizan una arquitectura híbrida:

1. **Landing Page (`/games`):**
   - Next.js page: `src/app/games/page.tsx`
   - Lista todos los juegos con links

2. **Juego Individual (`/games/typing`):**
   - Next.js redirect page: `src/app/games/typing/page.tsx`
   - Redirige a: `/games/typing/index.html` (archivo estático)
   - Archivo estático: `public/games/typing/index.html` (del submodule)

**¿Por qué necesitamos la página de redirect?**
- Next.js App Router captura todas las rutas `/games/*`
- Sin la página en `src/app/games/typing/page.tsx`, daría 404
- La página hace redirect client-side a la versión estática del juego

### Lista de Juegos (Submodules):

| Juego | Repo | URL | Tecnología |
|-------|------|-----|------------|
| Typing Defense | `github.com/iPrydz/games` | `/games/typing` | Vanilla JS, Canvas |
| *(Futuros juegos)* | *(Por añadir)* | `/games/[nombre]` | - |

---

## 🔧 Trabajando con Submodules

### Comandos importantes:

```bash
# Clonar el portfolio CON submodules
git clone --recurse-submodules https://github.com/iPrydz/mi-portfolio.git

# Si ya clonaste sin --recurse-submodules
git submodule update --init --recursive

# Actualizar un submodule específico
cd public/games/typing
git pull origin main
cd ../../..
git add public/games/typing
git commit -m "Update: typing game to latest version"

# Añadir un nuevo juego como submodule
git submodule add https://github.com/iPrydz/[nuevo-juego].git public/games/[nombre]

# Ver estado de todos los submodules
git submodule status
```

### Script de ayuda:

Usa `npm run games:update` para actualizar todos los submodules automáticamente (ver package.json).

---

## ➕ Añadir un Nuevo Juego

### Pasos:

1. **Crear repositorio del juego:**
   ```bash
   mkdir nuevo-juego
   cd nuevo-juego
   git init
   # ... desarrollar el juego ...
   git remote add origin https://github.com/iPrydz/nuevo-juego.git
   git push -u origin main
   ```

2. **Añadir como submodule en mi-portfolio:**
   ```bash
   cd mi-portfolio
   git submodule add https://github.com/iPrydz/nuevo-juego.git public/games/nuevo-juego
   git commit -m "Add: nuevo-juego as submodule"
   ```

3. **Actualizar la landing page:**
   Editar `src/app/games/page.tsx` y añadir el juego al array `games`:
   ```tsx
   {
     title: "Nuevo Juego",
     icon: "🎯",
     description: "Descripción del juego...",
     tech: ["Unity", "WebGL"],
     url: "/games/nuevo-juego",
     comingSoon: false
   }
   ```

4. **Commit y deploy:**
   ```bash
   git add src/app/games/page.tsx
   git commit -m "Add: nuevo-juego to games landing"
   git push
   ```

---

## 🌍 Internacionalización (i18n)

~~El portfolio soporta **Inglés** y **Español**.~~

**⚠️ ACTUALIZACIÓN:** El proyecto ahora está completamente en **INGLÉS** solamente.

- Se eliminó el sistema de traducciones
- El archivo `src/lib/translations.ts` ya NO se usa en los componentes
- Todo el contenido está hardcodeado en inglés directamente en cada página
- Si necesitas añadir nuevo contenido, escríbelo directamente en inglés en los componentes

---

## 🎨 Guía de Estilo

### Colores principales:
- Gradientes: `from-blue-400 to-purple-400`
- Fondo: `from-slate-900 to-slate-700`
- Cajas: `bg-slate-800/50` con `backdrop-blur-sm`
- Texto: `text-slate-300` (secundario), `text-white` (primario)

### Componentes comunes:
- Navbar: Fijo en top, glassmorphism, responsive con hamburger menu
- Cards: Bordes redondeados, hover con `transform -translate-y-1`
- Gradientes de texto: `bg-clip-text text-transparent`

---

## 📦 Scripts de Package.json

```json
{
  "dev": "next dev",
  "build": "git submodule update --init --recursive && next build",
  "start": "next start",
  "games:update": "git submodule update --remote --merge",
  "games:status": "git submodule status",
  "games:init": "git submodule update --init --recursive"
}
```

**Uso:**
- `npm run dev` - Desarrollo local
- `npm run build` - Build de producción (⚠️ incluye inicialización de submodules)
- `npm run games:update` - Actualizar todos los juegos (submodules)
- `npm run games:status` - Ver estado de submodules
- `npm run games:init` - Inicializar submodules manualmente

### ⚠️ CRÍTICO: Build con Submodules

El script `build` ejecuta:
```bash
git submodule update --init --recursive && next build
```

**¿Por qué es necesario?**
- Vercel NO inicializa git submodules automáticamente durante el deployment
- Sin este comando, la carpeta `public/games/typing/` estaría vacía en producción
- Esto causaría 404 errors en `/games/typing`

**Resultado:**
- Los juegos se clonan/actualizan antes del build de Next.js
- Los archivos HTML/JS/CSS del juego están disponibles en `public/games/typing/`
- Next.js puede servir correctamente `/games/typing/index.html`

---

## 🚀 Deployment

### Vercel Configuration:

**Build Command:** `npm run build` (que incluye `git submodule update --init --recursive`)
**Output Directory:** `.next`
**Install Command:** `npm install`

**Environment Variables:**
- (Ninguna por ahora)

### ⚠️ IMPORTANTE: Submodules en Vercel

**Problema 1:** Vercel NO inicializa git submodules automáticamente.

**Solución:** El script `build` en `package.json` incluye la inicialización:
```json
"build": "git submodule update --init --recursive && next build"
```

**Problema 2:** Vercel necesita acceso a los repositorios de los submodules.

**Solución:** Los repositorios de submodules DEBEN ser públicos, o Vercel debe tener acceso mediante GitHub integration.

**Error típico si el repo es privado:**
```
fatal: could not read Username for 'https://github.com'
fatal: clone of 'https://github.com/iPrydz/games.git' failed
Error: Command "npm run build" exited with 1
```

**Cómo solucionarlo:**
1. **Opción A (Recomendado):** Hacer el repositorio del submodule público en GitHub
   - Ve a GitHub → Repositorio → Settings → Danger Zone → Change visibility → Make public
2. **Opción B:** Dar acceso a Vercel mediante GitHub integration
   - Vercel Dashboard → Settings → Git → Reinstall GitHub → Grant access to submodule repos

**Flujo de deployment:**
1. Vercel clona el repositorio principal (`mi-portfolio`)
2. Ejecuta `npm install`
3. Ejecuta `npm run build`:
   - Primero: `git submodule update --init --recursive` → Clona el juego typing (requiere acceso público)
   - Después: `next build` → Compila Next.js con los juegos disponibles
4. Deploy completo con todos los juegos funcionando

**Sin esta configuración:** Los juegos darían 404 en producción o el build fallaría.

---

## 📁 Estructura de Archivos Importante

```
mi-portfolio/
├── .gitmodules                  # Configuración de submodules
├── CLAUDE.md                    # Este archivo (contexto para Claude)
├── README.md                    # Documentación pública del proyecto
├── package.json                 # Scripts y dependencias
├── next.config.ts               # Configuración de Next.js
├── tailwind.config.ts           # Configuración de Tailwind
├── src/
│   ├── app/                     # App Router de Next.js
│   ├── components/              # Componentes reutilizables
│   ├── lib/                     # Utilidades y traducciones
│   └── hooks/                   # React Hooks personalizados
└── public/
    ├── images/                  # Imágenes estáticas
    └── games/                   # Juegos (Git Submodules)
        └── typing/              # Submodule: Typing Defense
```

---

## 🔗 Enlaces Importantes

- **Portfolio:** [amoniz.dev](https://amoniz.dev)
- **Games Landing:** [amoniz.dev/games](https://amoniz.dev/games)
- **GitHub (Portfolio):** [github.com/iPrydz/mi-portfolio](https://github.com/iPrydz/mi-portfolio)
- **GitHub (Typing):** [github.com/iPrydz/games](https://github.com/iPrydz/games)

---

## 💡 Notas para Claude

### Cuando trabajes con este proyecto:

1. **⚠️ BUILD CRÍTICO:** El script `build` en `package.json` DEBE incluir `git submodule update --init --recursive`. Sin esto, los juegos no funcionarán en producción (Vercel). NO modifiques este script sin actualizar esta documentación.

2. **Submodules:** Recuerda que los juegos en `public/games/` son Git Submodules. No edites directamente, trabaja en el repo original del juego. **IMPORTANTE:** Los repos de submodules DEBEN ser públicos para que Vercel pueda clonarlos durante el build.

3. **Routing de Juegos:** Cada juego necesita:
   - Página de redirect en `src/app/games/[nombre]/page.tsx`
   - Archivos estáticos en `public/games/[nombre]/` (submodule)
   - Entrada en el array de juegos en `src/app/games/page.tsx`

4. **Rutas:** Todos los juegos se sirven desde `/games/[nombre-juego]`, NO desde subdominios.

5. **Traducciones:** El proyecto ahora está SOLO en inglés. Se eliminaron todas las traducciones. Todo el contenido está hardcodeado en inglés.

6. **Navbar:** Al añadir nuevas secciones, actualiza tanto desktop como mobile menu en `Navbar.tsx`.

7. **Deployment:** Los cambios en `main` se despliegan automáticamente en Vercel. No es necesario configuración manual.

8. **Testing local:** Para probar con juegos, asegúrate de tener los submodules inicializados (`npm run games:init`).

---

## 📝 Historial de Cambios

### Febrero 2025
- ✅ Reorganización de arquitectura: Juegos como Git Submodules
- ✅ Creada landing page `/games` en Next.js
- ✅ Migrado Typing Defense a submodule en `public/games/typing/`
- ✅ Actualizado Navbar con link a Games
- ✅ Documentación completa en CLAUDE.md
- ✅ Eliminado sistema de traducciones (i18n) - Todo en inglés
- ✅ Fix layout shift con scrollbar-gutter
- ✅ Estandarizado max-width en todas las páginas
- ✅ **CRÍTICO:** Añadido `git submodule update --init` al build script para Vercel
- ✅ Cambiado de redirect a iframe para `/games/typing`
- ✅ Añadidos Next.js rewrites para servir archivos estáticos del juego
- ⚠️ **IMPORTANTE:** Repositorios de submodules deben ser públicos para Vercel

---

**Última actualización:** Febrero 2025
**Mantenedor:** Alejandro Moñiz Mesa
**Asistente:** Claude (Anthropic)
