var input = require('fs').readFileSync('./stdin','utf8');

var lines = input.split('\n');

let removeElemento = lines.shift();

let linha1 = lines.shift().split(' ')
let somaN1 = parseInt(linha1[0])
let somaD1 = parseInt(linha1[2])
let somaN2 = parseInt(linha1[4])
let somaD2 = parseInt(linha1[6])


let linha2 = lines.shift().split(' ')
let subtracaoN1 = parseInt(linha2[0])
let subtracaoD1 = parseInt(linha2[2])
let subtracaoN2 = parseInt(linha2[4])
let subtracaoD2 = parseInt(linha2[6])

let linha3 = lines.shift().split(' ')
let multiplicacaoN1 = parseInt(linha3[0])
let multiplicacaoD1 = parseInt(linha3[2])
let multiplicacaoN2 = parseInt(linha3[4])
let multiplicacaoD2 = parseInt(linha3[6])

let linha4 = lines.shift().split(' ')
let divisaoN1 = parseInt(linha4[0])
let divisaoD1 = parseInt(linha4[2])
let divisaoN2 = parseInt(linha4[4])
let divisaoD2 = parseInt(linha4[6])


const somaNumerador = (somaN1 * somaD2 + somaN2 * somaD1)
const somaDenominador = (somaD1 * somaD2)

const SubtraçãoNumerador = (subtracaoN1 * subtracaoD2 - subtracaoN2 * subtracaoD1)
const SubtraçãoDenominador = (subtracaoD1 * subtracaoD2)

const multiplicacaoNumerador = (multiplicacaoN1 * multiplicacaoN2)
const multiplicacaoDenominador = (multiplicacaoD1 * multiplicacaoD2)

const divisaoNumerador = (divisaoN1 * divisaoD2)
const divisaoDenominador = (divisaoN2 * divisaoD1)


function simplify(numerador,denominador ) {
    var result = '' 
        numOne = numerador 
        numTwo = denominador
    for (var i = Math.max(numOne, numTwo); i > 1; i--) {
    if ((numOne % i == 0) && (numTwo % i == 0)) {
        numOne /= i;
        numTwo /= i;
        result = numOne + '/' + numTwo
    } else{
        result = numOne + '/' + numTwo
    }        
    
    }
    return result 
}

console.log(somaNumerador + '/' + somaDenominador + ' = ' + simplify(somaNumerador,somaDenominador))
console.log(SubtraçãoNumerador + '/' + SubtraçãoDenominador + ' = ' + simplify(SubtraçãoNumerador,SubtraçãoDenominador))
console.log(multiplicacaoNumerador + '/' + multiplicacaoDenominador + ' = ' + simplify(multiplicacaoNumerador,multiplicacaoDenominador))
console.log(divisaoNumerador + '/' + divisaoDenominador + ' = ' + simplify(divisaoNumerador,divisaoDenominador))