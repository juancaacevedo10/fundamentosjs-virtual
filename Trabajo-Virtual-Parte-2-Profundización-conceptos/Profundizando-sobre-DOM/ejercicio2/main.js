  
'use strict'

const imagenesCiudades = (event) => {

    let value = event.target.value;
    
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let img3 = document.querySelector(".img3");
    
    if ((value === "Madrid")){
        img1.src = "https://image.freepik.com/foto-gratis/plaza-cibeles-oscuridad-madrid_1398-2433.jpg";
        img2.src = "https://image.freepik.com/foto-gratis/puerta-toledo-noche-madrid_1398-4200.jpg";
        img3.src = "https://img.freepik.com/foto-gratis/vista-palacio-cibeles-noche-madrid_1398-2170.jpg?size=626&ext=jpg";

    }else if(value === "Paris"){
        img1.src = "https://img.freepik.com/foto-gratis/escena-restaurante-frances-paris-francia-cafe-acera_1101-2310.jpg?size=626&ext=jpg";
        img2.src = "https://img.freepik.com/foto-gratis/hermosa-vista-noria-alta-marsella-francia-noche_181624-1763.jpg?size=338&ext=jpg";  
        img3.src = "https://img.freepik.com/foto-gratis/vista-torre-eiffel_1101-42.jpg?size=338&ext=jpg";
       
    }else{
        img1.src = "https://img.freepik.com/foto-gratis/edificio-flatiron-ciudad-nueva-york-disparo-angulo_181624-314.jpg?size=626&ext=jpg";
        img2.src = "https://img.freepik.com/foto-gratis/estatua-libertad-vista-lejos_1206-52.jpg?size=626&ext=jpg";
        img3.src = "https://img.freepik.com/foto-gratis/calle-ciudad-ocupada-gente-borrosa_23-2148184298.jpg?size=626&ext=jpg";    
    }
}

document.querySelector('#viajar').addEventListener('change', imagenesCiudades)



