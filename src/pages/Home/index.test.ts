import { mount, VueWrapper } from '@vue/test-utils';
import { createVuetify } from 'vuetify';

import { libraryListLeft, libraryListRight } from './constants/checkboxList';

import HomePage from './index.vue';

const vuetify = createVuetify();

describe('Given NotFound component', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(
      {
        template: `<HomePage />`,
        components: { HomePage }
      },
      {
        global: {
          plugins: [vuetify]
        }
      }
    );
  });

  it('should render the component without issues', () => {
    const libraryListLeftLength = libraryListLeft.length;
    const libraryListRightLength = libraryListRight.length;
    const checkboxComponents = wrapper.findAll('.v-checkbox');

    expect(wrapper.find('[aria-label="home-page"]').exists()).toBe(true);
    expect(wrapper.find('.v-checkbox').exists()).toBe(true);
    expect(checkboxComponents.length).toBe(
      libraryListLeftLength + libraryListRightLength
    );
  });
});
