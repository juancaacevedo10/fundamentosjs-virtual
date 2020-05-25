  
'use strict'

const nombres=[{nombre: 'camilo',apellido:'garcia',telefono:2323435},{nombre: 'angie',apellido: 'alzate',telefono:2343546},{nombre:'daniel' ,apellido:'villa',telefono:2345678}]


const imagenesCiudades = (event) => {

    let value = event.target.value;
    
    let inp1 = document.querySelector("#inp1");
    let inp2 = document.querySelector("#inp2");
    let inp3 = document.querySelector("#inp3");
    
    if ((value === "camilo")){
        inp1.value = nombres[0].nombre;
        inp2.value = nombres[0].apellido;
        inp3.value = nombres[0].telefono;

    }else if(value === "angie"){
        inp1.value = nombres[1].nombre;
        inp2.value = nombres[1].apellido;
        inp3.value = nombres[1].telefono;
       
    }else{
        inp1.value = nombres[2].nombre;
        inp2.value = nombres[2].apellido;
        inp3.value = nombres[2].telefono;  
    }
}

document.querySelector('#llamar').addEventListener('change', imagenesCiudades)



