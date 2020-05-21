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

}


plusOneButtonElement.addEventListener('click', peliculas);




