import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase/app';
import store from './store';
import { firebaseConfig } from '@/config/env.prod';
import './registerServiceWorker';

// Set this to false to prevent the "production" console tip on Vue startup.
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp(firebaseConfig);
        store.dispatch('user/userInit');
    },
}).$mount('#app');
