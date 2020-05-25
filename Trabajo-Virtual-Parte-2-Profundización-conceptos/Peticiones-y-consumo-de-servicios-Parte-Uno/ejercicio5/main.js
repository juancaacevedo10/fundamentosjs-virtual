'use strict'

let raza;

fetch('https://dog.ceo/api/breeds/list')
    .then(razaResponse => razaResponse.json())
    .then(razaData => {
        raza = razaData.message;
        return fetch(`https://api.rand.fun/number/integer?max=${raza.length}&min=0`);
   
    })


        .then(numeroResponse => numeroResponse.json())
        .then(numeroData => {
            const i = numeroData.result
            return fetch(`https://dog.ceo/api/breed/${raza[i]}/images/random`);
    
        })
    

                .then(response => response.json())
                .then(data => {
                    const img = document.querySelector('img');
                    img.src = data.message;
                    img.alt = 'perro';
  
  
                });