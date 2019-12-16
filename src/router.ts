import Vue from 'vue';
import Router, { Route } from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store';
import { UserState } from './store/user/types';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',

            // to prevent getting to the /login when you are looged in already
            // does not work really. the store is not readdy yet
            beforeEnter: (to: Route, from: Route, next: any) => {
                // poor typescript support from Vuex
                if (!store.getters.isKnownUser) {
                    next();
                } else {
                    next('/');
                }
            },
            component: () =>
                import(/* webpackChunkName: "login" */ './views/Login.vue'),
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
