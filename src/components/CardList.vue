<template>
    <div class="list">
        <CardComponent
            v-for="(card, i) of list"
            :card="card"
            :index="i"
            :key="card.slug"
        ></CardComponent>
        <button
            type="button"
            class="add-btn btn"
            aria-label="add"
            @click="addCard()"
            data-automationid="add-button"
        >
            +
        </button>
        <p class="counter">
            add one card to the {{ totalCards }} existing cards
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import CardComponent from './Card/Card.vue';
import { Card } from '../store/cards/CardInterface';
import { cardList } from '../store/cards/cards';
import { CardListState } from '../store/cards/types';

// config for this instance of the store
const namespace = 'cardList';

/**
 * Initilizes the cardList store and renders the cards
 */
@Component({ components: { CardComponent } })
export default class CardListComponent extends Vue {
    // 🤮 ... try out this: https://dev.to/sirtimbly/type-safe-vuex-state-usage-in-components-without-decorators-2b24
    @Action('loadCards', { namespace }) loadCards: any;
    @Action('addCard', { namespace }) addCard: any;
    @Getter('totalCards', { namespace }) totalCards!: number;
    @Getter('list', { namespace }) list!: Card[];

    mounted() {
        this.loadCards();
    }
}
</script>

<style lang="scss" scoped>
.list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    @media print {
        width: 21cm;
    }
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.3);
    transition: 0.2s all ease-in-out;
    outline: none;

    &:focus {
        border: 1px solid #444;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        background-color: rgb(34, 109, 67);
    }

    &:active {
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
        background-color: seagreen;
    }
}
.counter {
    position: absolute;
    bottom: 0;
    right: 20px;
}
</style>
