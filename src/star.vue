<template>
  <div class="star-main" :class="starDisable"
       ref="cuteRate"
       @mouseleave="starMouseleave">
    <input type="hidden" :value="currentValue">
    <div class="star-full"
         v-for="i in count" :key="i"
         @mousemove="starMousemove(i)"
         @click="starClick(i)">
      <div v-if="customCharSlot">
        <slot name="customChar"
              v-if="i <= currentIndex()"
              computeClass="char"/>
        <span class="char" v-else>{{ inactiveChar }}</span>
      </div>
      <div v-else>
        <i class="char iconfont icon-rate-1"
           :class="computeFullTypeCls(i)"
           v-if="!rateCharSlot"/>
        <slot name="rateChar"
              :computeClass="computeFullCls(i, 'char')"/>
        <span class="star-half"
              @mousemove.stop="starHalfMousemove(i)">
          <i class="char iconfont icon-rate-2"
             :class="computeHalfTypeCls(i)"
             v-if="!rateCharSlot"/>
          <slot name="rateChar"
                :computeClass="computeHalfCls(i, 'char')"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarRate',

    props: {
      count: {
        type: Number,
        default: 5
      },
      value: {
        type: Number,
        default: 0
      },
      starHalf: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'star'
      },
      allowClear: {
        type: Boolean,
        default: true
      },
      activeColor: {
        type: String,
        default: '#fadb14'
      },
      inactiveColor: {
        type: String,
        default: '#e9e9e9'
      },
      hoverColor: {
        type: String,
        default: ''
      },
      inactiveChar: {
        type: String,
        default: '-'
      },
      hoverChange: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        hoverIndex: -1,
        currentValue: this.value,
        isHalf: this.starHalf && this.value.toString().split('.').length > 1,
        rateCharSlot: false,
        customCharSlot: false
      }
    },

    computed: {
      starDisable () {
        return this.disabled ? 'star-disable' : 'star-able'
      }
    },

    mounted () {
      const style = this.$refs.cuteRate.style
      style.setProperty('--active-color', this.activeColor)
      style.setProperty('--inactive-color', this.inactiveColor)
      style.setProperty('--hover-color', this.hoverColor || this.activeColor)
      this.rateCharSlot = this.$scopedSlots.rateChar
      this.customCharSlot = this.$scopedSlots.customChar
    },

    methods: {
      computeFullCls (i, j) {
        let starHalf = this.starHalf
        let currentIndex = this.currentIndex()
        const temp = starHalf
          ? i < currentIndex || (i === currentIndex && !this.isHalf)
          : i <= Math.ceil(currentIndex)
        return {
          'icon-full': temp,
          'char': j === 'char'
        }
      },
      computeFullTypeCls (i) {
        return Object.assign({}, this.computeFullCls(i), this.computeType())
      },
      computeHalfCls (i, j) {
        if (!this.starHalf && j === 'char') return 'icon-rate-2 char'
        let currentIndex = this.currentIndex()
        return {
          'icon-half': i === Math.ceil(currentIndex) && this.isHalf,
          'icon-rate-2 char': j === 'char'
        }
      },
      computeHalfTypeCls (i) {
        return Object.assign({}, this.computeHalfCls(i), this.computeType())
      },
      computeType () {
        return {
          'icon-star': this.type === 'star',
          'icon-star1': this.type === 'star1',
          'icon-heart': this.type === 'heart'
        }
      },
      currentIndex () {
        return this.hoverIndex === -1 ? this.currentValue : this.hoverIndex
      },
      starMousemove (i) {
        if (this.disabled) return
        if (this.starHalf) {
          this.isHalf = false
        }
        this.hoverIndex = i
        this.changeValue(i)
      },
      starHalfMousemove (i) {
        if (this.disabled) return
        if (this.starHalf) {
          this.isHalf = true
        }
        this.hoverIndex = i
        this.changeValue(i)
      },
      changeValue (i) {
        if (!this.hoverChange) return
        let value = this.isHalf ? i - 0.5 : i
        this.$emit('input', value)
      },
      starClick (i) {
        if (this.disabled) return
        const curValue = this.currentValue
        let value = this.isHalf ? i - 0.5 : i
        this.currentValue = value
        if (curValue === this.currentValue && this.allowClear) {
          this.currentValue = 0
          this.hoverIndex = -1
          value = 0
        }
        this.$emit('input', value)
      },
      starMouseleave () {
        if (this.disabled) return
        this.hoverIndex = -1
        this.isHalf = this.starHalf && this.currentValue.toString().split('.').length > 1
        if (!this.hoverChange) return
        this.$emit('input', this.currentValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/iconfont.css";

  * {
    margin: 0;
    padding: 0;
  }

  .star-main {
    margin: 10px auto;
    padding: 0;
    text-align: center;
    display: inline-block;
  }
  .char {
    color: var(--inactive-color);
    font-size: 22px;
    transition: all 0.3s ease-in-out;
  }
  .star-disable {
    .star-full {
      cursor: not-allowed;
      &:hover {
        transform: scale(1);
      }
    }
  }
  .star-full {
    position: relative;
    display: inline-block;
    transition: all 0.2s ease;
    margin-right: 8px;
    cursor: pointer;
  }
  .star-able {
    .star-full {
      &:hover {
        transform: scale(1.1);
        .icon-full, .icon-half {
          color: var(--hover-color)
        }
      }
    }
  }
  .star-half {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .icon-rate-2 {
    color: transparent;
  }
  .icon-full, .icon-half {
    color: var(--active-color);
  }
  .star-char {
    padding: 5px;
  }
</style>
