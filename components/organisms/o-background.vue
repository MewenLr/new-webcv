<template lang='pug'>
  .background
    s-lines
    s-squares
</template>

<script>
import SLines from '@/components/svg/s-lines'
import SSquares from '@/components/svg/s-squares'

export default {
  name: 'OBackground',
  components: {
    SLines,
    SSquares,
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
  background-color: $regal-blue
</style>
