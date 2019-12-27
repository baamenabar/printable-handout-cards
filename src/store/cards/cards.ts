import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { CardListState, StoreCard } from './types';
import { RootState } from '../types';
import cardListData from '../../assets/cards.json';
import { Card } from '@/components/Card/CardInterface';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserState } from '../user/types';
import { defaultUserUid } from '@/config/env.prod';
import ulog from 'ulog';

const log = ulog('store:cards');
const namespaced = true;

// we use this name to prevent typsecript from complaining about shadowed variables of "state".
const cardListState: CardListState = {
    list: [],
};

// we declare the actionsTree config
const actions: ActionTree<CardListState, RootState> = {
    // probably used to initilize the data
    async loadCards({ commit, rootGetters }) {
        const currentUser = (this.state as any).user as UserState;
        const listOwnerUid = rootGetters['user/isKnownUser']
            ? currentUser.uid
            : defaultUserUid;

        log.debug('will request uid', currentUser.uid);

        // get the card(s) from firestore
        const cardsList = await firebase
            .firestore()
            .collection('cards')
            .where('owner', '==', listOwnerUid)
            .get()
            .then(querySnapshot => {
                const list: any[] = [];
                querySnapshot.forEach(doc => {
                    list.push(doc.data());
                });
                return list;
            });

        // commit the mutation
        await commit('cardsLoaded', cardsList);
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
        state.list.splice(
            state.list.findIndex(card => card.slug === slug),
            1
        );
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

export const cardList: Module<CardListState, RootState> = {
    namespaced,
    state: cardListState,
    getters,
    actions,
    mutations,
};
