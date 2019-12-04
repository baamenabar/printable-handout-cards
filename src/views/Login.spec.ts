import { shallowMount, Wrapper } from '@vue/test-utils';
import LoginComponent from './Login.vue';

describe('Login.vue View', () => {
    let wrapper: Wrapper<LoginComponent>;
    beforeEach(() => {
        wrapper = shallowMount<LoginComponent>(LoginComponent);
    });

    it('Should render', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
