

var input = require('fs').readFileSync('./stdin','utf8');

var raio = parseFloat(input);

var π = 3.14159;

function calculo (){

 area = π * Math.pow(raio,2);
 console.log("A="+area.toFixed(4))
}
calculo();
