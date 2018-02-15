<template>
  <div class="star-main" :class="starDisable"
       @mouseleave="starMouseleave">
    <input type="hidden" :value="currentValue">
    <div class="star-full"
         v-for="i in count" :key="i"
         @mousemove="starMousemove(i)"
         @click="starClick(i)">
      <i class="iconfont icon-star2 icon-rate-1" :class="computeCls(i)" />
      <span class="star-half" @mousemove.stop="starHalfMousemove(i)">
        <i class="iconfont icon-star2 icon-rate-2" :class="computeHalfCls(i)" />
      </span>
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
      }
    },

    data () {
      return {
        hoverIndex: -1,
        currentValue: this.value,
        isHalf: this.starHalf && this.value.toString().split('.').length > 1
      }
    },

    computed: {
      starDisable () {
        return this.disabled ? 'star-disable' : ''
      }
    },

    methods: {
      computeCls (i) {
        let starHalf = this.starHalf
        let currentIndex = this.currentIndex()
        return {
          'icon-full': starHalf
            ? i < currentIndex || (i === currentIndex && !this.isHalf)
            : i <= Math.ceil(currentIndex)
        }
      },
      computeHalfCls (i) {
        if (!this.starHalf) return
        let currentIndex = this.currentIndex()
        return {
          'icon-half': i === Math.ceil(currentIndex) && this.isHalf
        }
      },
      currentIndex () {
        return this.hoverIndex === -1 ? this.currentValue : this.hoverIndex
      },
      starMousemove (i) {
        if (this.disabled) return
        this.isHalf = false
        this.hoverIndex = i
      },
      starHalfMousemove (i) {
        if (this.disabled) return
        this.isHalf = true
        this.hoverIndex = i
      },
      starClick (i) {
        if (this.disabled) return
        this.currentValue = this.isHalf ? i - 0.5 : i
      },
      starMouseleave () {
        if (this.disabled) return
        this.hoverIndex = -1
        this.isHalf = this.starHalf && this.currentValue.toString().split('.').length > 1
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "assets/iconfont.css";

  .star-main {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  i {
    color: #e9e9e9;
    font-size: 28px;
    transition: all 0.3s ease-in-out;
  }
  .star-disable {
    .star-full {
      cursor: default;
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
    &:hover {
      transform: scale(1.1);
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
    color: #d4237a;
  }
</style>
