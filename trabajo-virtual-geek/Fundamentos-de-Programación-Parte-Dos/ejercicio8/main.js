const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const contenedor = document.querySelector(".contenedor")


contenedor.innerHTML= `<ul>
<li><h1>${firstDogName}</h1><img src="${firstDogImage}"></li>
<li><h1>${secondDogName}</h1><img src="${secondDogImage}"></li>
<li><h1>${thirdDogName}</h1><img src="${thirdDogImage}"></li>
</ul> `;