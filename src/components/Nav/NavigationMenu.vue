<template>
    <div class="nav-menu-container">
        <ul class="item-collection">
            <li class="item" data-automation-id="item-one">
                <router-link to="/">Home</router-link>
            </li>
            <li class="item" data-automation-id="item-two">
                <router-link to="/login">Login / Sign-up</router-link>
            </li>
            <li class="item" data-automation-id="item-two">
                <a href="javascript:;" @click="logout">Logout</a>
            </li>
            <li class="item" data-automation-id="item-three">
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class NavigationMenuComponent extends Vue {
    @Action('signUserOut', { namespace: 'user' }) signUserOut: any;

    logout() {
        this.signUserOut();
    }
}
</script>
