var input = require('fs').readFileSync('./stdin','utf8');

var valores = input.split("\n")

var tipo1 = valores.shift().trim();
var tipo2 = valores.shift().trim();
var tipo3 = valores.shift();




if(tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "carnivoro"){
    console.log('aguia')
} if(tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "onivoro"){
    console.log('pomba')
} if(tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "onivoro"){
    console.log('homem')
} if(tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "herbivoro"){
    console.log('vaca')
} if(tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "hematofago"){
    console.log('pulga')
} if(tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "herbivoro"){
    console.log('lagarta')
} if(tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "hematofago"){
    console.log('sanguessuga')
} if(tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "onivoro"){
    console.log('minhoca')
}





// else{ 
//     if (tipo2 == 'inseto'){
//         if(tipo3 == 'hematofago'){
//             console.log('pulga')
//         }else {console.log('lagarta')
// }
// }else{
//         if(tipo3 == 'hematofago'){
//              console.log('sanguessuga')
// }else {
//     console.log('lagarta')
// }
// }    
// }