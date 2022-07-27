var input = require('fs').readFileSync('./stdin','utf8');

var linhas = input.split("\n")
var linha1 = linhas.shift();
var linha2 = linhas.shift();

var linha1format = linha1.split(" ");
var linha2format = linha2.split(" ");


var codigo1 = parseInt(linha1format.shift());
var quantidade1 = parseInt(linha1format.shift());
var preço1 = parseFloat(linha1format.shift()).toFixed(2);

var codigo2 = parseInt(linha2format.shift());
var quantidade2 = parseInt(linha2format.shift());
var preço2 = parseFloat(linha2format.shift()).toFixed(2);

var valorTotal = (quantidade1 * preço1) + (quantidade2 * preço2);
//console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)
console.log(linha1)
