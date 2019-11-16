<template>
    <header>
        <router-link to="/" class="logo" data-automationid="app-logo"
            ><img src="./printable-cards-initial-logo.svg" alt=""
        /></router-link>
        <h1 class="title" data-automationid="app-title">Printable Cards</h1>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HeaderComponent extends Vue {}
</script>
