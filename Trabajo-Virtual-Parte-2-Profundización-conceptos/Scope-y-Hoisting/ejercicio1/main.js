let message = 'El resultado será A';

function changeMessage() {
  message = 'El resultado será B';
}

changeMessage();

console.log(message);

console.log('el resultado sera b debido a que se invoca el metodo y en este se le envia a la variable global ese enunciado')






let message2 = 'El resultado será A';

function changeMessage2() {
  message2 = 'El resultado será B';
}

console.log(message2);

console.log('el resultado sera a que es la sentencia inicial, esto no cambia debido a que no se invoca el metodo')



let message3 = 'El resultado será A';

function changeMessage3() {
  let message = 'El resultado será B';
}

changeMessage3();

console.log(message3);

console.log('el resultado sera a debido a que se muestra el valor de la variable global ya que dentro del metodo se daclara una nueva variable local')
