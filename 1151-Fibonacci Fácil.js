var input = require('fs').readFileSync('./stdin','utf8');

let valor = parseInt(input);
// let penultimo = 0
// let ultimo = 1
// let fibonacci = '0 1 '
// let numero = 0

// while(numero < valor ){
//     numero = penultimo + ultimo
//     fibonacci += numero + ' '
//     penultimo = ultimo
//     ultimo = numero 
    
// }

// console.log(fibonacci)


// for(i = 0; i > valor; i++){
//     numero = penultimo[i] + ultimo
//     // fibonacci += numero[i] + ' '
//     // penultimo = ultimo[i]
//     // ultimo = numero[i] 
//     console.log(numero)
// }

// const fibonacci = (num)=> {
//     if( num <= 1) return 1;

//     return fibonacci (num - 1) + fibonacci( num-2);
// };
// fibonacci(5)

var resultado = ''
var fibonacci = [0,1];
for (var i = 2; i < valor; i++) {

fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
resultado += fibonacci[i] + ' '
 }console.log(`0 1 ${resultado.trim()}`)
