<template>
  <div class="app">
    <h1 class="header">Hello Vue 3</h1>
    <h1>{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
  <ThemeSwitch />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ThemeSwitch from '../ThemeSwitch/index.vue';

const count = ref<number>(0);

const increment = () => {
  count.value = count.value + 1;
};

const decrement = () => {
  count.value = count.value - 1;
};
</script>

<style lang="scss" scoped>
.header {
  color: red;
}
</style>
