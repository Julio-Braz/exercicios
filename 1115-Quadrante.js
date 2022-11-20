var input = require('fs').readFileSync('./stdin','utf8');
var lines = input.split('\n')


for ( i = 0 ; i < lines.length; i++){
    
    let [X, Y] = lines[i].split(' ').map(item=>parseInt(item))
if(X > 0 & Y >0){
    console.log('primeiro')
    }else if(X>0 & Y<0){
        console.log('quarto')
    }else if(X<0 & Y< 0){
            console.log('terceiro')
    }else if(X<0 & Y> 0){
        console.log('segundo')
    }else{
        break
    }
}