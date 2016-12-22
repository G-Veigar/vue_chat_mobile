<template>
    <div>
        <h1>{{value}}</h1>
        <input type="text" v-model="value">
        <welcome-app :show="true"></welcome-app>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import  welcomeApp  from '../components/welcomeApp.vue'

export default {
    name: 'login',
    data(){
        return {
            value: ''
        }
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    },
    updated(){
    },
    components: {
        welcomeApp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
