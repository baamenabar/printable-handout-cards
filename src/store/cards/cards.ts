import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { CardListState } from './types';
import { RootState } from '../types';
import cardListData from '../../assets/cards.json';
import { Card } from '@/store/cards/CardInterface';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserState } from '../user/types';
import { defaultUserUid } from '@/config/env.prod';
import ulog from 'ulog';

const log = ulog('store:cards');
const namespace = 'cards';

// we use this name to prevent typsecript from complaining about shadowed variables of "state".
const cardListState: CardListState = {
    list: [],
};

function getActiveUser(state: RootState): UserState {
    return (state as any).user as UserState;
}

// we declare the actionsTree config
const actions: ActionTree<CardListState, RootState> = {
    // probably used to initilize the data
    async loadCards({ commit, rootGetters }) {
        const currentUser = getActiveUser(this.state);
        const listOwnerUid = rootGetters['user/isKnownUser']
            ? currentUser.uid
            : defaultUserUid;

        log.debug('will request uid', currentUser.uid);

        // get the card(s) from firestore
        const cardsList = await firebase
            .firestore()
            .collection(namespace)
            .where('owner', '==', listOwnerUid)
            .get()
            .then(querySnapshot => {
                const list: any[] = [];
                querySnapshot.forEach(doc => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                return list;
            });

        // commit the mutation
        await commit('cardsLoaded', cardsList);
    },
    async addCard({ commit, rootGetters }) {
        const currentUser = getActiveUser(this.state);
        if (!currentUser.uid) {
            throw new Error('Error: unknown user can not create new cards');
        }
        const newCard: Card = {
            name: 'new card',
            slug: '' + new Date().getTime(),
            owner: currentUser.uid,
            description: '',
            imageUrl: '',
            attributes: {},
        };
        const docRef = await firebase
            .firestore()
            .collection(namespace)
            .add(newCard);
        newCard.id = docRef.id;
        commit('cardAdded', newCard);
    },
    deleteCard({ commit }, id: string): void {
        firebase
            .firestore()
            .collection(namespace)
            .doc(id)
            .delete()
            .catch(error => {
                log.error('Failed deletion', error);
            });
        commit('cardRemoved', id);
    },
    updateCardData({ commit }, card: Card): void {
        firebase
            .firestore()
            .collection(namespace)
            .doc(card.id)
            .update({ ...card })
            .catch(error => {
                log.error('Failed update', error);
            });
        commit('cardUpdated', card);
    },
};

const mutations: MutationTree<CardListState> = {
    cardsLoaded(state: CardListState, payload: Card[]): void {
        state.list = payload;
    },
    cardAdded(state: CardListState, newCard: Card): void {
        state.list.push(newCard);
    },
    cardRemoved(state: CardListState, id: string): void {
        state.list.splice(
            state.list.findIndex(card => card.id === id),
            1
        );
    },
    cardUpdated(state: CardListState, payload: Card): void {
        const index = state.list.findIndex(card => card.id === payload.id);
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
    namespaced: true,
    state: cardListState,
    getters,
    actions,
    mutations,
};
