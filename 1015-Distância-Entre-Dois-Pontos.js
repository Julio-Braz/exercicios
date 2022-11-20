var input = require('fs').readFileSync('/dev/stdin','utf8');

let valores = input.split( "\n");

let valoresLinha1 = valores.shift()
let valoresLinha2 = valores.shift()

let array01 = valoresLinha1.split(" ")
let array02 = valoresLinha2.split(" ")

let x1 = parseFloat(array01.shift())
let y1 = parseFloat(array01.shift())

let x2 = parseFloat(array02.shift())
let y2 = parseFloat(array02.shift())

 let distancia = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)).toFixed(4)
console.log(distancia)
