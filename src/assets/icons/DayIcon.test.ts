import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import DayIcon from './DayIcon.vue';

const vuetify = createVuetify();

describe('Given DayIcon compoentn', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<DayIcon />`,
        components: { DayIcon }
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
    expect(wrapper.find('.mdi-white-balance-sunny').exists()).toBe(true);
  });
});
