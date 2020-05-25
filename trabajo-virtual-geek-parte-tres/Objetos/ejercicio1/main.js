
const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profesion:'periodista'
  };

  const geekGirl2 = {
    name:'Rocío',
    age:25,
    profesion: 'actriz'
  };


const contenedor = document.querySelector(".cont")
contenedor.innerHTML=`Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.age} años y soy ${geekGirl1.profesion}<br>
Mi nombre es ${geekGirl2.name}, tengo ${geekGirl2.age} años y soy ${geekGirl2.profesion}`