<template>
  <v-container class="fill-height text-center" aria-label="not-found">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-icon
          size="100"
          color="primary"
          icon="mdi-alert-circle-outline"
        ></v-icon>
        <h1 class="text-h3 font-weight-bold mb-4">404</h1>
        <p class="text-subtitle-1 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <v-btn color="primary" to="/">Go Back Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
