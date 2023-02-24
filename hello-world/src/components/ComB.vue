<template>
  <div>
    <p>Current component is B</p>
    <div>
      <span>Message is:{{ value }}</span>
      <input type="text" v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style></style>
