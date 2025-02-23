import { createApp } from 'vue';
import App from '@components/App/index.vue';

import { vuetify } from './plugins/vuetify';
import './styles/global.scss';

const app = createApp(App);

app.use(vuetify);
app.mount('#root-container');
