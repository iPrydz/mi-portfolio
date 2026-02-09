# 🚀 Guía de Deployment

Esta guía explica cómo hacer deploy de cambios en tus proyectos.

---

## 📋 Estructura del Proyecto

```
mi-portfolio/               → amoniz.dev
├── public/games/typing/   (submodule → repo games)
└── [resto del portfolio]

typing/                     → Repositorio separado (games)
├── index.html
├── game.js
└── style.css
```

**Importante:** El juego typing es un **git submodule** dentro de mi-portfolio. Esto significa que es un enlace a un commit específico del repo `games`.

---

## 🔄 Cómo Funciona el Deployment

### Para cambios en el Portfolio Principal

Si modificas algo en `mi-portfolio` (páginas, estilos, componentes):

```bash
cd mi-portfolio
git add .
git commit -m "Descripción del cambio"
git push
```

✅ Vercel detecta el push y redeploya automáticamente en **amoniz.dev**

---

### Para cambios en el Juego Typing

El proceso es de **2 pasos** porque typing es un submodule:

#### Paso 1: Push en el repo de typing

```bash
cd typing
git add .
git commit -m "Descripción del cambio"
git push
```

#### Paso 2: Actualizar el submodule en mi-portfolio

```bash
cd mi-portfolio
npm run games:update          # Actualiza el submodule
git add public/games/typing   # Añade el cambio del submodule
git commit -m "Update typing game"
git push
```

✅ Vercel detecta el push y redeploya con el juego actualizado en **amoniz.dev/games/typing**

---

## 🤖 Script Automático de Deployment

Para facilitar el proceso, usa el script `deploy-typing.sh`:

### Crear el script

Crea el archivo `deploy-typing.sh` en la carpeta `mi-portfolio`:

```bash
#!/bin/bash

# Script para deployar cambios del juego typing
# Uso: ./deploy-typing.sh "mensaje del commit"

set -e  # Detener si hay errores

echo "🚀 Iniciando deployment de typing..."

# Verificar que estamos en la carpeta correcta
if [ ! -d "public/games/typing" ]; then
    echo "❌ Error: Ejecuta este script desde la carpeta mi-portfolio"
    exit 1
fi

# Obtener mensaje del commit (usar argumento o mensaje por defecto)
COMMIT_MSG="${1:-Update typing game}"

echo "📥 Actualizando submodule..."
npm run games:update

echo "📝 Haciendo commit del cambio..."
git add public/games/typing
git commit -m "$COMMIT_MSG"

echo "🚀 Pusheando a GitHub..."
git push

echo "✅ ¡Deployment completado!"
echo "🌐 Los cambios estarán en amoniz.dev/games/typing en 1-2 minutos"
```

### Cómo usarlo

```bash
# Dar permisos de ejecución (solo la primera vez)
chmod +x deploy-typing.sh

# Ejecutar con mensaje personalizado
./deploy-typing.sh "Add new enemy types"

# O ejecutar sin argumentos (usa mensaje por defecto)
./deploy-typing.sh
```

### Qué hace el script

1. ✅ Verifica que estás en la carpeta correcta
2. 🔄 Ejecuta `npm run games:update` para traer los últimos cambios de typing
3. 📝 Hace commit del cambio del submodule
4. 🚀 Pushea a GitHub
5. 🎉 Vercel redeploya automáticamente

---

## ⚡ Flujo de Trabajo Completo

### Cuando modificas el juego typing:

```bash
# 1. Trabajar en typing
cd typing
# ... hacer cambios en el código ...
git add .
git commit -m "Add new features"
git push

# 2. Volver a mi-portfolio y deployar
cd ../mi-portfolio
./deploy-typing.sh "Update typing: Add new features"

# ¡Listo! En 1-2 minutos los cambios estarán en producción
```

---

## 📝 Comandos Útiles

### Ver estado del submodule
```bash
cd mi-portfolio
npm run games:status
```

### Actualizar submodule manualmente
```bash
cd mi-portfolio
npm run games:update
```

### Ver qué commit tiene el submodule actualmente
```bash
cd mi-portfolio
git submodule status
```

---

## ⚠️ Problemas Comunes

### "No se actualizan mis cambios en el sitio"

**Causa:** Olvidaste actualizar el submodule en mi-portfolio.

**Solución:**
```bash
cd mi-portfolio
./deploy-typing.sh
```

### "El script no se ejecuta"

**Causa:** No tiene permisos de ejecución.

**Solución:**
```bash
chmod +x deploy-typing.sh
```

### "Los cambios tardan mucho"

**Causa:** Vercel está buildeando (puede tardar 1-3 minutos).

**Solución:** Espera un poco y refresca con Ctrl+Shift+R para limpiar el cache.

---

## 🎯 Resumen Rápido

| Cambios en... | Qué hacer |
|--------------|-----------|
| **Portfolio** | `git add → commit → push` |
| **Typing** | `git push` en typing + `./deploy-typing.sh` en mi-portfolio |

---

**Última actualización:** Febrero 2025
