<template>
    <div class="auth-container">
        <h1>Login / Sign up</h1>
        <div class="options-list">
            <p>Log in or sign up with your Google account</p>
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import firebase from 'firebase';

const namespace = 'user';

@Component({})
export default class LoginComponent extends Vue {
    @Action('signUserUp', { namespace }) signUserUp: any;

    login($event: Event) {
        this.signUserUp();
    }
}
</script>
