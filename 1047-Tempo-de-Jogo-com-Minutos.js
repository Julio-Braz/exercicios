var input = require('fs').readFileSync('./stdin','utf8');

valores = input.split(" ");

const [horaInicial, minutoInicial, horaFinal, minutoFinal] = input.split(' ').map(item => parseInt(item))

if(horaFinal > horaInicial && minutoFinal > minutoInicial){
    let duracaoHoras = horaFinal - horaInicial
    let duracaoMinutos = minutoFinal - minutoInicial
    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)

}else if(horaFinal == horaInicial && minutoFinal == minutoInicial){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')

}else if (horaFinal > horaInicial && minutoFinal < minutoInicial){
    let duracaoHoras = horaFinal - horaInicial - 1
    let duracaoMinutos = minutoFinal - minutoInicial +60
    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)

}else if(horaFinal < horaInicial && minutoFinal < minutoInicial){
    let duracaoHoras = (23 - horaInicial) + horaFinal
    let duracaoMinutos = minutoFinal - minutoInicial +60
    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)

}else if(horaFinal < horaInicial && minutoFinal > minutoInicial){
    let duracaoHoras = (24 - horaInicial) + horaFinal
    let duracaoMinutos = minutoFinal - minutoInicial 
    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)

}else if(horaFinal == horaInicial && minutoFinal > minutoInicial){
    let duracaoMinutos = minutoFinal - minutoInicial 
    console.log(`O JOGO DUROU 0 HORA(S) E ${duracaoMinutos} MINUTO(S)`)

}else if(horaFinal == horaInicial && minutoFinal < minutoInicial){
    let duracaoMinutos = 60 -(minutoInicial - minutoFinal )
    console.log(`O JOGO DUROU 23 HORA(S) E ${duracaoMinutos} MINUTO(S)`)
    
}else if(horaFinal > horaInicial && minutoFinal == minutoInicial){
    let duracaoHoras = horaFinal - horaInicial
    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E 0 MINUTO(S)`)
}else if(horaFinal < horaInicial && minutoFinal == minutoInicial){
    let duracaoHoras = horaFinal + horaInicial
    console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E 0 MINUTO(S)`)
}

