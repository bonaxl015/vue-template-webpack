import { mount } from '@vue/test-utils';

import App from './index.vue';

jest.mock('vue-router', () => ({
  RouterView: {
    template: '<div data-test="router-view"></div>'
  }
}));

describe('Given App component', () => {
  it('renders the component without issues', () => {
    const wrapper = mount(App);

    expect(wrapper.find('[data-test="router-view"]').exists()).toBe(true);
  });
});
