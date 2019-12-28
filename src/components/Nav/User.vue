<template>
    <div class="user">
        <div class="avatar-container">
            <img
                :src="userDisplayData.avatarUrl || 'img/default-avatar.png'"
                alt=""
                class="avatar"
            />
        </div>
        <p class="display-name">
            {{ userDisplayData.displayName || 'Anonymous' }}
        </p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({})
export default class UserComponent extends Vue {
    @Getter('userDisplayData', { namespace: 'user' }) userDisplayData: any;
}
</script>

<style lang="scss" scoped>
$avatarSide: 48px;
.user {
    display: flex;
    flex-direction: row-reverse;
}
.display-name {
    margin-right: 0.5em;
}
.avatar-container {
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.avatar {
    display: block;
    max-width: 100%;
    height: $avatarSide;
}
</style>
