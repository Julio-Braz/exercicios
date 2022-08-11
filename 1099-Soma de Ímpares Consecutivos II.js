var input = require('fs').readFileSync('./stdin','utf8');

let lines = input.split('\n')
let N = parseInt(lines.shift())


for ( i = 0 ; i < N ; i++){
    
    let [numero1, numero2] = lines[i].split(' ').map(item=>parseInt(item))
    let menor = Math.min(numero1, numero2)
    let maior= Math.max(numero1, numero2)
    let soma = 0
    
    for (j = menor +1; j < maior; j++){
        if( j %2 !== 0){
            soma +=j
        }       
    }console.log(soma)

}