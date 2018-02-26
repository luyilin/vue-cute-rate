```vue
<template>
  <star-rate v-model="value" type="star1"
             :star-half="true">
  <span class="text">{{ value }} stars</span>
</template>

<script>
import StarRate from 'vue-cute-rate'

export default {
  components: {
    StarRate
  },
  data () {
    return {
      value: 3
    }
  }
}
</script>
```
