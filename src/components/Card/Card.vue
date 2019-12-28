<template>
    <div class="card">
        <div class="toolbar">
            <button
                class="btn delete-btn"
                aria-label="delete card"
                v-if="editable"
                @click="deleteCard(item.id)"
            >
                delete
            </button>
            <button
                class="btn edit-btn"
                @click="editable = !editable"
                aria-label="edit toggle"
                v-text="editable ? 'save' : 'edit'"
            ></button>
        </div>
        <CardDisplayComponent
            :item="item"
            :editable="editable"
        ></CardDisplayComponent>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PropSync } from 'vue-property-decorator';
import CardDisplayComponent from './CardDisplay.vue';
import { Card } from '@/store/cards/CardInterface';
import { Action } from 'vuex-class';

const namespace = 'cardList';

@Component({ components: { CardDisplayComponent } })
export default class CardComponent extends Vue {
    // send the action for the store to remove this element
    @Action('deleteCard', { namespace }) deleteCard: any;

    // receives the card prop and holds it for the template
    @PropSync('card') private item!: Card;
    private editable = false;
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    box-sizing: border-box;
    width: 260px;
    border: 1px solid #999;
    margin: 1em 0.5em;
    padding: 6px 12px;
    text-align: left;
    background-color: #eee;
    box-shadow: 2px 2px 12px 0 rgba(black, 0.2);

    @media print {
        width: 33%;
        margin: 1em 0.151515%;
    }
}
.toolbar {
    width: 100%;
    position: absolute;
    top: -22px;
    right: 12px;
    text-align: right;

    // animation related props
    visibility: hidden;
    opacity: 0;
    transition: 0.2s all ease-in-out;

    .card:hover & {
        visibility: visible;
        opacity: 1;
    }
}
.btn {
    margin: 0 0 0 8px;
}
.edit-btn {
}
.delete-btn {
    background-color: rgb(145, 31, 31);
    color: white;
}
</style>
