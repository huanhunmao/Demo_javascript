<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
</template>

<script>
import { useMouse } from '../utils/useMouseMove'
export default {
  data() {
    return {
      x: 0,
      y: 0,
    }
  },
  created() {
    const { x, y } = useMouse()
    this.x = x
    this.y = y
  },
}
</script>
