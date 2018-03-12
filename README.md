# vue-cute-rate

[![NPM version](https://img.shields.io/npm/v/vue-cute-rate.svg?style=flat)](https://npmjs.com/package/vue-cute-rate) [![NPM downloads](https://img.shields.io/npm/dm/vue-cute-rate.svg?style=flat)](https://npmjs.com/package/vue-cute-rate) [![CircleCI](https://circleci.com/gh/luyilin/vue-cute-rate/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-cute-rate/tree/master)

Rate with star, heart, emoji or anything you like.

See the beautiful [doc](https://vue-cute-rate.netlify.com) for vue-cute-rate. Powered by [kokk](https://github.com/luyilin/kokk) 🍹

## Install

```
yarn add vue-cute-rate --save
```

CDN: [UNPKG](https://unpkg.com/vue-cute-rate/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-cute-rate/) (available as `window.rate`)

<!-- DEMO -->

## API

See the [doc](https://vue-cute-rate.netlify.com) for live demo and details.

| Property | Description | type | Default |
| -------- | ----------- | ---- | ------- |
| count | star count | number | 5 |
| value / v-model | current value | number | 0 |
| star-half | whether to allow semi selection | boolean | false |
| disabled | read only, unable to interact | boolean | false |
| allow-clear | whether to allow clear when click again | boolean | true |
| type | there are 3 cute types of iconfont by default, star star1 and heart | string | star |
| hover-change | Support set hover-change to change value when hover | boolean | false |
| active-color | color of the active values | string | #fadb14 |
| inactive-color | color of the inactive values | string | #e9e9e9 |
| hover-color | color when hover a value | string | same as activeColor by default |
| inactive-char | the inactive character, only rendered when use a customChar slot | string | - (hyphen) |
| on-hover-change | callback when hover item | Function(value: number) | - |
| on-change | callback when select value | Function(value: number) | - |

### slot

#### rateChar

Use the slot when replace the default star to other character like alphabet, digit, iconfont or anything which can be controled by color.

The slot name is `rateChar`, and make sure to write `slot-scope="props" :class="props.computeClass"` as well. We need Scoped Slots and compute classnames by props.

#### customChar

Use the slot when replace the default star to other character like image, Unicode, or anything which cannot be controled by color. At the same time, you may want to set the inactive character.

The slot name is `customChar`, and make sure to write `slot-scope="props" :class="props.computeClass"` as well. We need Scoped Slots and compute classnames by props.

## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
