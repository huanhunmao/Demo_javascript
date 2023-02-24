<template>
  <!-- 数据传递给子组件  -->
  <TreeItem :model="treeData" />
</template>

<script>
import TreeItem from './TreeItem.vue'
// 树形结构 数据来源
const treeData = {
  name: 'My demo tree',
  children: [
    { name: 'hello world' },
    { name: 'ppx' },
    {
      name: 'next children',
      children: [
        {
          name: 'children folder',
          children: [
            {
              name: 'hello',
            },
            { name: 'hi' },
          ],
        },
      ],
    },
  ],
}
export default {
  data() {
    return {
      treeData,
    }
  },
  components: {
    TreeItem,
  },
}
</script>

<style></style>
