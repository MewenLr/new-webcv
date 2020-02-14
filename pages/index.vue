<template lang='pug'>
  .container(
    v-pointerdown="startDrag"
    v-pointermove="doDrag"
    v-pointerup="stopDrag"
  )
    o-background
    o-scroller(:page="stPageActive")
    nuxt-child.container_child
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
  width: 100vw
  height: 100vh
  overflow: hidden
  position: relative

  &_child
    transition: all $duration-s linear

    &--slide-left, &--slide-right
      transition: all $duration-xs linear

    &--slide-left
      transform: translate(3rem, 0)

    &--slide-right
      transform: translate(-3rem, 0)
</style>
