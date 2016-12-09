<template>
    <div id="hello">
        <img src="../assets/logo.png">
        <h1>Vue Chat</h1>
        <mu-circular-progress :size="60"  color="#41B883"/>
    </div>
</template>

<script>
export default {
    name: 'index',
    mounted() {
        setTimeout(() => {
            this.$router.push({
                name: 'index'
            });
        }, 2500)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#hello {
    text-align: center;
    margin-top: 60px;
}
h1 {
    color : #41B883
}
</style>
