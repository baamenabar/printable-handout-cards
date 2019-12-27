<template>
    <div class="auth-container" v-if="isKnownUser">
        <h1>Already logged in</h1>
        <p><router-link to="/">Go Home</router-link></p>
    </div>
    <div class="auth-container" v-else>
        <h1>Login / Sign up</h1>
        <div class="options-list">
            <p>Log in or sign up with your Google account</p>
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import firebase from 'firebase';

const namespace = 'user';

@Component({})
export default class LoginComponent extends Vue {
    @Action('signUserUp', { namespace }) signUserUp: any;
    @Getter('isKnownUser', { namespace }) isKnownUser!: boolean;

    login($event: Event) {
        this.signUserUp();
    }
}
</script>
