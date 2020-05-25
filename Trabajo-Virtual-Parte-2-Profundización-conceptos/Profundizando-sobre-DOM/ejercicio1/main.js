
const numbers = [1, 2, 3]


for (let i = 0; i < numbers.length; i++) {

const newItem = document.createElement('li');
console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido

let newContent = document.createTextNode(`${numbers[i]}`);



newItem.appendChild(newContent);

const items = document.querySelector('.items');
items.appendChild(newItem);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"

}

