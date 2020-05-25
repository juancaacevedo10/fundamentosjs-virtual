'use strict'

function buscar(){
    let name= document.querySelector(".nombre").value
    let local = localStorage.getItem(name);
    if (!local) {


    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then(response => response.json())
    .then(data => {       

        localStorage.setItem(name, JSON.stringify(data.results));
        document.querySelector(".lista").innerHTML += ` `
        for(let i=0; i< data.results.length; i++){
            document.querySelector(".lista").innerHTML += `<li>${data.results[i].name}</li>`

        }   
      }
   )

} else {
    
    let data = JSON.parse(local)
    for(let i=0; i< data.length; i++){
        document.querySelector(".lista").innerHTML += `<li>${data[i].name}</li>`
    }
}

}
document.querySelector(".boton").addEventListener("click", buscar)


