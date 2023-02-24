// 1 scope function
// const num1 = 20
// const num2 = 30 
// const name = 'Jack'

// function multiply(){
//     return num1 * num2
// }

// function getScore(){
//     const num1 = 1
//     const num2 = 6

//     return `${name} get score ${num1 + num2}`
// }

// console.log(
//     multiply() // 600
// );
// console.log(
//     getScore() // Jack get score 7
// );


// 2 not  recursive function  不是 递归 
// let x = 0 
// while (x < 10){
//     x ++ 
// }
// console.log(x) // 10

//  recursive function 
// function loop(x) {
//     // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//     if (x >= 10) {
//       return ;
//     }
//     console.log(x);
//     // do stuff
//     loop(x+1); // the recursive call
//  }

// loop(0)

// 3 closures
// function outside(x){
//     function inside(y){
//         return x + y 
//     }

//     return inside
// }

// const fnInside = outside(2)
// console.log('fnInside',fnInside); //  func inside
// const res1 = fnInside(3)
// const res2 = fnInside(5)
// console.log('res1',res1); // 2 + 3 = 5 
// console.log('res2',res2); // 2 + 5 = 7

// // 还可这样用 
// const res3 = outside(7)(9)
// console.log('res3',res3); // 7 + 9 = 16

// 4 arguments object

function myConcat(val){
    let result = ''

    for(let i = 0; i < arguments.length; i){
        result += arguments[i] + val
    }
    
    return result
}


const  res = myConcat(',','ppx','xiaowang','zhangshifu')
console.log('res',res);





