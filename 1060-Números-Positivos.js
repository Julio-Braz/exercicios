var input = require('fs').readFileSync('./stdin','utf8');
var lines = input.split("\n").map(Number)

var arrayPositivos = []

for (let i = 0; i < lines.length; i++) {
    if(lines[i] > 0){
    arrayPositivos++
    }
}
console.log(`${arrayPositivos} valores positivos`)    
