<template>
  <v-navigation-drawer
    v-model="props.isOpen"
    :location="xs ? 'left' : undefined"
    temporary
    mobile
    theme="primary"
  >
    <v-list>
      <v-list-item v-for="item in buttonNavList">
        <v-btn
          class="w-100"
          variant="text"
          :key="item.key"
          :to="item.to"
          @click="handleClick"
        >
          {{ item.name }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

import { ButtonNav } from './types';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const { xs } = useDisplay();

const emit = defineEmits(['toggleDrawer']);

const handleClick = (): void => {
  emit('toggleDrawer');
};

const buttonNavList: ButtonNav[] = [
  {
    key: '1',
    name: 'Home',
    to: '/'
  },
  {
    key: '2',
    name: 'About',
    to: '/about'
  }
];
</script>
