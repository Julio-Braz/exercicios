var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split(" ")

let numbersOrdenado = valores.map(Number);

numbersOrdenado.sort((a , b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

let A = numbersOrdenado.shift()
let B = numbersOrdenado.shift()
let C = numbersOrdenado.shift()

let a = parseFloat(valores.shift())
let b = parseFloat(valores.shift())
let c = parseFloat(valores.shift())



if(A + B > C) {
    
    let perimetro = a + b + c
    console.log(`Perimetro = ${perimetro.toFixed(1)}`) 

}else{
    let area = (a + b) * c /2
    console.log(`Area = ${area.toFixed(1)}`)
}
