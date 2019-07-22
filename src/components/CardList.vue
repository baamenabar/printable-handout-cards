<template>
  <div class="list">
    <CardComponent v-for="(card, i) of list" :card="card" :index="i" :key="card.slug"></CardComponent>
    <button type="button" class="add-btn btn" aria-label="add">+</button>
  </div>
</template>

<script lang=ts>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import CardComponent from './Card/Card.vue';
import { Card } from './Card/CardInterface';
import { cardList } from '../store/cards';
import { CardListState } from '../store/cards/types';

// config for this instance of the store
const namespace = 'cardList';

/**
 * Initilizes the cardList store and renders the cards
 */
@Component({ components: { CardComponent } })
export default class CardListComponent extends Vue {
    @State('cardList') cardList!: CardListState;

    // 🤮 ... try out this: https://dev.to/sirtimbly/type-safe-vuex-state-usage-in-components-without-decorators-2b24
    @Action('loadCards', { namespace }) loadCards: any;
    @Getter('totalCards', { namespace }) totalCards: number = 0;

    mounted() {
        this.loadCards();
    }

    get list(): Card[] {
        return this.cardList.list;
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
