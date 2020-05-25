'use strict';

function calcular(e){
    var cuerpo = document.querySelector(".cuerpo")
    var x = e.key;
    if(x=="r"){
        cuerpo.classList.add("rojo")
        cuerpo.classList.remove("morado")
    }else if(x=="m"){
        cuerpo.classList.add("morado")
        cuerpo.classList.remove("rojo")
    }else{
        cuerpo.classList.remove("morado")
        cuerpo.classList.remove("rojo")
    }
}


document.querySelector(".cuerpo").addEventListener("keypress",calcular)