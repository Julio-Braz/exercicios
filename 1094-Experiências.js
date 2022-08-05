var input = require('fs').readFileSync('./stdin','utf8');

let lines = (input).split('\n')
let testes = parseInt(lines.shift());

let totalCoelhos = 0
let totalRatos = 0
let totalSapos = 0



for( i = 0; i < testes; i++ ){
    let [numero2, tipo2] = lines[i].split(' ')
    let numero = parseInt(numero2)
    let tipo = tipo2.trim()

    if(tipo == 'C'){
        totalCoelhos = totalCoelhos + numero 
        
    }
    if(tipo == 'R'){
        totalRatos = totalRatos + numero 
        
    }
    if(tipo == 'S'){
        totalSapos = totalSapos + numero 
        
    }
    
}
const totalCobaias = totalCoelhos + totalSapos + totalRatos

const porcentagemCoelhos = (totalCoelhos /totalCobaias) *100
const porcentagemRatos = (totalRatos /totalCobaias) *100
const porcentagemSapos = (totalSapos /totalCobaias) *100


console.log(`Total: ${totalCobaias} cobaias\nTotal de coelhos: ${totalCoelhos}\nTotal de ratos: ${totalRatos}\nTotal de sapos: ${totalSapos}\nPercentual de coelhos: ${porcentagemCoelhos.toFixed(2)} %\nPercentual de ratos: ${porcentagemRatos.toFixed(2)} %\nPercentual de sapos: ${porcentagemSapos.toFixed(2)} %`)
  
