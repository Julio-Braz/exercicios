let input = require('fs').readFileSync('./stdin', 'utf8');

let valor = parseFloat(input);

function vetor(x) {
    let contador = 0

    for (let i = 0; i < 100; i++) {
        console.log(`N[${contador}] = ${x.toLocaleString('en-US', { minimumFractionDigits: 4, useGrouping: false })}`);

        x = (x / 2)

        if (contador == 999) {
            break
        }
        contador++
    }
}
vetor(valor)