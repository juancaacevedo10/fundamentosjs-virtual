
const name = prompt("ingrese su primer nombre")    


if (name=="camilo") {
    console.log(`Bienvenida ${name}`)
    alert(`Bienvenida ${name}`)

} else if (name =="david") {
    alert(`Bienvenida ${name}`)
    console.log(`Bienvenida ${name}`)
}else{
    alert("Lo siento pero el usuario que has introducido no está registrado")
    console.log(`Lo siento pero el usuario que has introducido no está registrado`)
}