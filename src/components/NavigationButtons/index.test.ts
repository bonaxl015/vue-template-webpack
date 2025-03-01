import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import NavigationButtons from './index.vue';

const vuetify = createVuetify();

describe('Given NavigationButtons component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<NavigationButtons />`,
        components: { NavigationButtons }
      },
      {
        global: {
          plugins: [vuetify]
        }
      }
    );
  });

  it('should render the component without any issues', () => {
    const [homeButton, aboutButton] = wrapper.findAll('.v-btn');

    expect(wrapper.find('[aria-label="navigation-buttons"]').exists()).toBe(
      true
    );
    expect(homeButton.text()).toBe('Home');
    expect(aboutButton.text()).toBe('About');
  });
});
