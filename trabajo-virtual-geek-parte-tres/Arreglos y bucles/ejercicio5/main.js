"use strict"

const numbers = [
    4,8,1,0,5
]

let acumulador = 0;




for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];
    
}
console.log('a) '+acumulador/numbers.length)


numbers.push(9);

acumulador = 0;
for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];  
}
console.log('b) '+acumulador/numbers.length)

function average(numbers){
let acum = 0
for (let i = 0; i < numbers.length; i++) {
    acum += numbers[i];
}
return acum/numbers.length
}

console.log('c) '+average([2,3,6,8,1,9]))