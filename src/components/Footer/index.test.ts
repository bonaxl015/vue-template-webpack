import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import Footer from './index.vue';

const vuetify = createVuetify();

describe('Given Footer component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<v-app><Footer /></v-app>`,
        components: { Footer }
      },
      {
        global: {
          plugins: [vuetify]
        }
      }
    );
  });

  it('should render the component without any issues', () => {
    const getYear = new Date().getFullYear();

    expect(wrapper.find('.v-footer').exists()).toBe(true);
    expect(wrapper.find('.v-row').exists()).toBe(true);
    expect(wrapper.find('.v-col').exists()).toBe(true);
    expect(wrapper.find('.v-col').text()).toBe(`Copyright test ${getYear}`);
  });
});
