var input = require('fs').readFileSync('./stdin','utf8');

var lines = input.split(" ")

var linha2 = input.split("\n")

let notaExame = parseFloat(linha2.slice(1))

let n1 = parseFloat(lines.shift())
let n2 = parseFloat(lines.shift())
let n3 = parseFloat(lines.shift())
let n4 = parseFloat(lines.shift())

let media = ((n1 * 2) + (n2 *3) + (n3 * 4)+ (n4 * 1))/10 
let resultadoFinalExame = (media + notaExame) / 2

function avaliacao (media, resultadoFinalExame){
    if (media >= 7.0 ){
    console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)
} else if (media < 5.0){
    console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)
} else 
    { console.log(`Media: ${media.toFixed(1)}\nAluno em exame.`)
    if( resultadoFinalExame >= 5.0){ 
     console.log(`Nota do exame: ${notaExame.toFixed(1)}\nAluno aprovado.\nMedia final: ${resultadoFinalExame.toFixed(1)}`)
      
}else{
    console.log(`Nota do exame: ${notaExame.toFixed(1)}\nAluno reprovado.\nMedia final: ${resultadoFinalExame.toFixed(1)}.`)
}
    }
}
avaliacao (media, resultadoFinalExame)