const texto = document.querySelector('.time');
texto.innerHTML = '';

const removeMsg = () => {
    texto.innerHTML = 'te estas quedando dormido?';
  }
  
  setTimeout(removeMsg, 10000);

  const despertar = () => {
    texto.innerHTML = ""
    setTimeout(removeMsg, 10000);

  }


  document.querySelector('.boton').addEventListener('click',despertar)