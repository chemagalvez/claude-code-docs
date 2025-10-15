# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static documentation website** for Claude Code designed specifically for macOS users. The site is built with vanilla HTML/CSS/JavaScript (no build tools required) and is designed to be deployed on GitHub Pages.

**Status:** Core infrastructure complete (~67% content done). Pages 06-08 need to be created following existing patterns.

## Local Development

### Preview the Site Locally
```bash
cd claude-code-docs
python3 -m http.server 8000
# Then open http://localhost:8000 in browser
```

Alternative methods:
```bash
# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### No Build Process Required
This is a static site with no compilation, bundling, or transpilation. All files are served directly.

## Architecture

### JavaScript Systems
The site has two main JavaScript modules:

**navigation.js** (assets/js/navigation.js:7-17)
- `pages` array is the **single source of truth** for all navigation
- Defines all 9 pages with file names, titles, and IDs
- Powers dropdown selector, prev/next buttons, and keyboard shortcuts (←/→, p/n, h)
- Manages theme persistence (localStorage key: `theme`)
- **When adding a new page:** Add entry to `pages` array - no other code changes needed

**code-copy.js** (assets/js/code-copy.js)
- Auto-detects all `<code>` blocks and adds copy buttons
- Highlights macOS-specific commands (brew, chmod, xattr, etc.)
- Adds language labels to code blocks
- Works with highlight.js for syntax highlighting

### Component System
The site uses **reusable HTML patterns** rather than components:

**Alerts** (4 types: info, warning, success, tip):
```html
<div class="alert info">
    <div class="alert-icon">ℹ️</div>
    <div class="alert-content">
        <h4>Title</h4>
        <p>Content</p>
    </div>
</div>
```

**Code Blocks** (auto-enhanced by code-copy.js):
```html
<div class="code-block">
    <pre><code class="language-bash"># Command here</code></pre>
</div>
```

**Feature Cards** (responsive grid):
```html
<div class="feature-grid">
    <div class="feature-card">
        <div class="feature-icon">💻</div>
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

### Theme System (navigation.js:114-145)
- Dark/light mode stored in `localStorage` as `theme`
- Respects system preference on first visit
- Applied via `data-theme` attribute on `<html>`

### Progress Tracking
Each page must manually set:
- Progress percentage in `<div id="progress-fill">` style
- Page number in `<span id="progress-indicator">`
- Calculate: `(pageNumber / 9) * 100`

## Creating New Pages

### Page Status
**Completed:**
- `index.html`, `01-introduccion.html`, `02-instalacion.html`, `03-comandos.html`, `04-contexto.html`, `05-mcp.html`

**To Create (follow template from INSTRUCCIONES_FINALES.md:54-116):**
1. `06-mejores-practicas.html` - Best practices and workflows
2. `07-casos-avanzados.html` - Advanced use cases
3. `08-troubleshooting.html` - Common problems and solutions

### Process
1. Copy the HTML template from `INSTRUCCIONES_FINALES.md:54-116`
2. Update page number, progress percentage, and navigation links
3. Add content using the component patterns above
4. Pages are already registered in `navigation.js` - no code changes needed

### Page-Specific Requirements
All pages **must** include:
- Specific focus on **macOS** (zsh shell, Homebrew, macOS paths)
- Spanish language
- Practical, copy-paste ready code examples
- macOS-specific commands: `brew`, `~/.zshrc`, `chmod`, `xattr`

## macOS-Specific Conventions

### Shell Commands
- Use `zsh` syntax (default shell on macOS since Catalina)
- Reference `~/.zshrc` not `~/.bashrc`
- Include Homebrew for installations

### Paths
- Config: `~/.config/claude/`
- Shell config: `~/.zshrc`
- Binaries: `/usr/local/bin/` (Intel) or `/opt/homebrew/bin/` (Apple Silicon)

### Commands to Highlight
The site has special styling for: `brew`, `chmod`, `xattr`, `codesign`, `launchctl`

## Claude Model References

### Current Models (2025)
When referencing Claude models in documentation, use:
- **Claude Sonnet 4.5** - Flagship model, recommended for all development tasks
- **Claude 3.5 Sonnet** - General purpose development
- **Claude 3 Opus** - Complex reasoning tasks
- **Claude 3.5 Haiku** - Fast, lightweight tasks
- **Claude 3 Haiku** - Basic tasks, low cost

### Model-Specific Information
- **Sonnet 4.5**: 200K context, 8K output, very fast, best for code generation
- All models use command format: `claude --model sonnet-4.5`
- Default model should be set with: `claude config set default-model sonnet-4.5`

## CSS Variables

Modify `assets/css/styles.css:6-54` to change:
- Colors: `--primary-color`, `--secondary-color`, `--accent-color`
- Spacing: `--spacing-xs` through `--spacing-2xl`
- Fonts: `--font-sans`, `--font-mono`

Dark mode overrides are in `:root[data-theme="dark"]` at line 59-78.

### Dark Mode Colors (Improved 2025)
```css
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #e0e0e0;
  --primary-color: #ff9966;
}
```

## Deployment

### GitHub Pages Setup
```bash
cd claude-code-docs
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USER/REPO.git
git push -u origin main
```

Then enable in GitHub: **Settings → Pages → Source: main / (root)**

Site will be live at: `https://USER.github.io/REPO/`

## File Locations and Guidelines

**Do not modify (unless specified):**
- `assets/js/navigation.js` - Only modify `pages` array (lines 7-17) when adding new pages
- `assets/js/code-copy.js` - Handles copy buttons, syntax highlighting, macOS command detection automatically
- `assets/css/styles.css` - Only change CSS variables (lines 6-56) for theming, not structural styles

**Primary work area:**
- `06-mejores-practicas.html` through `08-troubleshooting.html` - Content creation
- All content must be in **Spanish** and **macOS-specific**

**Reference files:**
- `INSTRUCCIONES_FINALES.md` - HTML template (lines 54-116) and component examples
- `RESUMEN_PROYECTO.md` - Project status and deployment instructions
- Existing pages (`index.html`, `01-introduccion.html`, `02-instalacion.html`, `03-comandos.html`, `04-contexto.html`, `05-mcp.html`) - Content structure and style examples

## Existing Page Structure

All pages follow this pattern:
1. Header with logo, page selector, theme toggle
2. Progress indicator (visual bar + text)
3. Content wrapper with heading and body
4. Navigation buttons (prev/next)
5. Footer with links

Content sections use semantic HTML with h2/h3 hierarchy.

## Important Conventions

### Keyboard Shortcuts (implemented in navigation.js:76-96)
- `←` or `p` - Previous page
- `→` or `n` - Next page
- `h` - Home page

### Code Block Languages
Use these `language-*` classes for proper highlighting:
- `language-bash` - Bash/shell commands (most common)
- `language-zsh` - Zsh-specific syntax
- `language-javascript` - JavaScript
- `language-typescript` - TypeScript
- `language-json` - JSON configuration
- `language-yaml` - YAML files

### macOS Command Detection
code-copy.js automatically highlights these commands: `brew`, `mas`, `softwareupdate`, `defaults`, `launchctl`, `diskutil`, `chmod`, `xattr`, `codesign`, `security`, `xcode-select`

### Progress Percentages
Calculate as: `(pageIndex + 1) / 9 * 100`
- Page 1 (index): 11.11%
- Page 2: 22.22%
- Page 3: 33.33%
- ...
- Page 9: 100%

## Content Guidelines

### Command References
- Always use `claude` not `claude-code` (corrected in 2025 update)
- Config path: `~/.config/claude/` not `~/.config/claude-code/`
- Example: `claude --model sonnet-4.5 "Your task"`

### Emoji Usage
- Use emojis sparingly and only when they add clarity
- Common emojis: 🤖 (logo), 🌙 (theme), ℹ️ (info), ⚠️ (warning), 💡 (tip), 🎯 (success)
- Always use proper UTF-8 encoding for emojis

### Alert Types
- **info** (blue): General information, explanations
- **warning** (orange): Cautions, things to be aware of
- **success** (green): Confirmations, recommended approaches
- **tip** (yellow): Pro tips, advanced techniques
