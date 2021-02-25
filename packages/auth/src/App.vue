<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    Mỗi module có thể chạy standalone.
  </p>
  <p>
    Trong quá trình development, developer có thể vào trang này, code trên chính module này mà thôi, nó không load bất kỳ module nào khác. Nhờ vậy có thể test, cũng như tạo ra tính độc lập tuyệt đối cho từng module.
  </p>
  <p>
    Dưới đây là button login
  </p>
  <p>
    <ButtonLogin/>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonLogin from './components/ButtonLogin.vue'

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
