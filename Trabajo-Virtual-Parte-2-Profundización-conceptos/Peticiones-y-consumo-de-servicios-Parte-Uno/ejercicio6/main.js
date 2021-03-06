const cd = () => 
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json());

var promises = [cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd(), cd()];

Promise.all(promises)
  .then(responses => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });