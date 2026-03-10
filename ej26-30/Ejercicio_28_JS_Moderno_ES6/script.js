// Ejercicio 28: ES6+
const container = document.getElementById('resultado');

// 1. Convierte esta función a Arrow Function
const saludar = nombre => `Hola ${nombre}`;


// 2. Dado el siguiente array de objetos:
const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'Admin' },
    { id: 2, nombre: 'Carlos', rol: 'User' },
    { id: 3, nombre: 'Bea', rol: 'Editor' }
];

// 3. Usa .filter() para encontrar a los de rol 'Admin'
// Nota: 'Admin' empieza con mayúscula en tu array original
const admins = usuarios.filter(u => u.rol === 'Admin');


// 4. Renderiza la lista en el DOM usando Template Literals (``) y .map()

// Generar el array de strings HTML
const listaHTML = admins.map(u => `<li>${u.nombre} - ${u.rol}</li>`);

// Inyectar en el HTML usando .join('') para evitar comas entre elementos
container.innerHTML = `
    <ul>
        ${listaHTML.join('')}
    </ul>
`;