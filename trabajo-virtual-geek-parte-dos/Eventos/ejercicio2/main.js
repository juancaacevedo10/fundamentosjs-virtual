'use strict';
let nombre = ()=>{
    var nom = document.querySelector('.nombre').value
    console.log(`Hola, ${nom}`)
}

document.querySelector(".boton").addEventListener("click",nombre);