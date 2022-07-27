var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split(" ");

let a = parseInt(valores.shift());
let b = parseInt(valores.shift());

if( a % b == 0 || b % a == 0){
    console.log("Sao Multiplos")
}else{
    console.log("Nao sao Multiplos")
}
