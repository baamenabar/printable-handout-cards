<template>
  <div class="card">
    <button class="btn edit-btn" v-on:click="editable = !editable">edit</button>
    <CardDisplayComponent :item="item" :editable="editable"></CardDisplayComponent>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PropSync } from 'vue-property-decorator';
import CardDisplayComponent from './CardDisplay.vue';
import { Card } from './CardInterface';

@Component({ components: { CardDisplayComponent } })
export default class CardComponent extends Vue {
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
}
.edit-btn {
}
</style>
