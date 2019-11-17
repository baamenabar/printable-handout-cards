import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils';
import App from './App.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App.vue', () => {
    let wrapper: Wrapper<App>;

    beforeEach(() => {
        wrapper = shallowMount(App, {
            localVue,
            router: new VueRouter({ routes: [], mode: 'history' }),
        });
    });

    it('Should render', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('Should render a HeaderComponent', () => {
        expect(wrapper.find({ name: 'HeaderComponent' }).isVisible()).toBe(
            true
        );
    });
});
