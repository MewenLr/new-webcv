<template lang='pug'>
  .background
    s-lines
    s-squares
    s-squares-static
</template>

<script>
import SLines from '@/components/svg/s-lines'
import SSquares from '@/components/svg/s-squares'
import SSquaresStatic from '@/components/svg/s-squares-static'

export default {
  name: 'OBackground',
  components: {
    SLines,
    SSquares,
    SSquaresStatic,
  },
}
</script>

<style lang='sass'>
.background
  top: 0
  left: 0
  position: absolute
</style>
