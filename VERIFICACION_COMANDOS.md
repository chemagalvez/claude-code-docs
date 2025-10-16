# Verificación de Comandos en la Documentación

## Comandos Correctos Utilizados

### ✅ Comandos principales
- `claude --version` / `claude -v` ✓
- `claude --help` / `claude -h` ✓
- `claude --continue` / `claude -c` ✓
- `claude --resume [sessionId]` / `claude -r` ✓
- `claude --model <model>` ✓
- `claude --print` / `claude -p` ✓
- `claude --fork-session` ✓

### ✅ Subcomandos
- `claude mcp` ✓
- `claude plugin` ✓
- `claude setup-token` ✓
- `claude doctor` ✓
- `claude update` ✓
- `claude install [target]` ✓

### ✅ Flags adicionales
- `--debug [filter]` ✓
- `--verbose` ✓
- `--output-format <format>` ✓
- `--input-format <format>` ✓
- `--allowed-tools <tools...>` ✓
- `--disallowed-tools <tools...>` ✓
- `--mcp-config <configs...>` ✓
- `--system-prompt <prompt>` ✓
- `--append-system-prompt <prompt>` ✓
- `--permission-mode <mode>` ✓
- `--fallback-model <model>` ✓
- `--settings <file-or-json>` ✓
- `--add-dir <directories...>` ✓
- `--ide` ✓
- `--session-id <uuid>` ✓
- `--agents <json>` ✓

## Archivos Corregidos

1. ✅ **04-contexto.html** - Eliminados comandos inexistentes:
   - `claude --stats` → Eliminado
   - `claude --token-count` → Eliminado
   - `claude --dry-run` → Eliminado
   - `claude sessions *` → Reemplazado con `--continue` y `--resume`
   - `claude usage *` → Reemplazado con explicación de console.anthropic.com
   - `claude config *` → Reemplazado con edición de settings.json

2. ✅ **index.html** - Actualizado:
   - `claude config set apiKey` → `claude setup-token`

3. ✅ **02-instalacion.html** - Actualizado:
   - `claude config --show` → Eliminado
   - `claude config set editor` → Edición manual de settings.json

4. ✅ **06-mejores-practicas.html** - Actualizado:
   - `claude config set default-model` → Edición manual de settings.json

## Resumen

✅ Todos los comandos incorrectos han sido corregidos
✅ Todos los ejemplos ahora usan comandos válidos de Claude Code 2.0.19
✅ Se agregaron explicaciones sobre configuración mediante settings.json
✅ Se agregaron referencias a console.anthropic.com para estadísticas de uso

