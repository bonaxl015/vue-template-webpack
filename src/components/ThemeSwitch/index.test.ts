import { shallowMount } from '@vue/test-utils';
import { ThemeInstance, useTheme } from 'vuetify';

import ThemeSwitch from '@components/ThemeSwitch/index.vue';

jest.mock('vuetify', () => ({
  useTheme: jest.fn()
}));

jest.mock('@assets/icons/DayIcon.vue', () => ({
  default: {
    template: '<span data-test="day-icon"></span>'
  }
}));

jest.mock('@assets/icons/NightIcon.vue', () => ({
  default: {
    template: '<span data-test="night-icon"></span>'
  }
}));

describe('Given ThemeSwitch component', () => {
  let themeMock: ThemeInstance;

  beforeEach(() => {
    themeMock = {
      global: {
        current: { value: { dark: false } },
        name: { value: 'light' }
      }
    } as ThemeInstance;
    (useTheme as jest.Mock).mockReturnValue(themeMock);
  });

  it('renders v-switch component', () => {
    const wrapper = shallowMount(ThemeSwitch);
    expect(wrapper.find('v-switch').exists()).toBe(true);
  });

  it('toggles theme on switch change', async () => {
    const wrapper = shallowMount(ThemeSwitch);
    await wrapper.find('v-switch').trigger('change');
    expect(themeMock.global.name.value).toBe('dark');
  });
});
