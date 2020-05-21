'use strict'

let tipo= true;
let borde = 8;
let padding = 4;
let ancho = 200;

function box (tipo, ancho, padding, borde){

    if (tipo){
        return ancho - (padding + padding + borde + borde)       
    }
    return ancho;
}


var tamañoBox = box(tipo, ancho, padding, borde);

console.log(`el ancho del contenido es ${tamañoBox}`);