---
title: Hover change
desc: Support set hover-change to change value when hover. Make sure to use v-model to create a two-way binding.
---

```vue
<template>
  <star-rate v-model="value1"
             type="star1" :star-half="true"
             :hover-change="true"
             :on-hover-change="onHoverChangeFn"/>
  <span class="text">{{ value1 }} stars</span>
</template>

<script>
import StarRate from 'vue-cute-rate'

export default {
  components: {
    StarRate
  },
  data () {
    return {
      value1: 3.5
    }
  },
  methods: {
    onHoverChangeFn (value) {
      console.log(value)
    }
  }
}
</script>
```
