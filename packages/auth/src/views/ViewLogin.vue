<template>
  <p><small>Application: <strong v-text="appName"/></small></p>
  <form action="">
    <label>
      <span>Username:</span>
      <input type="text" v-model="username">
    </label>
    <br>
    <label>
      <span>Password: </span>
      <input type="text" v-model="password">
    </label>
    <br>
    <button type="submit" @click.prevent="login">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ViewLogin',
  props: {
    msg: String,
    appName: {
      type: String,
      default: 'Default App'
    }
  },
  setup () {
    const username = ref('')
    const password = ref('')

    const login = () => {
      const eventDetail = {
        username: username.value,
        password: password.value
      }

      window.dispatchEvent(new CustomEvent('auth/user-logged-in', { detail: eventDetail }))
    }
    return {
      login,
      username,
      password
    }
  }
})
</script>
