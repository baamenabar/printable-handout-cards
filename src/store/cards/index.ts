// import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { Module, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import { CardListState, StoreCard } from './types';
import { RootState } from '../types';
import cardListData from '../../assets/cards.json';
import { Card } from '@/components/Card/CardInterface';
import { ActionTree, MutationTree, GetterTree } from 'vuex';

const namespaced = true;

// we use this name to prevent typsecript from complaining about shadowed variables of "state".
const cardListState: CardListState = {
    list: [],
};

// we declare the actionsTree config
const actions: ActionTree<CardListState, RootState> = {
    // probably used to initilize the data
    loadCards({ commit }): void {
        // commit the mutation
        commit('cardsLoaded', cardListData);
    },
    addCard({ commit }): void {
        commit('cardAdded');
    },
    deleteCard({ commit }, slug: string): void {
        commit('cardRemoved', slug);
    },
    updateCardData({ commit }, payload: Card): void {
        commit('cardUpdated', payload);
    },
};

const mutations: MutationTree<CardListState> = {
    cardsLoaded(state: CardListState, payload: StoreCard[]): void {
        state.list = payload;
    },
    cardAdded(state: CardListState): void {
        state.list.push({
            name: 'new card',
            slug: '' + new Date().getTime(),
            description: '',
            imageUrl: '',
        });
    },
    cardRemoved(state: CardListState, slug: string): void {
        state.list.splice(state.list.findIndex(card => card.slug === slug), 1);
    },
    cardUpdated(state: CardListState, payload: Card): void {
        const index = state.list.findIndex(card => card.slug === payload.slug);
        state.list[index] = { ...payload };

        // force triggering the "list" getter
        state.list = [...state.list];
    },
};

// Use getters fo all properties of the state you want to have checked for changes.
const getters: GetterTree<CardListState, RootState> = {
    // dumb getter
    totalCards(state): number {
        return state.list.length;
    },

    /**
     * This is the main holder of  data in the cardlist
     */
    list(state: CardListState): Card[] {
        return state.list;
    },
};
@Module({
    dynamic: true,
    store: Store,
    name: 'cardList',
    namespaced: true,
})
export default class store extends VuexModule {
    namespaced,
    state: cardListState,
    getters,
    actions,
    mutations,
}
