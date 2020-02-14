<template lang='pug'>
  .tab-head(
    :class="{ 'tab-head--active': tabActive }"
    @click="$emit('clickTab')"
  )
    a-subtitle.tab-head_subtitle(:index="index")
      | {{ name }}
</template>

<script>
import ASubtitle from '@/components/atoms/a-subtitle'
import tabActiveMix from '@/assets/scripts/mixins/tab-active'

export default {
  name: 'ATabHead',
  components: {
    ASubtitle,
  },
  mixins: [tabActiveMix],
  props: {
    name: { type: String, required: true },
    index: { type: Number, required: true },
  },
}
</script>

<style lang='sass'>
.tab-head
  color: #eee
  display: flex
  cursor: pointer
  position: relative
  align-items: center
  transform: scale(0.95)
  justify-content: center
  background-position: center
  transition: transform $duration-m ease-in-out, background $duration-s
  @include mm-vw(font-size, 5, $tablet, $desktop)

  @include laptop
    @include mm-vw(font-size, 4, $tablet, $desktop)

  &::before, &::after
    opacity: 1
    content: '-'
    position: absolute
    pointer-events: none
    transition: all ease-in-out $duration-m

  &::before
    left: -2vw

  &::after
    right: -2vw

  &:hover
    color: $white
    transform: scale(1)

    &::before, &::after
      opacity: 0
      transition: all $duration-s ease-in-out

    &::before
      left: -20%

    &::after
      right: -20%

  &:active
    background-size: 100%
    transition: background 0s
    background-color: rgba($aqua-blue, .5)

  &--active
    color: $white
    transform: scale(1)

    &::before, &::after
      display: none
</style>
