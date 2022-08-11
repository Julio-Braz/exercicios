var input = require('fs').readFileSync('./stdin','utf8');

let lines = (input).split('\n')
const N = parseInt(lines.shift())


for(i = 0; i < N; i++){
    let [X, Y] = lines[i].split(' ').map(Number)

    let divisao = X / Y

if( Y == 0){
    
    console.log("divisao impossivel")
}else {
        console.log(divisao.toFixed(1))}
    
}
