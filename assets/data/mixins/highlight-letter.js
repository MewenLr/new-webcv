export default {
  data () {
    return {
      timeoutHighlight: null,
    }
  },
  mounted () {
    this.hightlightLetter()
  },
  destroyed () {
    clearTimeout(this.timeoutHighlight)
  },
  methods: {
    hightlightLetter () {
      const letters = document.getElementsByClassName('letter-highlighted')
      const randLetter = letters[Math.floor(Math.random() * letters.length)]
      randLetter.classList.add('letter-highlighted--active')
      setTimeout(() => randLetter.classList.remove('letter-highlighted--active'), 3000)
      const rand = Math.floor(Math.random() * (20000 - 10000) + 10000)
      return this.timeoutHighlight = setTimeout(() => this.hightlightLetter(), rand)
    },
  },
}
