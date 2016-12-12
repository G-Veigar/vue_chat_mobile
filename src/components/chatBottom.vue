<template>
    <div class="chat-bottom">
        <mu-icon-button icon="add" class="chat-add" :touch="true"/>
        <div class="chat-input-box">
            <input type="text" class="chat-input" v-model.trim.lazy="inputMess" >
        </div>
        <div id="chat-send">
            <mu-raised-button icon="send"  backgroundColor="#7ACCC8" color="#FFF" @click="sendMess"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'appBar',
    data () {
        return {
            inputMess: ''
        }
    },
    computed: {
        ...mapState([
            'userId', 'socket', 'chatWith'
        ]),
    },
    methods: {
        sendMess: function(){
            if(this.inputMess){
                //聊天大厅的广播消息
                if(this.chatWith == 0){
                    this.socket.emit('all_mess',{
                        mess: this.inputMess,
                        id: this.userId
                    });
                }else{  //发送私人消息
                    this.socket.emit('private_mess',{
                        mess: this.inputMess,
                        id: this.userId,
                        to: this.chatWith
                    });
                }
                // if(this.current_mess.mess){
                //     this.current_mess.mess.push({
                //         value: this.inputMess,
                //         self: true
                //     });
                // }else {
                //     this.addNewMess({
                //         id: this.current_id,
                //         mess: [{
                //             value:this.inputMess,
                //             self: true
                //         }],
                //         notRead: 0
                //     });
                // }
                this.inputMess = '';
                // this.scrollBottom();
            }
        }
    },
    props: [
        'messObj'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.chat-bottom {
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-color: #282F3B;
    position: fixed;
    bottom: 0;
}
#chat-send {
    height: 44px;
    width: 50px;
    position: absolute;
    right: 5px;
    top: 8px;
    
    .mu-raised-button {
        min-width: 40px;
    }
}
.chat-input-box {
    margin-right: 60px;
    margin-left: 60px;
}
.chat-input {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #aaa;
}
.chat-add {
    position: absolute;
    color: #7ACCC8;
}
</style>
