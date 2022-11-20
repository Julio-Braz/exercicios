var input = require('fs').readFileSync('./stdin','utf8');

const pedidos = input.split('\n').map(Number);
let alcool = 0
let gasolina = 0
let diesel = 0

console.log('MUITO OBRIGADO')
for(let pedido of pedidos){
    if(pedido == 1){
        alcool++
    }else if(pedido == 2){
        gasolina++
    }else if(pedido == 3){
        diesel++
    }else if(pedido == 4){
        break
    }else{
        continue
    }

}console.log(`Alcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)