<template>
  <g>
    <!-- 生成多边形 -->
    <polygon :points="points"></polygon>
    <!-- 生成一个圆 -->
    <circle cx="100" cy="100" r="80"></circle>
    <!-- 显示圆上的文字  -->
    <LpLRadarChartSVue
      v-for="(item, index) in list"
      :key="item"
      :list="item"
      :index="index"
      :total="list.length"
    />
  </g>
</template>

<script>
import LpLRadarChartSVue from './LpLRadarChartText.vue'
import { valueToPoint } from '../utils/valueToPoint'

export default {
  props: {
    list: Object,
  },
  components: {
    LpLRadarChartSVue,
  },
  computed: {
    // 多边形顶点计算 的 计算属性
    points() {
      const total = this.list.length
      return this.list
        .map((item, i) => {
          const { x, y } = valueToPoint(item.value, i, total)
          return `${x} ${y}`
        })
        .join(' ') // ['ppx','clg'].join(' ') --> 'ppx clg'
    },
  },
}
</script>

<style></style>
