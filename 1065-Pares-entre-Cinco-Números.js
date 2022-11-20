var input = require('fs').readFileSync('./stdin','utf8');

var valores = input.split('\n').map((value)=> {return parseInt(value)})

let quantidade =" "
for (let i = 0; i <= valores.length; i++){
    if(valores[i] % 2 == 0){
        quantidade ++
        
    }
}console.log(`${quantidade} valores pares`)