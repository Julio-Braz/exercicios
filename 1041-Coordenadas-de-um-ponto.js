var input = require('fs').readFileSync('./stdin','utf8');

let valor = input.split(" ");

let x = parseFloat(valor.shift());
let y = parseFloat(valor.shift());

function descobrir(x,y){
    
    if(x === 0.0 && y === 0.0){
        console.log("Origem")
    }else if(x > 0.0 && y > 0.0){
        console.log("Q1")
    }else if(x < 0.0 & y > 0.0){
        console.log("Q2")
    }else if(x < 0.0 && y < 0.0){
        console.log("Q3")
    }else if(x > 0.0 && y < 0.0){
        console.log("Q4")
    }else if( y === 0.0){
        console.log("Eixo X")
    }else if( x === 0.0){
        console.log("Eixo Y")
    }
}
descobrir(x,y)