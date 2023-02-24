<template>
  <div>
    <p>Current component is: A</p>
    <span>count:{{ count }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      this.count++
    },
  },
}
</script>

<style></style>
