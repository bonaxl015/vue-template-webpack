import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import Header from './index.vue';

const vuetify = createVuetify();

jest.mock('../ThemeSwitch/index.vue', () => ({
  name: 'ThemeSwitch',
  template: '<div aria-label="theme-switch"></div>'
}));

describe('Given Header.vue component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<v-app><Header /></v-app>`,
        components: { Header }
      },
      {
        global: {
          plugins: [vuetify]
        }
      }
    );
  });

  it('renders the Header component without any issues', () => {
    expect(wrapper.find('.v-app-bar').exists()).toBe(true);
    expect(wrapper.find('.v-app-bar-nav-icon').exists()).toBe(true);
    expect(wrapper.find('.v-app-bar-title').exists()).toBe(true);
    expect(wrapper.find('.v-app-bar-title').text()).toBe('Vue Template');
    expect(wrapper.find('[aria-label="theme-switch"]').exists()).toBe(true);
  });
});
