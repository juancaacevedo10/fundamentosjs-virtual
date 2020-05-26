
const users = [
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Gregory Goyle', time: 56}
  ];

const [{ name: usuario1, time:tiempo1 },{name: usuario2, time:tiempo2 }, { name: usuario3, time:tiempo3 }, { name: usuario4, time:tiempo4 }, {name: usuario5, time:tiempo5 }] = users

console.log(usuario1,tiempo1)
console.log(usuario2,tiempo2)
console.log(usuario3,tiempo3)
console.log(usuario4,tiempo4)
console.log(usuario5,tiempo5)