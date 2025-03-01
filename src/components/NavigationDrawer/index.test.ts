import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import NavigationDrawer from './index.vue';

const vuetify = createVuetify();

describe('Given NavigationDrawer component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<v-app><NavigationDrawer /></v-app>`,
        components: { NavigationDrawer }
      },
      {
        global: {
          plugins: [vuetify]
        }
      }
    );
  });

  it('should render the components without issues', () => {
    // console.log('11111', wrapper.html());

    expect(wrapper.find('.v-navigation-drawer').exists()).toBe(true);
    expect(wrapper.find('.v-list').exists()).toBe(true);
    expect(wrapper.find('.v-list-item').exists()).toBe(true);
    expect(wrapper.find('.v-btn').exists()).toBe(true);
  });
});
