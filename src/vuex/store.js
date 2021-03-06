import Vue from 'vue'
import Vuex from 'vuex'
// import { io } from 'socket.io'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        socket: io('http://172.17.23.2:3132'),
        // 当前登录用户id
        userId: '',
        // 当前在线用户
        online_users: {},
        // 当前对话id
        chatWith: '',
        // 保存所有消息
        messages: {},
        // 用户信息展示控制
        userInfo: false,
        // 需要消息提示
        needAudio: false
    },
    getters: {
        chatWithObj: (state) => {
            if (state.online_users[state.chatWith]) {
                var chatObj = { ...state.online_users[state.chatWith] }
                chatObj.messages = []
                for (let key in state.messages) {
                    if (key == state.chatWith) {
                        var chatMessage = state.messages[key].mess
                        chatObj.messages = chatMessage
                    }
                }
                return chatObj || {}
            } else {
                return {}
            }
        }
    },
    mutations: {
        setUserId (state, id) {
            state.userId = id
        },
        setOnlineUsers (state, value) {
            state.online_users = value
        },
        setChatWith (state, value) {
            state.chatWith = value
        },
        setMessages (state, mess) {
            // 如果是自己发送的消息
            if (mess.id == state.userId) {
                if (state.messages[mess.to]) {
                    state.messages[mess.to].mess.push(mess)
                } else {
                    Vue.set(state.messages, mess.to, {
                        mess: [mess],
                        notRead: 0
                    })
                }  
            } else {
                // 增加消息
                if (state.messages[mess.id]) {
                    state.messages[mess.id].mess.push(mess)
                    // 增加未读消息
                    if (mess.id != state.chatWith) {
                        state.messages[mess.id].notRead += 1
                        state.needAudio = true
                    }else {
                        if(state.route.name != "chat") {
                            state.messages[mess.id].notRead += 1
                            state.needAudio = true
                        }
                    }
                } else {
                    var notRead
                    if (mess.id != state.chatWith) {
                        notRead = 1
                    } else {
                        if (state.route.name != "chat") {
                            notRead = 1
                        } else {
                            notRead = 0
                        }
                    }
                    Vue.set(state.messages, mess.id, {
                        mess: [mess],
                        notRead
                    })
                    if (notRead > 0) {
                        state.needAudio = true
                    }
                }
            }
        },
        setUserInfo (state, val) {
            state.userInfo = val
        },
        resetNotReady (state, id) {
            if (state.messages[id]) {
                state.messages[id].notRead = 0
            }
        },
        resetNeedAudio (state) {
            state.needAudio = false
        }
    }
    // strict: process.env.NODE_ENV !== 'production'
})

export default store
