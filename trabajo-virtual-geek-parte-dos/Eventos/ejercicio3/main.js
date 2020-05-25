'use strict';
let parrafo = () => {
let parra = document.querySelector(".parrafo")
parra.innerHTML = `lorem ipsum lorem ipsum`

}

function mouseOut() {
    let parra = document.querySelector(".parrafo")
    parra.innerHTML = `lorem ipsum`
      }


document.querySelector(".parrafo").addEventListener("mouseover",parrafo)
document.querySelector(".parrafo").addEventListener("mouseout", mouseOut);
