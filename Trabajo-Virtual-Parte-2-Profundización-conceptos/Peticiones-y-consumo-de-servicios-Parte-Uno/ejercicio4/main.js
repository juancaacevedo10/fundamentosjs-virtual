
const buscar = () =>{

const orgname = document.querySelector('.inp').value

fetch(`https://api.github.com/orgs/${orgname}`)
  .then(liresponse => liresponse.json())
  .then(lidata => {
    return fetch(lidata.repos_url);
  })
  .then(Response => Response.json())
  .then(data => {
      
    const ul = document.querySelector('ul');
    let ulContent = '';


    for(let i=0; i<data.length; i++){
        const breedContent = `<li>${data[i].name}</li>`;
        ulContent += breedContent;
          }

    
     
    ul.innerHTML = ulContent;
  });
}

  document.querySelector('.boton').addEventListener('click',buscar)
