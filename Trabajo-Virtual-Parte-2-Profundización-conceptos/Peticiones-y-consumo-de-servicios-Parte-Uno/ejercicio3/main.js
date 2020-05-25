
const usuario = () =>{

    const usuario = document.querySelector('.buscar').value

fetch(`https://api.github.com/users/${usuario}`)
  .then(response => response.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data.avatar_url;
    img.alt = 'Un perro';
    const name = document.querySelector('.name');
    name.innerHTML = data.name
    const repo = document.querySelector('.repo')
    repo.innerHTML = data.public_repos
  });

}


document.querySelector('.boton').addEventListener('click',usuario)