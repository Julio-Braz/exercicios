var input = require('fs').readFileSync('./stdin','utf8');
let lines = input.split('\n').map(Number)

let n1 = 0
let n2 = 0
let number = 0

for (const N of lines) {
    if(N >= 0 & N <= 10){
        number ++
        if(number == 1 ){
            n1 = N
        }
        else if(number == 2 ){
            n2 = N
            let media = (n1+n2)/2
            console.log(`media = ${media.toFixed(2)}`)
        }
    if(number >2 & N == 2){
        console.log('novo calculo (1-sim 2-nao)')
        break

    }
}
if(number <2 & N < 0 || N > 10 ){
    console.log('nota invalida')
}

if(number > 2){
    console.log('novo calculo (1-sim 2-nao)')
}
if(N == 1 & number >2){
    number = 0
}
}