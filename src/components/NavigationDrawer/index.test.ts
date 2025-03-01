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
  const mockToggleDrawer = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = mount(
      {
        template: `<v-app><NavigationDrawer v-bind="props" /></v-app>`,
        components: { NavigationDrawer },
        setup() {
          return {
            props: {
              isOpen: true,
              toggleDrawer: mockToggleDrawer
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

  it('should toggle the drawer when About button is clicked', async () => {
    const aboutButton = wrapper.findAll('.v-btn')?.[1];

    expect(aboutButton.exists()).toBe(true);

    await aboutButton.trigger('click');

    expect(mockToggleDrawer).toHaveBeenCalledTimes(1);
  });

  it('should navigate to home page when Home button is clicked', async () => {
    const homeButton = wrapper.findAll('.v-btn')?.[0];

    expect(homeButton.exists()).toBe(true);

    await homeButton.trigger('click');

    expect(mockToggleDrawer).toHaveBeenCalledTimes(1);
  });
});
