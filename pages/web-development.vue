<template lang='pug'>
  .web-development
    o-background
    o-illustration.web-development_illustration
      template
        img(src='@/static/images/svg/computer.svg' alt='illustration computer hovering')
    o-content.web-development_content(
      :tabs="tabs"
      :title="'Web Development'"
    )
</template>

<script>
import OContent from '@/components/organisms/o-content'
import OBackground from '@/components/organisms/o-background'
import OIllustration from '@/components/organisms/o-illustration'
import Dataset from '@/assets/data/datasets/web-development.dataset'

export default {
  name: 'WebDevelopment',
  components: {
    OContent,
    OBackground,
    OIllustration,
  },
  mixins: [Dataset],
}
</script>

<style lang='sass'>
.web-development
  width: 100vw
  height: 100vh
  color: $white
  display: flex
  overflow: hidden
  position: relative
  flex-direction: column

  @include laptop
    flex-direction: row
</style>
