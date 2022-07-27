var input = require('fs').readFileSync('/dev/stdin','utf8');

var valores = input.split("\n");

var number = parseInt(valores.shift());
var horasTrabalhadas = parseInt(valores.shift());
var valorPorHora = parseFloat(valores.shift());

var salario = (horasTrabalhadas * valorPorHora).toFixed(2)

console.log(`NUMBER = ${number}\nSALARY = U$ ${salario}`)