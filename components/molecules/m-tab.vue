<template lang='pug'>
  .tab(:class=`{
    'tab--active': tabActive,
    'tab--disactive': tabDisactive,
  }`)
    a-tab-head(
      @clickTab="clickTab"
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
import ATabHead from '@/components/atoms/a-tab-head'

export default {
  name: 'MTab',
  components: {
    ACard,
    ATabHead,
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
  opacity: 1
  display: flex
  max-height: 20vh
  align-items: center
  flex-direction: column
  transition: opacity $duration-xs ease-in-out $duration-s, max-height $duration-s ease-in-out

  &--active
    max-height: 100%
    animation: max-height $duration-m linear $duration-m

  &--disactive
    opacity: 0
    max-height: 0
    color: transparent
    pointer-events: none
    transition: opacity $duration-xs ease-in-out, max-height $duration-s ease-in-out $duration-xs
</style>
