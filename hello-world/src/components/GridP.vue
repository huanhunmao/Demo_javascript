<template>
  <div>
    <form>Search <input v-model="searchQuery" /></form>
    <Grid :columns="gridColumns" :data="gridList" :filter-key="searchQuery" />
  </div>
</template>

<script>
import Grid from './Grid.vue'
export default {
  data() {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridList: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 },
      ],
    }
  },
  components: {
    Grid,
  },
}
</script>

<style></style>
