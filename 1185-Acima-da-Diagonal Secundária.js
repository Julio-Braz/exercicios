let input = require('fs').readFileSync('./stdin', 'utf8');
let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0
let contador = 0

function somando() {
    
    S += numbers[0]

    for (let i = 1; i < 111; i++) {

        if (i % 11 == 0) {
            i = i + contador + 1
            contador++


        } S += numbers[i]

    }

    return S
}

function operacao() {
    if (operacaoEscolhida == 'S') {
        console.log(somando().toFixed(1))

    } else {
        media = (somando() / 66).toFixed(1)
        console.log(media)
    }
}
operacao()