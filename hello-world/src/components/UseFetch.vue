<script>
import { useFetch } from '../utils/fetch'
export default {
  data() {
    return {
      data: {},
      error: {},
    }
  },
  async created() {
    const { data, error } = await useFetch('xxxx')
    this.data = data
    this.error = error
  },
}
</script>

<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
</template>
