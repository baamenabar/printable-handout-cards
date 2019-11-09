import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils';
import CardListComponent from './CardList.vue';
import { storeOptionsMock } from '@/store/store.mock';
import Vuex from 'vuex';

describe('CardList', () => {
    let wrapper: Wrapper<CardListComponent>;

    const localVue = createLocalVue();
    localVue.use(Vuex);

    beforeEach(() => {
        wrapper = shallowMount<CardListComponent>(CardListComponent, {
            store: new Vuex.Store(storeOptionsMock),
            localVue,
        });
    });
    it('should ', () => {
        expect('hello').toBeTruthy();
    });
});
