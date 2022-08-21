var input = require('fs').readFileSync('./stdin','utf8');
let valores = input.split('\n').map(Number)

const X = valores.shift();

let Z = 0;

let limite = X
let resultadoDaSoma = 0

for (const item of valores) {
    if(item > X){
        Z = item
        break
    }
    
}

for(i = X+1; i < Z; i++){
    while(limite < Z){
        resultadoDaSoma++
        limite += i
        
    }
}console.log(resultadoDaSoma)