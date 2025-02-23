import { mount } from '@vue/test-utils';

import App from './index.vue';

describe('App.vue', () => {
  it('renders a message', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('Hello Vue 3');
  });
});
