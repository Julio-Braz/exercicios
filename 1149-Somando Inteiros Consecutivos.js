var input = require('fs').readFileSync('./stdin','utf8');

let valores =input.split(' ').map(Number)

let A = valores.shift()
let N = 0
let soma = 0

for (const item of valores) {
    if(item > 0 ){
        N = item
    }
}
for(i= 0; i <= N-1; i++){
    soma +=  A + i
    
}
console.log(soma)
