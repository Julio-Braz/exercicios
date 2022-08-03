var input = require('fs').readFileSync('./stdin','utf8');
const valor = parseInt(input)

if(valor %2 == 0)
{for(i= valor; i <= valor + 12; i++){
    if( i % 2 !== 0){
        console.log(i)
    }
}}
else{for(i= valor; i <= valor + 11; i++){
    if( i % 2 !== 0){
        console.log(i)
    }
}

}