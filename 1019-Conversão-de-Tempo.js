var input = require('fs').readFileSync('./stdin','utf8');


let qtdSegundos = parseInt(input)
 
let hora = parseInt(qtdSegundos / 3600);
qtdSegundos = qtdSegundos % 3600;

let minuto = parseInt(qtdSegundos / 60);
qtdSegundos = qtdSegundos % 60



console.log(`${hora}:${minuto}:${qtdSegundos}`);


// Usando for of

//let qtdSegundos = parseInt(input)
 
//const valores =[3600,60,1];
//const resultado = []

//for (const valor of valores) {
//  resultado.push(parseInt(qtdSegundos / valor)
//  qtdSegundos = qtdSegundos % valor)
//}
//console.log(resultado.join(":"));


