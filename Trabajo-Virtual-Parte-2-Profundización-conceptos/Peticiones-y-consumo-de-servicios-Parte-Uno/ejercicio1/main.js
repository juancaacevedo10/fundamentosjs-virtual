'use strict'

fetch('https://api.rand.fun/number/integer?min=0&max=100')    
.then(function(response) {    
            return response.json();  
        }
    ).then(function(data) {     
            document.body.innerHTML = data.result;  
    }
);

