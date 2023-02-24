<template>
  <text :x="point.x" :y="point.y">{{ list.label }}</text>
</template>

<script>
import { valueToPoint } from '../utils/valueToPoint.js'
export default {
  props: {
    list: Object,
    index: Number,
    total: Number,
  },
  computed: {
    point: function () {
      return valueToPoint(+this.list.value + 10, this.index, this.total)
    },
  },
}
</script>

<style></style>
