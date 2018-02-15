<template>
  <div id="app">
    <star-rate :value="4"/>
    <star-rate :value="2.5" type="star1"
               :star-half="true" color="#ffd5e3"/>
    <star-rate :value="2" :star-half="false" :disabled="true"
               type="heart"/>
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
