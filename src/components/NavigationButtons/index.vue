<template>
  <div class="nav-button-wrapper" aria-label="navigation-buttons">
    <v-btn variant="text" to="/" aria-label="home-nav">Home</v-btn>
    <v-btn variant="text" to="/about" aria-label="about-nav">About</v-btn>
  </div>
</template>

<style lang="scss">
.nav-button-wrapper {
  display: inline-flex;
  gap: 0.25rem;
  margin-right: 1.5rem;
}
</style>
