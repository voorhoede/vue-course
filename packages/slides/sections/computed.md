---
layout: center
---

# Computed

---

# Computed / What are computed properties?

- Functions that return a value.
- The caching of computed properties is based on their dependencies.
- Calculating a value based on other data is a common use case for computed properties.

---

# Computed / Example

```vue
<template>
  <p>{{ fullName }}</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
}
</script>
```

---

# Computed / Demo

<StackBlitzEmbed id="vue-gy4gsk" file="src/App.vue" />

---
layout: center
---

# 🏋️ Exercise 8 🏋️

1. Add a computed property called `averageTemperature` that returns the average of `high` and `low`
2. Render the `averageTemperature` computed property
