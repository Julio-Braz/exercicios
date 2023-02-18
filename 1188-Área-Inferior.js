let input = require('fs').readFileSync('./stdin', 'utf8');

let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0

let contador = 9


function somando() {

    for (let i = 89; i < 144; i++) {

        if (i % 13 == 0) {
            i = i + contador;
            contador -= 2

        } if (i < 143) {

            S += numbers[i]
        } else {
            break
        }
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