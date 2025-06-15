<template>
  <v-app-bar color="primary" :elevation="2">
    <template v-slot:prepend v-if="xs">
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title aria-label="logo-title">Vue Template</v-app-bar-title>
    <template v-slot:append>
      <NavigationButtons v-if="!xs" />
      <ThemeSwitch />
    </template>
  </v-app-bar>
  <NavigationDrawer v-if="xs" :isOpen="isOpen" @toggleDrawer="toggleDrawer" />
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { ref } from 'vue';

import ThemeSwitch from '../ThemeSwitch/index.vue';
import NavigationDrawer from '../NavigationDrawer/index.vue';
import NavigationButtons from '../NavigationButtons/index.vue';

const { xs } = useDisplay();
const isOpen = ref<boolean>(false);

const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};
</script>
