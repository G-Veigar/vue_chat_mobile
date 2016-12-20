<template>
    <div class="chat">
        <app-bar></app-bar>
        <user-info></user-info>
        <div id="chat-box">
            <div class="chat-mess-box">
                <chat-mess v-for="item in thisMessages" :mess="item"></chat-mess>
                <!--<h1 v-for="item in thisMessages">{{item.mess}}</h1>-->
            </div>       
            <chat-bottom></chat-bottom>
        </div>
    </div>
</template>

<script>
import appBar from '../components/appbar.vue'
import chatMess from '../components/chatMess.vue'
import chatBottom from '../components/chatBottom.vue'
import userInfo from '../components/userInfo.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'chat',
    data() {
        return {
            chatBox: {}
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
        }
    },
    methods: {
        scrollBottom() {
            this.chatBox.scrollTop = this.chatBox.scrollHeight
        }
    },
    mounted() {
        this.chatBox = document.getElementById('chat-box')
        this.scrollBottom()
    },
    updated() {
        this.scrollBottom()
    },
    components: {
        appBar, chatBottom, chatMess, userInfo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chat-box {
    background-color: #343C4A;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 60px;
    top: 106px;
    overflow-y: scroll;
}
</style>
