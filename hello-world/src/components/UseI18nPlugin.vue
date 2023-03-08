<template>
  <h1>{{ $translate('greetings.hello') }}</h1>
</template>

<script>
import i18nPluginVue from './i18nPlugin.vue'
export default {
  created() {
    app.use(i18nPluginVue, {
      greetings: {
        hello: 'Display-hahaha',
      },
    })
  },
}
</script>

<style></style>
