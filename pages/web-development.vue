<template lang='pug'>
  .web-development
    o-background
    o-scroller(:page="0")
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
import OScroller from '@/components/organisms/o-scroller'
import OBackground from '@/components/organisms/o-background'
import OIllustration from '@/components/organisms/o-illustration'
import dataset from '@/assets/data/datasets/web-development.dataset'
import highlightLetterMix from '@/assets/scripts/mixins/highlight-letter'

export default {
  name: 'WebDevelopment',
  components: {
    OContent,
    OScroller,
    OBackground,
    OIllustration,
  },
  mixins: [dataset, highlightLetterMix],
  // mixins: [dataset],
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
