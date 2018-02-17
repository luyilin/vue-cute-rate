<template>
  <div id="app">
    <star-rate :value="4"/>
    <star-rate :value="2.5" type="star1"
               :star-half="true"
               color="#ffd5e3"/>
    <star-rate :value="2" :disabled="true"
               type="heart"/>
    <star-rate :value="3.5" :star-half="true">
      <i class="iconfont icon-vip icon-slot"
         slot="rateChar" slot-scope="props"
         :class="props.computeClass"/>
    </star-rate>
    <star-rate color="#42b983" :value="1">
      <p slot="rateChar" slot-scope="props"
         :class="props.computeClass">V</p>
    </star-rate>
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

<style>
</style>
