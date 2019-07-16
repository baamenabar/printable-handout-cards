<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
