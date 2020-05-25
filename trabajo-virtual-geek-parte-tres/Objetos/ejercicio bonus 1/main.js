
function cambiar (){
    var carita = document.getElementById('carita')
    var cont = document.querySelector('.contenedor')
    var select = carita.options[carita.selectedIndex]
    var cambio = document.querySelector('.h1')
    cambio.innerHTML = select.value

    var aleatorio = Math.floor(Math.random() * 100);
    console.log(aleatorio)
    if(aleatorio % 2 == 0){
        cont.classList.add('yellow')
        cont.classList.remove('orange')

    }else{
        cont.classList.add('orange')
        cont.classList.remove('yellow')
    }
    
}


document.querySelector('.boton').addEventListener('click',cambiar)



