const { Console } = require('console');

var input = require('fs').readFileSync('./stdin','utf8');

var lines =input.split("\n");

let dia1 = parseInt(lines.shift().split(" ").pop());
let horaHorário1 = lines.shift().split(":")
let hora1 = parseInt(horaHorário1.shift())
let minuto1 = parseInt(horaHorário1.shift())
let segundo1 = parseInt(horaHorário1.shift())

let dia2 = parseInt(lines.shift().split(" ").pop());
let horaHorário2 = lines.shift().split(":")
let hora2 = parseInt(horaHorário2.shift())
let minuto2 = parseInt(horaHorário2.shift())
let segundo2 = parseInt(horaHorário2.shift())


let tempoInicial = dia1*24*60*60 + hora1*60*60 + minuto1*60 + segundo1

let tempoFinal = dia2*24*60*60 + hora2*60*60 + minuto2*60 + segundo2

let diferenca = tempoFinal - tempoInicial
let totalDeDia = Math.floor(diferenca / (24*60*60))
diferenca = diferenca % (24*60*60)

let totalDeHoras = Math.floor(diferenca / (60*60))
diferenca = diferenca % (60*60)

let totalDeMinutos = Math.floor(diferenca / (60))
diferenca = diferenca % (60)

totalDeSegundos = diferenca


console.log(`${totalDeDia} dia(s)`)
console.log(`${totalDeHoras} hora(s)`)
console.log(`${totalDeMinutos} minuto(s)`)
console.log(`${totalDeSegundos} segundo(s)`)

  