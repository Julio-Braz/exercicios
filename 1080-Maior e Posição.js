var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split('\n').map(Number)

let maiorValor = 0
let posicao = 0
for(i=0; i< valores.length; i++){
    if(valores[i] > maiorValor){
        maiorValor = valores[i]
        posicao = i + 1
        
    }
    
}
console.log(maiorValor)
console.log(posicao)