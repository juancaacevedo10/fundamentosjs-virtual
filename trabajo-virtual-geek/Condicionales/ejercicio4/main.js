var edad = prompt("ingrese su edad")
var edadperro=0;
var mensaje = "";

if(edad > 15){
     edadperro++;
     if(edad>=24){
        edadperro++;
        edad = (edad-24)/5
        if(edad>0){
            edadperro=edadperro+Math.round(edad)
            mensaje=`tu edad de perro es ${edadperro}`
        }else{
            mensaje="solo tienes dos años de perro"
        }

     }else{
        mensaje ="solo tienes aproximadamente un año de perro"
     }
 }else{
     mensaje="no tienes ni un año de perro"
 }

console.log(mensaje)