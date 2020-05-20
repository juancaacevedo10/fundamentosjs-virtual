
const seleccion = document.querySelector(".contenedor")
const title = document.querySelector(".title")
const parrafo = document.querySelector(".parrafo")

if(seleccion.classList.contains('success')){
    title.innerHTML="correcto"
    parrafo.innerHTML="Los datos son correctos"
}else{
    if( seleccion.classList.contains('error')){
        title.innerHTML="ERROR"
        parrafo.innerHTML="Ha surgido un error"
    }else{
        if(seleccion.classList.contains('warning')){
            title.innerHTML="AVISO"
            parrafo.innerHTML="Tenga cuidado"

        }
    }

}