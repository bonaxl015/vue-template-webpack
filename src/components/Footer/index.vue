<template>
  <v-footer name="footer" app border>
    <v-row justify="center" no-gutters>
      <v-col class="text-center" aria-label="footer-text">
        Copyright {{ year }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
