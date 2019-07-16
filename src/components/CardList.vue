<template>
  <div class="list">
    <CardComponent v-for="card in list" :card="card" :key="card.slug"></CardComponent>
  </div>
</template>

<script lang=ts>
import { Component, Vue, Prop } from 'vue-property-decorator';
import cardListData from '../assets/cards.json';
import CardComponent, { Card } from './Card.vue';

@Component({ components: { CardComponent } })
export default class CardListComponent extends Vue {
    list!: Card[];
    constructor() {
        super();
        this.list = cardListData;
    }
}
</script>

<style lang="scss" scoped>
.list {
    display: flex;
}
</style>
