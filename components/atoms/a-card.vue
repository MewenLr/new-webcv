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
    visible: { type: Boolean, required: true },
    paragraph: { type: String, required: true },
  },
  watch: {
    visible (newVal) {
      const self = this
      if (newVal) self.typeWriter(self.$refs.cardText, self.paragraph)
    },
  },
  mounted () {
  },
}
</script>

<style lang='sass'>
.card
  width: 80%
  height: 30vh
  border-radius: 5px
  margin: 2vh 0 2vh 0
  background: rgba(0,0,0,0.5)

  &_text
    padding: 15px 20px
    font-family: monospace
    @include mm-vw(font-size, 2, $laptop, $desktop)
</style>
