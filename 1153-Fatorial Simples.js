var input = require('fs').readFileSync('./stdin','utf8');
let N = parseInt(input);

let calculo = N
for (i = 1; i < N; i++){
    calculo *= i
    
}
console.log(calculo)