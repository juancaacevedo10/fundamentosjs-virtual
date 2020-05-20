let año = parseInt(prompt("ingrese el año"))
mensaje = ""


if(año % 4 == 0){
mensaje = `el proximo año bisiesto sera en ${año + 4 }`
}else{
    if(año % 4== 1){
        mensaje = `el proximo año bisiesto sera en ${año + 3}`

    }else{
        if(año % 4 == 2){
            mensaje = `el proximo año bisiesto sera en ${año + 2}`
        }else{
            if(año % 4 == 3){
                mensaje = `el proximo año bisiesto sera en ${año + 1}`
            }
        }
    }
}
console.log(mensaje)
alert(mensaje)