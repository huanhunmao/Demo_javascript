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
          <input
            type="checkbox"
            v-model="todo.completed"
            @checked="ifChanged"
          />
          <label :class="{ delete: ifDelete }">{{ todo.title }}</label>
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
    ifChanged(e) {
      console.log(1)
      console.log(e)
    },
  },
}
</script>

<style>
.delete {
  text-decoration: line-through;
}
</style>
