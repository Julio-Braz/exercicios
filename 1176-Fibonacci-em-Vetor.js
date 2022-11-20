var input = require('fs').readFileSync('./stdin','utf8');

let valores= input.split('\n').map(Number)
const casos = valores.shift();

// function numbers(){

let fibonacci = [0,1];
for (let i = 2; i < 7; i++) {

fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];

for (let j = 0; j < casos; j++) {  
    if(valores[j] == fibonacci){
        console.log(`N[${[i]}] = ${valores[i]}`)        
    }
}

}
// return fibonacci
// }


