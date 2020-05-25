const academia_geek = [
    {
        name: 'Maria',
        age: 29,
        profesion: 'diseñadora' 
    },
    {
        name: 'Lucia',
        age: 31,
        profesion: 'ingenieria qimica' 
    },
    {
        name: 'Susana',
        age: 34,
        profesion: 'Periodista' 
    },
    {
        name: 'Rocio',
        age: 25,
        profesion: 'actriz' 
    },
    {
        name: 'Inmaculada',
        age: 21,
        profesion: 'diseñadora' 
    },

]


academia_geek.push({name:'manuela', age:29, profesion:'diseñadora'})
academia_geek.push({name:'daniela', age:18, profesion:'abogada'})


const countGeekGirls = (arr) => {

    return `hay ${arr.length} geek girls`
}

const averageAge = (arr) => {
    var media = 0
    for (let i = 0; i < arr.length; i++) {
         media += arr[i].age;
    }
    return `la media de edad es ${Math.round(media/arr.length)} años`
}

const theYoungest = (arr) =>{
var nombre = ""
var menor = 100;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < menor) {
        menor = arr[i].age;
        nombre = arr[i].name;
    }
}

return `la geek girl mas joven es ${nombre} con ${menor} años`

}

const countDesigners = (arr) =>{
    var cont = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].profesion == 'diseñadora') {
            cont++;
        }
    }
    return `hay ${cont} geek girls que son diseñadoras`
}

console.log(countGeekGirls(academia_geek))
console.log(averageAge(academia_geek))
console.log(theYoungest(academia_geek))
console.log(countDesigners(academia_geek))


