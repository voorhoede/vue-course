---
layout: center
---

# Lifecycle

---

# Lifecycle / What is the lifecycle?

- Every Vue instance goes through a series of initialization steps when it’s created.
- For example, it needs to set up:
    - Data observation
    - Compile the template
    - Mount the instance to the DOM
    - Update the DOM when data changes

---

# Lifecycle / Diagram

<img src="/images/lifecycle.png" class="h-11/12" />

---
layout: center
---

# 🏋️ Exercise 9 🏋️

1. Add a mounted hook to the App component. It needs to assign the result of the `fetchDailyForecast` function to the `forecast` data property.
