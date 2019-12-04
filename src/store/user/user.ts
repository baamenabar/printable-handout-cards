import { UserState } from './types';
import { Module, ActionTree, MutationTree } from 'vuex';
import { RootState } from '../types';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '@/config/env.prod';

const namespaced = true;
type FirebaseUser = firebase.User;

const userStateInitial: UserState = {
    isLoggedIn: false,
    isGeneric: true,
    name: '',
    email: '',
};

const actions: ActionTree<UserState, RootState> = {
    userInit({ commit }): void {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(async firebaseUser => {
            if (firebaseUser) {
                // tslint:disable:no-console
                commit('userUpdate', firebaseUser);
            } else {
                // if not logged in, then log in with the generic user.
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(
                        'agustin@medula.cl',
                        'qwertzztrewq'
                    )
                    .catch(reason => {
                        console.log('FAILED GENERIC LOGIN BEACAUSE:', reason);
                    });
            }
        });
    },
    async signUserUp({ commit }) {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        const signInResult = await firebase
            .auth()
            .signInWithRedirect(googleProvider);

        commit('userSignedUp', signInResult);
    },
    async signUserOut({ commit }) {
        await firebase.auth().signOut();
        commit('userLogout');
    },
};

const mutations: MutationTree<UserState> = {
    userUpdate(state: UserState, firebaseUser: FirebaseUser): void {
        state.isLoggedIn = true;
        state.isGeneric = firebaseUser.isAnonymous;
        state.name = firebaseUser.displayName || '';
        // tslint:disable:no-console
        console.log('user firebaseUser', firebaseUser);
    },
    userLogout(state: UserState): void {
        state = { ...userStateInitial };
    },
    userSignedUp(state: UserState, payload: any): void {
        // tslint:disable:no-console
        console.log('user signed up/in', payload);
    },
};

export const user: Module<UserState, RootState> = {
    namespaced,
    state: { ...userStateInitial },
    actions,
    mutations,
};
