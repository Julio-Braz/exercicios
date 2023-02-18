let input = require('fs').readFileSync('./stdin', 'utf8');

let linha = input.split('\n')
const linhaEscolhida = parseInt(linha.shift())
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0

function somando(){

for (let i = 0; i < 12; i++) {
    if (linhaEscolhida == '0') {
        S += numbers[i]
        
    } else {
        S += numbers[(i + (linhaEscolhida * 12))]
        
    }
} return S
}

function operacao(){
if(operacaoEscolhida == 'S'){
    console.log(somando().toFixed(1))

}else{
    media = (somando() /12).toFixed(1)
    console.log(media)
}
}

operacao()