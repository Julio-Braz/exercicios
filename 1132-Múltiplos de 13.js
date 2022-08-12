var input = require('fs').readFileSync('./stdin','utf8');

const [X,Y] = input.split('\n').map(Number)

let soma = 0
if( X < Y){
for(i= X; i <Y+1;i++){
    if (i % 13 != 0){
        soma += i
    }
    
}console.log(soma)
}else{
    for(i= Y; i <X+1; i++){
    if (i % 13 != 0){
        soma += i
    }

}console.log(soma)}