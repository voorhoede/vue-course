---
layout: center
---

# Directives

---

# Directives / What are directives?

- Directives are custom attributes you can register on a component.
- Directives are used to add special behavior to components.
- Directives are passed to a component similar to how HTML attributes are passed to HTML elements.

```vue
<template>
  <div v-if="show">Hello</div>
</template>
```

---

# Directives / `v-text`

- Used to set the text content of an element.
- Similar to using `{{ }}` in a template.

```vue
<template>
  <div v-text="message"></div>
</template>
```

---

# Directives / `v-bind`

- Used to dynamically bind one or more attributes, or a component prop to an expression.
- Used for data binding.
- Shorthand for this is `:`.

```vue
<template>
  <div v-bind:class="className"></div>
</template>
```

```vue
<template>
  <div :class="className"></div>
</template>
```

---

# Directives / `v-if` - `v-else-if` - `v-else`

- Used to conditionally render a block.
- The block will only be rendered if the directive’s expression returns a truthy value.

```vue
<template>
  <div>
    <p v-if="isAuthenticated">Welcome back, {{ username }}!</p>
    <p v-else-if="isLoggingIn">Logging in...</p>
    <p v-else>Log in to continue.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
      isLoggingIn: false,
      username: 'John Doe',
    }
  },
}
```

---

# Directives / `v-show`

- Used to conditionally render a block.
- The block will always be rendered and remain in the DOM; `display: none` is used to hide the block.

```vue
<template>
  <div>
    <h1 v-show="showTitle">Welcome to my website!</h1>
    <button @click="toggleTitle">Toggle Title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitle: true
    }
  },
  methods: {
    toggleTitle() {
      this.showTitle = !this.showTitle
    }
  }
}
</script>
```

---

# Directives / `v-for`

- Used to render a list of items based on an array.
- The directive’s expression can be a string, number, boolean, or object.

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]
    }
  },
}
</script>
```

---

# Directives / `v-model`

- Used to create two-way data bindings on form input, textarea, and select elements.

```vue
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },
}
</script>
```

---

# Directives / `v-on`

- Used to listen to DOM events and run some JavaScript when they’re triggered.
- Shorthand for this is `@`.

```vue
<template>
  <div>
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

---
layout: center
---

# 🏋️ Exercise 3 🏋️

1. Replace the forecast object with the following data:
2. Use v-for to loop over the items in the array
3. Render the data of each individual item
