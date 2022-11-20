var input = require('fs').readFileSync('./stdin','utf8');

const valor = parseInt(input)

for(i=0; i <= valor; i++){
    if( valor % i == 0){
        console.log(i)
    }
}