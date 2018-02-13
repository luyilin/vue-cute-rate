<template>
  <div class="star-main">
    <div class="star-full" v-for="i in count" @mousemove="starMousemove(i)">
      <i class="iconfont icon-star2"></i>
      <span class="star-half">
        <!--<i class="iconfont icon-star2"></i>-->
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'starRate',

    props: {
      count: {
        type: Number,
        default: 5
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
        hoverIndex: -1
      }
    },

    methods: {
      starMousemove (i) {
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
    color: #dedede;
    font-size: 28px;
    transition: all 0.3s ease-in-out;
  }
  .star-full {
    position: relative;
    display: inline-block;
    transition: all 0.2s ease;
    margin-right: 8px;
    &:hover {
      transform: scale(1.1);
      i {
        color: #d4237a;
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
    i {
      color: transparent;
    }
  }
</style>
