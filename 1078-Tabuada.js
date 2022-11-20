var input = require('fs').readFileSync('./stdin','utf8');
let N = parseInt(input);

for(i = 1; i <= 10; i++){
    total = i* N
    console.log(`${i} x ${N} = ${total}`)
}