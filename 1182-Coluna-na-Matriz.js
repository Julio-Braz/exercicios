let input = require('fs').readFileSync('./stdin', 'utf8');
let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0
let contador = 0

function somando() {

    for (let i = 1; i < 131; i++) {

        if (i % 12 == 0) {
            i = i + (2 + contador)
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