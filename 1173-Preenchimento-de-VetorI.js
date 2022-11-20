var input = require('fs').readFileSync('./stdin','utf8');

let valor = parseInt(input)

let contador = valor

for (let i = 0; i < 10; i++) {
    console.log(`N[${[i]}] = ${contador}`)
    contador *=2
    
}
