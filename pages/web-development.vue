<template lang='pug'>
  .web-development
    o-background
    o-illustration.web-development_illustration
      template
        img(src='@/static/images/svg/computer.svg' alt='illustration computer hovering')
    o-content.web-development_content(
      :tabs="tabs"
      :title="title"
    )
</template>

<script>
import OContent from '@/components/organisms/o-content'
import OBackground from '@/components/organisms/o-background'
import OIllustration from '@/components/organisms/o-illustration'
import dataset from '@/assets/data/datasets/web-development.dataset'
// import hightlightLetter from '@/assets/data/mixins/highlight-letter'

export default {
  name: 'WebDevelopment',
  components: {
    OContent,
    OBackground,
    OIllustration,
  },
  // mixins: [dataset, hightlightLetter],
  mixins: [dataset],
}
</script>

<style lang='sass'>
.web-development
  width: 100vw
  height: 100vh
  color: $white
  display: flex
  position: relative
  flex-direction: column

  @include laptop
    flex-direction: row
</style>
