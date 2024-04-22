const items = [
    {
        nombre: "yerba",
        precio: 5000
    },
    {
        nombre: "Té",
        precio: 2000
    },
    {
        nombre: "Café",
        precio: 3500
    }
];

const carrito = document.getElementById("carrito");

function agregarItemAlCarrito(index) {
    const item = items[index];
    const nuevoDiv = document.createElement("div");
    const nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = item.nombre;
    const nuevoP = document.createElement("p");
    nuevoP.textContent = `$${item.precio}`;
    nuevoDiv.appendChild(nuevoH2);
    nuevoDiv.appendChild(nuevoP);
    nuevoDiv.addEventListener("click", function () {
        this.remove();
        actualizarStorage();
    });
    carrito.appendChild(nuevoDiv);
    actualizarStorage();
}

function actualizarStorage() {
    const contenidoCarrito = carrito.innerHTML;
    localStorage.setItem("carrito", contenidoCarrito);
}

function cargarCarritoDesdeStorage() {
    const contenidoGuardado = localStorage.getItem("carrito");
    contenidoGuardado ? (carrito.innerHTML = contenidoGuardado) : null;

    const elementosCarrito = carrito.querySelectorAll("div");
    elementosCarrito.forEach(elemento => {
        elemento.addEventListener("click", function () {
            this.remove();
            actualizarStorage();
        });
    });
}

cargarCarritoDesdeStorage();

function agregarBotonAlCarrito(nombreBoton, index) {
    const boton = document.querySelector(`#${nombreBoton}`);
    boton.addEventListener("click", function() {
        agregarItemAlCarrito(index);
    });
}

agregarBotonAlCarrito("yerba", 0);
agregarBotonAlCarrito("te", 1);
agregarBotonAlCarrito("cafe", 2);
