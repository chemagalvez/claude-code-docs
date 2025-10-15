/**
 * Claude Code Documentation - Code Copy Functionality
 * Maneja la funcionalidad de copiar código con un solo clic
 */

// Inicializar funcionalidad de copiar código
function initCodeCopy() {
  // Seleccionar todos los bloques de código
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach((codeBlock) => {
    // Crear contenedor wrapper si no existe
    const pre = codeBlock.parentElement;

    if (!pre.classList.contains('code-block')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    }

    // Crear botón de copiar
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-btn';
    copyButton.innerHTML = '=Ë Copiar';
    copyButton.setAttribute('aria-label', 'Copiar código');

    // Insertar botón antes del pre
    const wrapper = pre.closest('.code-block');
    wrapper.insertBefore(copyButton, pre);

    // Manejar clic en el botón
    copyButton.addEventListener('click', async () => {
      await copyCode(codeBlock, copyButton);
    });
  });
}

// Función para copiar código al portapapeles
async function copyCode(codeElement, button) {
  const code = codeElement.textContent;

  try {
    // Intentar usar la API moderna del portapapeles
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
      showCopySuccess(button);
    } else {
      // Fallback para navegadores más antiguos o contextos no seguros
      copyCodeFallback(code, button);
    }
  } catch (err) {
    console.error('Error al copiar código:', err);
    copyCodeFallback(code, button);
  }
}

// Método fallback para copiar código
function copyCodeFallback(code, button) {
  const textArea = document.createElement('textarea');
  textArea.value = code;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopySuccess(button);
    } else {
      showCopyError(button);
    }
  } catch (err) {
    console.error('Error en fallback de copia:', err);
    showCopyError(button);
  } finally {
    document.body.removeChild(textArea);
  }
}

// Mostrar feedback de copia exitosa
function showCopySuccess(button) {
  const originalHTML = button.innerHTML;
  button.innerHTML = ' Copiado';
  button.classList.add('copied');

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.classList.remove('copied');
  }, 2000);
}

// Mostrar feedback de error en copia
function showCopyError(button) {
  const originalHTML = button.innerHTML;
  button.innerHTML = 'L Error';
  button.classList.add('error');

  setTimeout(() => {
    button.innerHTML = originalHTML;
    button.classList.remove('error');
  }, 2000);
}

// Agregar resaltado de sintaxis usando highlight.js (si está disponible)
function initSyntaxHighlighting() {
  if (typeof hljs !== 'undefined') {
    document.querySelectorAll('pre code').forEach((block) => {
      // Detectar lenguaje si está especificado en la clase
      const languageClass = Array.from(block.classList)
        .find(cls => cls.startsWith('language-'));

      if (languageClass) {
        const language = languageClass.replace('language-', '');
        block.classList.add(`language-${language}`);
      }

      // Aplicar resaltado
      hljs.highlightElement(block);
    });
  }
}

// Agregar etiquetas de lenguaje a los bloques de código
function initCodeLabels() {
  document.querySelectorAll('pre code').forEach((codeBlock) => {
    const languageClass = Array.from(codeBlock.classList)
      .find(cls => cls.startsWith('language-'));

    if (languageClass) {
      const language = languageClass.replace('language-', '');
      const pre = codeBlock.parentElement;
      const wrapper = pre.closest('.code-block');

      // Verificar si ya existe una etiqueta
      if (!wrapper.querySelector('.code-label')) {
        const label = document.createElement('div');
        label.className = 'code-label';
        label.textContent = getLanguageDisplayName(language);
        wrapper.insertBefore(label, pre);
      }
    }
  });
}

// Obtener nombre de visualización del lenguaje
function getLanguageDisplayName(lang) {
  const languageNames = {
    'bash': 'Bash',
    'sh': 'Shell',
    'zsh': 'Zsh',
    'javascript': 'JavaScript',
    'js': 'JavaScript',
    'typescript': 'TypeScript',
    'ts': 'TypeScript',
    'python': 'Python',
    'py': 'Python',
    'json': 'JSON',
    'yaml': 'YAML',
    'yml': 'YAML',
    'markdown': 'Markdown',
    'md': 'Markdown',
    'html': 'HTML',
    'css': 'CSS',
    'scss': 'SCSS',
    'xml': 'XML',
    'swift': 'Swift',
    'go': 'Go',
    'rust': 'Rust',
    'java': 'Java',
    'c': 'C',
    'cpp': 'C++',
    'csharp': 'C#',
    'php': 'PHP',
    'ruby': 'Ruby',
    'sql': 'SQL',
    'dockerfile': 'Dockerfile',
    'vim': 'Vim',
    'plaintext': 'Text',
    'txt': 'Text'
  };

  return languageNames[lang.toLowerCase()] || lang.toUpperCase();
}

// Función para agregar números de línea (opcional)
function initLineNumbers() {
  const codeBlocks = document.querySelectorAll('pre code.line-numbers');

  codeBlocks.forEach((codeBlock) => {
    const lines = codeBlock.textContent.split('\n');
    const lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');

    lines.forEach(() => {
      lineNumbersWrapper.appendChild(document.createElement('span'));
    });

    codeBlock.appendChild(lineNumbersWrapper);
  });
}

// Detectar y formatear comandos de macOS específicos
function highlightMacOSCommands() {
  document.querySelectorAll('pre code.language-bash, pre code.language-sh, pre code.language-zsh').forEach((block) => {
    const text = block.textContent;

    // Detectar comandos específicos de macOS
    const macOSCommands = [
      'brew', 'mas', 'softwareupdate', 'defaults', 'launchctl',
      'diskutil', 'networksetup', 'scutil', 'tmutil', 'pkgutil',
      'codesign', 'security', 'spctl', 'xcode-select'
    ];

    let highlighted = text;
    macOSCommands.forEach(cmd => {
      const regex = new RegExp(`\\b${cmd}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="macos-cmd">${cmd}</span>`);
    });

    if (highlighted !== text) {
      block.innerHTML = highlighted;
      // Agregar badge de macOS
      const pre = block.parentElement;
      const wrapper = pre.closest('.code-block');
      if (!wrapper.querySelector('.macos-badge-code')) {
        const badge = document.createElement('span');
        badge.className = 'macos-badge-code';
        badge.textContent = '<N macOS';
        wrapper.insertBefore(badge, pre);
      }
    }
  });
}

// Agregar tooltips a los botones de copiar
function initCopyTooltips() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.setAttribute('title', 'Copiar código al portapapeles');

    // Usar API de tooltips nativa del navegador
    button.addEventListener('mouseenter', () => {
      button.setAttribute('data-tooltip', 'visible');
    });

    button.addEventListener('mouseleave', () => {
      button.removeAttribute('data-tooltip');
    });
  });
}

// Configuración de códigos expandibles para bloques largos
function initExpandableCode() {
  const codeBlocks = document.querySelectorAll('pre code');
  const maxLines = 20; // Número máximo de líneas antes de colapsar

  codeBlocks.forEach(codeBlock => {
    const lines = codeBlock.textContent.split('\n');

    if (lines.length > maxLines) {
      const pre = codeBlock.parentElement;
      const wrapper = pre.closest('.code-block');

      pre.classList.add('collapsed');

      const expandButton = document.createElement('button');
      expandButton.className = 'expand-code-btn';
      expandButton.textContent = `¼ Mostrar todo (${lines.length} líneas)`;

      expandButton.addEventListener('click', () => {
        pre.classList.toggle('collapsed');
        expandButton.textContent = pre.classList.contains('collapsed')
          ? `¼ Mostrar todo (${lines.length} líneas)`
          : `² Colapsar`;
      });

      wrapper.appendChild(expandButton);
    }
  });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initCodeCopy();
  initSyntaxHighlighting();
  initCodeLabels();
  initCopyTooltips();
  highlightMacOSCommands();

  // Funcionalidades opcionales (descomentar si se desean)
  // initLineNumbers();
  // initExpandableCode();
});

// Exportar funciones para uso global si es necesario
window.claudeCodeCopy = {
  initCodeCopy,
  copyCode,
  initSyntaxHighlighting
};
