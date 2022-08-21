var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split('\n')
let N = parseInt(valores.shift())
let resultado = 0
let contador = 0

for(i = 0; i < N; i++){
    let [X, Y] = valores[i].split(' ').map(Number)
    
        for(j = X; j< X + (Y *2); j++){
            if (j % 2 !== 0){
                resultado += j
                
                
            }
            contador ++             
            
} console.log(resultado)
if(contador > 0){
    resultado = 0
    contador = 0

}   
}
 
