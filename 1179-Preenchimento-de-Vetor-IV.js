let input = require('fs').readFileSync('./stdin', 'utf8');

let valor = input.split('\n').map(Number);

let pares = []
let impares = []

for (let i = 0; i < 15; i++) {

    if (valor[i] % 2 == 0) {
        pares.push(valor[i])

        if (pares.length == 5) {
            for (let p = 0; p < 5; p++) {
                console.log(`par[${p}] = ${pares[p]}`)

            }
            pares = []
        }
    } else {
        impares.push(valor[i])
        if (impares.length == 5) {
            for (let m = 0; m < 5; m++) {
                console.log(`impar[${m}] = ${impares[m]}`)

            }
            impares = []
        }
    }

}
for (let z = 0; z < impares.length; z++) {
    console.log(`impar[${z}] = ${impares[z]}`)
}
for (let x = 0; x < pares.length; x++) {
    console.log(`par[${x}] = ${pares[x]}`)
}





