var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split('\n').map(Number)


for (let i = 0; i < valores.length; i++) {
    if(valores[i] <= 0){
        console.log(`X[${[i]}] = 1`)
    }else{
        console.log(`X[${[i]}] = ${valores[i]}`)
    }
    
}