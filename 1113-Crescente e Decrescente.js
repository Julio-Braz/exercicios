var input = require('fs').readFileSync('./stdin','utf8');

const lines = input.split('\n')

for ( i = 0 ; i < lines.length; i++){
    
    let [X, Y] = lines[i].split(' ').map(item=>parseInt(item))
    if(X > Y){
        console.log("Decrescente")
    }else if(X< Y){
        console.log('Crescente')
    }
        else{
                break
            }
}