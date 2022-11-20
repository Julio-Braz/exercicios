var input = require('fs').readFileSync('./stdin','utf8');
let valores = input.split('\n').map(Number)
const casos = parseInt(valores.shift())
let soma = 0

for(i = 0 ; i < casos ; i++){
for(j = 1; j <= valores[i]; j++){
    
    soma +=j
    if(valores[i] === 1){
        soma = 0
        j = 1
        console.log(`${valores[i]} nao eh perfeito`)
        break

    }
    if(soma === valores[i]){
        soma = 0
        j = 1
        console.log(`${valores[i]} eh perfeito`)
        break
       
    }
    if (soma > valores[i]){
            soma = 0
            j = 1
        console.log(`${valores[i]} nao eh perfeito`)
        break
        
        
    }
  
}
}