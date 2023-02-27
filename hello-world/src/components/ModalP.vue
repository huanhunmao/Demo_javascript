<template>
  <div>
    <button @click="showModal = true">Click show modal</button>
    <Modal :show="showModal" @closed="handleClosed">
      <template #header>hahahahah</template>
      <template #body>test body</template>
      <template #footer>good test </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    Modal,
  },
  methods: {
    handleClosed() {
      this.showModal = false
    },
  },
}
</script>

<style></style>
