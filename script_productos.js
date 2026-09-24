// 1.- Arreglo de datos de productos

const listaProductos = [
    { id: 1, nombre: "Los detectives salvajes", autor: "Roberto Bolaño", precio: 8000, imagen: "assets/detectives salvajes.jpeg" },
    { id: 2, nombre: "El obsceno pájaro de la noche", autor: "José Donoso", precio: 10000, imagen: "assets/pajaro.jpg" },
    { id: 3, nombre: "Inés el alma mía", autor: "Isabel Allende", precio: 12000, imagen: "assets/ines del alma mia.jpg" },
    { id: 4, nombre: "Nuestros años verde olivo", autor: "Roberto Ampuero", precio: 14000, imagen: "assets/verde_olivo.jpg" },
    { id: 5, nombre: "Bonsai", autor: "Alejandro Zambra", precio: 9000, imagen: "assets/bonsai.jpg" },
    { id: 6, nombre: "El buzón de las impuras", autor: "Francisca Solar", precio: 20000, imagen: "assets/buzon-de-las-impuras.jpg" },
    { id: 7, nombre: "La ciudad de las bestias", autor: "Isabel Allende", precio: 13000, imagen: "assets/la-ciudad-de-las-bestias.jpg" },
    { id: 8, nombre: "La muerte viene estilando", autor: "Andrés Montero", precio: 14500, imagen: "assets/muerte_estilando.jpg" },
    { id: 9, nombre: "Formas de volver a casa", autor: "Alejandro Zambra", precio: 16000, imagen: "assets/formas-de-volver-a-casa.jpg" },
    { id: 10, nombre: "Casa de campo", autor: "José Donoso", precio: 11000, imagen: "assets/casa-de-campo.jpg" },

];

// 2. Función para recorrer el arreglo e inyectarlo en el HTML
function cargarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = ""; // Limpiar contenido existente

    // Recorrido de la lista mediante forEach
    listaProductos.forEach((producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");
    

    tarjeta.innerHTML = `

        <img src="${producto.imagen}" width=200px alt="${producto.nombre} ">
        <h3>Título: ${producto.nombre}</h3>
        <p>Autor: ${producto.autor}<p>
        <p class="precio">Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id}">Añadir al carrito</button>

    `;

    contenedor.appendChild(tarjeta);
    });
}

// 3. Ejecución al cargar el documento

document.addEventListener("DOMContentLoaded", cargarProductos);



