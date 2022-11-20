var input = require('fs').readFileSync('./stdin','utf8');

let lines = input.split('\n')

let quantidade = parseInt(lines.shift())
let valores = lines.map(Number)

for (i = 0; i < quantidade ; i++){
    
    if(valores[i] == 0){
        console.log('NULL')
    }   if (valores[i] > 0){
           if(valores[i] % 2 === 0 ){
               console.log('EVEN POSITIVE')
           }else{
               console.log('ODD POSITIVE')}   
    }   if (valores[i] < 0){
           if(valores[i]  % 2 == 0){
               console.log('EVEN NEGATIVE')
           }else{
               console.log('ODD NEGATIVE')}   
    }   
}   

