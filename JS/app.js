
//Pre Entrega 2 --------------------




//ARRAY CARRITO
let cantidad;
let total = 0;
let opcion;
let agregar;
const detalleFactura = [];




const productos = [
    { nombre: 'Remera', precio: 500 },
    { nombre: 'Gorra', precio: 420 },
    { nombre: 'Croma verde', precio: 155.50 },
    { nombre: 'Llavero con luz', precio: 330 },
    { nombre: 'Buzo', precio: 1100 },
    { nombre: 'Curso de doblaje', precio: 124 },
    { nombre: 'Poster Terminator', precio: 415 },
    { nombre: 'Figura de acción', precio: 335.80 },
    { nombre: 'Block de notas', precio: 150 },
    { nombre: 'Goma de no borrar', precio: 20.30 },
];

function carrito() {

    alert("¡Buenas! Dale a ACEPTAR para elegir los productos que querés.");

    do {
        const listaStringProductos = productos.map(
            (product, index) => `${index + 1}: ${product.nombre} precio: ${product.precio}`);

        opcion = parseInt(
            prompt("¿Qué producto vas a llevar?" + "\n" + listaStringProductos.join("\n")));


        while (opcion <= 0 || opcion > productos.length) {
            opcion = parseInt(
                prompt("¡Le erraste! Ingresá una opción válida" + "\n" + listaStringProductos.join("\n")));
        }

        cantidad = parseInt(prompt("Inrgresá la cantidad que querés"));

        detalleFactura.push({
            nombre: productos[opcion - 1].nombre,
            precioUnitario: productos[opcion - 1].precio,
            cantidad: cantidad,
            subtotal: productos[opcion - 1].precio * cantidad,
        });

        agregar = prompt('¿Querés agregar más productos? si/no');
    } while (agregar === 'si');

}

carrito();

total = detalleFactura.reduce(
    (acc, itemFactura) =>
        acc + itemFactura.precioUnitario * itemFactura.cantidad,
    0
);

const detalleFacturaString = detalleFactura.map((itemFactura) =>
    `Prodcuto: ${itemFactura.nombre}, Cantidad: ${itemFactura.cantidad}, Subtotal: $${itemFactura.subtotal}`);



alert("El TOTAL de tu compra es de: $" + total + "\n" + "\n" + detalleFacturaString.join("\n"));

alert('¡Gracias por tu compra!');












//Plantilla de OBJETO

//(Clase) con Contructor de productos para empleado de HxH con los atributos "Nombrecito, precio y marca"

//Las plantillas se deben agregar en otro archivo de js para que quede prolijo, y se deben agregar en el index antes del scipt posta ver clae 5 min 01:55 (clase plantilla pokemon).

/* class ProductoNuevo{

    nombre = nombrecito;
    precio = precio;
    marca = marca;


constructor (nombrecito, precio, marca) {
    this.nombre = nombrecito;
    this.precio = precio;
    this.marca = marca;

    }
}


//Ejemplo de nuevo objeto generado por el empleado (puedo hacerlo con un prompt también).
const producto1 = new ProductoNuevo("Llavero luz", 300, "HxH");
const producto2 = new ProductoNuevo("Buzo con capucha", 800, "HxH");
const producto3 = new ProductoNuevo("Poster Terminator", 350, "Flavor"); */

//Plantilla de OBJETO xxxxxxxxxxxxxxx */