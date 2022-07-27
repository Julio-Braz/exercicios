var input = require('fs').readFileSync('./stdin','utf8');

let qtdias = parseInt(input)
 
const valores =[365,30,1];
const resultado = []

for (const valor of valores) {
 resultado.push(parseInt(qtdias / valor))
 qtdias = qtdias % valor
}
console.log(`${resultado.shift()} ano(s)\n${resultado.shift()} mes(es)\n${resultado.shift()} dia(s)`);