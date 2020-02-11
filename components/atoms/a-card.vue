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
    typeWriterOn: { type: Boolean, required: true },
  },
  watch: {
    typeWriterOn (newVal) {
      if (newVal) setTimeout(() => this.typeWriter(this.$refs.cardText, this.paragraph), 1000)
      if (!newVal) this.$refs.cardText.innerHTML = ''
    },
  },
}
</script>

<style lang='sass'>
.card
  width: 80%
  // height: 30vh

  height: 0
  margin: 0
  visibility: hidden

  border-radius: 5px
  // margin: 2vh 0
  background: rgba($black,0)
  animation: card-out .5s linear forwards

  &_text
    padding: 15px 20px
    font-family: monospace
    @include mm-vw(font-size, 2, $laptop, $desktop)

@keyframes card-out
  0%
  100%
    height: 0
    margin: 0
    visibility: hidden
    background: rgba($black,0)
</style>
