<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    Trong build-time, package này không hề biết đến các package khác.
  </p>
  <p>
    Trong run-time, nó sẽ đi tìm asset của các component khác
  </p>
  <p>
    Button dưới đây được lấy từ auth. Hot reload không hoạt động bởi vì module này không quản lý button.
  </p>
  <ButtonLogin/>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
const ButtonLogin = defineAsyncComponent(() => import('auth/ButtonLogin'))
export default defineComponent({
  name: 'App',
  components: {
    ButtonLogin
  }
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
