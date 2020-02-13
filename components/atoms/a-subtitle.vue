<template lang='pug'>
  h2.subtitle(:class=`{
    'subtitle--active': tabActive,
    'subtitle--disactive': !tabActive,
  }`)
    slot
</template>

<script>
import tabActiveMix from '@/assets/scripts/mixins/tab-active'

export default {
  name: 'ASubtitle',
  mixins: [tabActiveMix],
  props: {
    index: { type: Number, required: true },
  },
}
</script>

<style lang='sass'>
.subtitle
  padding: 1vh 2vh
  position: relative
  border: $border-m transparent
  transition: all $duration-m ease-in-out
  @include mm-vw(font-size, 5, $tablet, $desktop)

  @include laptop
    @include mm-vw(font-size, 4, $tablet, $desktop)

  &::before, &::after
    width: 0
    height: 0
    content: ''
    position: absolute
    background: transparent
    border: $border-m transparent

  &::before
    top: -2px
    left: -2px

  &::after
    right: -2px
    bottom: -2px

  &--active

    &::before, &::after
      width: 100%
      height: 100%

    &::before
      border-top: $border-m $aqua-blue
      border-right: $border-m $aqua-blue

    &::after
      border-left: $border-m $aqua-blue
      border-bottom: $border-m $aqua-blue

  &--disactive

    &:hover
      border: $border-m $aqua-blue
      transition: border 1.5s ease-in-out

      &::before
        animation: border-top-right $duration-m linear forwards

      &::after
        animation: border-bottom-left $duration-m linear forwards
</style>
