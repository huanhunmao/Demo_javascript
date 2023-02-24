<script>
export default {
  data() {
    return {
      inputItem: null,
    }
  },
  mounted() {
    console.log(this.inputItem.focus()) //
  },
}
</script>

<template>
  <input :ref="(el) => (inputItem = el)" />
</template>
