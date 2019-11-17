import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils';
import NavigationMenuComponent from './NavigationMenu.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('NavigationMenuComponent.vue', () => {
    let wrapper: Wrapper<NavigationMenuComponent>;
    beforeEach(() => {
        wrapper = shallowMount(NavigationMenuComponent, {
            localVue,
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
