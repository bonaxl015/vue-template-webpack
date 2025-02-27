import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import NightIcon from './NightIcon.vue';

const vuetify = createVuetify();

describe('Given NightIcon compoentn', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<NightIcon />`,
        components: { NightIcon }
      },
      {
        global: {
          plugins: [vuetify]
        }
      }
    );
  });

  it('should display the icon without any issues', () => {
    expect(wrapper.find('.v-icon').exists()).toBe(true);
    expect(wrapper.find('.mdi-moon-waning-crescent').exists()).toBe(true);
  });
});
