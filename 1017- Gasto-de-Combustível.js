var input = require('fs').readFileSync('./stdin','utf8');

let linhas = input.split("\n");

const consumo = 12
let tempoGasto = linhas.shift();
let velocidadeMaxima = linhas.shift();


let quantidadeLitros = ((velocidadeMaxima * tempoGasto) / consumo).toFixed(3)

console.log(quantidadeLitros)