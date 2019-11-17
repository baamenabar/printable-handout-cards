<template>
    <nav data-automationid="navigation">
        <button
            class="nav-burger-button"
            type="button"
            data-automationid="burger-menu-button"
        >
            menu
        </button>
        <NavigationMenuComponent></NavigationMenuComponent>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationMenuComponent from './NavigationMenu.vue';

@Component({ components: { NavigationMenuComponent } })
export default class NavigationComponent extends Vue {}
</script>
