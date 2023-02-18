let input = require('fs').readFileSync('./stdin', 'utf8');
let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0
let contador = 0

function somando() {
    

    for (let i = 22; i < 144; i++) {

        if (i % 11 == 0) {
            i=i+1            

            for (let j = 0; j < contador + 1; j++) {
                if(i+j> 143){
                    break
                }
                // console.log(numbers[i+j])
                S += numbers[i + j]
                
            }contador ++
        } 

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