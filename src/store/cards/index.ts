import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { CardListState, StoreCard } from './types';
import { RootState } from '../types';
import cardListData from '../../assets/cards.json';
import { Card } from '@/components/Card/CardInterface';

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
        console.log('card Updated called', payload);
        const index = state.list.findIndex(card => card.slug === payload.slug);
        state.list[index] = { ...payload };
    },
};

// just to  create the structure I make this dumb getter
const getters: GetterTree<CardListState, RootState> = {
    totalCards(state): number {
        return state.list.length;
    },
};

export const cardList: Module<CardListState, RootState> = {
    namespaced,
    state: cardListState,
    getters,
    actions,
    mutations,
};
