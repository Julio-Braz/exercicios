var input = require('fs').readFileSync('./stdin', 'utf8');

const valor = parseInt(input)

function vetor() {
    let contador = 0

    for (let i = 0; i < 999; i++) {

        if (i === valor) {
            i = 0
        }
        console.log(`N[${contador}] = ${i}`);
        if (contador == 999) {
            break
        }
        contador++
    }
}
vetor()

