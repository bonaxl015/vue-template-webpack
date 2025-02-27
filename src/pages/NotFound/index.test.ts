import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './index.vue';

const vuetify = createVuetify();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      strict: true,
      sensitive: true,
      component: () => import('@pages/Home/index.vue')
    }
  ]
});

describe('Given NotFound component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<NotFound />`,
        components: { NotFound }
      },
      {
        global: {
          plugins: [vuetify, router]
        }
      }
    );
  });

  it('should display the component without any issues', () => {
    expect(wrapper.find('[aria-label="not-found"]').exists()).toBe(true);
    expect(wrapper.find('.mdi-alert-circle-outline').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('404');
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe(
      "Oops! The page you're looking for doesn't exist."
    );
    expect(wrapper.find('.v-btn').exists()).toBe(true);
    expect(wrapper.find('.v-btn__content').text()).toBe('Go Back Home');
  });

  it('should navigate to home page when Go Back Home button is clicked', async () => {
    router.push('/not-found');

    await router.isReady();

    const button = wrapper.find('.v-btn');

    expect(button.exists()).toBe(true);

    await button.trigger('click');

    expect(wrapper.vm.$route.path).toBe('/');
  });
});
