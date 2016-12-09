const routers = [
    {
        path: '/hello',
        name: 'hello',
        component: resolve => {
            require.ensure(['./views/hello.vue'], () => {
                resolve(require('./views/hello.vue'))
            })
        }
    },
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: resolve => {
            require.ensure(['./views/index.vue'], () => {
                resolve(require('./views/index.vue'))
            })
        }
    },
    {
        path: '/chat',
        name: 'chat',
        component: resolve => {
            require.ensure(['./views/chat.vue'], () => {
                resolve(require('./views/chat.vue'))
            })
        }
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => {
            require.ensure(['./views/login.vue'], () => {
                resolve(require('./views/login.vue'))
            })
        }
    },
    {
        path: '/test',
        name: 'test',
        component: resolve => {
            require.ensure(['./views/test.vue'], () => {
                resolve(require('./views/test.vue'))
            })
        }
    }
]

export default routers
