<template>
  <div class="card">
    <button
      class="btn edit-btn"
      @click="editable = !editable"
      aria-label="edit toggle"
      v-text="editable ? 'save' : 'edit'"
    ></button>
    <button
      class="btn delete-btn"
      aria-label="delete card"
      v-if="editable"
      @click="deleteCard(item.slug)"
    >delete</button>
    <CardDisplayComponent :item="item" :editable="editable"></CardDisplayComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PropSync } from 'vue-property-decorator';
import CardDisplayComponent from './CardDisplay.vue';
import { Card } from './CardInterface';
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
    width: 260px;
    margin: 1em;
    border: 1px solid #999;
    background-color: #eee;
    padding: 6px 12px;
    box-shadow: 2px 2px 12px 0 rgba(black, 0.2);
    @media print {
        width: 7cm;
    }
}
.btn {
    margin: 0 4px;
}
.edit-btn {
}
.delete-btn {
    background-color: rgb(145, 31, 31);
    color: white;
}
</style>
