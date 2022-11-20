var input = require('fs').readFileSync('./stdin','utf8');

var salario = parseFloat(input)


if(salario <= 400.00){
    let reajuste = (salario/100)* 15
    let novoSalario = salario + reajuste
console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 15 %`)

}else if(salario > 400.00 && salario <= 800.00 ){
    let reajuste = (salario/100)* 12
    let novoSalario = salario + reajuste
console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 12 %`)

}else if(salario > 800.00 && salario <= 1200.00 ){
        let reajuste = (salario/100)* 10
        let novoSalario = salario + reajuste
    console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 10 %`)

}else if(salario > 1200.00 && salario <= 2000.00 ){
    let reajuste = (salario/100)* 7
    let novoSalario = salario + reajuste
console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 7 %`)

}else if(salario > 2000.00 ){
    let reajuste = (salario/100)* 4
    let novoSalario = salario + reajuste
console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 4 %`)

}