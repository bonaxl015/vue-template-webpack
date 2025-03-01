<template>
  <div class="nav-button-wrapper" aria-label="navigation-buttons">
    <v-btn variant="text" to="/">Home</v-btn>
    <v-btn variant="text" to="/about">About</v-btn>
  </div>
</template>

<style lang="scss">
.nav-button-wrapper {
  display: inline-flex;
  gap: 0.25rem;
  margin-right: 1.5rem;
}
</style>
