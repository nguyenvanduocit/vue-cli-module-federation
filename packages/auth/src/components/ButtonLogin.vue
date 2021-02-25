<template>
  <button @click.prevent="increase">Login button {{ count }}</button>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ButtonLogin',
  setup () {
    const count = ref(1)
    const increase = () => {
      count.value++
    }
    return {
      increase,
      count
    }
  }
})

</script>

<style lang="stylus" module>

</style>
