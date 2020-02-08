<template lang='pug'>
  .illustration
    slot.illustration_img
</template>

<script>
import OContent from '@/components/organisms/o-content'
import OBackground from '@/components/organisms/o-background'
import Dataset from '@/assets/data/datasets/web-development.dataset'

export default {
  name: 'WebDevelopment',
  components: {
    OContent,
    OBackground,
  },
  mixins: [Dataset],
}
</script>

<style lang='sass'>
.illustration
  width: 100vw
  height: 35vh
  display: flex
  align-items: center
  justify-content: center

  @include laptop
    width: 50vw
    height: auto

  img
    height: 90%

    @include tablet
      height: 100%

    @include laptop
      width: 100%
      height: auto
      max-width: 750px
</style>
