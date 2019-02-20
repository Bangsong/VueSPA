import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './js/router';
import './css/common.css';
import 'animate.css'

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    router
}).$mount("#app");