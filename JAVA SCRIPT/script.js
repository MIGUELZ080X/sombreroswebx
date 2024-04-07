// Obtener todos los elementos con la clase "producto"
const productos = document.querySelectorAll('.producto');

// Iterar sobre cada elemento producto y agregar un listener de evento clic
productos.forEach(producto => {
    producto.addEventListener('click', () => {
        // Obtener el título del producto haciendo referencia al elemento "h2" dentro del producto
        const nombreProducto = producto.querySelector('h2').innerText;
        // Mostrar una alerta con el nombre del producto
        alert('Has seleccionado el producto: ' + nombreProducto);
    });
});
