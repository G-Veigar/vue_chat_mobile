<template>
    <div>
        <h1 v-for="item in myMess">{{item}}</h1>
        <input type="text" v-model="newNum">
        <button @click="add">add</button> <br>
        <input type="text" v-model="mytype">
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
            newNum: '',
            mytype: '',
            hehe: {
                one: 'haha',
                two: {
                    name: '112',
                    mess: []
                },
                three: {
                    name: '333',
                    mess: [2,3,4]
                } 
            }
        }
    },
    computed: {
        myMess: function(){
            if(this.hehe[this.mytype]) {
                return this.hehe[this.mytype].mess
            }else {
                return []
            }
        }
    },
    methods: {
        add: function(){
            if(this.newNum){
                this.hehe.two.mess.push(this.newNum)
                // this.hehe.mess = [ ...this.hehe.mess, this.newNum]
            }
            this.newNum = '' 
        }
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
