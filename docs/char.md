```vue
<template>
  <star-rate :value="3.5"
             :star-half="true">
    <i class="iconfont icon-vip icon-slot"
       slot="rateChar" slot-scope="props" :class="props.computeClass"/>
  </star-rate>
  <star-rate active-color="#42b983" :value="1">
    <span slot="rateChar" slot-scope="props" :class="props.computeClass">V</span>
  </star-rate>
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
<!-- title-start -->

title: Other character

<!-- title-stop -->

<!-- desc-start -->

desc: Replace the default star to other character like alphabet, digit, iconfont or anything which can be controled by color. Make sure to use rateChar as the slot name.

<!-- desc-stop -->
