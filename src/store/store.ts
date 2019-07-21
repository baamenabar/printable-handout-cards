import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
    state: { version: '1.0.0' },
    mutations: {},
    actions: {},
};
export default new Vuex.Store(options);
