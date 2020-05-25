let obra = []

function mostrar(){

     obra.push( document.querySelector("#text1").value)
     obra.push( document.querySelector("#text2").value)
console.log(obra)
    for(const movie of obra){
        alert(`¡A mí también me encantó "${movie}"! Tenemos mucho en común, humana.`)

    }
}


document.querySelector('.boton').addEventListener
('click',mostrar)