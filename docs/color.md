```vue
<template>
  <star-rate :value="3"
             active-color="lightpink" inactive-color="#ccc"
             hover-color="lightblue"/>
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
