altura = prompt("ingrese la altura")
var x = `★\n`
for (let i = 1; i < altura; i++) {
    
for (let j = 0; j < i; j++) {
    x += `▲`
}
    x += `\n` 
}

    x += `|`
console.log(x)