<template lang='pug'>
  .scroller
    .scroller_dot(
      v-for="(item, i) in 3"
      :key="i"
      :class="{ 'scroller_dot--active': i === page }"
    )
</template>

<script>
export default {
  name: 'OScroller',
  props: {
    page: { type: Number, required: true },
  },
}
</script>

<style lang='sass'>
.scroller
  left: 0
  bottom: 0
  width: 100vw
  height: 5vh
  display: flex
  position: absolute
  flex-direction: row
  justify-content: center

  @include laptop
    top: 0
    width: 2vw
    height: 100vh
    flex-direction: column

  &_dot
    width: 1.5vh
    height: 1.5vh
    cursor: pointer
    margin-left: 3vw
    border-radius: 100%
    transition: all linear .1s
    border: 2px solid rgba($aqua-blue, .5)

    @include laptop
      margin-left: 1.5vw
      @include mm-vw(width, 1.5, $tablet, $desktop)
      @include mm-vw(height, 1.5, $tablet, $desktop)
      @include mm-vw(margin-top, 2, $tablet, $desktop)

    &:first-child
      margin-top: 0
      margin-left: 0

      @include laptop
        margin-left: 1.5vw

    &:hover
      border: 2px solid rgba($aqua-blue, 1)
      background-color: rgba($aqua-blue, 1)

    &:active
      background-color: rgba($light-blue, .8)
      box-shadow: 0 0 15px rgba($light-blue, .3)

    &--active
      border: 2px solid rgba($aqua-blue, 0)
      background-color: rgba($aqua-blue, .8)
</style>
