<template lang='pug'>
  .web-development
    nuxt-link(to="/devops?page=2" style="color: white") Devops
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
import OIllustration from '@/components/organisms/o-illustration'
import dataset from '@/assets/data/datasets/web-development.dataset'
import highlightLetterMix from '@/assets/scripts/mixins/highlight-letter'
import slideLeftRight from '@/assets/scripts/transitions/slide-left-right'

export default {
  name: 'WebDevelopment',
  components: {
    OContent,
    OIllustration,
  },
  mixins: [dataset, highlightLetterMix],
  transition: slideLeftRight,
}
</script>

<style lang='sass'>
.web-development
  width: 100vw
  height: 100vh
  display: flex
  position: relative
  flex-direction: column

  @include laptop
    flex-direction: row
</style>
