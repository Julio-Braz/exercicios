var input = require('fs').readFileSync('./stdin','utf8');

valor = parseFloat(input);

const notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
const moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];


let resultadoNotas = []
for (const nota of notas) {
    resultadoNotas.push(valor / nota)
    valor = (valor % nota) + 0.00001;    
}


let resultadoMoedas = []
for (const moeda of moedas) {
    resultadoMoedas.push(valor / moeda)
    valor = (valor % moeda) + 0.00001;

}


console.log("NOTAS:")
console.log(`${Math.trunc(resultadoNotas.shift())} nota(s) de R$ ${notas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoNotas.shift())} nota(s) de R$ ${notas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoNotas.shift())} nota(s) de R$ ${notas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoNotas.shift())} nota(s) de R$ ${notas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoNotas.shift())} nota(s) de R$ ${notas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoNotas.shift())} nota(s) de R$ ${notas.shift().toFixed(2)}`)
console.log('MOEDAS:')
console.log(`${Math.trunc(resultadoMoedas.shift())} moeda(s) de R$ ${moedas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoMoedas.shift())} moeda(s) de R$ ${moedas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoMoedas.shift())} moeda(s) de R$ ${moedas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoMoedas.shift())} moeda(s) de R$ ${moedas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoMoedas.shift())} moeda(s) de R$ ${moedas.shift().toFixed(2)}`)
console.log(`${Math.trunc(resultadoMoedas.shift())} moeda(s) de R$ ${moedas.shift().toFixed(2)}`)





