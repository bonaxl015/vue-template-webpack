import { createApp } from 'vue';
import App from '@components/App/index.vue';

import { vuetify } from './plugins/vuetify';
import { router } from './plugins/router';
import './styles/global.scss';

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount('#root-container');
