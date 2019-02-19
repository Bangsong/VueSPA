import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './js/router';

Vue.use(VueRouter);

new Vue({
    render:h=>h(App),
    router
}).$mount("#app");