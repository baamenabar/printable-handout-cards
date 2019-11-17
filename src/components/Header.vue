<template>
    <header class="header-container">
        <router-link to="/" class="logo" data-automationid="app-logo"
            ><img src="../assets/printable-cards-initial-logo.svg" alt=""
        /></router-link>
        <h1 class="title" data-automationid="app-title">Printable Cards</h1>
        <NavigationComponent></NavigationComponent>
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
    justify-content: space-between;
}
</style>
