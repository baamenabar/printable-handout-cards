import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase/app';
import store from './store';
import { firebaseConfig } from '@/config/env.prod';
import './registerServiceWorker';

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
