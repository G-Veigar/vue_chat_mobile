<template>
  <div id="app">
	<audio id="chat-audio" src="http://data3.huiyi8.com/2015/saraxuss/3/11/4.mp3">{{ handleAudio }}</audio>
    <router-view></router-view>
    <welcome-app :show="welShow"></welcome-app>
  </div>
</template>

<script>
import parser from 'ua-parser-js'
import { mapState, mapMutations } from 'vuex'
import welcomeApp from './components/welcomeApp.vue'

export default {
	name: 'app',
	data() {
		return {
			chatAudio: {},
			welShow: true
		}
	},
	computed: {
		...mapState([
				'needAudio'
		]),
		handleAudio() {
			if(this.needAudio) {
					this.playMessAudio()
					this.resetNeedAudio()
			}
			return true
		}
	},
	methods: {
		...mapMutations([
			'resetNeedAudio'
		]),
		playMessAudio() {
			this.chatAudio.play()
		}
	},
	components: {
		welcomeApp
	},
	mounted() {
		this.chatAudio = document.getElementById('chat-audio')
		var ua = new parser()
		if(ua.model == 'iPhone'){
			
		}
		var myThis = this
		setTimeout(function() {
			myThis.welShow = false
		}, 3000)
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
</style>
