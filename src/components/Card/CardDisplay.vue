<template>
  <div class="content">
    <div class="header">
      <h1 class="name" ref="name" :contenteditable="editable">{{item.name}}</h1>
    </div>
    <div class="body">
      <div class="fig__container">
        <label v-if="editable" class="fig__src-container">
          <span class="fig__src-input-label">Image url</span>
          <input
            type="url"
            ref="imageInput"
            name="imgSrc"
            :value="item.imageUrl"
            class="fig__src-input"
          />
        </label>
        <img :src="item.imageUrl" alt class="figure" />
      </div>
      <textarea
        v-if="editable"
        ref="descriptionEditor"
        class="description-editor"
        :value="item.description"
      ></textarea>
      <div v-else class="description" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropSync, Prop, Component, Watch } from 'vue-property-decorator';
import { Card } from './CardInterface';
import { Action } from 'vuex-class';
import marked from 'marked';
import dompurify from 'dompurify';

@Component
export default class CardDisplayComponent extends Vue {
    @Action('updateCardData', { namespace: 'cardList' }) updateCardData: any;
    @Prop() item!: Card;
    @Prop() editable = false;

    @Watch('editable') onEditableChanged(
        val: boolean,
        prevValue: boolean
    ): void {
        // if the previous value was false, we area just entering into edit mode, no need to save.
        if (!prevValue) {
            return;
        }
        this.updateCardData(this.getData());
    }

    getData(): Card {
        return {
            slug: this.item.slug,
            name: (this.$refs.name as HTMLElement).innerText,
            imageUrl: (this.$refs.imageInput as HTMLInputElement).value,
            description: (this.$refs.descriptionEditor as HTMLInputElement)
                .value,
        };
        // https://i.pinimg.com/236x/28/f6/7c/28f67c6da291522c8b49db26cbfe15ab.jpg
    }

    get compiledMarkdown(): string {
        return dompurify.sanitize(
            marked(this.item.description || '', { breaks: true })
        );
    }
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #222;
}
.name {
    text-align: center;
    font-size: 20px;
    padding: 0.25em;
    color: #fff;
}
.fig__container {
    position: relative;
}
.fig__src-container {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 0;
    display: flex;
    justify-content: stretch;
    align-items: center;
    background: white;
    z-index: 1;
}
.fig__src-input-label {
    margin-right: 4px;
}
.fig__src-input {
    line-height: 1.75;
    flex-grow: 1;
}
.figure {
    width: 100%;
    max-width: 100%;
}

.description-editor {
    width: 100%;
    min-height: 250px;
    max-width: 100%;
    box-sizing: border-box;
}

.price {
    color: #222;
}

.tech-details {
    font-size: 0.75em;
}
</style>
