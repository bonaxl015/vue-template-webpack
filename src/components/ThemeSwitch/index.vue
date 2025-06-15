<template>
  <div class="switch-wrapper">
    <v-switch
      aria-label="theme-switch"
      :prepend-icon="DayIcon"
      :append-icon="NightIcon"
      @change="toggleTheme"
      base-color="white"
      color="white"
      inset
      center-affix
      hide-details
    ></v-switch>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useTheme } from 'vuetify';

import DayIcon from '@assets/icons/DayIcon.vue';
import NightIcon from '@assets/icons/NightIcon.vue';

const theme = useTheme();

onMounted(() => {
  const initialThemeValue = localStorage.getItem('theme') ?? 'light';

  theme.global.name.value = initialThemeValue;
});

function toggleTheme() {
  const themeValue = theme.global.current.value?.dark ? 'light' : 'dark';

  theme.global.name.value = themeValue;
  localStorage.setItem('theme', themeValue);
}
</script>

<style lang="scss" scoped>
.switch-wrapper {
  width: 140px;
}
</style>
