

//PRODUCTOS y PRECIOS
const REMERA = 850;
const GORRA = 500;
const CROMA = 420;

//Variables

let cantidad;  
let total = 0;
let opcion;
let agregar;
let ticket = ``;

//Function

function calculo(total,producto,cantidad) {
    return total + producto*cantidad
}

//Estructura

alert("¡Buenas! Dale a ACEPTAR para elegir los productos que querés.");

do {

opcion = parseInt (prompt("¡Iniciaste el carrtio! ¿Qué producto querés elegir?" + "\n" + 
"1 - Remera con logo: $ " + REMERA + "\n" +
"2 - Gorra con logo: $ " + GORRA + "\n" +
"3 - Croma verde: $" + CROMA + "\n" ));

switch (opcion) {

    case 1:
        cantidad = parseInt(prompt("Ingresá la cantidad que querés llevar"));
        total = calculo (total,REMERA,cantidad);
        break;

    case 2:
        cantidad = parseInt(prompt("Ingresá la cantidad que querés llevar"));
        total = calculo (total,GORRA,cantidad);
        break;

    case 3:
        cantidad = parseInt(prompt("Ingresá la cantidad que querés llevar"));
        total = calculo (total,CROMA,cantidad);
        break;

    default:
        alert("¡Le erraste! Mandale una opción correcta ;)");
}

agregar = prompt("¿Querés meterle más productos al carrito? si/no")


} while (agregar == "si")

alert(`${ticket} El total es de: $${total}`);



alert("¡Gracias por tu compra!") ;




