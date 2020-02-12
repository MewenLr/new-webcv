<template lang='pug'>
  .card
    .card_text
      p(ref='cardText')
</template>

<script>
import TypeWriter from '@/assets/scripts/modules/type-writer'

export default {
  name: 'ACard',
  mixins: [TypeWriter],
  props: {
    paragraph: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
  watch: {
    active (newVal) {
      if (newVal) setTimeout(() => this.typeWriter(this.$refs.cardText, this.paragraph), 1000)
      if (!newVal) this.$refs.cardText.innerHTML = ''
    },
  },
}
</script>

<style lang='sass'>
.card
  width: 0
  height: 0
  margin: 2vh 0 0 0
  position: relative
  border-radius: 5px
  overflow: hidden auto
  transition: all .2s linear
  background: rgba($black, 0)

  &_text
    width: 100%
    height: 100%
    font-family: monospace
    @include mm-vw(font-size, 2, $laptop, $desktop)

    @include laptop
      @include mm-vw(font-size, 1.8, $tablet, $desktop)

    &::after
      top: 0
      left: 0
      content: ''
      z-index: -1
      position: absolute
      border-radius: 5px
      border: 1px solid black
      width: calc(100% - 2px)
      height: calc(100% - 2px)
      transition: all 1s linear
      background: rgba($black, .8)

    p
     padding: 4% 5%

::-webkit-scrollbar
  width: 10px
  position: relative

::-webkit-scrollbar-track
  border-radius: 5px
  background: transparent

::-webkit-scrollbar-thumb
  background: rgba(#ccc, .5)
  border-radius: 15px
  border: 2px solid rgba($black, .8)

::-webkit-scrollbar-thumb:hover
  background: rgba(#ccc, 1)
  border: 2px solid rgba($black, .9)
</style>
