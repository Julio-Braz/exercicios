var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split(" ")
let horaInicial = (parseInt(valores.shift()))
let horaFinal = (parseInt(valores.shift()))

if(horaInicial == horaFinal){
    console.log('O JOGO DUROU 24 HORA(S)')
}
else if(horaInicial > horaFinal){
    let duracao = (24 - horaInicial) + horaFinal
    console.log(`O JOGO DUROU ${duracao} HORA(S)`)
}
else if(horaInicial < horaFinal){
    let duracao2 = horaFinal - horaInicial
    console.log(`O JOGO DUROU ${duracao2} HORA(S)`)
}
