# vue-cute-rate

[![NPM version](https://img.shields.io/npm/v/vue-cute-rate.svg?style=flat)](https://npmjs.com/package/vue-cute-rate) [![NPM downloads](https://img.shields.io/npm/dm/vue-cute-rate.svg?style=flat)](https://npmjs.com/package/vue-cute-rate) [![CircleCI](https://circleci.com/gh/luyilin/vue-cute-rate/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-cute-rate/tree/master)

Rate with star, heart, emoji or anything you like.

See the beautiful [demo](https://vue-cute-rate.netlify.com/) for vue-cute-rate. Supported by [kokk](https://github.com/luyilin/kokk)

## Install

```bash
yarn add vue-cute-rate --save
```

CDN: [UNPKG](https://unpkg.com/vue-cute-rate/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-cute-rate/) (available as `window.rate`)

## Usage

```vue
<template>
  <star-rate/>
</template>

<script>
import StarRate from 'vue-cute-rate'

export default {
  components: {
    StarRate
  }
}
</script>
```
## API

| Property | Description | type | Default |
| -------- | ----------- | ---- | ------- |
| count | star count | number | 5 |
| value | current value | number | 0 |
| starHalf | whether to allow semi selection | boolean | false |
| disabled | read only, unable to interact | boolean | false |
| allowClear | whether to allow clear when click again | boolean | true |
| type | there are 3 cute types of iconfont by default. | string | star |
| hoverChange | Support set hover-change to change value when hover.| boolean | false |
| activeColor | callback when component lose focus | string | '#fadb14' |
| inactiveColor | callback when select value | string | '#e9e9e9' |
| hoverColor | callback when component get focus | string | same as activeColor by default |
| inactiveChar | callback when hover item | string | - |

## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
