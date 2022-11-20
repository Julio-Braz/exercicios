var input = require('fs').readFileSync('./stdin','utf8');


for (var index = 1; index < 101; index++) {
    if(index % 2 == 0){
        console.log(index)
    } 
}