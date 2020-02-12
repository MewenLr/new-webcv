<template lang='pug'>
  .tab(:class=`{
    'tab--active': tabActive,
    'tab--disactive': tabDisactive,
  }`)
    .tab_head(@click="clickTab")
      a-subtitle.tab_head_subtitle(
        :name="tab.name"
        :active="tabActive"
      )
    a-card.tab_card(
      :paragraph="tab.paragraph"
      :active="tabActive"
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
    tabDisactive () {
      return this.indexActive !== undefined && !this.tabActive
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
  opacity: 1
  display: flex
  max-height: 20vh
  align-items: center
  flex-direction: column
  transition: opacity .2s ease-in-out .3s, max-height .3s ease-in-out

  &_head
    display: flex
    cursor: pointer
    position: relative
    align-items: center
    transform: scale(0.95)
    justify-content: center
    background-position: center
    transition: transform .5s ease-in-out, background .3s
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

      &::before, &::after
        opacity: 0
        transition: all .3s ease-in-out

      &::before
        left: -20%

      &::after
        right: -20%

    &:active
      background-size: 100%
      transition: background 0s
      background-color: rgba($aqua-blue, .5)

  &--active
    max-height: 100%
    animation: max-height .5s linear .5s

    #{ $self }

      &_head
        transform: scale(1)

        &::before, &::after
          display: none

      &_card
        width: 80%
        height: 30vh
        background: rgba($black, .5)
        transition: all .5s linear .5s

        .card_text

          &::after
            background: rgba($black, 0)
            border: 1px solid transparent
            transition: all .5s linear .8s

  &--disactive
    opacity: 0
    max-height: 0
    color: transparent
    pointer-events: none
    transition: opacity .2s ease-in-out, max-height .3s ease-in-out .2s
</style>
