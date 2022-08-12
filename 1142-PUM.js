var input = require('fs').readFileSync('./stdin','utf8');
const linhas = parseInt(input)

let resultado = ''
for( i = 1 ; i <= linhas * 4; i++){
    if (i % 4 == 0) {
        console.log(resultado + "PUM");
        resultado = ''

}

else {                
        resultado += i + " "
}
}
