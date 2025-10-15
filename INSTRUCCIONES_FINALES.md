# Instrucciones para Completar la Documentación

## Páginas que Faltan

Debes crear o completar las siguientes páginas siguiendo la estructura de las existentes:

### 1. 04-contexto.html (Completar)
Contenido sugerido:
- Gestión de contexto y memoria
- Límites de tokens por modelo
- Uso de .claudeignore
- Optimización de contexto
- Gestión de sesiones
- Cache de contexto

### 2. 05-mcp.html (Crear)
Contenido sugerido:
- Qué es Model Context Protocol
- Arquitectura del MCP
- Servidores MCP disponibles
- Crear servidor MCP personalizado
- Configuración en macOS
- Casos de uso

### 3. 06-mejores-practicas.html (Crear)
Contenido sugerido:
- Escribir prompts efectivos
- Estructuración de proyectos
- Workflows recomendados
- Seguridad y credenciales en macOS
- Optimización de costos
- Control de versiones

### 4. 07-casos-avanzados.html (Crear)
Contenido sugerido:
- Refactorización de código legacy
- Generación de tests automatizados
- Documentación automática
- Debugging asistido por IA
- Migración entre frameworks
- Integración con CI/CD en macOS

### 5. 08-troubleshooting.html (Crear)
Contenido sugerido:
- Errores comunes y soluciones
- Problemas de permisos en macOS
- Issues con la API
- Debugging de Claude Code
- Optimización de rendimiento
- FAQ técnico específico de macOS

## Plantilla Base para Nuevas Páginas

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>X. Título | Claude Code para macOS</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
</head>
<body>
    <header>
        <div class="container header-content">
            <a href="index.html" class="logo">
                <div class="logo-icon">🤖</div>
                <span>Claude Code Docs</span>
            </a>
            <div class="nav-controls">
                <select id="page-selector" class="page-selector"></select>
                <button id="theme-toggle" class="theme-toggle">🌙</button>
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="progress-indicator">
                <span id="progress-indicator">Página X de 9</span>
                <div class="progress-bar">
                    <div id="progress-fill" class="progress-fill" style="width: XX%"></div>
                </div>
            </div>

            <div class="content-wrapper">
                <h1>Título de la Página</h1>

                <!-- CONTENIDO AQUÍ -->

                <nav class="navigation">
                    <a href="0X-anterior.html" class="nav-btn">← Anterior</a>
                    <a href="0X-siguiente.html" class="nav-btn">Siguiente →</a>
                </nav>
            </div>
        </div>
    </main>

    <footer>
        <div class="container footer-content">
            <p>&copy; 2025 Claude Code Documentation. Creado con Claude Code.</p>
            <div class="footer-links">
                <a href="https://www.anthropic.com" target="_blank">Anthropic</a>
                <a href="https://docs.anthropic.com" target="_blank">Documentación Oficial</a>
                <a href="https://github.com/anthropics/claude-code" target="_blank">GitHub</a>
            </div>
        </div>
    </footer>

    <script src="assets/js/navigation.js"></script>
    <script src="assets/js/code-copy.js"></script>
</body>
</html>
```

## Porcentajes de Progreso

- Página 1 (index): 11.11%
- Página 2 (01-introduccion): 22.22%
- Página 3 (02-instalacion): 33.33%
- Página 4 (03-comandos): 44.44%
- Página 5 (04-contexto): 55.55%
- Página 6 (05-mcp): 66.66%
- Página 7 (06-mejores-practicas): 77.77%
- Página 8 (07-casos-avanzados): 88.88%
- Página 9 (08-troubleshooting): 100%

## Elementos de Contenido a Usar

### Bloques de Código
```html
<div class="code-block">
    <pre><code class="language-bash"># Tu código aquí
brew install claude-code</code></pre>
</div>
```

### Alertas
```html
<div class="alert info">
    <div class="alert-icon">ℹ️</div>
    <div class="alert-content">
        <h4>Título</h4>
        <p>Contenido</p>
    </div>
</div>
```

Tipos: `info`, `warning`, `success`, `tip`

### Tablas
```html
<table>
    <thead>
        <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
        </tr>
    </tbody>
</table>
```

### Cards de Características
```html
<div class="feature-grid">
    <div class="feature-card">
        <div class="feature-icon">📚</div>
        <h3>Título</h3>
        <p>Descripción</p>
    </div>
</div>
```

## Comandos Específicos de macOS a Incluir

- `brew install/update/upgrade`
- Rutas: `~/.zshrc`, `~/.config/`, `/usr/local/bin/`
- `chmod`, `xattr`, `codesign`
- Variables de entorno en zsh
- Integración con macOS terminal

## Deploy en GitHub Pages

Una vez completadas todas las páginas:

1. Crear repositorio en GitHub
2. Subir archivos:
   ```bash
   cd claude-code-docs
   git init
   git add .
   git commit -m "Initial commit: Claude Code Docs"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/claude-code-docs.git
   git push -u origin main
   ```

3. Activar GitHub Pages en Settings → Pages
4. Acceder en: https://chemagalvez.github.io/claude-code-docs/

## Testing Local

```bash
cd claude-code-docs
python3 -m http.server 8000
open http://localhost:8000
```

¡Listo! Completa las páginas faltantes y tu documentación estará lista para publicar.
