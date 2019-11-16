<template>
    <nav data-automationid="navigation">
        <button
            class="nav-burger-button"
            type="button"
            data-automationid="burger-menu-button"
        >
            menu
        </button>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavigationComponent extends Vue {}
</script>
