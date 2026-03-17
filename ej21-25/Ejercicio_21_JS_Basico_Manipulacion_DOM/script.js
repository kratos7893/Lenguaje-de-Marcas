// Ejercicio 21: Manipulación del DOM

// 1. Selecciona la caja (id="miCaja")
const caja = document.getElementById('miCaja');

// 2. Selecciona los botones
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista'); // Necesario para el Bonus

// 3. Agrega funcionalidad al botón de color (click)
btnColor.addEventListener('click', () => {
    // Cambia el color de fondo de la caja
    caja.style.backgroundColor = 'purple';
});

// 4. Agrega funcionalidad al botón de texto (click)
btnTexto.addEventListener('click', () => {
    // Cambia el texto interno de la caja
    caja.innerText = 'Hola JS';
});

// 5. Agrega funcionalidad al botón de agregar (click)
btnAgregar.addEventListener('click', () => {
    // Crea un nuevo elemento li
    const nuevoItem = document.createElement('li');
    nuevoItem.innerText = `Elemento ${lista.children.length + 1}`;
    
    // Agrégalo a la lista ul
    lista.appendChild(nuevoItem);
});