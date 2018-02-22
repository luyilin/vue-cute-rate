<template>
  <div id="app">
    <a href="https://github.com/luyilin/vue-cute-rate" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#f2c1d9; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"/><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"/><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"/></svg></a>
    <div class="main">
      <h1>vue-cute-rate</h1>
      <h2 class="title">
        Examples
        <img src="https://user-images.githubusercontent.com/12069729/36479691-88f4c4c8-1744-11e8-9fdf-309109b84d1b.png"
             @click="expandAll = !expandAll">
      </h2>
      <div class="example">
        <div class="left">
          <kokk root="/docs/" doc="basic.md"
                :expand-all="expandAll">
            <star-rate slot="demo"/>
          </kokk>
          <kokk root="/docs/" doc="copywriting.md"
                :expand-all="expandAll"
                title="Show copywriting" desc="Add copywriting in rate components.">
            <star-rate slot="demo" v-model="value"
                       type="star1"/>
            <span slot="demo" class="text">{{ value }} stars</span>
          </kokk>
          <kokk root="/docs/" doc="clear.md"
                :expand-all="expandAll"
                title="Clear star" desc="Support set allow to clear star when click again.">
            <star-rate slot="demo" :value="3" :allow-clear="false"/>
            <span slot="demo" class="text">allowClear: false</span>
          </kokk>
          <kokk root="/docs/" doc="color.md"
                :expand-all="expandAll"
                title="Custom color" desc="Set the active, inactive and hover color to custom color.">
            <star-rate slot="demo" :value="3"
                       active-color="lightpink" inactive-color="#ccc"
                       hover-color="lightblue"/>
          </kokk>
          <kokk root="/docs/" doc="char.md"
                :expand-all="expandAll"
                title="Other character"
                desc="Replace the default star to other character like alphabet, digit, iconfont or anything which can be controled by color. Make sure to use rateChar as the slot name.">
            <star-rate slot="demo" :value="3.5"
                       :star-half="true">
              <i class="iconfont icon-vip icon-slot"
                 slot="rateChar" slot-scope="props" :class="props.computeClass"/>
            </star-rate>
            <br slot="demo">
            <star-rate slot="demo" active-color="#42b983" :value="1">
              <span slot="rateChar" slot-scope="props" :class="props.computeClass">V</span>
            </star-rate>
          </kokk>
        </div>

        <div class="right">
          <kokk root="/docs/" doc="half.md"
                :expand-all="expandAll"
                title="Half star" desc="Support select half star.">
            <star-rate slot="demo" :value="2.5" type="star1"
                       :star-half="true"/>
          </kokk>
          <kokk root="/docs/" doc="disabled.md"
                :expand-all="expandAll"
                title="Read only" desc="Read only, can't use mouse to interact.">
            <star-rate slot="demo" :value="2" :disabled="true"
                       active-color="#d4237a"
                       type="heart"/>
          </kokk>
          <kokk root="/docs/" doc="hover.md"
                :expand-all="expandAll"
                title="Hover change" desc="Support set hover-change to change value when hover. Make sure to use v-model to create a two-way binding.">
            <star-rate slot="demo" v-model="value1"
                       type="star1" :star-half="true"
                       :hover-change="true"/>
            <span slot="demo" class="text">{{ value1 }} stars</span>
          </kokk>
          <kokk root="/docs/" doc="type.md"
                :expand-all="expandAll"
                title="Icon type" desc="Support 3 cute types of iconfont by default.">
            <star-rate slot="demo" :value="3"/>
            <span slot="demo" class="text">default type star</span>
            <br slot="demo">
            <star-rate slot="demo" :value="4"
                       type="star1"/>
            <span slot="demo" class="text">star1</span>
            <br slot="demo">
            <star-rate slot="demo" :value="2"
                       active-color="#d4237a"
                       type="heart"/>
            <span slot="demo" class="text">heart</span>
          </kokk>
          <kokk root="/docs/" doc="inactiveChar.md"
                :expand-all="expandAll"
                title="Custom inactive character"
                desc="Replace the default star to other character like image, Unicode, or anything which cannot be controled by color.
At the same time, you may need set the inactive character. And make sure to use customChar as the slot name.">
            <star-rate slot="demo" v-model="trueValue"
                       inactive-char="❌">
              <span slot="customChar" slot-scope="props"
                    :class="props.computeClass">✔️</span>
            </star-rate>
            <span slot="demo" class="text">{{ trueValue }} true</span>
            <span slot="demo" class="text">{{ 5 - trueValue }} false</span>
            <br slot="demo">
            <star-rate slot="demo" v-model="puppyValue"
                       :hover-change="true">
              <img slot="customChar" slot-scope="props"
                   :class="props.computeClass"
                   class="puppy"
                   src="https://user-images.githubusercontent.com/12069729/36364686-84f49ada-1580-11e8-9bc9-4549c5d066d3.png">
            </star-rate>
            <span slot="demo" class="text">{{ puppyValue + ' lovely ' + (puppyValue > 1 ? 'puppies' : 'puppy') }}</span>
          </kokk>
        </div>
      </div>
    </div>
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
  .rate-1 {
    display: block !important;
  }
  .puppy {
    width: 20px;
  }
  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
