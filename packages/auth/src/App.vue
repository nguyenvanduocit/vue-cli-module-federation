<template>
  <HelloWorld app-name="Standalone"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './views/ViewLogin.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>
