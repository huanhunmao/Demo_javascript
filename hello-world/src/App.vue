<template>
  <div id="app">
    <Markdown />
    <!-- <Watch msg="Vue.js" /> -->
    <!-- <Template ref="template" /> -->
    <!-- <Slot>从父组件传递的内容 </Slot> -->
    <!-- <label> <input type="radio" v-model="current" value="ComA" />A</label>
    <label><input type="radio" v-model="current" value="ComB" />B </label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
    <Todo />
    <Fetchdata />-->
    <!-- <GridP /> -->
    <!-- <TreeItemP /> -->
    <LpLRadarChartP />
  </div>
</template>

<script>
// async await  promise
// 接口请求 / 等待数据 响应
// try  catch
// const getValue = async () => {
//     try{
//         // 正常接口请求
//         const res = await getValueFromApi();
//         // res = '123' [1,2,3] ul li  [{}, {}]

//     }catch(err){
//         if(err.code === 404){
//             Alert({
//                 message:'Your network is not good ',
//                 // ....
//             })
//         }
//         console.error(err)
//     }
// }

// 纯函数  输入相同 输出相同 fn(3) ->4 fn(3) -> 4
// function pureFunc(x) {
//   return x + 1
// }
// console.log(pureFunc(3)) // 4
// console.log(pureFunc(3)) // 4
// console.log(pureFunc(3)) // 4

// 非纯函数
// let val = 0
// function notPureFunc(x) {
//   val += 1
//   return x + val
// }
// console.log(notPureFunc(3)) // 4
// console.log(notPureFunc(3)) // 5
// console.log(notPureFunc(3)) // 6

// import Watch from './components/Watch.vue'
// import Template from './components/Template.vue'
// import Slot from './components/Slot.vue'
// import ComA from './components/ComA.vue'
// import ComB from './components/ComB.vue'
// import Markdown from './components/Markdown.vue'
// import Todo from './components/Todo.vue'
// import Fetchdata from './components/Fetchdata.vue'
// import GridP from './components/GridP.vue'
// import TreeItemP from './components/TreeItemP.vue'
import LpLRadarChartP from './components/LpLRadarChartP.vue'

export default {
  name: 'App',
  components: {
    // Watch,
    // Template,
    // Slot,
    // ComA,
    // ComB,
    // Todo,
    // Markdown,
    // Fetchdata,
    // GridP,
    // TreeItemP,
    LpLRadarChartP,
  },
  data() {
    return {
      current: 'ComA',
    }
  },
  created() {
    // this.getValue()
  },
  mounted() {
    // console.log('this.$ref.template', this.$refs.template) // 是 <Template /> 组件的实例
  },
}
</script>

<style></style>
