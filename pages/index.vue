<template lang='pug'>
  .home
    o-background
    o-scroller(:page="0")
    nuxt-child
</template>

<script>
import OScroller from '@/components/organisms/o-scroller'
import OBackground from '@/components/organisms/o-background'

export default {
  name: 'Home',
  components: {
    OScroller,
    OBackground,
  },
}
</script>

<style lang='sass'>
.home
  width: 100vw
  height: 100vh
  color: $white
  overflow: hidden
  position: relative
</style>
