var input = require('fs').readFileSync('./stdin','utf8');

var lines = input.split('\n');

let removeElemento = lines.shift();

let linha1 = lines.shift().split(' ')
let somaN1 = parseInt(linha1[0])
let somaD1 = parseInt(linha1[2])
let somaN2 = parseInt(linha1[4])
let somaD2 = parseInt(linha1[6])


let linha2 = lines.shift().split(' ')
let subtracaoN1 = parseInt(linha1[0])
let subtracaoD1 = parseInt(linha1[2])
let subtracaoN2 = parseInt(linha1[4])
let subtracaoD2 = parseInt(linha1[6])

let linha3 = lines.shift().split(' ')
let multiplicacaoN1 = parseInt(linha1[0])
let multiplicacaoD1 = parseInt(linha1[2])
let multiplicacaoN2 = parseInt(linha1[4])
let multiplicacaoD2 = parseInt(linha1[6])

let linha4 = lines.shift().split(' ')
let divisaoN1 = parseInt(linha1[0])
let divisaoD1 = parseInt(linha1[2])
let divisaoN2 = parseInt(linha1[4])
let divisaoD2 = parseInt(linha1[6])

const soma = (somaN1 * somaD2 + somaN2 * somaD1)
let calculo1 = simplify(10/8) 
console.log(soma)

