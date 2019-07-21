<template>
  <div class="content">
    <div class="header">
      <h1 class="name" :contenteditable="editable">{{item.name}}</h1>
    </div>
    <div class="body">
      <div class="fig-container">
        <button v-if="editable" type="button" class="btn">edit</button>
        <img :src="item.imageUrl" alt class="figure" />
      </div>
      <p class="summary">{{item.summary}}</p>
      <div class="description">{{item.description}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropSync, Prop, Component } from 'vue-property-decorator';
import { Card } from './CardInterface';

@Component
export default class CardDisplayComponent extends Vue {
    @Prop() item!: Card;
    @Prop() editable = false;
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #222;
}
.name {
    font-size: 20px;
    padding: 0.25em;
    color: #fff;
}

.figure {
    width: 100%;
    max-width: 100%;
}

.price {
    color: #222;
}

.tech-details {
    font-size: 0.75em;
}
</style>
