var input = require('fs').readFileSync('./stdin','utf8');
let valores = input.split('\n').map(Number);

let resultado = 0
let contagem = 0

for (const X of valores) {
    
    if(X == 0){
        break
    }
for(i = X ; i < X +10;i++){
    
        
    if( i % 2 == 0){
       resultado += i
       
        }
    }
    contagem ++ 
   

    console.log(resultado)
if(contagem > 0){
    resultado = 0
    contagem = 0
}
}