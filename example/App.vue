<template>
  <div id="app">
    <star-rate />
    <star-rate :value="2.5" type="star1"
               :star-half="true"/>
    <star-rate :value="2" :disabled="true"
               active-color="#d4237a"
               type="heart"/>
    <star-rate :value="3.5" :star-half="true">
      <i class="iconfont icon-vip icon-slot"
         slot="rateChar" slot-scope="props" :class="props.computeClass"/>
    </star-rate>
    <star-rate active-color="#42b983" :value="1">
      <span slot="rateChar" slot-scope="props" :class="props.computeClass">V</span>
    </star-rate>
    <star-rate :value="3" :allow-clear="false"/>

    <star-rate v-model="value" type="star1"
               :star-half="true"
               :hover-change="true"/>
    <span class="text">{{ value }} stars</span>

    <star-rate :value="3"
               class="rate-1" :style="{'margin': 20 + 'px'}"
               inactive-color="#ccc" hover-color="lightblue"/>
    <star-rate v-model="trueValue" inactive-char="❌">
      <span slot="inactiveRate" slot-scope="props"
            :class="props.computeClass">✔️</span>
    </star-rate>
    <span class="text">{{ trueValue }} true</span>
    <span class="text">{{ 5 - trueValue }} false</span>
    <star-rate :count="6" :value="2" inactive-char="-">
      <span slot="inactiveRate" slot-scope="props"
            :class="props.computeClass">🍭</span>
    </star-rate>
    <star-rate v-model="dogValue" inactive-char="-"
               :hover-change="true">
      <img slot="inactiveRate" slot-scope="props"
           :class="props.computeClass"
           class="dog"
           src="https://user-images.githubusercontent.com/12069729/36364686-84f49ada-1580-11e8-9bc9-4549c5d066d3.png">
    </star-rate>
    <span class="text">{{ dogValue + ' lovely ' + (dogValue > 1 ? 'puppies' : 'puppy') }}</span>
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
      value: 3.5,
      trueValue: 3,
      dogValue: 2
    }
  }
}
</script>

<style>
  .text {
    color: #37414a;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: lighter;
    margin-right: 8px;
  }
  .rate-1 {
    display: block !important;
  }
  .dog {
    width: 20px;
  }
</style>
