var input = require('fs').readFileSync('./stdin','utf8');

let valores = input.split(" ");
const renda = parseFloat(valores).toFixed(2);

if(renda <= 2000.00){
    console.log('Isento')
}else if(renda >2000.00 && renda <= 3000.00 ){
    let imposto = (renda -2000.00)/100 * 8
    console.log(`R$ ${imposto.toFixed(2)}`) 
}else if(renda > 3000.00 && renda <= 4500.00){
    let imposto = ((renda -3000.00)/100 * 18) + 80
    console.log(`R$ ${imposto.toFixed(2)}`)    
}else{
    let imposto = ((renda -4500.00)/100 * 28) + 350
    console.log(`R$ ${imposto.toFixed(2)}`)    
}