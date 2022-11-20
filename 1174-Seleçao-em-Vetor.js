var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split('\n').map(Number)

for (let i = 0; i < 100; i++) {
    if(valores[i] <= 10){
        console.log(`A[${[i]}] = ${valores[i].toFixed(1)}`)
    }
}