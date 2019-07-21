<template>
  <div class="home">
    <h1 class="main-title">Printable Cards</h1>
    <CardListComponent></CardListComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardListComponent from '@/components/CardList';

@Component({
    components: {
        CardListComponent,
    },
})
export default class Home extends Vue {}
</script>
