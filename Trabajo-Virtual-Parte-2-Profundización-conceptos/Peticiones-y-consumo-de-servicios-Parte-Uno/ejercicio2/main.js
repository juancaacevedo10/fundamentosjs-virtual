



const cambiar = () =>{
fetch('https://dog.ceo/api/breeds/image/random')  
.then(response => response.json())  
.then(data => {
     const img = document.querySelector('img'); 
     img.src = data.message; 
     img.alt = 'chihuahuas'; 
     });
    }

    console.log(cambiar());

document.querySelector('.boton').addEventListener('click',cambiar)