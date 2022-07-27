
var input = require('fs').readFileSync('/dev/stdin','utf8');

var raio = parseFloat(input)
var pi = 3.14159
var volume = (4/3.0) * pi *Math.pow(raio,3)

console.log(`VOLUME = ${volume.toFixed(3)}`)