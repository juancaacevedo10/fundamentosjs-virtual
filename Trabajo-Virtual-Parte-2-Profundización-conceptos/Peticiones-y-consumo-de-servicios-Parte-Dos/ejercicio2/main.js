'use strict'

function buscar(){
    let name= document.querySelector(".nombre").value
    
    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then(response => response.json())
    .then(data => {       
        document.querySelector(".lista").innerHTML += ` `
        for(let i=0; i< data.results.length; i++){
            document.querySelector(".lista").innerHTML += `<li>${data.results[i].name}</li>`
        }   
      }
   )
}
document.querySelector(".boton").addEventListener("click", buscar)