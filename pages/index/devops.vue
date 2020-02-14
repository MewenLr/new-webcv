<template lang='pug'>
  .devops
    o-illustration.devops_illustration
      template
        img(src='@/static/images/svg/computer.svg' alt='illustration computer hovering')
    o-content.devops_content(
      :tabs="tabs"
      :title="title"
    )
</template>

<script>
import OContent from '@/components/organisms/o-content'
import dataset from '@/assets/data/datasets/devops.dataset'
import OIllustration from '@/components/organisms/o-illustration'
import highlightLetterMix from '@/assets/scripts/mixins/highlight-letter'
import slideLeftRight from '@/assets/scripts/transitions/slide-left-right'

export default {
  name: 'Devops',
  components: {
    OContent,
    OIllustration,
  },
  mixins: [dataset, highlightLetterMix],
  transition: slideLeftRight,
}
</script>

<style lang='sass'>
.devops
  width: 100vw
  height: 100vh
  display: flex
  position: relative
  flex-direction: column

  @include laptop
    flex-direction: row
</style>
