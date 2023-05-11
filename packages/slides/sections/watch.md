---
layout: center
---

# Watch

---

# Vuetify / Watch

- Watch is a property that allows you to watch for changes on a property
- It is a function that receives the new value and the old value
- It is useful for when you need to perform side effects on a property change 

```vue
<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
  watch: {
    value(newValue, oldValue) {
      console.log(newValue, oldValue)
    },
  },
}
</script>
```
---

# 🏋️ Exercise 6 🏋️
