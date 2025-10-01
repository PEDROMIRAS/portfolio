// ====== SELECCIÓN DE ELEMENTOS ======
const sidebar = document.getElementById('sidebar'); // sidebar principal
const toggleBtn = document.getElementById('toggleBtn'); // botón hamburguesa

// ====== ESTADO DEL SIDEBAR ======
let state = "expand"; // expand | collapsed | hidden

// ====== FUNCIONAMIENTO DEL TOGGLE ======
toggleBtn.addEventListener('click', () => {
    if (state === "expand") {
        // Colapsar sidebar
        sidebar.classList.add('collapsed');
        sidebar.classList.remove('hidden');
        state = "collapsed";
    } else if (state === "collapsed") {
        // Ocultar sidebar (drawer)
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('hidden');
        state = "hidden";
    } else {
        // Expandir sidebar
        sidebar.classList.remove('hidden');
        sidebar.classList.remove('collapsed'); // asegurar que no quede collapsed
        state = "expand";
    }
});

// ====== AJUSTE RESPONSIVE ======
function handleResize() {
    if (window.innerWidth < 768) {
        // Pantallas pequeñas: sidebar oculta por defecto
        sidebar.classList.add('hidden');
        sidebar.classList.remove('collapsed');
        state = "hidden";
    } else {
        // Pantallas grandes: mostrar sidebar
        sidebar.classList.remove('hidden');
        if (state === "hidden") state = "expand";
    }
}

// ====== EVENTO REDIMENSIONAMIENTO ======
window.addEventListener('resize', handleResize);

// ====== TAMAÑO INICIAL ======
handleResize(); // comprobar tamaño al cargar la página

// Fin script.js