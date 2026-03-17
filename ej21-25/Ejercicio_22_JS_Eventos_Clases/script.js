// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral
const toggleBtn = document.getElementById('toggleMenu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menuLateral');

// 2. Define una función 'toggleMenu' que:
//    - Use classList.toggle('hidden') en el menú
const funcionToggle = () => {
    // Si la clase 'hidden' está, la quita; si no está, la pone.
    menu.classList.toggle('hidden');
};

// 3. Agrega los Event Listeners a los botones para llamar a esa función
toggleBtn.addEventListener('click', funcionToggle);
closeBtn.addEventListener('click', funcionToggle);