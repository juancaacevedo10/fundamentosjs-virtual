let counter = 0;

const incrementAndShowCounter = () => {
    
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if(counter>11){
      clearInterval(intervalo)
  }
}

const intervalo = setInterval(incrementAndShowCounter, 1000);