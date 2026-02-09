# 🎨 Portfolio - Alejandro Moñiz Mesa

Portfolio personal y colección de minijuegos desarrollados con Next.js 15 y React 19.

**🌐 Live:** [amoniz.dev](https://amoniz.dev)

---

## 📋 Sobre el Proyecto

Portfolio profesional que incluye:
- **CV/Resume** - Experiencia laboral y habilidades
- **Proyectos** - Portfolio de videojuegos publicados
- **Games** - Colección de minijuegos experimentales
- **Miniaturas** - Galería de miniaturas pintadas
- **Contacto** - Formulario de contacto

---

## 🚀 Quick Start

### Clonar el repositorio (con submodules):

```bash
git clone --recurse-submodules https://github.com/iPrydz/mi-portfolio.git
cd mi-portfolio
npm install
npm run dev
```

**⚠️ Importante:** Usa `--recurse-submodules` para clonar también los juegos.

Si ya clonaste sin submodules:
```bash
npm run games:init
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

---

## 🎮 Sistema de Juegos (Git Submodules)

Los minijuegos están organizados como **Git Submodules** en `public/games/`:

```
public/games/
└── typing/          ← Git Submodule (github.com/iPrydz/games)
    ├── index.html
    ├── game.js
    └── style.css
```

**URLs:**
- Landing: `/games` → Lista de todos los juegos
- Typing Defense: `/games/typing` → Juego completo

### Gestionar Submodules:

```bash
# Ver estado de los juegos
npm run games:status

# Actualizar todos los juegos a la última versión
npm run games:update

# Inicializar submodules (si clonaste sin --recurse-submodules)
npm run games:init
```

### Añadir un nuevo juego:

```bash
# 1. Añadir como submodule
git submodule add https://github.com/iPrydz/nuevo-juego.git public/games/nuevo-juego

# 2. Actualizar src/app/games/page.tsx con el nuevo juego

# 3. Commit
git add .
git commit -m "Add: nuevo-juego as submodule"
git push
```

Ver [`CLAUDE.md`](./CLAUDE.md) para más detalles sobre la arquitectura.

---

## 🛠️ Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Frontend:** React 19, TypeScript
- **Estilos:** Tailwind CSS 4
- **Deployment:** Vercel
- **i18n:** Inglés / Español

---

## 📁 Estructura del Proyecto

```
mi-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home (CV)
│   │   ├── projects/page.tsx        # Portfolio de proyectos
│   │   ├── games/page.tsx           # Landing de minijuegos
│   │   ├── miniatures/page.tsx      # Galería de miniaturas
│   │   └── contact/page.tsx         # Contacto
│   ├── components/
│   │   └── Navbar.tsx               # Navegación principal
│   ├── lib/
│   │   └── translations.ts          # Traducciones EN/ES
│   └── hooks/
│       └── useLanguage.ts           # Hook de idioma
├── public/
│   ├── images/                      # Imágenes del portfolio
│   └── games/                       # Juegos (Git Submodules)
│       └── typing/                  # Submodule: Typing Defense
├── CLAUDE.md                        # Documentación para Claude
└── README.md                        # Este archivo
```

---

## 📜 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Iniciar servidor de producción
npm run lint         # Linter

# Gestión de juegos (submodules)
npm run games:status # Ver estado de submodules
npm run games:update # Actualizar todos los juegos
npm run games:init   # Inicializar submodules
```

---

## 🌍 Internacionalización

El portfolio soporta **Inglés** y **Español** mediante `src/lib/translations.ts`.

Para añadir nuevas traducciones, edita el archivo y añade tanto la versión en inglés (`en`) como en español (`es`).

---

## 🚀 Deployment

**Plataforma:** Vercel
**Dominio:** `amoniz.dev`

### Auto-deploy:
- Push a `main` → Deploy automático
- Pull Request → Preview deployment

Vercel detecta y clona automáticamente los submodules durante el build.

---

## 📝 Documentación Adicional

- [`CLAUDE.md`](./CLAUDE.md) - Arquitectura detallada y contexto para Claude
- [Next.js Docs](https://nextjs.org/docs) - Documentación de Next.js
- [Tailwind CSS](https://tailwindcss.com/docs) - Documentación de Tailwind

---

## 🤝 Contribuir

Este es un proyecto personal, pero sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📜 Licencia

MIT License - © 2025 Alejandro Moñiz Mesa

---

## 🔗 Links

- **Portfolio:** [amoniz.dev](https://amoniz.dev)
- **Games:** [amoniz.dev/games](https://amoniz.dev/games)
- **GitHub:** [github.com/iPrydz](https://github.com/iPrydz)

---

**Última actualización:** Febrero 2025
