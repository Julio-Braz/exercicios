var input = require('fs').readFileSync('./stdin','utf8');

let lines = input.split('\n')

let placares = []
let quantidades = 0
let vitoriasInter = 0
let vitoriaGremio = 0
let empate = 0

for (const N of lines) {
    if(N.length > 2){
        placares.push(N)
        
    }else{
        quantidades ++
        console.log('Novo grenal (1-sim 2-nao)')

        if(N == 2){
            break
        }

    }
    
}
console.log(`${quantidades} grenais`)

for (let placar of placares){
    const [inter, gremio] = placar.split(' ').map(Number)
   
    if(gremio > inter){
        vitoriaGremio ++
    }else if(gremio < inter){
        vitoriasInter ++
    } else{
        empate ++
    }
}console.log(`Inter:${vitoriasInter}\nGremio:${vitoriaGremio}\nEmpates:${empate}`)

if(vitoriasInter > vitoriaGremio){
    console.log('Inter venceu mais')
}else if(vitoriasInter < vitoriaGremio){
    console.log('Gremio venceu mais')
}else {
    console.log('Nao houve vencedor')
}


