import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import HeaderComponent from './Header.vue';
import { qaDataAttrSelector } from '@/../tests/helper';
import { storeOptionsMock } from '@/store/store.mock';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

// set up localVue to use the Router and Store
const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe('Header.vue', () => {
    let wrapper: Wrapper<HeaderComponent>;

    beforeEach(() => {
        wrapper = mount(HeaderComponent, {
            localVue,
            store: new Vuex.Store(storeOptionsMock),
            router: new VueRouter({ routes: [], mode: 'history' }),
        });
    });
    it('should mount HeaderComponent', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });
    it('Should render an SVG logo and a title', () => {
        expect(
            (wrapper
                .find(qaDataAttrSelector('app-logo') + ' > img')
                .attributes('src') as string).substr(-4)
        ).toBe('.svg');
        expect(wrapper.find(qaDataAttrSelector('app-title')).text()).toBe(
            // Printable<br>Cards
            'PrintableCards'
        );
    });
    it('Logo should have a link to the root route', () => {
        expect(
            wrapper
                .find(qaDataAttrSelector('app-logo'))
                .attributes('href') as string
        ).toBe('/');
    });
    it('Should have a navigation component', () => {
        expect(wrapper.find({ name: 'NavigationComponent' }).exists()).toBe(
            true
        );
    });
});
