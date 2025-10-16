# Comandos Incorrectos en la Documentación

## Resumen de la situación

La documentación contiene referencias a comandos que no existen en Claude Code 2.0.19.

## Comandos que NO existen y deben eliminarse/reemplazarse:

### 1. `claude --stats`
- **Aparece en:** 04-contexto.html (líneas 216, 580, 652, 661)
- **Problema:** No existe este flag
- **Solución:** Eliminar estas referencias. La API de Claude no expone estadísticas de tokens de esta manera.

### 2. `claude --token-count` y `claude --dry-run`
- **Aparece en:** 04-contexto.html (líneas 219, 222)
- **Problema:** Estos flags no existen
- **Solución:** Eliminar o reemplazar con explicación conceptual sin comandos

### 3. `claude sessions` (subcomando completo)
- **Aparece en:** 04-contexto.html (múltiples líneas)
- **Comandos inventados:**
  - `claude sessions list`
  - `claude sessions save`
  - `claude sessions load`
  - `claude sessions resume`
  - `claude sessions delete`
  - `claude sessions clear`
  - `claude sessions new`
  - `claude sessions save-summary`
  - `claude sessions clear-old`
- **Problema:** El subcomando `sessions` no existe
- **Solución:** Usar `claude --resume [sessionId]` y `claude --continue`

### 4. `claude usage` (subcomando completo)
- **Aparece en:** 04-contexto.html (líneas 583, 586, 589, 592, 679)
- **Comandos inventados:**
  - `claude usage stats`
  - `claude usage daily`
  - `claude usage by-project`
  - `claude usage costs`
- **Problema:** El subcomando `usage` no existe
- **Solución:** Explicar que el uso se gestiona desde la web de Anthropic

### 5. `claude config` (subcomando)
- **Aparece en:** index.html, 02-instalacion.html, 04-contexto.html, 06-mejores-practicas.html
- **Comandos inventados:**
  - `claude config set apiKey`
  - `claude config get apiKey`
  - `claude config --show`
  - `claude config set editor`
  - `claude config set default-model`
  - `claude config show cache`
  - `claude config set cache.*`
- **Problema:** El subcomando `config` no existe
- **Solución:** Usar `claude setup-token` para la autenticación. La configuración se hace mediante archivos JSON.

## Comandos correctos que SÍ existen:

- `claude --version` / `claude -v`
- `claude --help` / `claude -h`
- `claude --resume [sessionId]` / `claude -r` - Retomar conversación
- `claude --continue` / `claude -c` - Continuar conversación más reciente
- `claude --model <model>` - Especificar modelo
- `claude --print` / `claude -p` - Modo no interactivo
- `claude mcp` - Gestionar MCP servers
- `claude plugin` - Gestionar plugins
- `claude setup-token` - Configurar token de autenticación
- `claude doctor` - Diagnóstico del sistema
- `claude update` - Actualizar Claude Code
- `claude install [target]` - Instalar Claude Code

## Propuesta de correcciones:

### Para sesiones:
En lugar de `claude sessions save/load/resume`, explicar:
- Uso de `claude --continue` o `claude -c` para continuar la última conversación
- Uso de `claude --resume [sessionId]` o `claude -r` para retomar una conversación específica
- Uso de `--fork-session` para crear una nueva sesión basada en una existente

### Para estadísticas/usage:
En lugar de `claude --stats` y `claude usage`, explicar:
- Los tokens se cobran automáticamente según el plan de Anthropic
- Las estadísticas de uso se ven en la consola web de Anthropic
- No hay comando CLI para ver estadísticas locales

### Para configuración:
En lugar de `claude config set`, explicar:
- Usar `claude setup-token` para autenticación
- Usar `--model` flag para cambiar modelo en una sesión
- Mencionar que la configuración se gestiona mediante archivos JSON en `~/.config/claude/`

¿Procedo con estas correcciones?
