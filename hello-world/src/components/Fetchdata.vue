<template>
  <div>
    <h1>get Vue commit</h1>
    <div v-for="branch in branches" :key="branch">
      <input type="radio" v-model="currentBranch" :value="branch" />
      <label :for="branch">{{ branch }}</label>
    </div>

    <div>{{ commits }}</div>
  </div>
</template>

<script>
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default {
  data() {
    return {
      currentBranch: 'main',
      branches: ['main', 'v2-comp'],
      commits: '',
    }
  },
  watch: {
    // 当 currentBranch 改变时重新获取
    currentBranch: 'fetchData',
  },
  created() {
    // 在初始化的时候进行获取
    this.fetchData()
  },
  computed: {},
  methods: {
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}}`
      this.commits = await (await fetch(url)).json()
    },
  },
}
</script>

<style></style>
