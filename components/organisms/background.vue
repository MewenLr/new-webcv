<template lang='pug'>
  .background
    img.background_lines(src='@/static/images/svg/lines.svg')
    //- img.background_squares(src='@/static/images/svg/squares.svg')
    squares
</template>

<script>
import Squares from '@/components/molecules/squares'

export default {
  name: 'Background',
  components: {
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

  &_lines
    top: 0
    left: 0
    width: 133vw
    height: 100vh
    position: absolute
</style>
