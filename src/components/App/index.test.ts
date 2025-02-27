import { mount } from '@vue/test-utils';

import App from './index.vue';

jest.mock('../Header/index.vue', () => ({
  name: 'Header',
  template: '<div data-test="header">Header Mock</div>'
}));

jest.mock('../Content/index.vue', () => ({
  name: 'Content',
  template: '<div data-test="content">Content Mock</div>'
}));

jest.mock('../Footer/index.vue', () => ({
  name: 'Footer',
  template: '<div data-test="footer">Footer Mock</div>'
}));

describe('Given App component', () => {
  it('renders the component without issues', () => {
    const wrapper = mount(App);

    expect(wrapper.find('[data-test="header"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="content"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="footer"]').exists()).toBe(true);
    expect(wrapper.find('v-app').exists()).toBe(true);
  });
});
