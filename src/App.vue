<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import parser from 'ua-parser-js'

export default {
	name: 'app',
	components: {
	},
	mounted() {
		var ua = new parser()
		if(ua.model == 'iPhone'){

		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
</style>
