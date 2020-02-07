<template lang='pug'>
  .background
    lines
    squares
</template>

<script>
import Lines from '@/components/svg/lines'
import Squares from '@/components/svg/squares'

export default {
  name: 'Background',
  components: {
    Lines,
    Squares,
  },
}
</script>

<style lang='sass'>
.background
  top: 0
  left: 0
  z-index: -5
  width: 100vw
  height: 100vh
  position: absolute
  background-color: #003f5c
</style>
