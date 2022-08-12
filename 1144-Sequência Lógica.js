var input = require('fs').readFileSync('./stdin','utf8');
const linhas = parseInt(input)

let resultado = ''
for( i = 1 ; i <= linhas; i++){
    resultado += i + " " + Math.pow(i,2) + " " + Math.pow(i,3)
    resultado += '\n'
    resultado += i + " " + (Math.pow(i,2)+1) + " " + (Math.pow(i,3)+1)
    resultado += '\n'
}
console.log(resultado.trim())