var input = require('fs').readFileSync('./stdin','utf8');

var lines = input.split(" ")

const codigo =parseInt(lines.shift())
const quantidade =parseInt(lines.shift())
let resultado = 0

let produtos = [
    {codigo: 1, especificação: "Cachorro quente", price: 4.00},
    {codigo: 2, especificação:"X-salada", price: 4.50},
    {codigo: 3, especificação:"X-Bacon", price: 5.00},
    {codigo: 4, especificação:"Torrada simples", price: 2.00},
    {codigo: 5, especificação:"Refrigerante", price: 1.50}

]


let filteredProduto1 = produtos.find(produto => {
    if( produto.codigo === codigo ){
        resultado = produto.price * quantidade
    }})

console.log(`Total: R$ ${resultado.toFixed(2)}`);

