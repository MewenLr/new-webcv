<template lang="pug">
  .card
    //- p.card_text Hello world my name is mewen i m a front end developper
    <vue-typed-js :strings="['This is text ^1000 which gets paused for 1 second', 'wow, interesting']">
      <h2 class="typing"></h2>
    </vue-typed-js>
</template>

<script>
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'

Vue.use(VueTypedJs)

export default {
  name: 'ACard',
}
</script>

<style lang='sass'>
.card
  width: 80%
  height: 30vh
  border-radius: 5px
  background: rgba(0,0,0,0.5)

  &_text
    padding: 15px 20px
    font-family: monospace
    @include mm-vw(font-size, 2, $laptop, $desktop)
</style>
