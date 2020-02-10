<template lang='pug'>
  .tab
    .tab_head(v-show="showTab")
      h2.tab_head_title(@click="activateTab")
        | {{ tab.name }}
    a-card.tab_card(
      v-show="cardVisible"
      :visible="cardVisible"
      :paragraph="tab.paragraph"
    )
</template>

<script>
import ACard from '@/components/atoms/a-card'

export default {
  name: 'MTab',
  components: {
    ACard,
  },
  props: {
    tab: { type: Object, required: true },
    index: { type: Number, required: true },
    indexActive: { type: Number, default: undefined },
  },
  data () {
    return {
      cardVisible: false,
    }
  },
  computed: {
    showTab () {
      return this.indexActive === undefined ? true : (this.indexActive === this.index)
    },
  },
  methods: {
    activateTab () {
      this.cardVisible = !this.cardVisible
      this.cardVisible ? this.$emit('tabActive', this.index) : this.$emit('tabActive', undefined)
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
    justify-content: center
    @include mm-vw(font-size, 5, $tablet, $desktop)

    @include laptop
      @include mm-vw(font-size, 4, $tablet, $desktop)

    &::before, &::after
      opacity: 1
      content: '-'
      position: absolute
      transition: all ease-in-out .5s

    &::before
      left: -2vw

    &::after
      right: -2vw

    &:hover

      &::before, &::after
        opacity: 0
        transition: all ease-in-out .5s

      &::before
        left: -20%

      &::after
        right: -20%

    &_title
      padding: 1vh 2vh
      position: relative
      border: 2px solid transparent
      transition: all ease-in-out .5s
      @include mm-vw(font-size, 5, $tablet, $desktop)

      @include laptop
        @include mm-vw(font-size, 4, $tablet, $desktop)

      &::before, &::after
        width: 0
        height: 0
        content: ''
        position: absolute
        background: transparent
        border: 2px solid transparent

      &::before
        top: -2px
        left: -2px

      &::after
        bottom: -2px
        right: -2px

      &:hover
        border: 2px solid $aqua-blue
        transition: all ease-in-out 2s

        &::before
          animation: border-top-right 1s linear forwards

        &::after
          animation: border-bottom-left 1s linear forwards
</style>
