import { shallowMount, Wrapper } from '@vue/test-utils';
import NavigationComponent from './Navigation.vue';
import { qaDataAttrSelector } from '@/../tests/helper';

describe('Navigation.vue', () => {
    let wrapper: Wrapper<NavigationComponent>;

    beforeEach(() => {
        wrapper = shallowMount(NavigationComponent);
    });

    it('Should render Navigation component', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('Should have burger menu button', () => {
        expect(wrapper.contains(qaDataAttrSelector('burger-menu-button'))).toBe(
            true
        );
    });

    it('Should have a navigation menu component that is hidden by default', () => {
        const navMenuComponent = wrapper.find({
            name: 'NavigationMenuComponent',
        });
        expect(navMenuComponent.exists()).toBe(true);
    });
});
