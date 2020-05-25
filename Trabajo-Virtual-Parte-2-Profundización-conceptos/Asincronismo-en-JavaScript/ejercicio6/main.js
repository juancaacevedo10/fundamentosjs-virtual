const removeMsg = () => {
    const msg = document.querySelector('.sesion');
    msg.classList.remove('ventana')
    msg.innerHTML = 'su sesión ha expirado';
  }
  
  setTimeout(removeMsg, 15000);