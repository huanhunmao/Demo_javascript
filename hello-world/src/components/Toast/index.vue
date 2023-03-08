<!-- src/components/Warning/index.vue -->
<template>
  <transition name="fade">
    <p v-show="isShow" class="msg">{{ msg }}</p>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      msg: 'warning',
      isShow: false,
      duration: 1,
    }
  },
  mounted() {
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, this.duration * 1000)
  },
}
</script>

<style>
.msg {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
