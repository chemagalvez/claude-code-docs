# 🚀 Quick Start - Prueba el Proyecto Ahora

## Opción 1: Prueba Local Inmediata

```bash
# Navega al directorio
cd claude-code-docs

# Inicia servidor local
python3 -m http.server 8000

# Abre en el navegador
open http://localhost:8000
```

## Opción 2: Con Node.js

```bash
cd claude-code-docs
npx serve .
# Abre la URL que se muestra
```

## ✅ Qué Deberías Ver

1. **Página de Inicio** con:
   - Header con logo y selector de navegación
   - Botón de tema claro/oscuro funcionando
   - Grid de 6 características
   - Tabla de contenidos
   - Botón "Siguiente: Introducción"

2. **Funcionalidades a Probar**:
   - Click en el selector dropdown → Navega a cualquier página
   - Click en botones "Anterior/Siguiente" → Navega entre páginas
   - Click en el botón 🌙/☀️ → Cambia entre modo oscuro/claro
   - Hover sobre bloques de código → Aparece botón "Copiar"
   - Click en "Copiar" → El código se copia al portapapeles
   - Teclado ← → → Navega entre páginas
   - Teclado H → Vuelve al inicio

## 🐛 Si Algo No Funciona

### JavaScript no se carga
```bash
# Verifica que los archivos existan
ls -la assets/js/

# Deberías ver:
# navigation.js
# code-copy.js
```

### CSS no se aplica
```bash
ls -la assets/css/

# Deberías ver:
# styles.css
```

### Páginas no existen
```bash
ls -la *.html

# Deberías tener al menos:
# index.html
# 01-introduccion.html
# 02-instalacion.html
# 03-comandos.html
```

## 📱 Prueba en Diferentes Dispositivos

### Desktop
- Abre en navegador de escritorio
- Verifica que el layout se vea bien
- Prueba todas las funcionalidades

### Mobile (simulado)
1. Abre DevTools (Cmd+Option+I en macOS)
2. Click en el icono de dispositivo móvil
3. Selecciona iPhone o iPad
4. Verifica que el diseño sea responsivo

### Tablet
- Mismo proceso pero selecciona iPad
- Verifica que el menú se adapte

## 🎨 Personalización Rápida

### Cambiar el Título
Edita `index.html`:
```html
<title>Tu Título Aquí | Claude Code para macOS</title>
```

### Cambiar Colores
Edita `assets/css/styles.css` (líneas 7-12):
```css
:root {
  --primary-color: #TU_COLOR;
  --secondary-color: #TU_COLOR;
  --accent-color: #TU_COLOR;
}
```

### Agregar Tu Información
Edita el footer en cualquier HTML:
```html
<p>&copy; 2025 TU NOMBRE. Creado con Claude Code.</p>
```

## 🚢 Deploy Rápido a GitHub Pages

```bash
# 1. Inicializar Git
cd claude-code-docs
git init

# 2. Agregar todo
git add .

# 3. Primer commit
git commit -m "Initial commit: Claude Code Docs"

# 4. Crear rama main
git branch -M main

# 5. Conectar con GitHub (reemplaza TU-USUARIO y REPO)
git remote add origin https://github.com/TU-USUARIO/REPO.git

# 6. Push
git push -u origin main

# 7. Activa GitHub Pages en:
# https://github.com/TU-USUARIO/REPO/settings/pages
# Selecciona: Source → main → / (root) → Save

# 8. Espera 1-2 minutos y visita:
# https://TU-USUARIO.github.io/REPO/
```

## ✨ Siguiente Nivel

Una vez que el proyecto funciona, completa las páginas faltantes:

1. Lee `INSTRUCCIONES_FINALES.md`
2. Usa la plantilla HTML proporcionada
3. Copia/pega el contenido sugerido
4. Personaliza según tus necesidades

## 🆘 Ayuda

Si tienes problemas:

1. Verifica la consola del navegador (Cmd+Option+J)
2. Revisa que todos los archivos estén en su lugar
3. Asegúrate de estar ejecutando desde el directorio correcto
4. Prueba con un navegador diferente

---

**¡Listo para probar!** 🎉

