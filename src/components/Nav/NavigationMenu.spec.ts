import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils';
import NavigationMenuComponent from './NavigationMenu.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { storeOptionsMock } from '@/store/store.mock';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe('NavigationMenuComponent.vue', () => {
    let wrapper: Wrapper<NavigationMenuComponent>;
    beforeEach(() => {
        wrapper = shallowMount(NavigationMenuComponent, {
            localVue,
            store: new Vuex.Store(storeOptionsMock),
            router: new VueRouter({
                routes: [],
                mode: 'history',
            }),
        });
    });
    it('Should render', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });
});
