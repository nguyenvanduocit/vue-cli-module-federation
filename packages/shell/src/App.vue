<template>
  <nav :class="$style.nav">
    <router-link to="/">Home</router-link>
    <router-link v-for="navigation in navigations" :key="navigation.path" :to="navigation.path" v-text="navigation.title" />
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue'
import { useNavigation } from '@/hooks/useNavigation.ts'

export default defineComponent({
  name: 'App',
  setup () {
    interface UserLoggedInEvent extends Event {
      detail: {
        username: string,
        password: string
      }
    }

    const onUserLoggedIn = {
      handleEvent ({ detail }: UserLoggedInEvent) {
        console.log(detail) //eslint-disable-line
      }
    }

    window.addEventListener('auth/user-logged-in', onUserLoggedIn)
    onBeforeUnmount(() => {
      window.removeEventListener('auth/user-logged-in', onUserLoggedIn)
    })

    const navigations = useNavigation()
    return {
      appName: 'Demo App',
      navigations
    }
  }
})
</script>

<style lang="stylus" module>
.nav
  display flex
  flex-direction row
  a
    padding 0 10px
</style>
