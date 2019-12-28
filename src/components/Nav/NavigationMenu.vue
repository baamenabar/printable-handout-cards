<template>
    <div class="nav-menu-container">
        <ul class="item-collection">
            <li class="item" data-automation-id="item-one">
                <router-link to="/">Home</router-link>
            </li>
            <li class="item" v-if="!isKnownUser" data-automation-id="item-two">
                <a href="javascript:;" @click="login">Login / Sign-up</a>
            </li>
            <li class="item" v-if="isKnownUser" data-automation-id="item-three">
                <a href="javascript:;" @click="logout">Logout</a>
            </li>
            <li class="item" data-automation-id="item-four">
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component({})
export default class NavigationMenuComponent extends Vue {
    @Action('signUserUp', { namespace: 'user' }) signUserUp: any;
    @Action('signUserOut', { namespace: 'user' }) signUserOut: any;
    @Getter('isKnownUser', { namespace: 'user' }) isKnownUser!: boolean;

    /**
     * Call the login / sign up process of firebase
     */
    login($event: Event) {
        this.signUserUp();
    }

    /**
     * calls the logout in the store
     */
    logout() {
        this.signUserOut();
    }
}
</script>
<style lang="scss" scoped>
.item-collection {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
