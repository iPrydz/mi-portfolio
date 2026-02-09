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
