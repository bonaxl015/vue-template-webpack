<template>
  <v-container class="fill-height text-center" aria-label="home-page">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-4">Vue Template</h1>
        <p class="text-subtitle mb-6">Libraries used in this project:</p>
        <v-container fluid max-width="540">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-checkbox
                v-for="item in libraryListLeft"
                v-model="checked"
                :key="item.key"
                :label="item.label"
                color="primary"
                class="w-50"
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
                class="w-50"
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

import { libraryListLeft, libraryListRight } from './constants/checkboxList';

const checked = ref(true);
</script>
