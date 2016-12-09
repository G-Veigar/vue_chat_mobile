<template>
    <div class="chat">
        <app-bar></app-bar>
        <div class="chat-box">
            <span style="color: #fff">{{me}}</span>
            <div class="chat-mess-box">
                <chat-mess v-for="item in thisMess" :mess="item"></chat-mess>
                <!--<h1 v-for="item in thisMessages">{{item.mess}}</h1>-->
            </div>
            <span style="color: #fff">{{adminMes}}</span>
            
            <chat-bottom></chat-bottom>
        </div>
    </div>
</template>

<script>
import appBar from '../components/appbar.vue'
import chatMess from '../components/chatMess.vue'
import chatBottom from '../components/chatBottom.vue'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'chat',
    data() {
        return {
            messObj1: {
                self: false
            },
            messObj2: {
                self: true
            }
        }
    },
    computed: {
        ...mapState([
            'messages', 'online_users', 'chatWith', 'mes'
        ]),
        ...mapGetters([
            'chatWithObj'
        ]),
        thisMessages() {
            return this.chatWithObj.messages? this.chatWithObj.messages : []
        },
        thisMess(){
            console.log(this.messages[this.chatWith])
            if(this.messages[this.chatWith]) {
                console.log(this.messages[this.chatWith])
                return this.messages[this.chatWith]['mess'] || []
            } else {
                return []
            }
        },
        me(){
            return this.messages['1001'] && this.messages['1001'].mess
        },
        adminMes(){
            // if(this.mes) {
                // if(!this.messages['1001']) return []

                // return this.messages['1001']['mess']
                 return this.mes.m.adminMes
            // }else {
            //     return []
            // }
        }
    },
    mounted() {
    },
    components: {
        appBar, chatBottom, chatMess
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-box {
    background-color: #343C4A;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 106px;
}
</style>
