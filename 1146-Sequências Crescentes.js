var input = require('fs').readFileSync('./stdin','utf8');

const valores = input.split('\n').map(Number);

let resposta = ''
for (const X of valores) {
    if (X == 0){
       
        break
    }else{
    for( i = 1; i <= X; i++ ){
        if(i == X){
            resposta += i + '\n'
        }else{
            resposta += i + ' '
        }   
    }   
       
}
}console.log(resposta.trim())
