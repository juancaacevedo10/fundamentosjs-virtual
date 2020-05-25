const Contador = {
    inicial: 0,
    máximo : 1,
    actual : 0,
    mínimo : -1,
    
}

 aumentar = () =>{
    const boton = document.querySelector('.boton')
    Contador.actual= Contador.actual + Contador.máximo
    boton.innerHTML = Contador.actual
}

const decrementar = () =>{
    const boton = document.querySelector('.boton')
    Contador.actual= Contador.actual + Contador.mínimo
    boton.innerHTML = Contador.actual
}

const resetear = () => {
const boton = document.querySelector('.boton')
Contador.actual= Contador.inicial 
boton.innerHTML = Contador.actual
}


document.querySelector('.aumentar').addEventListener('click',aumentar)
document.querySelector('.decrementar').addEventListener('click',decrementar)
document.querySelector('.reset').addEventListener('click',resetear)