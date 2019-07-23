<template>
  <div class="content">
    <div class="header">
      <h1 class="name" :contenteditable="editable">{{item.name}}</h1>
    </div>
    <div class="body">
      <div class="fig-container">
        <form v-on:submit.prevent="updateImageSrc" v-if="editable" class="img-src-form">
          <input type="url" name="imgSrc" :value="item.imageUrl" class="src-input" />
          <button class="btn">update</button>
        </form>
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
import { Action } from 'vuex-class';

@Component
export default class CardDisplayComponent extends Vue {
    @Action('updateCardImage', { namespace: 'cardList' }) updateCardImage: any;
    @Prop() item!: Card;
    @Prop() editable = false;

    updateImageSrc(event: Event): void {
        console.log(
            'Submitted',
            // @ts-ignore
            (event.target as HTMLFormElement).elements.imgSrc.value
        );
    }
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
.fig-container {
    position: relative;
}
.img-src-form {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
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
