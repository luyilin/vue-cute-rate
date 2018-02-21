```vue
<template>
  <star-rate :value="3"/>
  <span class="text">default type star</span>
  <br>
  <star-rate :value="4"
             type="star1"/>
  <span class="text">star1</span>
  <br>
  <star-rate :value="2" 
             active-color="#d4237a"
             type="heart"/>
  <span class="text">heart</span>
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
