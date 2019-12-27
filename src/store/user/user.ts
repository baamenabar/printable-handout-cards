import { UserState } from './types';
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import ulog from 'ulog';

const log = ulog('store:cards');
const namespaced = true;
type FirebaseUser = firebase.User;

const userStateInitial: UserState = {
    isInitialized: false,
    isAnonymous: true,
    uid: '',
    name: '',
    email: '',
    userData: {},
};

const actions: ActionTree<UserState, RootState> = {
    userInit({ commit }): void {
        firebase.auth().onAuthStateChanged(async firebaseUser => {
            if (firebaseUser) {
                await commit('userUpdate', firebaseUser);
                // request an update of cards list
                this.dispatch('cardList/loadCards');
            } else {
                // if not logged in, then log in with the generic user.
                firebase.auth().signInAnonymously();
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
        state.isInitialized = true;
        state.isAnonymous = firebaseUser.isAnonymous;
        state.name = firebaseUser.displayName || '';
        state.uid = firebaseUser.uid || '';
        state.userData = {
            displayName: firebaseUser.displayName || '',
            avatarUrl: firebaseUser.photoURL || '',
        };

        log.debug('user firebaseUser', firebaseUser);
    },
    userLogout(state: UserState): void {
        state = { ...userStateInitial };
    },
    userSignedUp(state: UserState, payload: any): void {
        log.debug('user signed up/in', payload);
    },
};

const getters: GetterTree<UserState, RootState> = {
    isKnownUser(state: UserState): boolean {
        return !state.isAnonymous;
    },
    userDisplayData(state: UserState) {
        return {
            ...state.userData,
        };
    },
};

export const user: Module<UserState, RootState> = {
    namespaced,
    state: { ...userStateInitial },
    actions,
    mutations,
    getters,
};
