'use strict'

let tipo= true;
let borde = 8;
let padding = 4;
let ancho = 200;

let box = (tipo, ancho, padding, borde) => tipo ? ancho - (padding + padding + borde + borde): ancho


var tamañoBox = box(tipo, ancho, padding, borde);

console.log(`el ancho del contenido es ${tamañoBox}`);