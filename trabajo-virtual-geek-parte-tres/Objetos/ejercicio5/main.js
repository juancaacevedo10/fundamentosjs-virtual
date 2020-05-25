

function llamar(e){
console.dir(e)
texto = document.querySelector(".inp")
console.dir(texto)
console.log("el atributo value nos trae los datos ingresados en el input, Con el nodeName podemos ver que tipo de etiqueta es, en este caso podemos ver que es un input, finalmente el required se encuentra en falso debido a que no es obligacion ingresar el valor en esta casilla")
} 

document.querySelector(".enviar").addEventListener('click',llamar)