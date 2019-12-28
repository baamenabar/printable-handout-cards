import { Module } from 'vuex';

import { UserState } from './types';

import { RootState } from '../types';

const mockUser: UserState = {
    isInitialized: true,
    isAnonymous: true,
    uid: 'unknown123',
    name: '',
    email: 'does.it.really@need.it',
    userData: {},
};

export const user: Module<UserState, RootState> = {
    namespaced: true,
    state: {
        ...mockUser,
    },
    getters: {
        isKnownUser() {
            return false;
        },
        userDisplayData(): UserState {
            return { ...mockUser };
        },
    },
    actions: {
        userInit: jest.fn(),
        signUserUp: jest.fn(),
        signUserOut: jest.fn(),
    },
    mutations: {},
};
