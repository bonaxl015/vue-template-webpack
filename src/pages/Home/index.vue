<template>
  <v-container class="fill-height text-center" aria-label="home-page">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img
          :aspect-ratio="1"
          class="vue-logo"
          :src="vueImage"
          width="260"
          aria-label="vue-logo"
        ></v-img>
        <h1 class="text-h4 font-weight-bold mb-4" aria-label="heading">
          Vue Template
        </h1>
        <p class="text-subtitle mb-6" aria-label="sub-heading">
          Libraries used in this project:
        </p>
        <v-container fluid max-width="540">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-checkbox
                v-for="item in libraryListLeft"
                v-model="checked"
                :key="item.key"
                :label="item.label"
                color="primary"
                :class="`w-50 library-list-${item.value}`"
                hide-details
                readonly
              ></v-checkbox>
            </v-col>
            <v-col cols="12" sm="6">
              <v-checkbox
                v-for="item in libraryListRight"
                v-model="checked"
                :key="item.key"
                :label="item.label"
                color="primary"
                :class="`w-50 library-list-${item.value}`"
                hide-details
                readonly
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import vueImage from '@assets/images/vue.png';

import { libraryListLeft, libraryListRight } from './constants/checkboxList';

const checked = ref(true);
</script>

<style lang="scss">
.vue-logo {
  justify-self: center;
  align-self: center;
}
</style>
