<template>
  <div class="hello">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
// script 下 可直接写 js 逻辑
// // 箭头函数内 this 指向 Person
// function Person() {
//   this.age = 0
//   setInterval(() => {
//     console.log('this', this) // Person
//     this.age++
//     console.log('this.age', this.age) // 1,2,3...
//   }, 1000)
// }
// new Person()

// // 修复这个问题
// function Person() {
//   // Some choose `that` instead of `self`.
//   // Choose one and be consistent.
//   const self = this
//   self.age = 0

//   setInterval(function growUp() {
//     // The callback refers to the `self` variable of which
//     // the value is the expected object.
//     self.age++
//     console.log(self.age) // 1 2 3 ....
//   }, 1000)
// }

// new Person()

// add properties to object
// const obj = {}

// obj.x = 6
// console.log(obj.x) // 6
// console.log(obj) // {x  : 6}

// obj['y'] = 9
// console.log(obj['y'])
// console.log(obj) // {x: 6, y: 9} )

// destructuring
// const foo = ['ppx','foo','clg']

// // without destructuring
// const first = foo[0]
// const second  = foo[1]
// const next = foo[2]

// // with destructuring
// const [first, second, next] = foo

// nesting
// function f() {
//   console.log('F!')
//   return 2
// }
// function g() {
//   console.log('G!')
//   return 3
// }
// let x, y

// y = x = f()
// y = [f(), (x = g())]

// console.log('y', y) // [2,3]
// console.log('x', x) // 3

// console.log(1 && 2) // 2
// console.log(1 || 2) // 1
// console.log(!1) // false
// console.log(!!1) // true

// console.log(1 & 2) // 0
// console.log(1 | 2) // 3

// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const a = [x, x, x, x, x]

// for (let i = 0, j = 9; i <= j; i++, j--) {
//   //                              ^
//   console.log(`a[${i}][${j}]= ${a[i][j]}`)
// }

// // typeof
// console.log(typeof function () {})
// console.log(typeof 1)
// console.log(typeof '1')
// console.log(typeof false)
// console.log(typeof undefined)
// console.log(typeof null) // object
// console.log(typeof [1, 2]) // object
// console.log(typeof { a: 1 }) // object

// // instanceof
// console.log([111] instanceof Array) // true
// console.log({ a: 1 } instanceof Object) // true
// console.log(null instanceof Object) // false
// console.log(1 instanceof Object) // false

// in
// const arr = [1, 2, 3]
// console.log(1 in arr) // true
// console.log('1' in arr) // true
// console.log(3 in arr) // false indexNumber  0  1 2

// const arr1 = ['ppx', 'text', 'xiaoWang']
// console.log('ppx' in arr1) //  false
// console.log('text' in arr1) // false

// const obj = { a: 1, b: 2 }
// console.log('a' in obj) // true
// console.log('b' in obj) // true

// Date
// const Xmas95 = new Date('December 25, 1995')
// console.log('Xmas95', Xmas95) //  Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)'

export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
