<template>
  <div class="card">
    <div class="header">
      <h1 class="name">{{itm.name}}</h1>
    </div>
    <div class="body">
      <img :src="itm.imageUrl" alt class="figure" />
      <p class="summary">{{itm.summary}}</p>
      <div class="description">{{itm.description}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PropSync } from 'vue-property-decorator';

export interface Card {
    name: string;
    slug: string;
    weight?: string;
    price?: number;
    summary?: string;
    description?: string;
    imageUrl?: string;
}

@Component
export default class CardComponent extends Vue {
    @PropSync('card') private itm!: Card;
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
