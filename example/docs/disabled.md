---
title: Read only
desc: Read only, cannot use mouse to interact.
---

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
