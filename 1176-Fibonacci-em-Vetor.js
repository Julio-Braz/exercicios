var input = require('fs').readFileSync('./stdin','utf8');

let valores= input.split('\n').map(Number)
const casos = valores.shift();


function fibbonacci(){
    let fibonacci = [0,1];
    for (let i = 2; i < 61; i++) {
    
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci
}

function achandoIndice(){
    let fibonacci = fibbonacci()
    for (let j = 0; j < casos; j++) {
    
    console.log(`Fib(${valores[j]}) = ${fibonacci[valores[j]]}`)        
    
}
}
achandoIndice()





