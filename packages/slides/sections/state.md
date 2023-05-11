---
layout: center
---

# Data

---

# State / State in the `data` property

- State is the data that is used in a Vue component
- Is defined in the `data` function of a Vue component
- Reactivity: when the state changes, the component will be re-rendered

---

# State / Component example

<CountButton />

```vue {all|12|3|4|12|3}
<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="count++">Increment</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
}
</script>
```

---

# 🏋️ Exercise 2 🏋️
