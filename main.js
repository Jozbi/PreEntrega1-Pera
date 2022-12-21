//Funcion para saber si se ingreso un numero
function esNumero (valor) {
    if(!isNaN(valor) && valor !=null && valor != ""){
        return true;
    } else {
        return false;
    }
}
//Le Solicito al usuario que ingrese el pais vendedor y el precio de los productos.
let paisVendedor = prompt(
    "Ingrese el nombre del Pais del cual quiere importar."
);
let listaPrecios = 0;
let precio; 

do {
    precio = parseInt (prompt(
        "Ingrese el monto de los productos 1 a 1 o el monto total de la factura. (Ingrese 0 cuando haya terminado)"
    ));
    if (esNumero(precio) || precio == 0) {
        listaPrecios += precio;
    } else {
        alert("No es un numero")
    }
}
while (precio != 0);

document.write(`<h2>Pais de Origen: ${paisVendedor}.</h2>`);
document.write(`<h2>Total factura FOB: $${listaPrecios}</h2>`);

//Solicito el valor del Fleteo

while(true) {
    let flete = parseInt (prompt(
        "Ingrese el valor del envio"
    ));

    if (esNumero(flete)) {
        listaPrecios += flete;
        break;
    } else if (flete == 0) {
        alert("Su envio no puede ser 0")
    } else {
        alert("No es un numero")
    }
}

//Agrego Valor Seguro

let seguro = listaPrecios * 1/100;

listaPrecios += seguro;


document.write(`<h2>Total Factura CIF || Base Imponible: $${listaPrecios.toFixed(2)}</h2>`);

//Calculo Impuestos Aduaneros

let impuestosAduaneros = listaPrecios * 0.1 + listaPrecios * 0.5/100;

document.write(`<h2>Total Impuestos Aduaneros: $${impuestosAduaneros.toFixed(2)}</h2>`);

//Calculo Impuestos No Aduaneros

let baseIva = impuestosAduaneros + listaPrecios;

let impuestosNoAduaneros = baseIva * 0.21 + baseIva * 0.2 + baseIva * 6/100 + baseIva * 2.5/100;

document.write(`<h2>Total Impuestos No Aduaneros: $${impuestosNoAduaneros.toFixed(2)}</h2>`);

//Totales

let totalImpuestos = impuestosAduaneros + impuestosNoAduaneros;
document.write(`<h2>Total Carga Impositiva: $${totalImpuestos.toFixed(2)}</h2>`);

//Forma de Pago
let montoCuotas = 0;
let cuotas;
while (true) {
    cuotas = parseInt(prompt(
        "Ingrese en cuantas Cuotas quiere abonar la carga impositiva. (Del 1 al 3)"
    ));
    if (cuotas === 1) {
        montoCuotas = totalImpuestos;
        break;
    } else if (cuotas === 2) {
        montoCuotas = totalImpuestos/2;
        break;
    } else if (cuotas === 3) {
        montoCuotas = totalImpuestos/3;
        break;
    } else {
        alert ("Ingrese un numero valido");
    }
}
document.write(`<h2>Usted decidio pagar la carga impositiva en ${cuotas} cuota/as de: $${montoCuotas.toFixed(2)}</h2>`);