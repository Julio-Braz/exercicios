var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split('\n').map(Number).reverse();

for (let i = 0; i < 20; i++) {
    console.log(`N[${[i]}] = ${valores[i]}`)
}
