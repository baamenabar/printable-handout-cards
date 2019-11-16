import { cardList } from './cards/card-list.mock';
import { StoreOptions } from 'vuex';
import { RootState } from './types';

export const storeOptionsMock: StoreOptions<RootState> = {
    state: { version: '0.0.1' },
    mutations: {},
    actions: {},
    modules: {
        cardList,
    },
};
