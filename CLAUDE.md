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
│   │   ├── page.tsx                 # Home (CV/Resume)
│   │   ├── projects/page.tsx        # Portfolio de proyectos de videojuegos
│   │   ├── games/
│   │   │   └── page.tsx             # Landing page de minijuegos
│   │   ├── miniatures/page.tsx      # Galería de miniaturas
│   │   └── contact/page.tsx         # Formulario de contacto
│   ├── components/
│   │   └── Navbar.tsx               # Navegación principal
│   ├── lib/
│   │   └── translations.ts          # i18n (EN/ES)
│   └── hooks/
│       └── useLanguage.ts           # Hook de idioma
├── public/
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

El portfolio soporta **Inglés** y **Español**.

**Archivo:** `src/lib/translations.ts`

Para añadir nuevas traducciones:
```typescript
export const translations = {
  en: {
    nav: { /* ... */ },
    newSection: {
      title: "Title in English",
      description: "Description in English"
    }
  },
  es: {
    nav: { /* ... */ },
    newSection: {
      title: "Título en Español",
      description: "Descripción en Español"
    }
  }
};
```

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
  "build": "next build",
  "start": "next start",
  "games:update": "git submodule update --remote --merge",
  "games:status": "git submodule status"
}
```

**Uso:**
- `npm run dev` - Desarrollo local
- `npm run build` - Build de producción
- `npm run games:update` - Actualizar todos los juegos (submodules)
- `npm run games:status` - Ver estado de submodules

---

## 🚀 Deployment

### Vercel Configuration:

**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

**Environment Variables:**
- (Ninguna por ahora)

**Nota sobre Submodules:**
Vercel detecta y clona automáticamente los submodules durante el build.

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

1. **Submodules:** Recuerda que los juegos en `public/games/` son Git Submodules. No edites directamente, trabaja en el repo original del juego.

2. **Rutas:** Todos los juegos se sirven desde `/games/[nombre-juego]`, NO desde subdominios.

3. **Traducciones:** Cualquier texto nuevo debe añadirse tanto en inglés como español en `translations.ts`.

4. **Navbar:** Al añadir nuevas secciones, actualiza tanto desktop como mobile menu en `Navbar.tsx`.

5. **Deployment:** Los cambios en `main` se despliegan automáticamente en Vercel. No es necesario configuración manual.

6. **Testing local:** Para probar con juegos, asegúrate de tener los submodules inicializados (`git submodule update --init`).

---

## 📝 Historial de Cambios

### Febrero 2025
- ✅ Reorganización de arquitectura: Juegos como Git Submodules
- ✅ Creada landing page `/games` en Next.js
- ✅ Migrado Typing Defense a submodule en `public/games/typing/`
- ✅ Actualizado Navbar con link a Games
- ✅ Documentación completa en CLAUDE.md

---

**Última actualización:** Febrero 2025
**Mantenedor:** Alejandro Moñiz Mesa
**Asistente:** Claude (Anthropic)
