import { mount } from '@vue/test-utils';

import Content from './index.vue';

jest.mock('vue-router', () => ({
  RouterView: {
    template: '<div data-test="router-view"></div>'
  }
}));

describe('Given Content component', () => {
  it('renders the component without issues', () => {
    const wrapper = mount(Content);

    expect(wrapper.find('v-main').exists()).toBe(true);
    expect(wrapper.find('[data-test="router-view"]').exists()).toBe(true);
  });
});
