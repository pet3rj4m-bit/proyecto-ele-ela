/**
 * Función para cambiar la vista de las secciones de la página.
 * @param {string} sectionId - El ID de la sección HTML que se desea mostrar.
 */
function switchSection(sectionId) {
    // 1. Ocultar todas las secciones removiendo la clase 'active'
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Deseleccionar todos los botones del menú de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Mostrar la sección que el usuario solicitó
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 4. Resaltar visualmente el botón en el menú de navegación
    navLinks.forEach(link => {
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // 5. Desplazar la ventana suavemente hacia el inicio del contenido
    window.scrollTo({
        top: document.querySelector('nav').offsetTop,
        behavior: 'smooth'
    });
}

/**
 * Función para navegar entre el menú principal de "Acerca de" y las vistas de Teoría/Equipo.
 */
function navigateAcerca(viewId) {
    // 1. Ocultar todas las sub-vistas
    const subViews = document.querySelectorAll('.sub-view');
    subViews.forEach(view => {
        view.classList.remove('active');
    });

    // 2. Mostrar la sub-vista deseada
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // 3. Si volvemos al menú, asegurarse de que el Prezi vuelva a su estado original (el hub central)
    if (viewId === 'acerca-menu') {
        navigatePrezi('prezi-hub');
    }
}

/**
 * Función para la interactividad estilo "Prezi" (Nodos y Detalles).
 */
function navigatePrezi(targetId) {
    // 1. Ocultar el mapa de nodos (hub) y todos los detalles
    document.getElementById('prezi-hub').classList.remove('active');
    const details = document.querySelectorAll('.prezi-detail');
    details.forEach(detail => {
        detail.classList.remove('active');
    });

    // 2. Mostrar lo que el usuario pidió (el hub o un detalle específico)
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.classList.add('active');
    }
}

/**
 * Función para navegar dentro de la sección "Cómo buscar"
 */
function navigateComoBuscar(viewId) {
    // 1. Ocultar todas las sub-vistas dentro de la sección "Cómo buscar"
    const views = document.querySelectorAll('#como-buscar .sub-view');
    views.forEach(view => {
        view.classList.remove('active');
    });

    // 2. Mostrar la vista seleccionada
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // 3. Desplazar hacia arriba para que el usuario empiece a leer desde el título
    window.scrollTo({
        top: document.querySelector('#como-buscar').offsetTop - 20,
        behavior: 'smooth'
    });
}