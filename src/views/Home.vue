<template>
    <div class="home">
        <CardListComponent></CardListComponent>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import CardListComponent from '@/components/CardList';

@Component({
    components: {
        CardListComponent,
    },
})
export default class Home extends Vue {}
</script>
