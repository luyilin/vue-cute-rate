```vue
<template>
  <star-rate :value="2.5" type="star1"
             :star-half="true"
             :on-change="onChangeFn"/>
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

title: Half star

<!-- title-stop -->

<!-- desc-start -->

desc: Support select half star.

<!-- desc-stop -->
