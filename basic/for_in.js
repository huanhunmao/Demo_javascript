// for in 遍历 Object 
const obj = {
    a:1,
    b:2,
    c:3
}

// for(let i in obj){
//     console.log(i) // 1 2 3 
// }

// console.log(Object.keys(obj)); // ['a', 'b', 'c']
// console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); //['a',1] ...

// 尝试遍历 数组
// const arr = [1,2,3]

// for(let i in arr){
//     console.log(i) // 0 1 2  遍历的是 index 
// }