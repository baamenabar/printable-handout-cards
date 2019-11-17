import { shallowMount, Wrapper } from '@vue/test-utils';
import Home from './Home.vue';

describe('Home View', () => {
    let wrapper: Wrapper<Home>;
    beforeEach(() => {
        wrapper = shallowMount<Home>(Home);
    });

    it('Should render', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();

        // to keep a note about how  to  directly access a prop
        // in this case the method would be const message='hallo'
        // expect(wrapper.vm.message.toBe('hallo');

        // to keep a note about how  to  directly call a method
        // in this case the method would be hello(){return 'hello worlds'}
        // expect((wrapper.vm as any).hello()).toBe('hello worlds');

        // Thie above is a bug, check here:
        // https://github.com/vuejs/vue-test-utils/issues/255#issuecomment-408810553
    });

    it('Should render CardListComponent', () => {
        expect(wrapper.find({ name: 'CardListComponent' }).exists()).toBe(true);
    });
});
