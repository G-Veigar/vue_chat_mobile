<template>
    <mu-dialog :open="userInfo" @close="setUserInfo(false)">
        <div class="userInfo-header">
            <!--<mu-avatar slot="left" :src="" />-->
            <mu-avatar slot="" icon="folder" class="userLogo" :size="100"/>
            <div class="userInfo-name">
                {{chatWithObj.name}}
            </div>
            <div class="userInfo-motto">
                {{chatWithObj.motto}}
            </div>
        </div>
        <div>
            <!--<span class="iphone-show"><mu-icon id="iphone-logo" value="phone_iphone" :size="20" color="#343C4A"/>-->
        </div>
        <mu-icon-button slot="actions" primary @click="setUserInfo(false)" icon="close"/>
    </mu-dialog>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    name: 'userInfo',
    data () {
        return {
            dialog: true
        }
    },
    computed: {
        ...mapState([
            'userInfo'
        ]),
        ...mapGetters([
            'chatWithObj'
        ]),
    },
    methods: {
        ...mapMutations([
            'setUserInfo'
        ])
    },
    props: [
        'mess'
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.userInfo-header {
    height: 200px;
    background-color: #00acc1;
    margin: -24px -24px 0;
    position: relative;
}
.userLogo {
    position: absolute;
    left: 50%;
    transform: translate(-50px,25px);
}
.userInfo-name {
    text-align: center;
    font-size: 20px;
    width: 100%;
    position: absolute;
    bottom: 35px;
}
.userInfo-motto {
    text-align: center;
    font-size: 14px;
    width: 100%;
    position: absolute;
    bottom: 10px;
}
</style>
