<template>
    <div class="mess clearfix" :class="{self: mess.id == userId}">
        <!--<div class="mess-logo"></div>-->
        <mu-avatar v-if="mess.id == userId" class="mess-logo" :src="'http://172.17.23.2:3132/logo/' + userLogo" slot="leftAvatar" />
        <mu-avatar v-if="mess.id != userId" class="mess-logo" :src="'http://172.17.23.2:3132/logo/' + chatWithLogo" slot="leftAvatar" />
        <div class="mess-box">
            {{ mess.mess }}
            <div class="mess-time"><mu-icon value="access_time" :size="12" class="time-logo"/>{{ mess.time }}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'chatMess',
    data () {
        return {
        }
    },
    computed: {
        ...mapState([
            'userId', 'chatWith', 'online_users'
        ]),
        chatWithLogo() {
            return this.online_users[this.chatWith].logo
        },
        userLogo() {
            return this.online_users[this.userId].logo
        }
    },
    methods: {

    },
    props: [
        'mess'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mess {
    position: relative;
    margin-top: 40px;
}
.mess:first-child {
    margin-top: 10px;
}
.mess-box {
    background-color: #fff;
    display: inline-block;
    max-width: 60%;
    word-break: break-all;
    border-radius: 6px;
    padding: 8px;
    position: relative;
    min-height: 45px;
    min-width: 60px;
    text-align: center;
}
.mess-box:before {
    content: '';
    height: 0px;
    border: 10px solid transparent;
    border-bottom:  16px solid #fff;
    position: absolute;
}
.mess-logo {
    position: absolute;
    width: 50px;
    height: 50px;
}
.mess-time {
    background-color: #282F3B;
    color: #AE5E63;
    font-size: 12px;
    height: 16px;
    width: 58px;
    text-align: center;
    line-height: 16px;
    position: absolute;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 2px;
}
.mess:not(.self) {
    .mess-box {
         float: left;
         margin-left: 85px;
    }
    .mess-box:before {
        top: 8px;
        left: -10px;
    }
    .mess-logo {
        top: 10px;
        left: 15px; 
    }
    .mess-time {
        left: 0px;
        bottom: -20px;
    }
}
.mess.self {
    .mess-box {
         float: right;
         margin-right: 85px;
    }
    .mess-box:before {
        top: 8px;
        right: -10px;
    }
    .mess-logo {
        top: 10px;
        right: 15px; 
    }
    .mess-time {
        right: 2px;
        bottom: -20px;
    }
}
.time-logo {
    position: relative;
    top: 1px;
}
</style>
