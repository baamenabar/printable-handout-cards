<template>
    <nav data-automationid="navigation">
        <UserComponent></UserComponent>
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
import UserComponent from './User.vue';

@Component({ components: { NavigationMenuComponent, UserComponent } })
export default class NavigationComponent extends Vue {
    menuIsShown = false;
}
</script>
