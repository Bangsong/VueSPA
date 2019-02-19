import VueRouter from 'vue-router';

import Login from '../components/login.vue';
import Index from '../components/index.vue';

const routes = [
    {path:'/login',component:Login},
    {path:'/index',component:Index}
];
const router = new VueRouter({routes});
export default router;

