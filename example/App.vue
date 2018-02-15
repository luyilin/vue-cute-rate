<template>
  <div id="app">
    <star-rate :value="3"/>
    <star-rate :value="2.5" :star-half="true"/>
    <star-rate :value="2.5" :star-half="false" :disabled="true"/>
  </div>
</template>

<script>
import StarRate from '../src'

export default {
  components: {
    StarRate
  }
}
</script>
