<template>
  <div v-show="show" class="container">
    <div class="content">
      <h2>
        <slot name="header">header part</slot>
      </h2>
      <slot name="body">default body</slot>
      <div>
        <slot name="footer">default footer</slot>
        <button style="float: right" @click="closed">ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    closed() {
      this.$emit('closed')
    },
  },
}
</script>

<style>
.container {
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.content {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
