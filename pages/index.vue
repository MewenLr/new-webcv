<template lang='pug'>
  .container
    o-background
    o-scroller(:page="0")
    nuxt-child.container_child
</template>

<script>
import OScroller from '@/components/organisms/o-scroller'
import OBackground from '@/components/organisms/o-background'

export default {
  name: 'Container',
  components: {
    OScroller,
    OBackground,
  },
  data () {
    return {
      dragging: false,
      startPoint: undefined,
      pageActive: 0,
      routes: [
        {
          index: 0,
          path: '/web-development?page=0',
        },
        {
          index: 1,
          path: '/devops?page=1',
        },
        {
          index: 2,
          path: '/profil?page=2',
        },
      ],
    }
  },
  mounted () {
    window.addEventListener('pointerdown', this.startDrag)
    window.addEventListener('pointermove', this.doDrag)
    window.addEventListener('pointerup', this.stopDrag)
  },
  destroyed () {
    window.removeEventListener('pointerdown', this.startDrag)
    window.removeEventListener('pointermove', this.doDrag)
    window.removeEventListener('pointerup', this.stopDrag)
  },
  methods: {
    startDrag (event) {
      this.dragging = true
      this.startPoint = event.clientX
    },
    stopDrag (event) {
      this.dragging = false
      this.startPoint = undefined
      const el = document.querySelector('.container_child')
      el.classList.remove('container_child--slide-right', 'container_child--slide-left')
    },
    doDrag (event) {
      if (this.dragging) {
        const gap = this.startPoint - event.clientX
        const el = document.querySelector('.container_child')
        if (gap >= 0) {
          el.classList.add('container_child--slide-right')
          el.classList.remove('container_child--slide-left')
        } else if (gap < 0) {
          el.classList.add('container_child--slide-left')
          el.classList.remove('container_child--slide-right')
        }
        const lock = window.innerWidth * 0.05
        if (gap > lock) {
          this.$router.push({ path: this.routes[this.pageActive].path })
          this.pageActive += 1
        } else if ((gap * -1) > lock) {
          this.$router.push({ path: this.routes[this.pageActive].path })
          this.pageActive -= 1
        }
      }
    },
  },
}
</script>

<style lang='sass'>
.container
  width: 100vw
  height: 100vh
  overflow: hidden
  position: relative

  &_child
    transition: all $duration-xs ease-in-out

    &--slide-left
      transform: translate(2rem, 0)

    &--slide-right
      transform: translate(-2rem, 0)
</style>
