<template lang='pug'>
  .card(:class="{ 'card--active': tabActive }")
    .card_frame
      p.card_frame_text(ref='cardText')
</template>

<script>
import tabActiveMix from '@/assets/scripts/mixins/tab-active'
import typeWriterMix from '@/assets/scripts/mixins/type-writer'

export default {
  name: 'ACard',
  mixins: [typeWriterMix, tabActiveMix],
  props: {
    index: { type: Number, required: true },
    paragraph: { type: String, required: true },
  },
  watch: {
    tabActive (newVal) {
      if (newVal) {
        this.shouldContinue = true
        setTimeout(() => this.typeWriter(this.$refs.cardText, this.paragraph), 1000)
      } else {
        this.shouldContinue = false
        this.$refs.cardText.innerHTML = ''
      }
    },
  },
}
</script>

<style lang='sass'>
.card
  $self: &
  width: 0
  min-height: 0
  margin: 2vh 0 0 0
  position: relative
  overflow: hidden auto
  border-radius: $radius-m
  background: rgba($black, 0)
  transition: all $duration-xs linear

  &_frame
    width: 100%
    height: 100%
    font-family: monospace

    &::after
      top: 0
      left: 0
      content: ''
      z-index: -1
      position: absolute
      width: calc(100% - 2px)
      height: calc(100% - 2px)
      border: $border-s $black
      border-radius: $radius-m
      transition: all 1s linear
      background: rgba($black, .8)

    &_text
      padding: 4% 5%
      @include mm-vw(font-size, 1.9, $laptop, $desktop)

      @include laptop
        @include mm-vw(font-size, 1.8, $tablet, $desktop)

  &--active
    width: 80%
    min-height: 30vh
    background: rgba($black, .5)
    transition: all $duration-m linear $duration-m

    #{ $self }_frame

      &::after
        background: rgba($black, 0)
        border: $border-s transparent
        transition: all $duration-m linear $duration-xl
</style>
