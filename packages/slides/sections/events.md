---
layout: center
---

# Events

---

# Events / What are events?


- Events are custom attributes you can register on a component.
- They are triggered by the user or the browser.
- Events are passed to a component similar to how HTML attributes are passed to HTML elements.

```vue
<template>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  ...
  methods: {
    increment() {
      this.count++;
    }
  }
}
```

---

# Events / Syntax

- `@` is a shorthand for `v-on:`
- `@click` - Event name
- `@click.prevent` - Event modifier ([demo](https://stackblitz.com/edit/vue-z8edtn?file=src%2FApp.vue))

---
layout: center
---

# 🏋️ Exercise  5 🏋️

1. Change the text of the button to "Loading..."
2. Get the current location
3. Log the location to the console
4. Add a try/catch block and alert the user if the location could not be retrieved
5. Change the text of the button back to "Zoom to current location"
