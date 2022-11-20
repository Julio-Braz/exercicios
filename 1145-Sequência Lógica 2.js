var input = require('fs').readFileSync('./stdin','utf8');

const [X,Y] = input.split(' ').map(Number)

let respostas = ''

for(i = 1; i <= Y; i++){
 if( i % X == 0){
    respostas += i
    respostas += '\n'
    
    
 }   else{ respostas += i + " "
}

}console.log(respostas.trim())