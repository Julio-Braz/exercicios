var input = require('fs').readFileSync('/dev/stdin','utf8');

valores = input.split( "\n");

let km = parseInt(valores.shift());
let combustivel = parseFloat(valores.shift());

let consumoMedio = (km / combustivel).toFixed(3);

console.log(consumoMedio + " km/l")