let input = require('fs').readFileSync('./stdin', 'utf8');

let lines = input.split('\n')
var N = parseInt(lines.shift());
let numbers = lines.shift().split(' ').map(Number);
let menorValor = Math.min(...numbers)
console.log(`Menor valor: ${menorValor}`)

for (let i = 0; i < N; i++) {
    if(numbers[i] == menorValor){
    console.log(`Posicao: ${i}`)
    }
}