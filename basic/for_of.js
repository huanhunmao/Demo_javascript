// for of 遍历数组 
const arr = [3,4,5]

// for(let i of arr) {
//     console.log(i)  // 3 4 5 
// }

// obj
const obj = {a:1,b:2,c:3}

// for(let i of obj) {
//     console.log(i); // for_of.js:11 Uncaught TypeError: obj is not iterable
// }

for(let i of Object.entries(obj)){
    console.log(i); //  ['a', 1]  ['b', 2]   ['c', 3]
}