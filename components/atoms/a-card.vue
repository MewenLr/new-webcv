<template lang='pug'>
  .card
    p.card_text(ref='cardText')
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
  height: 0
  margin: 2vh 0 0 0
  width: 0
  position: relative
  // width: 80%
  // visibility: hidden
  overflow: hidden auto
  border-radius: 5px
  background: rgba($black, 0)
  // border: 1px solid rgba($black, 0)

  &::after
    top: 0
    left: 0
    width: 100%
    height: 100%
    content: ' '
    z-index: -1
    position: absolute
    background-color: rgba($black, 0.8)
    border: 1px solid rgba($black, 0.8)
    transition: all .5s linear .5s

  &_text
    padding: 15px 20px
    font-family: monospace
    @include mm-vw(font-size, 2, $laptop, $desktop)

::-webkit-scrollbar
  width: 10px
  position: relative

::-webkit-scrollbar-track
  border-radius: 5px
  background: transparent

::-webkit-scrollbar-thumb
  background: rgba(#ccc, 0.5)
  border-radius: 15px
  border: 2px solid rgba($black, 0.7)

::-webkit-scrollbar-thumb:hover
  background: rgba(#ccc, 1)
  border: 2px solid rgba($black, 1)
</style>
