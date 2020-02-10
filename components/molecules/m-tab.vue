<template lang='pug'>
  .tab
    .tab_head(
      v-show="showSubtitle"
      :class="{'tab_head--active': tabActive }"
      @click="clickTab"
    )
      a-subtitle.tab_head_subtitle(
        :name="tab.name"
        :active="tabActive"
      )
    a-card.tab_card(
      v-show="tabActive"
      :paragraph="tab.paragraph"
      :type-writer-on="tabActive"
    )
</template>

<script>
import ACard from '@/components/atoms/a-card'
import ASubtitle from '@/components/atoms/a-subtitle'

export default {
  name: 'MTab',
  components: {
    ACard,
    ASubtitle,
  },
  props: {
    tab: { type: Object, required: true },
    index: { type: Number, required: true },
    indexActive: { type: Number, default: undefined },
  },
  data () {
    return {
      tabActive: false,
    }
  },
  computed: {
    showSubtitle () {
      return this.indexActive === undefined ? true : (this.indexActive === this.index)
    },
  },
  methods: {
    clickTab () {
      this.tabActive = !this.tabActive
      this.tabActive ? this.$emit('clickTab', this.index) : this.$emit('clickTab', undefined)
    },
  },
}
</script>

<style lang='sass'>
.tab
  $self: &
  display: flex
  align-items: center
  flex-direction: column
  transition: all ease-in-out 2s

  &_head
    display: flex
    cursor: pointer
    margin: 3vh 0 0 0
    position: relative
    align-items: center
    transform: scale(0.95)
    justify-content: center
    background-position: center
    transition: transform ease-in-out 0.5s, background .3s
    @include mm-vw(font-size, 5, $tablet, $desktop)

    @include laptop
      @include mm-vw(font-size, 4, $tablet, $desktop)

    &::before, &::after
      opacity: 1
      content: '-'
      position: absolute
      pointer-events: none
      transition: all ease-in-out .5s

    &::before
      left: -2vw

    &::after
      right: -2vw

    &:hover
      transform: scale(1)
      background: transparent radial-gradient(circle, transparent 1%, rgba($aqua-blue, 0.1) 1%) center/15000%

      &::before, &::after
        opacity: 0
        transition: all ease-in-out .3s

      &::before
        left: -20%

      &::after
        right: -20%

    &:active
      background-size: 100%
      transition: background 0s
      background-color: rgba($aqua-blue, 0.5)

    &--active
      transform: scale(1)

      &::before, &::after
        display: none
</style>
