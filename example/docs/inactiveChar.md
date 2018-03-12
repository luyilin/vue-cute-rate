---
title: Custom inactive character
desc: Replace the default star to other character like image, Unicode, or anything which cannot be controled by color.
      At the same time, you may want to set the inactive character. And make sure to use customChar as the slot name.
---

```vue
<template>
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
</template>

<script>
import StarRate from 'vue-cute-rate'

export default {
  components: {
    StarRate
  },
  data () {
    return {
      trueValue: 3,
      puppyValue: 2
    }
  }
}
</script>

<style>
.puppy {
  width: 20px;
}
</style>
```
