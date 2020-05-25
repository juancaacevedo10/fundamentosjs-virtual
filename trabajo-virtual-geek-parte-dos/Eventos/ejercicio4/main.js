'use strict';
const plusOneButtonElement = document.querySelector('.button__add-one');

function peliculas(event) {

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

var lista = document.querySelector(".lista")

  lista.innerHTML = 
  `<ul>
  <li class="peli1">${inception}</li>
  <li class="peli2">${theButterFlyEffect}</li>
  <li class="peli3">${eternalSunshineOfTheSM}</li>
  <li class="peli4">${blueVelvet}</li>
  <li class="peli5">${split}</li>
  
  </ul>`;

  document.querySelector(".peli1").addEventListener("click",mostrar)
document.querySelector(".peli2").addEventListener("click",mostrar)
document.querySelector(".peli3").addEventListener("click",mostrar)
document.querySelector(".peli4").addEventListener("click",mostrar)
document.querySelector(".peli5").addEventListener("click",mostrar)


}

function mostrar(event){
  const texto = event.currentTarget;
  var peli = document.querySelector(".peli1")
  console.log(peli);
}

plusOneButtonElement.addEventListener('click', peliculas);




