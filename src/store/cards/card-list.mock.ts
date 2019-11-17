import { Module } from 'vuex';
import { Card } from '@/components/Card/CardInterface';
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
            return [{ name: 'one', slug: 'one' }, { name: 'two', slug: 'two' }];
        },
    },
    actions: {
        loadCards: jest.fn(),
        addCard: jest.fn(),
    },
    mutations: {},
};
