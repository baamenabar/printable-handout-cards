<template>
  <div class="card"></div>
</template>

<script lang=ts>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CardList extends Vue {
  @Prop name: string;
}
</script>

<style lang="scss" scoped>
</style>
