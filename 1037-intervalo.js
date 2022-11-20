var input = require('fs').readFileSync('./stdin','utf8');

var lines = parseFloat(input)

if(lines < 0 || lines > 100.0000000){
    console.log("Fora de intervalo")
} 
else if ( lines >=0 && lines <= 25.0000) {
    console.log("Intervalo [0,25]")
}
else if(lines >= 25.0001  && lines <= 50.0000000){
    console.log("Intervalo (25,50]")
    }
else if( lines >= 50.0001  && lines <= 75.0000000){
        console.log("Intervalo (50,75]")
        }
else if (lines >= 75.0001  && lines <= 100.0000000){
         console.log("Intervalo (75,100]")
 }

 

