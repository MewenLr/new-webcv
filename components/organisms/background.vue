<template lang='pug'>
  .background
    .background_lines
    img.background_squares(src='@/static/images/svg/squares.svg' alt='technology design')
</template>

<script>
export default {
  name: 'Background',
  components: {
  },
  data () {
    return {
    }
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

  &_lines, &_squares
    top: 0
    left: 0
    width: 100vw
    position: absolute

  &_lines
    height: 90%
    z-index: -3
    background-size: 105% 100%
    background-repeat: no-repeat
    background-image: url('~static/images/svg/lines-center.svg')

    @include laptop
      background-image: url('~static/images/svg/lines-right.svg')

  &_squares
    z-index: -3
    height: 100%
    object-fit: cover
</style>
