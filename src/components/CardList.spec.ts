import { Wrapper, shallowMount, createLocalVue } from '@vue/test-utils';
import CardListComponent from './CardList.vue';
import CardComponent from './Card/Card.vue';
import { storeOptionsMock } from '@/store/store.mock';
import Vuex from 'vuex';

const selectorAddButton = '[data-automationid="add-button"]';

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
    it('should render', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        // expect((wrapper.vm as any).)
    });
    it('should render a button to add a new item to the list', async () => {
        expect(wrapper.contains(selectorAddButton)).toBe(true);
        expect(wrapper.findAll(CardComponent).length).toBe(2);
        wrapper.find(selectorAddButton).trigger('click');
        await localVue.nextTick();
    });
    it('new added items should update the store inmediatelly', () => {
        // wrapper.find(selectorAddButton).click()
        // expect()
    });
});
