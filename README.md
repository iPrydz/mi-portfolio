# Mi Portfolio

Portfolio personal profesional construido con Next.js, TypeScript y Tailwind CSS, con soporte multiidioma y sistema de gestión de proyectos.

## Descripción

Este es un portfolio web moderno que incluye una página principal con información profesional (CV), una sección de proyectos con sistema de filtrado por categorías, y soporte completo para internacionalización (i18n) en inglés y español.

## Tecnologías y Versiones

### Framework Core
- **Next.js** 16.0.0 - Framework React con App Router
- **React** 19.2.0 - Librería UI
- **React DOM** 19.2.0 - Renderizado DOM

### Estilos
- **Tailwind CSS** 4.1.15 - Framework CSS utility-first
- **@tailwindcss/postcss** 4.1.15 - Plugin PostCSS
- **PostCSS** - Transformación de CSS

### Desarrollo
- **TypeScript** 5.9.3 - JavaScript con tipado estático
- **ESLint** 9.38.0 - Linting de código
- **eslint-config-next** 16.0.0 - Configuración ESLint para Next.js

### Type Definitions
- @types/node ^20
- @types/react ^19
- @types/react-dom ^19

## Estructura del Proyecto

```
mi-portfolio/
├── src/
│   ├── app/                      # App Router de Next.js
│   │   ├── layout.tsx            # Layout raíz con metadata
│   │   ├── page.tsx              # Página principal (Home/CV)
│   │   ├── globals.css           # Estilos globales con Tailwind
│   │   ├── favicon.ico           # Favicon
│   │   └── projects/
│   │       └── page.tsx          # Listado de proyectos
│   ├── components/               # Componentes reutilizables
│   │   └── Navbar.tsx            # Barra de navegación con selector de idioma
│   └── lib/                      # Librerías y utilidades
│       └── translations.ts       # Sistema i18n con traducciones y tipos
├── public/                       # Archivos estáticos
│   ├── images/
│   │   ├── profile.jpg           # Imagen de perfil
│   │   └── projects/             # Imágenes de proyectos
│   └── *.svg                     # Iconos SVG
├── package.json                  # Dependencias y scripts npm
├── tsconfig.json                 # Configuración TypeScript
├── next.config.ts                # Configuración Next.js
├── postcss.config.mjs            # Configuración PostCSS
├── eslint.config.mjs             # Configuración ESLint (flat config)
└── .gitignore                    # Archivos ignorados por Git
```

## Arquitectura y Funcionalidades

### Sistema de Rutas (App Router)

- **`/`** - Página principal con secciones:
  - Header con imagen de perfil
  - Sección "Sobre mí"
  - Timeline de experiencia profesional
  - Grid de habilidades técnicas
  - Idiomas
  - Footer

- **`/projects`** - Página de proyectos con:
  - Sistema de filtrado por categorías
  - Cards de proyectos con imagen, descripción, tecnologías
  - Enlaces externos e internos
  - Manejo de errores de imágenes con fallback

- **Rutas planificadas** (enlazadas pero no implementadas):
  - `/projects/[id]` - Páginas de detalle de proyectos
  - `/miniatures` - Galería adicional
  - `/contact` - Formulario de contacto

### Sistema de Internacionalización (i18n)

Implementado en [src/lib/translations.ts](src/lib/translations.ts):

```typescript
// Tipo de idioma soportado
type Language = 'en' | 'es';

// Objeto principal con todas las traducciones
const translations = {
  en: { /* contenido en inglés */ },
  es: { /* contenido en español */ }
};

// Interfaces TypeScript para type safety
interface Project {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  technologies: string[];
  status: string;
  year: string;
  link: string;
  image: string;
}
```

**Características:**
- Cambio de idioma dinámico mediante state
- Traducciones completas para navegación, contenido de CV, proyectos y UI
- Type safety completo con interfaces TypeScript
- Selector de idioma en Navbar (EN/ES)

### Componentes

#### Navbar ([src/components/Navbar.tsx](src/components/Navbar.tsx))
- Barra de navegación fija con backdrop blur
- Logo/nombre con link a home
- Links de navegación (Home, Projects, Miniatures, Contact)
- Botón selector de idioma
- Responsive (oculto en móvil, visible en desktop)

#### Pages

**Home** ([src/app/page.tsx](src/app/page.tsx))
- Client component con gestión de estado de idioma
- Múltiples secciones con contenido traducido
- Imagen de perfil con borde animado con gradiente
- Grid responsive de habilidades e idiomas

**Projects** ([src/app/projects/page.tsx](src/app/projects/page.tsx))
- Client component con estado de categoría seleccionada
- Filtrado dinámico de proyectos
- Grid responsive de cards (2 columnas en desktop)
- Imagen con efecto hover y zoom
- Badges de estado y año
- Tags de tecnologías
- Botones de acción (externos e internos)
- Fallback icon para imágenes faltantes

## Configuración

### TypeScript ([tsconfig.json](tsconfig.json))
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]  // Path alias para imports
    }
  }
}
```

### ESLint ([eslint.config.mjs](eslint.config.mjs))
- Flat config format (ESLint 9+)
- Next.js core-web-vitals
- TypeScript support
- Ignora `.next/`, build outputs y archivos generados

### Tailwind CSS

**Sistema de diseño:**
- Tema oscuro principal (slate-900 backgrounds)
- Gradientes de color (blue, purple, green, pink)
- Efectos glassmorphism (`backdrop-blur-sm`)
- Animaciones (`animate-pulse` para bordes)
- Breakpoints responsive: `sm`, `md`, `lg`, `xl`

**Paleta de colores:**
- Primarios: Slate (900, 800, 700, 400, 300)
- Acentos: Blue (400-700), Purple (400-700), Green (400-700)

## Scripts Disponibles

```bash
# Desarrollo
npm run dev        # Inicia servidor de desarrollo en localhost:3000

# Producción
npm run build      # Genera build optimizado
npm start          # Inicia servidor de producción

# Calidad de código
npm run lint       # Ejecuta ESLint
```

## Instalación y Uso

### Prerrequisitos
- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

La aplicación se recarga automáticamente al editar archivos.

### Build de Producción

```bash
# Generar build
npm run build

# Ejecutar en producción
npm start
```

## Diseño y Estilos

### Características Visuales
- **Gradientes de texto**: Títulos con gradiente blue-to-purple
- **Bordes animados**: Efecto `animate-pulse` en imágenes
- **Hover effects**: Escalado de imágenes, cambios de color
- **Glassmorphism**: Fondos con `backdrop-blur-sm`
- **Sombras con glow**: `shadow-blue-500/20` para profundidad

### Responsive Design
- Mobile-first approach
- Breakpoints Tailwind para adaptación
- Grid responsive que cambia de 1 a 2 columnas
- Navbar adaptativo (oculto/visible según pantalla)

## Buenas Prácticas

- ✅ TypeScript strict mode para type safety
- ✅ Componentes modulares y reutilizables
- ✅ Path aliases (`@/`) para imports limpios
- ✅ ESLint configurado con reglas de Next.js
- ✅ Metadata SEO en root layout
- ✅ HTML semántico y accesible
- ✅ Separación de datos (translations.ts) y UI

## Próximos Pasos

### Rutas pendientes de implementar:
- Páginas de detalle de proyectos individuales (`/projects/[id]`)
- Página de miniaturas (`/miniatures`)
- Página de contacto con formulario (`/contact`)

### Mejoras potenciales:
- Añadir animaciones con Framer Motion
- Implementar dark/light mode toggle
- Añadir más idiomas al sistema i18n
- Integrar CMS headless para gestión de contenido
- Añadir sistema de comentarios o testimonios

## Despliegue y Configuración de Producción

Este proyecto está configurado para desplegarse automáticamente desde GitHub a Vercel, con integración de Resend para envío de emails y Cloudflare para gestión de dominio.

### Stack de Producción

- **GitHub**: Control de versiones y CI/CD
- **Vercel**: Hosting y despliegue automático
- **Resend**: Servicio de envío de emails
- **Cloudflare**: DNS y gestión de dominio

### 1. Configuración de GitHub

#### Preparar el repositorio

```bash
# Inicializar Git (si no está inicializado)
git init

# Añadir todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit"

# Conectar con repositorio remoto
git remote add origin https://github.com/tu-usuario/mi-portfolio.git

# Subir cambios
git push -u origin main
```

#### Proteger la rama principal

1. Ve a **Settings** → **Branches** en tu repositorio de GitHub
2. Añade regla de protección para `main`:
   - ☑ Require pull request reviews before merging
   - ☑ Require status checks to pass before merging

### 2. Configuración de Vercel

#### Conectar repositorio

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa tu repositorio de GitHub
3. Configura el proyecto:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (por defecto)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (automático)
   - **Install Command**: `npm install`

#### Variables de entorno

1. Ve a **Settings** → **Environment Variables**
2. Añade las siguientes variables:

```bash
# Resend API Key (para envío de emails)
RESEND_API_KEY=re_xxxxxxxxxx

# Variables opcionales
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NODE_ENV=production
```

#### Configuración de dominio en Vercel

1. Ve a **Settings** → **Domains**
2. Añade tu dominio personalizado: `tudominio.com`
3. Vercel te proporcionará registros DNS para configurar

### 3. Configuración de Cloudflare

#### Añadir dominio

1. Inicia sesión en [Cloudflare](https://dash.cloudflare.com)
2. Añade tu sitio web
3. Selecciona el plan (Free es suficiente)
4. Cloudflare escaneará los DNS existentes

#### Configurar DNS para Vercel

En **DNS** → **Records**, añade los siguientes registros:

**Para dominio raíz (`tudominio.com`):**
```
Type: A
Name: @
Content: 76.76.21.21
Proxy status: DNS only (nube gris)
```

**Para subdominios (`www.tudominio.com`):**
```
Type: CNAME
Name: www
Content: cname.vercel-dns.com
Proxy status: DNS only (nube gris)
```

**Nota**: Usa los valores DNS específicos que Vercel te proporcione en su dashboard.

#### Configuración SSL/TLS

1. Ve a **SSL/TLS** → **Overview**
2. Selecciona modo: **Full** o **Full (strict)**
3. En **Edge Certificates**:
   - ☑ Always Use HTTPS
   - ☑ Automatic HTTPS Rewrites
   - ☑ Minimum TLS Version: 1.2

#### Optimizaciones de Cloudflare (Opcional)

**Speed** → **Optimization**:
- ☑ Auto Minify: JavaScript, CSS, HTML
- ☑ Brotli compression

**Caching** → **Configuration**:
- Browser Cache TTL: 4 hours (recomendado para desarrollo activo)

### 4. Configuración de Resend

#### Crear cuenta y obtener API Key

1. Registrarse en [resend.com](https://resend.com)
2. Ve a **API Keys** → **Create API Key**
3. Copia la API key y añádela a las variables de entorno de Vercel

#### Verificar dominio para emails

1. Ve a **Domains** → **Add Domain**
2. Añade tu dominio: `tudominio.com`
3. Resend te proporcionará registros DNS:

Añade estos registros en **Cloudflare DNS**:

```
Type: TXT
Name: @
Content: resend-verification=xxxxxxxxxxxxx

Type: MX
Name: @
Priority: 10
Content: feedback-smtp.resend.com

Type: TXT
Name: @
Content: v=spf1 include:_spf.resend.com ~all

Type: TXT
Name: resend._domainkey
Content: [DKIM key proporcionada por Resend]
```

#### Configurar remitente

En tu código, usa emails desde tu dominio verificado:
```typescript
from: 'noreply@tudominio.com'
```

### 5. Workflow de Desarrollo a Producción

#### Ramas de trabajo

```bash
main (producción)       → Desplegada automáticamente en Vercel
├── develop (staging)   → Preview deployments en Vercel
└── feature/*           → Feature branches
```

#### Flujo de trabajo estándar

```bash
# 1. Crear rama para nueva funcionalidad
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios y commits
git add .
git commit -m "feat: descripción del cambio"

# 3. Subir rama
git push origin feature/nueva-funcionalidad

# 4. Crear Pull Request en GitHub
# Vercel generará automáticamente un preview deployment

# 5. Revisar preview deployment
# URL: https://mi-portfolio-xxxxx.vercel.app

# 6. Aprobar y mergear PR a main
# Vercel desplegará automáticamente a producción
```

#### Comandos útiles

```bash
# Ver estado del proyecto
npm run build          # Build local para testing
npm start              # Probar build de producción localmente

# Desarrollo
npm run dev            # Servidor de desarrollo

# Linting antes de commit
npm run lint           # Verificar código
```

### 6. Monitoreo y Mantenimiento

#### Vercel Dashboard

- **Deployments**: Ver historial de despliegues
- **Analytics**: Métricas de rendimiento (Core Web Vitals)
- **Logs**: Runtime logs y errores

#### Verificaciones post-despliegue

```bash
# Verificar que el sitio está online
curl -I https://tudominio.com

# Verificar certificado SSL
curl -vI https://tudominio.com 2>&1 | grep -i "SSL certificate"
```

### 7. Configuración de Email de Contacto (con Resend)

Ejemplo de integración de Resend en tu proyecto:

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'noreply@tudominio.com',
      to: 'tu-email@tudominio.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
```

### 8. Checklist de Despliegue

Antes de cada despliegue a producción:

- [ ] Ejecutar `npm run lint` sin errores
- [ ] Ejecutar `npm run build` exitosamente
- [ ] Probar localmente con `npm start`
- [ ] Verificar variables de entorno en Vercel
- [ ] Revisar preview deployment
- [ ] Verificar que DNS está propagado (puede tardar hasta 48h)
- [ ] Probar formulario de contacto (si aplica)
- [ ] Verificar SSL activo
- [ ] Revisar Core Web Vitals en Vercel Analytics

### 9. Troubleshooting

#### El dominio no resuelve

```bash
# Verificar propagación DNS
nslookup tudominio.com
dig tudominio.com

# Esperar propagación (puede tomar hasta 48 horas)
```

#### Emails no se envían

1. Verificar API key en variables de entorno de Vercel
2. Verificar que el dominio está verificado en Resend
3. Revisar logs en Resend Dashboard
4. Comprobar registros DNS (SPF, DKIM, MX)

#### Build falla en Vercel

1. Revisar logs de build en Vercel
2. Verificar que `npm run build` funciona localmente
3. Verificar variables de entorno requeridas
4. Comprobar versión de Node.js (Vercel usa Node 20 por defecto)

### 10. Otras Plataformas Compatibles

Este proyecto también puede desplegarse en:
- **Netlify**: Similar a Vercel, con deploy automático desde Git
- **AWS Amplify**: Integración con servicios AWS
- **Google Cloud Platform**: Cloud Run o App Engine
- **Cualquier VPS**: Usando PM2 o Docker

## Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Este proyecto usa [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) como base.
