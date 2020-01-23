import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Details from '../views/Details.vue';
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
        {
            path: '/details',
            name: 'details',
            component: Details,
        },
    ],
});
export default router;
//# sourceMappingURL=index.js.map