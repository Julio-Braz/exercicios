var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split(" ")

let numbersOrdenado = valores.map(Number);

numbersOrdenado.sort((a , b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
let a = numbersOrdenado.shift()
let b = numbersOrdenado.shift()
let c = numbersOrdenado.shift()

let d = parseInt(valores.shift())
let e = parseInt(valores.shift())
let f = parseInt(valores.shift())
console.log(`${a}\n${b}\n${c}\n\n${d}\n${e}\n${f}`)












// let valoresNumber =[];
// let length = valores.length

// for (let i = 0; index < length; i++) {
//     valoresNumber.push(parseInt(valores[i]))
// }

// console.log(valoresNumber)