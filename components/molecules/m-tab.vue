<template lang='pug'>
  .tab(:class=`{
    'tab--active': tabActive,
    'tab--disactive': tabDisactive,
  }`)
    a-tab-head(
      @clickTab="clickTab"
      :index="index"
      :name="tab.name"
    )
    a-card.tab_card(
      :index="index"
      :paragraph="tab.paragraph"
    )
</template>

<script>
import types from '@/store/mutation-types'
import ACard from '@/components/atoms/a-card'
import ATabHead from '@/components/atoms/a-tab-head'
import tabActiveMix from '@/assets/scripts/mixins/tab-active'
import { mapMutations } from 'vuex'

export default {
  name: 'MTab',
  components: {
    ACard,
    ATabHead,
  },
  mixins: [tabActiveMix],
  props: {
    tab: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  data () {
    return {
      toggleTab: false,
    }
  },
  computed: {
    tabDisactive () {
      return this.stTabActive !== undefined && this.stTabActive !== this.index
    },
  },
  methods: {
    ...mapMutations({
      mutTabActive: types.TAB_ACTIVE,
    }),
    clickTab () {
      this.toggleTab = !this.toggleTab
      this.mutTabActive(this.toggleTab ? this.index : undefined)
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
