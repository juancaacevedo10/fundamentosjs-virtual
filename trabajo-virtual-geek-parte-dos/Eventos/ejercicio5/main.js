'use strict';

function seleccionar(event){
    const selecs = event.currentTarget;
    console.log(selecs)
    var text = selecs.querySelector(".favorite")
    if(document.querySelector(`.teacher--selected`)){
        selecs.classList.remove("teacher--selected")
        text.innerHTML= `Agregar`
    }else{
        selecs.classList.add("teacher--selected");
        text.innerHTML= `Quitar`
    }

}




document.querySelector(".teacher--isra").addEventListener("click",seleccionar)
document.querySelector(".teacher--tuerto").addEventListener("click",seleccionar)
document.querySelector(".teacher--nasi").addEventListener("click",seleccionar)


