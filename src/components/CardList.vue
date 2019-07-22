<template>
  <div class="list">
    <CardComponent v-for="(card, i) of list" :card="card" :index="i" :key="card.slug"></CardComponent>
    <button type="button" class="add-btn btn" aria-label="add">+</button>
  </div>
</template>

<script lang=ts>
import { Component, Vue, Prop } from 'vue-property-decorator';
import cardListData from '../assets/cards.json';
import CardComponent from './Card/Card.vue';
import { Card } from './Card/CardInterface';

@Component({ components: { CardComponent } })
export default class CardListComponent extends Vue {
    list: Card[] = [];

    mounted() {
        this.list = cardListData;
    }
}
</script>

<style lang="scss" scoped>
.list {
    position: relative;
    display: flex;
}
.add-btn {
    position: absolute;
    right: 5%;
    bottom: 5%;
    width: 2em;
    height: 2em;
    line-height: 1;
    font-size: 28px;
    text-align: center;
    border-radius: 50%;
    background: seagreen;
    color: white;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.3);
    transition: 0.2s all ease-in-out;
    &:hover {
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        background-color: rgb(34, 109, 67);
    }
    &:active {
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
        background-color: seagreen;
    }
}
</style>
