altura = prompt("ingrese la altura")
var x = ``
for (let i = 1; i < altura; i++) {
    
for (let j = 0; j < i; j++) {
    x += `▲`
}
    x += `\n` 
}
console.log(x)