---
layout: center
---

# Composition API

---

# Composition API / Example

<div class="grid grid-cols-2 gap-4 mt-6">

<div>

### Options API

```vue
<template>
    <button @click="increment">
        {{ count }}
    </button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
    methods: {
        increment() {
            this.count++
        },
    },
}
```

</div>

<div>

### Composition API

```vue
<template>
    <button @click="increment">
        {{ count }}
    </button>
</template>

<script>
export default {
  setup() {
    const count = ref(0)

    const increment = () => count.value++

    return { count, increment }
  },
}
```

</div>

</div>

---

# Composition API / Why?

- Better code composition.
- Logically related blocks are kept together.
- Better overall performance compared to Vue 2.
- Cleaner code. The code is logically better ordered, which makes it much more meaningful and easy to read and understand.
- Easy to extract and import functionality.
- TypeScript support, which improves IDE integrations and code assistance, and code debugging

---

# 🏋️ Exercise 10 🏋️
