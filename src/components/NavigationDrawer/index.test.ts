import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { createRouter, createWebHistory } from 'vue-router';

import routes from '@utils/routeList';

import NavigationDrawer from './index.vue';

const vuetify = createVuetify();

const router = createRouter({
  history: createWebHistory(),
  routes
});

describe('Given NavigationDrawer component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = mount(
      {
        template: `<v-app><NavigationDrawer v-bind="props" /></v-app>`,
        components: { NavigationDrawer },
        setup() {
          return {
            props: {
              isOpen: true
            }
          };
        }
      },
      {
        global: {
          plugins: [vuetify, router]
        }
      }
    );
  });

  it('should render the components without issues', () => {
    expect(wrapper.find('.v-navigation-drawer').exists()).toBe(true);
    expect(wrapper.find('.v-list').exists()).toBe(true);
    expect(wrapper.find('.v-list-item').exists()).toBe(true);
    expect(wrapper.find('.v-btn').exists()).toBe(true);
  });
});
