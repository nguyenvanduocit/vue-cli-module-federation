<template>
  <div class="home">
   Loading module
    <router-link to="/auth">Auth</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userListEnabledModule } from '@/api'

export default defineComponent({
  name: 'AppBootstrap',
  setup () {
    const enabledModules = userListEnabledModule()
    return {
      enabledModules
    }
  }
})
</script>
