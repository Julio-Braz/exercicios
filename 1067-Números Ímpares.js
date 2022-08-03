var input = require('fs').readFileSync('./stdin','utf8');

const valor = parseInt(input)


for(i = 0; i <= valor; i++){
    if(i % 2 !== 0){
        console.log(i)
   }
}
