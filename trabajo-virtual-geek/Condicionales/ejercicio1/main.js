
function calcular(){
    let usuario = document.querySelector(".datos").value;
    const contenedor = document.querySelector('.contenido')
    const avatar = "http://placehold.it/300x300";
    var valor="";
    if(usuario==""){
        contenedor.innerHTML = `<img src="${avatar}"></img>`
    }else{
    const avatar = "http://www.fillmurray.com/300/300"
        contenedor.innerHTML = `<h2>${usuario}</h2><img src="${avatar}"></img>`
    }
}



document.querySelector('.boton').addEventListener('click',calcular)