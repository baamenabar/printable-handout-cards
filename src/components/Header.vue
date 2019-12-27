<template>
    <header class="header-container">
        <router-link to="/" class="logo" data-automationid="app-logo"
            ><img
                src="../assets/printable-cards-initial-logo.svg"
                alt=""
                width="64"
        /></router-link>
        <h1 class="title" data-automationid="app-title">
            Printable<br />Cards
        </h1>
        <NavigationComponent class="navigation"></NavigationComponent>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationComponent from './Nav/Navigation.vue';

@Component({ components: { NavigationComponent } })
export default class HeaderComponent extends Vue {}
</script>

<style scoped>
.header-container {
    display: flex;
    align-content: center;
    justify-content: flex-start;
}
.title {
    font-size: 20px;
    text-align-last: left;
}
.navigation {
    margin-left: auto;
}
</style>
