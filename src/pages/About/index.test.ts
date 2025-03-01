import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import { createRouter, createWebHistory } from 'vue-router';

import routes from '@utils/routeList';

import AboutPage from './index.vue';

const vuetify = createVuetify();

const router = createRouter({
  history: createWebHistory(),
  routes
});

describe('Given NotFound component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<AboutPage />`,
        components: { AboutPage }
      },
      {
        global: {
          plugins: [vuetify, router]
        }
      }
    );
  });

  it('should render the component without issues', () => {
    expect(wrapper.find('[aria-label="about-page"]').exists()).toBe(true);
    expect(wrapper.find('.v-card').exists()).toBe(true);
    expect(wrapper.find('.v-card-title').exists()).toBe(true);
    expect(wrapper.find('.v-card-title').text()).toBe('About Me');
    expect(wrapper.find('.v-list-item-title').text()).toBe(
      'Bon Axl Feeser - Senior Software Engineer'
    );
    expect(wrapper.find('.v-list-item-subtitle').text()).toBe(
      "Bally's Interactive"
    );
    expect(wrapper.find('.v-btn').exists()).toBe(true);
    expect(wrapper.find('.v-btn').text()).toBe('Go to Home');
  });

  it('should navigate to home page when Go to Home button is clicked', async () => {
    router.push('/about');

    await router.isReady();

    const button = wrapper.find('.v-btn');

    expect(button.exists()).toBe(true);

    await button.trigger('click');

    expect(wrapper.vm.$route.path).toBe('/');
  });
});
