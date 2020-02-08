<template lang="pug">
  .content
    .content_head
      h1.content_head_title {{ title }}
    m-tabs.content_tabs(:tabs="tabs")
</template>

<script>
import MTabs from '@/components/molecules/m-tabs'

export default {
  name: 'OContent',
  components: {
    MTabs,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang='sass'>
.content
  height: 65vh
  width: 100vw
  display: flex
  align-items: center
  flex-direction: column

  @include laptop
    width: 50vw
    height: auto

  &_head
    display: flex
    text-align: center
    font-family: Blanka, roboto
    flex-direction: column
    justify-content: flex-end

    @include laptop
      height: 45vh

    &_title
      margin-top: 4vh
      @include mm-vw(font-size, 7, $tablet, $desktop)

      @include tablet
        margin-top: 5vh

      @include widescreen
        margin-bottom: 2vh
</style>
