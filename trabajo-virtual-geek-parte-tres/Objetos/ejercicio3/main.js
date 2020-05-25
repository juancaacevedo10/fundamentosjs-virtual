
const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profesion:'periodista',
    showBio : function (){ alert(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profesion}`)}
    
  };


console.log(geekGirl1.showBio())


const geekGirl2 = {
  name: 'Rocío',
  age: 25,
  profesion:'actriz',
  showBio : function (){ alert(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profesion}`)}
  
};

console.log(geekGirl2.showBio())

console.log("practicamente no se ha tenido que cambiar casi nada del codigo, las ventajas no son muy significativas pero de esta manera se pueden evitar errores de llamado")
