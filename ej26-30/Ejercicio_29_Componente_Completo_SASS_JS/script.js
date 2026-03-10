// 1. Selecciona todos los botones y todos los paneles de contenido
const botones = document.querySelectorAll('.tab-btn');
const contenidos = document.querySelectorAll('.content');

// 2. Añade el evento click a cada botón usando forEach
botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        
        // A. Quitar la clase .active de todos los botones
        botones.forEach(btn => btn.classList.remove('active'));
        
        // B. Quitar la clase .active de todos los contenidos
        contenidos.forEach(cont => cont.classList.remove('active'));

        // C. Poner .active al botón pulsado
        const seleccionado = e.target;
        seleccionado.classList.add('active');

        // D. Leer el data-target del botón (ej: "uno" o "dos")
        const idObjetivo = seleccionado.dataset.target;

        // E. Buscar el contenido con ese ID y ponerle .active
        const panelObjetivo = document.getElementById(idObjetivo);
        if (panelObjetivo) {
            panelObjetivo.classList.add('active');
        }
    });
});