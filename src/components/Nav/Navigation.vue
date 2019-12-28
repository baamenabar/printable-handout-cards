<template>
    <nav data-automationid="navigation">
        <UserComponent></UserComponent>
        <button
            class="nav-burger-button"
            type="button"
            data-automationid="burger-menu-button"
            @click="toggleMenu($event)"
        >
            menu
        </button>
        <NavigationMenuComponent
            :class="{ 'nav-menu-container': true, 'm--closed': menuIsHidden }"
        ></NavigationMenuComponent>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationMenuComponent from './NavigationMenu.vue';
import UserComponent from './User.vue';

@Component({ components: { NavigationMenuComponent, UserComponent } })
export default class NavigationComponent extends Vue {
    menuIsHidden = true;

    toggleMenu($event: any): void {
        this.menuIsHidden = !this.menuIsHidden;
    }
}
</script>

<style lang="scss" scoped>
@import '../../config/abstracts';

.nav-burger-button {
    width: $length-base-module;
    height: $length-base-module;
    margin: 0 0 0 $length-tiny;
    border: 0;
    background: white;
    transition: 0.2s background linear;
    font-size: 0;
    position: relative;

    &::before,
    &::after {
        content: '';
        display: block;
        width: $length-medium;
        height: $length-small;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: $length-medium / -2;
        margin-top: $length-small / -2;
        border: 1px solid #000;
        border-left: 0;
        border-right: 0;
    }
    &::after {
        height: 0;
        border-bottom: 0;
        margin-top: 0;
    }

    &:hover,
    &:active {
        background: #f0f0f0;
    }
}

.nav-menu-container {
    $length-menu-width: 200px;
    position: fixed;
    right: 0;
    top: $length-base-module;
    height: calc(100% - #{$length-base-module});
    background: white;
    width: $length-menu-width;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
    z-index: 1;
    transform: translate3d(0, 0, 0);
    transition: 0.5s transform ease-in-out;

    &.m--closed {
        transform: translate3d($length-menu-width, 0, 0);
    }
}
</style>
