---
layout: center
---

# Components

---

# Components / Thinking in components

<img src="/images/components-empty.png" :style="{ maxHeight: '90%' }" />

---

# Components / Thinking in components

<img src="/images/components-base.png" :style="{ maxHeight: '90%' }" />

---

# Components / Thinking in components

<img src="/images/components-all.png" :style="{ maxHeight: '90%' }" />

---

# Components / Vue component

`PersonCard.vue`:

```vue
<template>
    <div>
        <h1>John Doe</h1>
        <p>Age: 30</p>
        <p>City: Amsterdam</p>
    </div>
</template>
```

`AppMain.vue`:

```vue
<template>
    <div>
        <PersonCard />
    </div>
</template>
```

---

# Components / Demo

<StackBlitzEmbed id="vue-nr25zh" file="src/components/PersonCard.vue" />

---
layout: center
---

# 🏋️ Exercise 1 🏋️

1. Create components from the HTML
2. Import the components
3. Use the components in the template
