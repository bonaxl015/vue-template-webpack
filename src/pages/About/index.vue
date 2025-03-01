<template>
  <v-container aria-label="about-page">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <v-card-title class="text-h4 font-weight-bold">About Me</v-card-title>
          <v-card-subtitle>Discover more about this project</v-card-subtitle>
          <v-card-text class="mt-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa. Sapiente harum inventore deserunt facilis tempore dolore
              error, iure quasi quae dolores atque minima officia maiores
              accusamus voluptatum ad rem! Quibusdam cum at et quam nihil omnis
              perspiciatis! Nam nemo, soluta pariatur cupiditate a suscipit
              repudiandae, animi ratione nisi, velit blanditiis asperiores quos
              veniam debitis fuga provident inventore voluptatum ullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum blanditiis tempora maiores esse, veniam obcaecati eum.
              Corrupti consequatur cumque laboriosam, molestias quasi dolorum
              ratione non pariatur eius ipsam, iste debitis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              ipsa. Sapiente harum inventore deserunt facilis tempore dolore
              error, iure quasi quae dolores atque minima officia maiores
              accusamus voluptatum ad rem! Quibusdam cum at et quam nihil omnis
              perspiciatis! Nam nemo, soluta pariatur cupiditate a suscipit
              repudiandae, animi ratione nisi, velit blanditiis asperiores quos
              veniam debitis fuga provident inventore voluptatum ullam.
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <h3 class="text-h5 font-weight-bold">Author</h3>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar color="primary">B</v-avatar>
                </template>
                <v-list-item-title>
                  Bon Axl Feeser - Senior Software Engineer
                </v-list-item-title>
                <v-list-item-subtitle>
                  Bally's Interactive
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" to="/">Go to Home</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
