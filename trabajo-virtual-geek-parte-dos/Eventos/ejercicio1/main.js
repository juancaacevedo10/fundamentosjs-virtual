'use strict';
function cambiar(){
   var parrafo = document.querySelector(".parrafo")
    parrafo.innerHTML=`Mi primer click, ¡ole yo y la mujer que me parió!`
}


document.querySelector(".boton").addEventListener("click",cambiar)