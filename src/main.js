//vue全家桶
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import App from './App'
import routes from './routers'
import store from './vuex/store'
// 其他
import MuseUI from 'muse-ui'
import FastClick from 'fastclick'
import 'muse-ui/dist/muse-ui.css'
import { MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MuseUI)

FastClick.attach(document.body)

// 实例化VueRouter
const router = new VueRouter({
    routes
})

// 访问控制
router.beforeEach((to, from, next) => {
    // 未登录
    if (!sessionStorage.getItem('logined') && to.name != 'login') {
        MessageBox({
            title: '提示',
            message: '登录超时，请重新登录'
        })
        setTimeout(function () {
            router.push({name: 'login'})
        }, 2000)
        next(false)
    }else{
        next()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    store,
    router
})