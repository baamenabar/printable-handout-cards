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
@import '../../config/abstracts';
$avatarSide: 48px;

.user {
    display: flex;
    flex-direction: row-reverse;
    float: left;
    max-width: 60%;
    max-height: $avatarSide;
    overflow: hidden;
    margin: $length-tiny 0;

    @media screen and (max-width: $width-tablet) {
        max-width: 180px;
    }
}
.display-name {
    margin: 0 0.5em 0 0;
    line-height: 20px;
    padding-top: 6px;
}
.avatar-container {
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 50%;
    flex-shrink: 0;
}
.avatar {
    display: block;
    width: $avatarSide;
    height: $avatarSide;
}
</style>
