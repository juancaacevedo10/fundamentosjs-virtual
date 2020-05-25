let counterseg = 0;
let countermin = 0;
let boolean=true



const incrementAndShowCounter = () => {
    counterseg++;

 if(counterseg>59){
    boolean = false
    counterseg = 0;
    countermin++;
    const time = document.querySelector('.time');
    time.innerHTML = `escrito hace ${countermin} minutos`;
    

    }else if(boolean==true){

        const time = document.querySelector('.time');
        time.innerHTML = `escrito hace ${counterseg} segundo`;

    }
}





setInterval(incrementAndShowCounter, 1000);