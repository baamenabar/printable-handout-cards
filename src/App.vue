<template>
    <div id="app">
        <HeaderComponent></HeaderComponent>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/Header.vue';

@Component({ components: { HeaderComponent } })
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.btn {
    border: 1px solid rgb(61, 117, 139);
    background: rgb(109, 154, 250);
    padding: 8px 12px;
}
</style>
