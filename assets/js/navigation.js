/**
 * Claude Code Documentation - Navigation System
 * Gestiona la navegación entre páginas y el tema
 */

// Configuración de páginas
const pages = [
  { file: 'index.html', title: 'Inicio', id: 'home' },
  { file: '01-introduccion.html', title: '1. Introducción a Claude Code', id: 'intro' },
  { file: '02-instalacion.html', title: '2. Instalación y Configuración', id: 'install' },
  { file: '03-comandos.html', title: '3. Comandos Básicos', id: 'commands' },
  { file: '04-contexto.html', title: '4. Gestión de Contexto', id: 'context' },
  { file: '05-mcp.html', title: '5. Model Context Protocol', id: 'mcp' },
  { file: '06-mejores-practicas.html', title: '6. Mejores Prácticas', id: 'best-practices' },
  { file: '07-casos-avanzados.html', title: '7. Casos de Uso Avanzados', id: 'advanced' },
  { file: '08-troubleshooting.html', title: '8. Solución de Problemas', id: 'troubleshooting' }
];

// Obtener la página actual
function getCurrentPage() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  return pages.findIndex(page => page.file === currentFile);
}

// Navegar a una página
function navigateTo(pageFile) {
  window.location.href = pageFile;
}

// Inicializar navegación
function initNavigation() {
  const currentIndex = getCurrentPage();
  
  // Configurar selector de página
  const pageSelector = document.getElementById('page-selector');
  if (pageSelector) {
    // Llenar opciones
    pages.forEach((page, index) => {
      const option = document.createElement('option');
      option.value = page.file;
      option.textContent = page.title;
      if (index === currentIndex) {
        option.selected = true;
      }
      pageSelector.appendChild(option);
    });

    // Manejar cambio de página
    pageSelector.addEventListener('change', (e) => {
      navigateTo(e.target.value);
    });
  }

  // Configurar botones de navegación
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn && currentIndex > 0) {
    prevBtn.href = pages[currentIndex - 1].file;
    prevBtn.classList.remove('disabled');
  } else if (prevBtn) {
    prevBtn.classList.add('disabled');
  }

  if (nextBtn && currentIndex < pages.length - 1) {
    nextBtn.href = pages[currentIndex + 1].file;
    nextBtn.classList.remove('disabled');
  } else if (nextBtn) {
    nextBtn.classList.add('disabled');
  }

  // Actualizar indicador de progreso
  updateProgressIndicator(currentIndex);

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    // Prevenir navegación si el usuario está escribiendo
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    // Flecha izquierda o 'p' para página anterior
    if ((e.key === 'ArrowLeft' || e.key === 'p') && currentIndex > 0) {
      navigateTo(pages[currentIndex - 1].file);
    }

    // Flecha derecha o 'n' para página siguiente
    if ((e.key === 'ArrowRight' || e.key === 'n') && currentIndex < pages.length - 1) {
      navigateTo(pages[currentIndex + 1].file);
    }

    // 'h' para ir al inicio
    if (e.key === 'h') {
      navigateTo('index.html');
    }
  });
}

// Actualizar indicador de progreso
function updateProgressIndicator(currentIndex) {
  const progressIndicator = document.getElementById('progress-indicator');
  const progressFill = document.getElementById('progress-fill');

  if (progressIndicator) {
    progressIndicator.textContent = `Página ${currentIndex + 1} de ${pages.length}`;
  }

  if (progressFill) {
    const percentage = ((currentIndex + 1) / pages.length) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

// Gestión del tema (modo claro/oscuro)
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Cargar tema guardado o usar preferencia del sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  // Manejar cambio de tema
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

// Actualizar icono del tema
function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Smooth scroll para enlaces ancla
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Tabla de contenidos flotante (opcional)
function generateTableOfContents() {
  const headings = document.querySelectorAll('h2, h3');
  const tocContainer = document.getElementById('toc');
  
  if (!tocContainer || headings.length === 0) return;

  const tocList = document.createElement('ul');
  tocList.className = 'toc-list';

  headings.forEach((heading, index) => {
    // Agregar ID si no existe
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const li = document.createElement('li');
    li.className = heading.tagName.toLowerCase();
    
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    
    li.appendChild(link);
    tocList.appendChild(li);
  });

  tocContainer.appendChild(tocList);
}

// Detectar scroll para efectos
function initScrollEffects() {
  let lastScroll = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Ocultar/mostrar header al hacer scroll (opcional)
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //   header.style.transform = 'translateY(-100%)';
    // } else {
    //   header.style.transform = 'translateY(0)';
    // }

    lastScroll = currentScroll;
  });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTheme();
  initSmoothScroll();
  generateTableOfContents();
  initScrollEffects();

  // Agregar clase de animación al contenido
  const contentWrapper = document.querySelector('.content-wrapper');
  if (contentWrapper) {
    contentWrapper.classList.add('fade-in');
  }
});

// Exportar funciones para uso global si es necesario
window.claudeCodeDocs = {
  navigateTo,
  pages,
  getCurrentPage
};
