var input = require('fs').readFileSync('/dev/stdin','utf8');

var valores = input.split("\n");


var nome = String(valores.shift());
var salarioFixo =parseInt(valores.shift());
var faturado = parseFloat(valores.shift());
var salarioTotal = (faturado  * 15 /100) + salarioFixo;

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)

