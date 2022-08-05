let I= 1
let J = 8
let count = 8

while(I< 10){
    J--
    count--
    console.log(`I=${I} J=${J}`)
    if(count <6){
    I += 2
    J += 5
    count +=3
    }
}