var input = require('fs').readFileSync('./stdin','utf8');
var valores = input.split('\n').map((value)=> {return parseInt(value)})

let pares = ""
let impares = ""
let positivos = ""
let negativos = ""

for( i=0 ; i < 5; i++){
    if (valores[i] % 2 === 0){
        pares ++
            
    }
    if(valores[i] % 2 !== 0){
        impares ++               
    }
    if( valores[i] > 0){
        positivos ++
    }
    if(valores[i] < 0){
        negativos ++
    }
}
console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)