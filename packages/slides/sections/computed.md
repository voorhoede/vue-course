---
layout: center
---

# Computed

---

# Computed / What are computed properties?

- Computed properties are functions that return a value.
- Computed properties are cached based on their dependencies.
- Computed properties are used to calculate a value based on other data.

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

# 🏋️ Exercise 8 🏋️
