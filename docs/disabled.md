```vue
<template>
  <star-rate :value="2" :disabled="true"
             active-color="#d4237a"
             type="heart"/>
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

title: Read only

<!-- title-stop -->

<!-- desc-start -->

desc: Read only, cannot use mouse to interact.

<!-- desc-stop -->
