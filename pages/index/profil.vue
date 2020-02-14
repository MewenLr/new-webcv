<template lang='pug'>
  .devops
    nuxt-link(to="/web-development" style="color: white") Web Dev
    //- nuxt-link(to="/web-development") Accueil
    //- o-background
    //- o-scroller(:page="1")
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
// import OScroller from '@/components/organisms/o-scroller'
import dataset from '@/assets/data/datasets/profil.dataset'
// import OBackground from '@/components/organisms/o-background'
import OIllustration from '@/components/organisms/o-illustration'
import highlightLetterMix from '@/assets/scripts/mixins/highlight-letter'

export default {
  name: 'Devops',
  components: {
    OContent,
    // OScroller,
    // OBackground,
    OIllustration,
  },
  mixins: [dataset, highlightLetterMix],
  // transition: 'slide-left',
  transition: (to, from) => {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  // mixins: [dataset],
}
</script>

<style lang='sass'>
.devops
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
