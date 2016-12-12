<template>
    <div>
        <mu-appbar title="VChat">
            <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
            <mu-icon-button icon='perm_identity' slot="right" @click="setUserInfo(true)"/>
        </mu-appbar>
        <div class="view-router-bar">
            <div class="view-router-box clearfix"> 
                <div class="view-router friends" :class="{active: thisRouter =='index'}" @click="goto('index')">Friends</div>
                <div class="view-router user-chat" :class="{active: thisRouter =='chat'}" @click="goto('chat')">
                    {{chatWithObj.name}}</span>
                </div>
                <div class="view-router group" :class="{active: thisRouter =='group'}" @click="goto('group')">Group</div>
            </div>
        </div>
        <!--<mu-raised-button label="undocked drawer" @click="toggle(true)"/>-->

        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="Menu Item 1"/>
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
                <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
            </mu-list>
        </mu-drawer>    
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'appBar',
    data () {
        return {
            open: false,
            docked: true
        }
    },
    computed: {
        ...mapState([
            'chatWith'
        ]),
        ...mapGetters([
            'chatWithObj'
        ]),
        thisRouter: function(){
            return this.$router.currentRoute.name
        }
    },
    methods: {
        ...mapMutations([
            'setUserInfo'
        ]),
        toggle (flag) {
            this.open = !this.open
            this.docked = !flag
        },
        goto: function(where, id = 0){
            if(where == 'index'){
                if(this.thisRouter != where){
                    this.$router.push({name:'index'})
                }
            }
            if(where == 'chat'){
                if(this.thisRouter != where){
                    this.$router.push({name:'chat'})
                }
            }
        }
    },
    props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.view-router-bar {
    background-color: #282F3B;
    height: 50px;
}
.view-router-box {
    margin-left: 30px;
    margin-right: 30px;
}
.view-router {
    float: left;
    width: 33.33333%;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    background-color: #343C4A;
    text-align: center;
    color: #7ACCC8;
    font-weight: bold;
    box-sizing: border-box;
    position: relative;

    &.friends {
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
        border-right: 2px solid #282F3B;
    }
    &.group {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        border-left: 2px solid #282F3B;
    }
    &.active {
        background-color: #7ACCC8;
        color: #282F3B
    }
}
#iphone-logo {
    position: relative;
    top: 5px;
}
.iphone-show {
    font-size: 12px;
}
</style>
