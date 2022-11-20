let I= 0
let J= 0
let count = 0

while( I < 2 ){
    J++
    count++
    if (I == 0 || I == 1 || I >= 1.9) {
        console.log(`I=${Math.round(I)} J=${Math.round(J)}`)

  }else{
        console.log(`I=${I.toFixed(1)} J=${J.toFixed(1)}`)

  }
    if(count>= 3){
        I += 0.2
        J -= 2.8
        count -= 3
 }
}