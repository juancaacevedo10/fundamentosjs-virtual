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
  `<ul class="lista">
  <li>${inception}</li>
  <li>${theButterFlyEffect}</li>
  <li>${eternalSunshineOfTheSM}</li>
  <li>${blueVelvet}</li>
  <li>${split}</li>
  
  </ul>`;

  document.querySelector(".lista").addEventListener("click",mostrar)

}

function mostrar(event){
  
  console.log(event.target.innerHTML);
}

plusOneButtonElement.addEventListener('click', peliculas);




