var input = require('fs').readFileSync('./stdin','utf8');

let novoValor = parseInt(input)

  
const notas = [100, 50, 20, 10, 5, 2, 1];
console.log(novoValor)
    for (let nota of notas) {
let qtdNotas = novoValor / nota;

console.log(`${Math.trunc(qtdNotas)} nota(s) de R$ ${nota},00`);
novoValor = novoValor % nota;
}
    

  




