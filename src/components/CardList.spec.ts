import {
    Wrapper,
    shallowMount,
    createLocalVue,
    VueClass,
} from '@vue/test-utils';
import CardListComponent from './CardList.vue';
import Vuex from 'vuex';

describe('CardList', () => {
    let wrapper: Wrapper<CardListComponent>;
    let localVue;

    beforeEach(() => {
        wrapper = shallowMount<CardListComponent>(CardListComponent);
        localVue = createLocalVue();
        localVue.use(Vuex);
    });
    it('should ', () => {
        expect('hello').toBeTruthy();
    });
});
