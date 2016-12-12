<template>
    <div>
        <h1>{{value}}</h1>
        <input type="text" v-model="value">
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

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

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
