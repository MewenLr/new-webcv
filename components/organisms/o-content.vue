<template lang="pug">
  .content
    h1.content_title {{ title }}
    .content_tabs
      h2.content_tabs_tab(
        v-for="(tab, i) in tabs"
        :key="i"
      ) {{ tab.name }}
</template>

<script>
export default {
  name: 'OContent',
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
  height: 75vh
  width: 100vw
  display: flex
  align-items: center
  flex-direction: column

  @include laptop
    width: 50vw
    height: auto

  &_title
    margin: 5vh 0 3vh 0
    font-family: Blanka
    @include mm-vw(font-size, 5, $tablet, $desktop)

    @include laptop
      margin: 37vh 0 5vh 0

    @include widescreen
      @include mm-vw(font-size, 7, $tablet, $desktop)

  &_tabs
    text-align: center

    &_tab
      margin-bottom: 2vh
</style>
