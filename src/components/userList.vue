<template>
    <mu-list>
        <div v-for="item in online_users">
            <mu-list-item :title="item.name" @click="goToChat(item.id)">
                <mu-avatar :src="'http://172.17.23.2:3132/logo/' + item.logo" slot="leftAvatar" />
                <!--<mu-icon value="chat_bubble" slot="right"/>-->
                <mu-badge v-show="getNotRead(item.id) != '0'" :content="getNotRead(item.id)" slot="after" secondary/>
            </mu-list-item>
            <mu-divider/>
        </div>
    </mu-list>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex'

export default {
    name: 'appBar',
    data () {
        return {
            users: ['one','two','three']
        }
    },
    computed: {
        ...mapState([
            'userId', 'online_users', 'messages'
        ]),
    },
    methods: {
        ...mapMutations([
            'setChatWith', 'resetNotReady'
        ]),
        goToChat: function(id){
            this.setChatWith(id)
            this.resetNotReady(id)
            this.$nextTick
            this.$router.push({
                name: 'chat'
            })
        },
        getNotRead(id) {
            var res =  this.messages[id] ? this.messages[id].notRead : 0
            res = res > 99 ? '99+' : res
            return res + ''
        }
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.user-item {
    height: 70px;
    line-height: 70px;
    display: block;
    position: relative;
    border-bottom: 1px solid #f4f4f4;
}
.user-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fc9;
    display: block;
    position: absolute;
    top: 10px;
    left: 15px;
}
.user-right {
    margin-left: 80px;
    line-height: 20px;
}
.user-name {
   padding-top: 10px;
   font-size: 18px;
}
.user-motto {
    color: #aaa
}
.user-nomess {
    position: absolute;
    right: 10px;
    top: 20px;
}
</style>
