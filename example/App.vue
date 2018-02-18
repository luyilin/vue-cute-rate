<template>
  <div id="app">
    <star-rate :value="4"/>
    <star-rate :value="2.5" type="star1"
               :star-half="true"/>
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
    <star-rate :value="4" :allow-clear="false"/>
    <star-rate v-model="value" type="star1"/>
    <span class="text">{{value}} stars</span>
  </div>
</template>

<script>
import StarRate from '../src'

export default {
  components: {
    StarRate
  },

  data () {
    return {
      value: 3
    }
  }
}
</script>

<style>
  .text {
    color: #37414a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: lighter;
  }
</style>
