<template lang='pug'>
  .web-development
    background
    img.web-development_image(src='@/static/images/svg/computer.svg' alt='Computer hovering')
    h1.web-development_title Web Development
    h2.web-development_tabs(
      v-for="(skill, i) in skills"
      :key="i"
    ) {{ skill.title }}
</template>

<script>
import Background from '@/components/organisms/background'
import Dataset from '@/pages/web-development/web-development.dataset'

export default {
  name: 'Index',
  components: {
    Background,
  },
  mixins: [Dataset],
}
</script>

<style lang='sass'>
.web-development
  width: 100vw
  height: 100vh
  color: $white
  overflow: hidden
  position: relative

  &_computer
    top: 49%
    left: 53%
    z-index: -1
    height: 80%
    position: absolute
    transform: translate(-50%, -50%)

    @include laptop
      top: 50%
      left: 10%
      width: 45%
      height: initial
      transform: translate(-10%, -50%)
</style>
