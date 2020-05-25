let counter = 0;
let temp;



const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;

}

temp = setInterval(incrementAndShowCounter, 1000);



const parar = () => {
  clearInterval(temp);
}

const reiniciar = () => {
  counter = 0
  temp = setInterval(incrementAndShowCounter, 1000);

}

document.querySelector('.reiniciar').addEventListener('click',reiniciar)
document.querySelector('.parar').addEventListener('click',parar)


