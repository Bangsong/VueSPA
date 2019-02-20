import VueRouter from 'vue-router';

import Login from '../components/login.vue';
import Index from '../components/index.vue';

const routes = [
    {path:'/',redirect:"/index"},
    {path:'/login',component:Login},
    {path:'/index',component:Index}
];
const router = new VueRouter({routes});
router.beforeEach((to, from, next) => {
    if (to.path == "/login" || to.path == '/logout') {
        localStorage.removeItem('token');
        to.path == '/logout' && next({ path: '/login' });
    }
    else {
        localStorage.getItem('token') == null && next({ path: '/login' });
    }
    next();
});

export default router;

