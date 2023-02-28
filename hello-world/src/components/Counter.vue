<template>
  <div>
    Progress:<progress :value="elapsed / duration"></progress>
    <p>{{ (elapsed / 1000).toFixed(1) }}s</p>
    <input type="range" v-model="duration" min="1" max="30000" />
    {{ (duration / 1000).toFixed(1) }}s
    <button @click="el = 0">reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 15 * 1000, // 初始值
      elapsed: 0,
    }
  },
  created() {
    let lastTime = performance.now()
    const update = () => {
      const time = performance.now()
      this.elapsed += Math.min(time - lastTime, this.duration - this.elapsed)
      lastTime = time
      // 运动效果
      this.handle = requestAnimationFrame(update)
    }
    update()
  },
  unmounted() {
    cancelAnimationFrame(this.handle)
  },
}
</script>

<style></style>
