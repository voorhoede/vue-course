<template>
    <ul class="forecast-list">
        <slot />
    </ul>
</template>

<script>
export default {}
</script>

<style>
.forecast-list {
    display: flex;
    padding: 0;
    overflow: auto;
    gap: 16px;
    list-style: none;
    min-height: 244px;
}
</style>

