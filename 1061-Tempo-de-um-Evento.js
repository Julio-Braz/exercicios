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

let totalDeDia = dia2 - dia1
let totalDeHoras = 24 - hora1 + hora2
let totalDeMinutos = 60 - minuto1 + minuto2 
let totalDeSegundos = segundo2 - segundo1 



if(hora2 < hora1){
     totalDeDia -=  1
}else if(hora2 > hora1){
     totalDeHoras = hora2 - hora1
}else{totalDeHoras = 0
    
    if(minuto2 < minuto1){
        totalDeDia -=  1
        totalDeHoras += 1
    }}

if(minuto2 < minuto1){
    totalDeHoras -= 1
}else if(minuto2 > minuto1){
    totalDeMinutos = minuto2 - minuto1
}else{totalDeMinutos = 0
    if(segundo2 < segundo1){
        totalDeMinutos -= 1
        totalDeMinutos += 1
    }}

if(segundo2 < segundo1){
    totalDeMinutos -= 1
    totalDeSegundos = (60 - segundo1) + segundo2
}


console.log(`${totalDeDia} dia(s)`)
console.log(`${totalDeHoras} hora(s)`)
console.log(`${totalDeMinutos} minuto(s)`)
console.log(`${totalDeSegundos} segundo(s)`)

  