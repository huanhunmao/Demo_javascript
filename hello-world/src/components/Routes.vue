<template>
  <div>
    <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/not-found">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>

<script>
import CompA from './RoutesTest/CompA.vue'
import CompB from './RoutesTest/CompB.vue'
import CompC from './RoutesTest/CompC.vue'

const routes = {
  '/': CompA,
  '/about': CompB,
  '/not-found': CompC,
}
export default {
  data() {
    return {
      currentPath: window.location.hash,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    },
  },
  components: {
    CompA,
    CompB,
    CompC,
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
}
</script>

<style></style>
