'use strict';

const parra = document.querySelector('#parrafos');

const nameColors = ['N/A','white','blue','red','green','yellow','pink'
]

for (let i = 1; i <= 100; i++) {
    let parrafo = document.createElement('p');
    let contenedor = document.createTextNode('He aprendido bien cómo funcionan los bucles  ');
    parrafo.appendChild(contenedor);
    parra.appendChild(parrafo);
}
const cambiar = document.querySelectorAll('p');
cambiar.forEach(parrafos => {
    let select = document.createElement('select');



    for (const color of nameColors) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(color));
        select.appendChild(option);
    };
    parrafos.appendChild(select);
});



const seleccionar = document.querySelectorAll('select');
seleccionar.forEach((select, i) => {
    select.addEventListener('change', (event) => {
        let colores = event.target.selectedIndex;
        cambiar[i].style.color = nameColors[colores];
    });
});