<template>
  <v-app-bar color="primary" :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Vue Template</v-app-bar-title>
    <template v-slot:append>
      <ThemeSwitch />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import ThemeSwitch from '../ThemeSwitch/index.vue';
</script>
