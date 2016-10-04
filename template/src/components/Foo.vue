<template>
  <div class="foo">
    <h1>Foo</h1>
    <p>\{{ getCount }}</p>
    <button @click='decrement'>-</button>
    <button @click='increment'>+</button>
  </div>
</template>

<script>
import { actions, getters } from 'lib/store'

export default {
  name: 'Foo',
  vuex: { getters, actions }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 { color: #42b983; }
</style>
