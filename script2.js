let carrito = [];

function agregarAlCarrito(id, nombre, precio) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');
    const verCarrito = document.getElementById('ver-carrito');

    // Actualizar lista de productos
    carritoLista.innerHTML = '';
    let total = 0;
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - €${producto.precio} x ${producto.cantidad}`;
        carritoLista.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    // Actualizar total
    carritoTotal.textContent = total.toFixed(2);

    // Actualizar botón del carrito
    verCarrito.textContent = `Carrito (${carrito.reduce((acc, prod) => acc + prod.cantidad, 0)})`;
}

function procesarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert('Compra procesada. ¡Gracias por tu compra!');
    carrito = [];
    actualizarCarrito();
    cerrarCarrito();
}

function cerrarCarrito() {
    document.getElementById('carrito-modal').classList.add('oculto');
}

document.getElementById('ver-carrito').addEventListener('click', () => {
    document.getElementById('carrito-modal').classList.remove('oculto');
});
