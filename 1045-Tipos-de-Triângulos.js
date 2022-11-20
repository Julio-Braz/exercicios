var input = require('fs').readFileSync('./stdin','utf8');

var lines = input.split(" ")

let numerosdecrescente = lines.map(Number);

numerosdecrescente.sort((a , b) => a-b);
numerosdecrescente.reverse();

let A = (numerosdecrescente.shift());
let B = (numerosdecrescente.shift());
let C = (numerosdecrescente.shift());


if(A >= (B + C)){
    console.log("NAO FORMA TRIANGULO")
    
}else{
if(Math.pow(A,2) == Math.pow(B,2) + Math.pow(C,2)){
    console.log('TRIANGULO RETANGULO')
}

if(Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)){
    console.log('TRIANGULO OBTUSANGULO')
}
if(Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)){
    console.log('TRIANGULO ACUTANGULO')
}
if(A == B && B == C){
    console.log('TRIANGULO EQUILATERO')
}
if(A == B && C!= A || B == C && A!= B|| C == A && B!=A){
    console.log('TRIANGULO ISOSCELES')
}
}
