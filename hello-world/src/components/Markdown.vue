<template>
  <div>
    <textarea v-model="input" @input="update"></textarea>
    <hr />
    <div v-html="output"></div>
  </div>
</template>

<script>
import { marked } from 'marked'
export default {
  data() {
    return {
      input: '',
    }
  },
  computed: {
    output() {
      return marked(this.input)
    },
  },
}
</script>

<style></style>
