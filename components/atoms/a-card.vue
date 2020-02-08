<template lang="pug">
  .card
    p.card_text(ref="cardText")
</template>

<script>
import TypeWriter from '@/assets/scripts/modules/type-writer'

export default {
  name: 'ACard',
  mixins: [TypeWriter],
  mounted () {
    this.typeWriter(this.$refs.cardText, 'Hello world my name is mewen i m a front end developper')
  },
}
</script>

<style lang='sass'>
.card
  width: 80%
  height: 30vh
  border-radius: 5px
  background: rgba(0,0,0,0.5)

  &_text
    padding: 15px 20px
    font-family: monospace
    @include mm-vw(font-size, 2, $laptop, $desktop)
</style>
