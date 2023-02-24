<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th
          v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }"
          :key="key"
        >
          {{ capitalize(key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData" :key="entry">
        <td v-for="key in columns" :key="key">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>

<script>
export default {
  data() {
    return {
      sortKey: '',
      sortOrders: this.columns.reduce((o, key) => ((o[key] = 1), o), {}),
    }
  },
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
  },
  computed: {
    filteredData() {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let data = this.data

      // input 输入内容时触发
      if (filterKey) {
        data = data.filter((row) => {
          // row 拿到 数组内 每个对象
          return Object.keys(row).some((key) => {
            // key 拿到对象的键
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1 // 值 是否和上面输入的 匹配
          })
        })
      }

      // 如果点击 排序时 触发
      if (sortKey) {
        // console.log('data', data) // [{},{},{},{}]
        data = data.slice().sort((a, b) => {
          a = a[sortKey] // 拿到 对象的值
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    },
  },
  methods: {
    sortBy(key) {
      this.sortKey = key
      console.log(' this.sortOrders[key]', this.sortOrders[key]) //  1
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
}
</script>

<style></style>
