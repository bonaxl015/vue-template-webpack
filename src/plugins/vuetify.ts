import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { md3 } from 'vuetify/blueprints';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdiAccount } from '@mdi/js';

export const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  aliases: {
    account: mdiAccount
  }
});
