var input = require('fs').readFileSync('./stdin','utf8');

let N = parseInt(input);

for (i = 1; i< 10000; i++){
    if(i % N == 2){console.log(i)
        
    }
}
