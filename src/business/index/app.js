import Vue from 'vue';
import Sd from '@skydragon/base';
import Cookie from '@tbj/cookie';
import Util from '@tbj/chen';
import Common from 'components/common/common.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './base/main';
import routerConfig from './router/index';
import ComConfig from './config.js';
import store from './store';

// 主题样式
import 'components/common/common.styl';

Vue.config.devtools = true;

// Router
Vue.use(VueRouter);

// Resource
Vue.use(VueResource);

// Cookie
Vue.use(Cookie);

// Util
Vue.use(Util);

// Common
Vue.use(Common);

// SkyDragon
Sd.injection(Vue, ComConfig);

Vue.use(Sd);

// 配置 resource
Vue.http.options.root = '';
Vue.http.options.emulateJSON = true;

const router = routerConfig(VueRouter);
new Vue(Vue.util.extend({
  router,
  store
}, App)).$mount('#app');