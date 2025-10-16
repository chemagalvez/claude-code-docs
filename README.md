# 📚 Claude Code para macOS - Documentación Completa

Documentación interactiva y exhaustiva de Claude Code diseñada específicamente para usuarios de macOS.

🔗 **[Ver Documentación en Vivo](https://TU-USUARIO.github.io/claude-code-docs/)**

## 🎯 Descripción

Esta documentación proporciona una guía completa de Claude Code en español, optimizada para macOS, con ejemplos prácticos, código copiable y navegación interactiva.

### ✨ Características

- 📱 **Totalmente Responsiva** - Funciona en Mac, iPad e iPhone
- 🌙 **Modo Oscuro/Claro** - Cambia entre temas según tu preferencia
- 📋 **Código Copiable** - Copia ejemplos con un solo clic
- ⌨️ **Atajos de Teclado** - Navegación rápida con flechas
- 🍎 **Específico para macOS** - Todos los comandos adaptados para macOS
- 🎨 **Diseño Moderno** - Interfaz limpia y profesional

## 📖 Contenido

1. **Introducción** - Qué es Claude Code y sus capacidades
2. **Instalación** - Guía paso a paso para macOS
3. **Comandos Básicos** - Lista completa de comandos CLI
4. **Gestión de Contexto** - Optimización de memoria y contexto
5. **Model Context Protocol** - Extensiones y servidores MCP
6. **Mejores Prácticas** - Workflows y técnicas recomendadas
7. **Casos Avanzados** - Aplicaciones profesionales
8. **Troubleshooting** - Solución de problemas

## 🚀 Despliegue en GitHub Pages

### Método 1: Interfaz Web de GitHub

1. **Crear el repositorio**
   - Ve a [github.com](https://github.com) e inicia sesión
   - Haz clic en **"New repository"**
   - Nombre: `claude-code-docs` (o el que prefieras)
   - Descripción: "Documentación completa de Claude Code para macOS"
   - Selecciona **"Public"**
   - Haz clic en **"Create repository"**

2. **Subir los archivos**
   ```bash
   cd claude-code-docs
   git init
   git add .
   git commit -m "Initial commit: Claude Code Documentation"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/claude-code-docs.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Haz clic en **"Settings"** (⚙️)
   - En el menú lateral, haz clic en **"Pages"**
   - En "Source", selecciona **"Deploy from a branch"**
   - En "Branch", selecciona **"main"** y **"/ (root)"**
   - Haz clic en **"Save"**

4. **Acceder a tu sitio**
   - Espera 1-2 minutos
   - Tu sitio estará disponible en: `https://TU-USUARIO.github.io/claude-code-docs/`

### Método 2: Usando GitHub CLI

```bash
# Instalar GitHub CLI si no lo tienes
brew install gh

# Autenticarse
gh auth login

# Crear repositorio y subir código
cd claude-code-docs
git init
git add .
git commit -m "Initial commit: Claude Code Documentation"
gh repo create claude-code-docs --public --source=. --remote=origin --push

# Activar GitHub Pages
gh api repos/{owner}/claude-code-docs/pages -X POST -f source[branch]=main -f source[path]=/
```

## 🛠️ Desarrollo Local

Para ver la documentación localmente antes de subirla:

```bash
# Navegar al directorio
cd claude-code-docs

# Iniciar servidor local simple con Python
python3 -m http.server 8000

# O usar Node.js
npx serve .

# Abrir en el navegador
open http://localhost:8000
```

## 📝 Personalización

### Cambiar Colores

Edita `assets/css/styles.css` y modifica las variables CSS:

```css
:root {
  --primary-color: #6366f1;  /* Color principal */
  --secondary-color: #8b5cf6;  /* Color secundario */
  --accent-color: #ec4899;  /* Color de acento */
}
```

### Agregar Contenido

Para agregar más páginas:

1. Crea un nuevo archivo HTML (ej: `09-mi-pagina.html`)
2. Edita `assets/js/navigation.js` y agrega la página al array:
   ```javascript
   const pages = [
     // ... páginas existentes
     { file: '09-mi-pagina.html', title: '9. Mi Página', id: 'mi-pagina' }
   ];
   ```

## 🎨 Estructura del Proyecto

```
claude-code-docs/
├── index.html                 # Página principal
├── 01-introduccion.html       # Introducción
├── 02-instalacion.html        # Instalación
├── 03-comandos.html          # Comandos básicos
├── 04-contexto.html          # Gestión de contexto
├── 05-mcp.html               # Model Context Protocol
├── 06-mejores-practicas.html # Mejores prácticas
├── 07-casos-avanzados.html   # Casos avanzados
├── 08-troubleshooting.html   # Troubleshooting
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos principales
│   ├── js/
│   │   ├── navigation.js     # Sistema de navegación
│   │   └── code-copy.js      # Funcionalidad de copiar código
│   └── images/               # Imágenes (si las hay)
└── README.md                 # Este archivo
```

## 🔧 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor backend
- Funciona completamente en el cliente

## 📱 Compatibilidad

- ✅ macOS (Safari, Chrome, Firefox)
- ✅ iOS/iPadOS (Safari, Chrome)
- ✅ Windows (Chrome, Firefox, Edge)
- ✅ Linux (Chrome, Firefox)

## 🤝 Contribuciones

Si encuentras errores o quieres mejorar la documentación:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Agrega nueva sección'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Créditos

- **Claude Code** - [Anthropic](https://www.anthropic.com)
- **Highlight.js** - Resaltado de sintaxis
- **Diseño** - Inspirado en la documentación moderna de Anthropic

## 📞 Soporte

Si tienes problemas con la documentación:

- 📧 Email: tu-email@ejemplo.com
- 🐛 Issues: [GitHub Issues](https://github.com/TU-USUARIO/claude-code-docs/issues)
- 💬 Discusiones: [GitHub Discussions](https://github.com/TU-USUARIO/claude-code-docs/discussions)

## 🔗 Enlaces Útiles

- [Documentación Oficial de Claude](https://docs.anthropic.com)
- [Claude API Reference](https://docs.anthropic.com/claude/reference)
- [Anthropic Console](https://console.anthropic.com)
- [Claude Code GitHub](https://github.com/anthropics/claude-code)

---

**Creado con ❤️ usando Claude Code**

