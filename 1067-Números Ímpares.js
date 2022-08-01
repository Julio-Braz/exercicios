var input = require('fs').readFileSync('./stdin','utf8');

const valor = parseInt(input)

let contador = ""
for(i = 0; i <= valor; i++){
    if(i % 2 !== 0){
        contador++
   }
}
