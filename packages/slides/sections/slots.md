---
layout: center
---

# Slots

---

# Slots / What are slots?

- Slots are placeholders inside a component that you can fill with your own markup
- Lets you create components that are more flexible and reusable.

---

# Slots / Example

<div class="grid grid-cols-2 gap-4">

<div>

```vue {all|5}
<!-- AppHeader.vue -->
<template>
  <div>
    <h1>Site title</h1>
    <slot></slot>
  </div>
</template>
```

```vue {all|4,5,6}
<!-- App.vue -->
<template>
  <MyApp>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </MyApp>
</template>
```

</div>

<div>

```html {all|4,5,6}
<!-- Result -->
<div>
  <h1>Site title</h1>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</div>
```

</div>

</div>

---

# Slots / Named slots

<div class="grid grid-cols-2 gap-4">

<div>

```vue {all|5}
<!-- AppHeader.vue -->
<template>
  <div>
    <h1>Site title</h1>
    <slot name="navigation"></slot>
  </div>
</template>
```

```vue {all|4,5,6,7,8}
<!-- App.vue -->
<template>
  <MyApp>
    <template v-slot:navigation>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </template>
  </MyApp>
</template>
```

</div>

<div>

```html {all|4,5,6}
<!-- Result -->
<div>
  <h1>Site title</h1>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</div>
```

</div>

</div>
