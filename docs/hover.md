```vue
<template>
  <star-rate v-model="value1"
             type="star1" :star-half="true"
             :hover-change="true"/>
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
  }
}
</script>
```
