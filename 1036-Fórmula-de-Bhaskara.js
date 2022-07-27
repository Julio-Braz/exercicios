var input = require('fs').readFileSync('./stdin','utf8');
var lines = input.split(" ")

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

let delta = Math.pow(B,2) -4 * A * C

if(delta < 0 || A == 0 ){
    console.log("Impossivel calcular")
} else {
    let resultado1 = (-B +Math.sqrt(delta)) / (2* A)
    console.log(`R1 = ${resultado1.toFixed(5)}`)
    
    let resultado2 = (-B -Math.sqrt(delta)) / (2* A)
    console.log(`R2 = ${resultado2.toFixed(5)}`)
}
