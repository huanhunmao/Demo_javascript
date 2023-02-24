<template>
  <li>
    <!-- 标题 + -  -->
    <div :class="{ bold: isFolder }" @click="toggle">
      {{ model.name }}
      <span v-if="isFolder">{{ isOpen ? '[-]' : '[+]' }}</span>
    </div>

    <!-- 这部分是 循环 渲染出 树形结构  -->
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem v-for="model in model.children" :key="model" :model="model" />
      <!-- 新增 数据  -->
      <li @click="addChildren">+</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    model: Object,
  },
  computed: {
    // 是不是个目录 只需要判断有没有 children 即可 即  !! children.length === true
    isFolder() {
      return this.model.children && this.model.children.length
    },
  },
  methods: {
    toggle() {
      // 控制 是否 折叠
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    // 新增节点
    addChildren() {
      this.model.children.push({ name: 'new stuff' })
      console.log('model', this.model.children)
    },
  },
}
</script>

<style>
.bold {
  font-weight: 900;
  color: red;
}
</style>
