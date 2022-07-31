var input = require('fs').readFileSync('./stdin','utf8');

var valores = input.split("\n").map(Number)


var contagem = 0
var valoresPositivos = 0
// let valoresPositivos = 0
for (let i = 0; i < valores.length; i++) {
    if(valores[i] > 0){
    contagem += 1
    valoresPositivos += valores[i] 
    }
}

const media = (valoresPositivos / contagem).toFixed(1)

console.log(`${contagem} valores positivos\n${media}`)

