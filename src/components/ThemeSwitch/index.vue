<template>
  <div class="switch-wrapper">
    <v-switch
      :prepend-icon="DayIcon"
      :append-icon="NightIcon"
      @change="toggleTheme"
      base-color="amber-darken-2"
      color="blue-darken-4"
      inset
      center-affix
    ></v-switch>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';

import DayIcon from '@assets/icons/DayIcon.vue';
import NightIcon from '@assets/icons/NightIcon.vue';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<style lang="scss" scoped>
.switch-wrapper {
  width: 140px;
}

::v-deep(.v-input__details) {
  padding: 0;
  height: 0px;
  min-height: unset;
}

::v-deep(.v-messages) {
  height: 0px;
  min-height: unset;
}
</style>
