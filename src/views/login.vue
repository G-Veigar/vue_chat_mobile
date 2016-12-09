<template>
    <div id="hello">
        <img src="../assets/logo.png">
        <div>
            <mu-text-field label="username" icon="account_circle" v-model="username" labelFloat/><br/>
            <mu-text-field label="password" icon="vpn_key" type="password" v-model="password" labelFloat/><br/>
        </div>
        <mu-raised-button label="Login" class="login-btn" backgroundColor="#41B883" @click="login"/>
        <!--<mu-circular-progress :size="60"  color="#41B883"/>-->
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex'

export default {
    name: 'login',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        ...mapState(['socket'])
    },
    methods: {
        ...mapMutations([
            'setUserId', 'setOnlineUsers', 'setMessages'
        ]),
        login: function(){
            var setUserId = this.setUserId
            this.$http.post('http://localhost:3132/login',{
                name: this.username,
                pass: this.password
            }).then((res)=>{
                // 登录成功
                if(res.data.code==1){
                    // 绑定用户
                    this.socket.emit('bindUser',res.data.user.id)
                    // 保存登录状态到 sessionStorage
                    sessionStorage.setItem('logined', true)
                    var userId = res.data.user.id
                    // 设置当前登录账号 id 到 vuex
                    setUserId(userId)
                    // socket 开始监听 online_users 事件
                    this.socket.on('online_users', this.setOnlineUsers)
                    this.socket.on('private_mess', this.setMessages)
                    // 获取用户列表
                    this.$http.get('http://localhost:3132/getOnlineUsers').then((res) => {
                        if(res.data.code==1){
                            this.setOnlineUsers(res.data.online_users)
                        } else {
                            alert(res.data.msg)
                        }
                    })
                    this.$router.push({name:'index'})
                }else if(res.data.code==0){
                    alert(res.data.msg)
                }
            },(res)=>{
                alert('some error')
            });
        }
    },
    created: function(){
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#hello {
    text-align: center;
    margin-top: 60px;
}
h1 {
    color : #41B883
}
.login-btn {
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>
