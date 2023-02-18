
let input = require('fs').readFileSync('./stdin', 'utf8');

let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0

let contador = 0
let contador2 = 4


function somando() {

    for (let i = 21; i < 72; i++) {

        if (i % 11 == 0) {
            i = i + 1
            for (let j = 0; j < contador + 1; j++) {
                S += numbers[i + j]

            } ++contador
        }
    }
}

function somando2() {

    for (let i = 78; i < 133; i++) {

        if (i % 13 == 0) {
            i = i + 1
            for (let j = 0; j < contador2 + 1; j++) {

                // console.log(i+j)
                S += numbers[i + j]

            } --contador2
        }
    }
}

function operacao() {
    if (operacaoEscolhida == 'S') {
        console.log(S.toFixed(1))

    } else {
        media = (S / 30).toFixed(1)
        console.log(media)
    }
}
somando()
somando2()
operacao()