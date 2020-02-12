<template lang='pug'>
  h2.subtitle(:class=`{
    'subtitle--active': active,
    'subtitle--disactive': !active,
    }`)
    | {{ name }}
</template>

<script>
export default {
  name: 'ASubtitle',
  props: {
    name: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
}
</script>

<style lang='sass'>
.subtitle
  padding: 1vh 2vh
  position: relative
  border: 2px solid transparent
  transition: all .5s ease-in-out
  @include mm-vw(font-size, 5, $tablet, $desktop)

  @include laptop
    @include mm-vw(font-size, 4, $tablet, $desktop)

  &::before, &::after
    width: 0
    height: 0
    content: ''
    position: absolute
    background: transparent
    border: 2px solid transparent

  &::before
    top: -2px
    left: -2px

  &::after
    bottom: -2px
    right: -2px

  &--disactive

    &:hover
      border: 2px solid $aqua-blue
      transition: border 1.5s ease-in-out

      &::before
        animation: border-top-right .5s linear forwards

      &::after
        animation: border-bottom-left .5s linear forwards

  &--active

    &::before, &::after
      width: 100%
      height: 100%

    &::before
      border-top: 2px solid $aqua-blue
      border-right: 2px solid $aqua-blue

    &::after
      border-bottom: 2px solid $aqua-blue
      border-left: 2px solid $aqua-blue
</style>
