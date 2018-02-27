<template>
  <div id="app">
    <a href="https://github.com/luyilin/vue-cute-rate" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#f2c1d9; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"/><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"/><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"/></svg></a>
    <kokk :doc-list="['basic.md', 'half.md', 'copywriting.md', 'disabled.md', 'clear.md', 'hover.md', 'color.md', 'type.md', 'char.md', 'inactiveChar.md']"
          :example-order="1"
          loading-color="#f2c1d9">
      <star-rate slot="demo-0"/>

      <star-rate slot="demo-1" :value="2.5" type="star1"
                 :star-half="true"/>

      <star-rate slot="demo-2" v-model="value"
                 type="star1"/>
      <span slot="demo-2" class="text">{{ value }} stars</span>

      <star-rate slot="demo-3" :value="2" :disabled="true"
                 active-color="#d4237a"
                 type="heart"/>

      <star-rate slot="demo-4" :value="3" :allow-clear="false"/>
      <span slot="demo-4" class="text">allowClear: false</span>

      <star-rate slot="demo-5" v-model="value1"
                 type="star1" :star-half="true"
                 :hover-change="true"/>
      <span slot="demo-5" class="text">{{ value1 }} stars</span>

      <star-rate slot="demo-6" :value="3"
                 active-color="lightpink" inactive-color="#ccc"
                 hover-color="lightblue"/>

      <star-rate slot="demo-7" :value="3"/>
      <span slot="demo-7" class="text">default type star</span>
      <br slot="demo">
      <star-rate slot="demo-7" :value="4"
                 type="star1"/>
      <span slot="demo-7" class="text">star1</span>
      <br slot="demo-7">
      <star-rate slot="demo-7" :value="2"
                 active-color="#d4237a"
                 type="heart"/>
      <span slot="demo-7" class="text">heart</span>

      <star-rate slot="demo-8" :value="3.5"
                 :star-half="true">
        <i class="iconfont icon-vip icon-slot"
           slot="rateChar" slot-scope="props" :class="props.computeClass"/>
      </star-rate>
      <br slot="demo-8">
      <star-rate slot="demo-8" active-color="#42b983" :value="1">
        <span slot="rateChar" slot-scope="props" :class="props.computeClass">V</span>
      </star-rate>

      <div slot="demo-9">
        <star-rate v-model="trueValue"
                   inactive-char="❌">
          <span slot="customChar" slot-scope="props"
                :class="props.computeClass">✔️</span>
        </star-rate>
        <span class="text">{{ trueValue }} true</span>
        <span class="text">{{ 5 - trueValue }} false</span>
        <br>
        <star-rate v-model="puppyValue"
                   inactive-char="-" :hover-change="true">
          <img slot="customChar" slot-scope="props"
               :class="props.computeClass"
               class="puppy"
               src="https://user-images.githubusercontent.com/12069729/36364686-84f49ada-1580-11e8-9bc9-4549c5d066d3.png">
        </star-rate>
        <span class="text">{{ puppyValue + ' lovely ' + (puppyValue > 1 ? 'puppies' : 'puppy') }}</span>
      </div>
    </kokk>
  </div>
</template>

<script>
import StarRate from '../src'
import Kokk from 'kokk'

export default {
  components: {
    StarRate,
    Kokk
  },

  data () {
    return {
      value: 3,
      value1: 3.5,
      trueValue: 3,
      puppyValue: 2,
      expandAll: false
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .main {
    width: 72%;
    margin: 10px auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
    }
    h1 {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: lighter;
      font-size: 52px;
      line-height: 1.8;
      color: #e57baf;
    }
    .title {
      font-weight: 500;
      line-height: 2;
      img {
        width: 15px;
        vertical-align: middle;
        cursor: pointer;
      }
    }
    .example {
      margin: 0 -8px;
      .left, .right {
        width: 50%;
        display: inline-block;
        float: left;
        padding: 0 8px;
        box-sizing: border-box;
        @media only screen and (max-width: 768px) {
          float: none;
          width: 100%;
        }
      }
    }
  }
  .text {
    color: #555;
    font-weight: lighter;
    margin: 0 8px;
    font-size: 14px;
  }
  .puppy {
    width: 20px;
  }
  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
