let input = require('fs').readFileSync('./stdin', 'utf8');

let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0

let contador = 3

function somando() {

    for (let i = 1; i < 55; i++) {

        if (i % 11 == 0) {
            i = i + contador;
            contador = contador + 2;

        }
        S += numbers[i]
        
    }
    return S
}


function operacao() {
    if (operacaoEscolhida == 'S') {
        console.log(somando().toFixed(1))

    } else {
        media = (somando() / 30).toFixed(1)
        console.log(media)
    }
}
operacao()