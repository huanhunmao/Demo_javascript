<template>
  <div>
    <input
      type="text"
      autofocus
      v-model="input"
      placeholder="What needs to be done?"
      @change="handleChange"
    />
    <button @click="addTodo">click add to list</button>
    <ul>
      <li v-for="todo in list" :key="todo.id">
        <div>
          <input type="checkbox" v-model="todo.completed" @change="toggleAll" />
          <label :class="{ delete: todo.completed }">{{ todo.title }}</label>
          <button @click="remove(todo.id)">remove items</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      list: [],
      ifDelete: false,
    }
  },
  methods: {
    handleChange(e) {
      this.input = e.target.value.trim()
    },
    addTodo() {
      if (!this.input) return
      this.list.push({
        id: new Date(),
        title: this.input,
        completed: false,
      })

      this.input = ''
    },
    toggleAll(e) {
      this.list.completed = e.target.checked
    },
    remove(id) {
      this.list = this.list.filter((item) => item.id !== id)
    },
  },
}
</script>

<style>
.delete {
  text-decoration: line-through;
}
</style>
