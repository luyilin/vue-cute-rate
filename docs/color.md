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
<!-- title-start -->

title: Custom color

<!-- title-stop -->

<!-- desc-start -->

desc: Set the active, inactive and hover color to custom color.

<!-- desc-stop -->
