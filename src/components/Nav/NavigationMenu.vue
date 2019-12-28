<template>
    <div>
        <ul class="item-collection">
            <li class="item" data-automation-id="item-one">
                <router-link class="item-button" to="/">Home</router-link>
            </li>
            <li class="item" v-if="!isKnownUser" data-automation-id="item-two">
                <a class="item-button" href="javascript:;" @click="login"
                    >Login / Sign-up</a
                >
            </li>
            <li class="item" v-if="isKnownUser" data-automation-id="item-three">
                <a class="item-button" href="javascript:;" @click="logout"
                    >Logout</a
                >
            </li>
            <li class="item" data-automation-id="item-four">
                <router-link class="item-button" to="/about">About</router-link>
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
@import '../../config/abstracts';

.item-collection {
    list-style: none;
    margin: 0;
    padding: 0;
}

.item-button {
    display: block;
    line-height: $length-base-module;
    color: $color-text-base;
    text-decoration: none;

    &:hover,
    &:active {
        color: $color-text-active;
        background: $color-bg-active;
        text-decoration: none;
    }
}
</style>
