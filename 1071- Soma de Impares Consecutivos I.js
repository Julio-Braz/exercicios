var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split("\n")

const X = parseInt((valores).shift())
const Y = parseInt((valores).shift())

let contador = 0


if( X > Y){
    for( i = Y +1; i < X; i++){
    if(i % 2 !== 0){
        contador += i
            
}}
}else if(X == Y){
    console.log(0)
}
else{
    for(i= X +1; i < Y; i++ ){
        if(i % 2 !== 0){
            contador += i
            
        }
    }
}

console.log(contador)