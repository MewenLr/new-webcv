import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      stTabActive: state => state.stTabActive,
    }),
    tabActive () {
      return this.stTabActive !== undefined && this.stTabActive === this.index
    },
  },
}
