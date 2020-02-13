<template lang='pug'>
  .content
    .content_head
      h1.content_head_title(v-html="title")
    .content_tabs
      m-tab.content_tabs_tab(
        v-for="(tab, i) in tabs"
        :key="tab.name"
        :tab="tab"
        :index="i"
      )
</template>

<script>
import MTab from '@/components/molecules/m-tab'

export default {
  name: 'OContent',
  components: {
    MTab,
  },
  props: {
    tabs: { type: Array, required: true },
    title: { type: String, required: true },
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
    flex-direction: column
    justify-content: flex-end
    font-family: blanka, roboto

    @include laptop
      height: 45vh

    &_title
      margin: 4vh 0 1vh 0
      @include mm-vw(font-size, 7, $tablet, $desktop)

      @include laptop
        margin: 0 0 2vh 0
        @include mm-vw(font-size, 6, $tablet, $desktop)

      @include widescreen
        @include mm-vw(font-size, 7, $tablet, $desktop)

  &_tabs
    width: 100%
    margin-top: 2vh
</style>
