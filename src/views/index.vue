<template>
    <div>
        <app-bar></app-bar>
        <user-list></user-list>
    </div>
</template>

<script>
import appBar from '../components/appbar.vue'
import userList from '../components/userList.vue'
import { Toast } from 'mint-ui'

export default {
    name: 'index',
    mounted() {
    },
    components: {
        appBar,userList
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
