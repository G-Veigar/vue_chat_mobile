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
        mes: {
            m: {
                adminMes: []
            }
        }
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
            if (state.messages[mess.id]) {
                state.messages[mess.id].mess = state.messages[mess.id].mess.concat(mess)
                state.mes.m.adminMes.push(mess)
                console.info(state.messages[mess.id])
            } else {
                state.messages[mess.id] = {
                    mess: [mess]
                }
            }
        }
    }
    // strict: process.env.NODE_ENV !== 'production'
})

export default store
