import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase/app';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB4LbbsXkgGPw1DehRwvo9EV_pEoa8DPL8',
            authDomain: 'printable-handout-cards.firebaseapp.com',
            databaseURL: 'https://printable-handout-cards.firebaseio.com',
            projectId: 'printable-handout-cards',
            storageBucket: 'printable-handout-cards.appspot.com',
            messagingSenderId: '914975411839',
            appId: '1:914975411839:web:1919887ad31fe55ea9f94a',
            measurementId: 'G-7QGJW7QTWP',
        });
    },
}).$mount('#app');
