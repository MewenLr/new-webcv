export default {
  methods: {
    typeWriter (el, text, i = 0) {
      if (!this.active) return
      if (text.length > i) {
        el.innerHTML = text.substring(0, i + 1) + '<span class="caret" aria-hidden="true"></span>'
        setTimeout(() => this.typeWriter(el, text, i + 1), 15)
      } else {
        setTimeout(() => {
          const caret = document.querySelector('.caret')
          caret.parentNode.removeChild(caret)
        }, 500)
      }
    },
  },
}
