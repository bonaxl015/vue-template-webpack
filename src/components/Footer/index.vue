<template>
  <v-footer name="footer" app border>
    <v-row justify="center" no-gutters>
      <v-col class="text-center">Copyright test {{ year }}</v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>
