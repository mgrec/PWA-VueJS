import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Details from '../views/Details.vue';
import Auth from '@okta/okta-vue';

Vue.use(Router);

Vue.use(Auth, {
    issuer: 'https://dev-595700.okta.com/oauth2/default',
    client_id: '0oa11qneqCEtzS0914x6',
    redirect_uri: window.location.origin + '/implicit/callback',
});


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
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/details',
            name: 'details',
            component: Details,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/implicit/callback',
            component: Auth.handleCallback()
        },
    ],

});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());
export default router;
