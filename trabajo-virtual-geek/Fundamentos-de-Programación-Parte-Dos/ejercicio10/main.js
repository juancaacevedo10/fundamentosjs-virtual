function calcular(){
    const edad = document.querySelector('.edad').value ;
    const horasVividas = (24*365)*parseInt(edad)
    console.log(`usted ha vivido ${horasVividas} horas`)
    
    alert(`usted ha vivido ${horasVividas} horas`)
}


document.querySelector('#boton').addEventListener("click",calcular);