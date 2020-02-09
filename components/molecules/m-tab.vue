<template lang='pug'>
  .tab
    h2.tab_title(
      v-show="showTab"
      @click="activateTab"
    ) {{ tab.name }}
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
@keyframes slide-left
  0%
    left: 0
    opacity: 1
  100%
    left: -20%
    opacity: 0
@keyframes slide-right
  0%
    right: 0
    opacity: 1
  100%
    right: -20%
    opacity: 0

.tab
  $self: &
  display: flex
  align-items: center
  flex-direction: column
  transition: all ease-in-out 2s

  &_title
    cursor: pointer
    margin: 3vh 0 0 0
    // position: relative
    @include mm-vw(font-size, 5, $tablet, $desktop)

    @include laptop
      @include mm-vw(font-size, 4, $tablet, $desktop)

    &::before, &::after
      content: '-'
      position: relative
      @include mm-vw(margin-left, 2, $tablet, $desktop)
      @include mm-vw(margin-right, 2, $tablet, $desktop)

    &:hover::before
      animation: slide-left .2s ease-in-out forwards
    &:hover::after
      animation: slide-right .2s ease-in-out forwards
</style>
