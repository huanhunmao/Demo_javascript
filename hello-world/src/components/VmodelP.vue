<script>
import CustomInput from './Vmodel.vue'

export default {
  components: { CustomInput },
  data() {
    return {
      message: 'hello',
    }
  },
}
</script>

<template>
  <div><CustomInput v-model="message" /> {{ message }}</div>
</template>
