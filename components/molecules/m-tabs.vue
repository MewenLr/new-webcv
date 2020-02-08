<template lang="pug">
  .tabs
    .tabs_tab(v-for="(tab, i) in tabs" :key="i")
      h2.tabs_tab_title {{ tab.name }}
      a-card.tabs_tab_card
</template>

<script>
import ACard from '@/components/atoms/a-card'

export default {
  name: 'MTabs',
  components: {
    ACard,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang='sass'>
.tabs
  width: 100%

  &_tab
    display: flex
    align-items: center
    flex-direction: column

    &_title
      margin: 3vh 0 2vh 0
      @include mm-vw(font-size, 5, $tablet, $desktop)

      @include laptop
        @include mm-vw(font-size, 4, $tablet, $desktop)
</style>
