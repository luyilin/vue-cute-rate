---
title: Clear star
desc: Support set allow to clear star when click again.
---

```vue
<template>
  <star-rate :value="3" :allow-clear="false"/>
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
