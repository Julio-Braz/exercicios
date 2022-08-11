var input = require('fs').readFileSync('./stdin','utf8');

let lines = input.split('\n').map(Number)

let aux = 0
let soma = 0

for(i = 0;i < lines.length; i++){
    
    if(aux ==2){
        console.log(soma)
        break
    }
    if(lines[i] >= 0 & lines[i] <=10){
        aux ++
        soma += lines[i]
        
 }else{
    console.log('nota invalida')
 } 
}
let media = soma/2 
 console.log(`media = ${media.toFixed(2)}`)
