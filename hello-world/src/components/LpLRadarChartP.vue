<template>
  <div>
    <!-- svg 图形部分 -->
    <svg width="250" height="200">
      <LpLRadarChart :list="list" />
    </svg>

    <!-- 设置 进度条部分 -->
    <div v-for="item in list" :key="item">
      <label style="width: 100px">{{ item.label }}</label>
      <input type="range" v-model="item.value" min="0" max="100" />
      <span>{{ item.value }}</span>
      <button @click="removeItem">x</button>
    </div>

    <!-- 添加 new item 部分 -->
    <form style="margin-top: 20px">
      <input type="text" v-model="newLabel" />
      <button @click="add">Add new item</button>
    </form>

    <!-- 查看数据 部分  -->
    <pre>{{ list }}</pre>
  </div>
</template>

<script>
import LpLRadarChart from './LpLRadarChart.vue'
export default {
  data() {
    return {
      newLabel: '',
      list: [
        { label: '团战输出伤害', value: 100 },
        { label: '对线击杀', value: 100 },
        { label: '分均经济', value: 100 },
        { label: '团战承伤', value: 100 },
        { label: '单带伤害', value: 100 },
        { label: 'KDA', value: 100 },
      ],
    }
  },
  components: {
    LpLRadarChart,
  },
  methods: {
    add(e) {
      e.preventDefault()
      if (!this.newLabel) return
      this.list.push({
        label: this.newLabel,
        value: 100,
      })
      this.newLabel = ''
    },
    removeItem(item) {
      console.log('111')
      if (this.list.length > 3) {
        this.list.splice(this.list.indexOf(item), 1)
      } else {
        alert('Can not delete less than 3 items!')
      }
    },
  },
}
</script>

<style>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}
pre {
  position: absolute;
  top: 0;
  left: 400px;
}
</style>
