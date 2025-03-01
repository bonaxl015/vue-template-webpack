import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify, useDisplay } from 'vuetify';

import Header from './index.vue';

const vuetify = createVuetify();

jest.mock('../ThemeSwitch/index.vue', () => ({
  name: 'ThemeSwitch',
  template: '<div data-test="theme-switch"></div>'
}));

jest.mock('../NavigationDrawer/index.vue', () => ({
  name: 'NavigationDrawer',
  template: '<div data-test="navigation-drawer"></div>'
}));

jest.mock('../NavigationButtons/index.vue', () => ({
  name: 'NavigationButtons',
  template: '<div data-test="navigation-buttons"></div>'
}));

jest.mock('vuetify', () => {
  const originalModule = jest.requireActual('vuetify');

  return {
    ...originalModule,
    useDisplay: jest.fn()
  };
});

describe('Given Header.vue component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    jest.resetModules();
    (useDisplay as jest.Mock).mockReturnValue({ xs: false });

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
    expect(wrapper.find('.v-app-bar-nav-icon').exists()).toBe(false);
    expect(wrapper.find('.v-app-bar-title').exists()).toBe(true);
    expect(wrapper.find('.v-app-bar-title').text()).toBe('Vue Template');
    expect(wrapper.find('[data-test="theme-switch"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="navigation-buttons"]').exists()).toBe(
      true
    );
  });
});
