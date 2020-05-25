'use strict'

const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false}
  ];


const list = document.querySelectorAll('li');
console.log(title())




list[0].innerHTML = `${(tasks[0].name)}`

if(tasks[0].completed){
    list[0].classList.add('tachar')
}   






for (let i=0; i < list.length; i ++){

    list[i].innerHTML = `${(tasks[i].name)} <input type="checkbox" class="check${i}" value="${i}_checkbox"> `

    if(tasks[i].completed){
        list[i].classList.add('tachar')
        document.querySelector(`.check${i}`).checked  = true
    }


}


function tachar (){

    for (let i=0; i < list.length; i ++){

    if (document.querySelector(`.check${i}`).checked){
        list[i].className = " "
        list[i].classList.add('tachar')
        tasks[i].completed = true
        
    }
    if (!(document.querySelector(`.check${i}`).checked) ){
        list[i].className = " "
        tasks[i].completed = false
        
    }
}

console.log(title())
}

function title(){
    const title = document.querySelector('.title')
    var contf = 0;
    var contr = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            contf++;
        }else{
            contr++;
        }
    }
    title.innerHTML = ` Tienes ${tasks.length} tareas. ${contf} completadas y ${contr} por realizar.`

} 

for (let i=0; i < list.length; i ++){
document.querySelector(`.check${i}`).addEventListener("click", tachar)}