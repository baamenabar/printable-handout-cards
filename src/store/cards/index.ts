import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { CardListState, StoreCard } from './types';
import { RootState } from '../types';
import cardListData from '../../assets/cards.json';

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
};

const mutations: MutationTree<CardListState> = {
    cardsLoaded(state: CardListState, payload: StoreCard[]): void {
        state.list = payload;
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
