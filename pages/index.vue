<template lang='pug'>
  .container(
    v-pointerdown="startDrag"
    v-pointermove="doDrag"
    v-pointerup="stopDrag"
  )
    o-background
    o-scroller(:page="stPageActive")
    nuxt-child.container_child
    .container_gradient-dark
    .container_gradient-light
</template>

<script>
import types from '@/store/mutation-types'
import OScroller from '@/components/organisms/o-scroller'
import OBackground from '@/components/organisms/o-background'
import { mapState, mapMutations } from 'vuex'

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
  computed: {
    ...mapState({
      stPageActive: state => state.stPageActive,
    }),
  },
  methods: {
    ...mapMutations({
      mutTabActive: types.TAB_ACTIVE,
      mutPageActive: types.PAGE_ACTIVE,
    }),
    startDrag (evt) {
      this.dragging = true
      this.startPoint = evt.clientX
    },
    doDrag (evt) {
      if (this.dragging) {
        const gap = this.startPoint - evt.clientX
        const el = document.querySelector('.container_child')
        if (gap >= 0) {
          el.classList.add('container_child--slide-right')
          el.classList.remove('container_child--slide-left')
        } else if (gap < 0) {
          el.classList.add('container_child--slide-left')
          el.classList.remove('container_child--slide-right')
        }
      }
    },
    stopDrag (evt) {
      const gap = this.startPoint - evt.clientX
      const lock = window.innerWidth * 0.03
      if (gap > lock) {
        const nextPage = ((this.stPageActive + 1) === this.routes.length) ? (this.routes.length - 1) : (this.stPageActive + 1)
        this.mutPageActive(nextPage)
        this.mutTabActive(undefined)
        this.$router.push({ path: this.routes[this.stPageActive].path })
      } else if ((gap * -1) > lock) {
        const previousPage = ((this.stPageActive - 1) < 0) ? 0 : (this.stPageActive - 1)
        this.mutPageActive(previousPage)
        this.mutTabActive(undefined)
        this.$router.push({ path: this.routes[this.stPageActive].path })
      }

      this.dragging = false
      this.startPoint = undefined
      const el = document.querySelector('.container_child')
      el.classList.remove('container_child--slide-right', 'container_child--slide-left')
    },
  },
}
</script>

<style lang='sass'>
.container
  z-index: -5
  width: 100vw
  height: 100vh
  overflow: hidden
  position: relative
  background-color: $regal-blue

  &_child
    transition: all $duration-s linear

    &--slide-left, &--slide-right
      transition: all $duration-xs linear

    &--slide-left
      transform: translate(3rem, 0)

    &--slide-right
      transform: translate(-3rem, 0)

  &_gradient-dark
    top: 55%
    width: 80vw
    z-index: -4
    right: -15vw
    height: 80vw
    opacity: .8
    position: fixed
    border-radius: 100%
    transform: translateY(-50%)
    background: radial-gradient(circle, rgba(0,14,20,1) 0%, rgba(0,29,43,.75) 20%, rgba(0,63,92,0) 50%)

  &_gradient-light
    top: 60%
    z-index: -5
    opacity: .5
    position: fixed
    right: -55vw
    width: 160vw
    height: 160vw
    transform: translateY(-50%)
    background-color: $regal-blue
    background: radial-gradient(circle, rgba(0,63,92,0) 60%, rgba(178,252,255,1) 100%)
</style>
