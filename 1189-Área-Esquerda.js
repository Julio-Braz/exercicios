
let input = require('fs').readFileSync('./stdin', 'utf8');

let linha = input.split('\n')
const operacaoEscolhida = linha.shift()
const numbers = linha.map(parseFloat)

let S = 0

let contador = 0
let contador2 = 4


function somando() {

    for (let i = 11; i < 65; i++) {

        if (i % 12 == 0) {
            for(let j = 0; j < contador + 1 ;j++){

                S += numbers[i+j]

            }++contador 
            

        } 
       
    }   
}

function somando2(){
    
    for (let i = 71; i < 132; i++) {
        
        if (i % 12 == 0) {
            for(let j = 0; j < contador2 + 1 ;j++){
           
            
        S += numbers[i+j]

        }--contador2
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