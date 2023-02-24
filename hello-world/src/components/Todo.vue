<template>
  <div>
    <TodoItemVue
      v-for="item in dataList"
      :key="item.id"
      :todoItem="item.text"
    />
  </div>
</template>

<script>
import TodoItemVue from './TodoItem.vue'
export default {
  data() {
    return {
      dataList: [
        { id: 1, text: 'wbg' },
        { id: 2, text: 'clg' },
        { id: 3, text: 'edg' },
      ],
    }
  },
  components: {
    TodoItemVue,
  },
}
</script>

<style></style>
