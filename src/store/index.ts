import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { cardList } from './cards';
import { user } from './user/user';

/**
 * This is the main Store file,
 * from here all store modules get imported
 * Design is very inspired by https://codeburst.io/vuex-and-typescript-3427ba78cfa8
 */
Vue.use(Vuex);

/**
 * The store configuration, that we later pass to the store creation
 */
const options: StoreOptions<RootState> = {
    state: { version: '1.0.0' },
    mutations: {},
    actions: {},
    modules: {
        cardList,
        user,
    },
};
export default new Vuex.Store(options);
