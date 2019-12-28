import { Module } from 'vuex';
import { Card } from '@/store/cards/CardInterface';
import { CardListState } from './types';
import { RootState } from '../types';

export const cardList: Module<CardListState, RootState> = {
    namespaced: true,
    state: { list: [] },
    getters: {
        totalCards() {
            return 2;
        },
        list(): Card[] {
            return [
                {
                    name: 'one',
                    slug: 'one',
                    id: 'one111',
                    owner: 'jajajaj',
                    attributes: {},
                },
                {
                    name: 'two',
                    slug: 'two',
                    id: 'two222',
                    owner: 'jajajaj',
                    attributes: {},
                },
            ];
        },
    },
    actions: {
        loadCards: jest.fn(),
        addCard: jest.fn(),
    },
    mutations: {},
};
