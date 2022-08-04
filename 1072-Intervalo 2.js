var input = require('fs').readFileSync('./stdin','utf8');

var lines = input.split('\n');

let quantidade = parseInt(lines.shift());
let valores = lines.map(Number)
let inn = 0

let out = 0

for(i= 0; i < quantidade; i++){
    if(valores[i]>= 10 && valores[i]<= 20 ){
        inn++
    }else{
       out++ 
    }
}
console.log(`${inn} in\n${out} out`)