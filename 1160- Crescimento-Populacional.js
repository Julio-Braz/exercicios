var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split('\n')
const casos = parseInt(valores.shift())
let anos = 0

for(i= 0 ; i< casos;i++){
    let [PA, PB, G1, G2] = valores[i].split(' ').map(Number)
    
            while(PB >= PA  ){
                PA = Math.floor(PA + (PA*G1/100))
                PB = Math.floor(PB + (PB*G2/100))
                anos ++              
        if (anos> 100){
            break
        }
        
        }if (anos > 100){
            console.log('Mais de 1 seculo.')
            anos = 0
        }else{
                console.log(`${anos} anos.`)
                anos = 0
    }
}
