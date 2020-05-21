

function iva(precio){
   var iva= precio * 0.21
   var total = precio + iva
return `precio sin IVA: ${precio}, IVA: ${iva} y total: ${total} `

}


console.log(iva(5000))