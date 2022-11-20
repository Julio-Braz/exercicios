var input = require('fs').readFileSync('./stdin','utf8');

let lines = input.split('\n')


for(i=0; i <lines.length; i++ ){
    let [M, N] = lines[i].split(' ').map(Number)
    const maiorNumero = Math.max(M, N)
    const menorNumero = Math.min(M, N)
    if(menorNumero <=0){
        break
    }
    let soma = []
    let somaTotal= 0   
    for(j = menorNumero ;  j < maiorNumero +1; j++ ){
              
        soma += j + " "
        somaTotal += j
    
    }console.log(`${soma.trim()} Sum=${somaTotal}`)
}
