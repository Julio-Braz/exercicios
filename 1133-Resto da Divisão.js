var input = require('fs').readFileSync('./stdin','utf8');
const [X,Y] = input.split('\n').map(Number)


if( X < Y){
    for(i= X+1; i <Y;i++){
        if (i % 5 == 2 ||i % 5 == 3){
            console.log(i)
    }
    
}
}else{
    for(i= Y+1; i <X; i++){
    if (i % 5 == 2 ||i % 5 == 3){
        console.log(i)
    }

}
}