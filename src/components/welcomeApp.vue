<template>
    <transition name="fade">
        <div class="welcome" v-if="show">
            <div class="csshub-loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="csshub-loading-text">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'welcomeApp',
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    props: ['show']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.welcome {
    font-family: 'Hiragino Sans GB', Helvetica, Arial, 'STHeiti', 'WenQuanYi Micro Hei', sans-serif;
    background-color: #e7e6dd;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3001;
}
.csshub-loading {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0px auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
.csshub-loading span {
  display: block;
  position: absolute;
  width: 50%;
  height: 50%;
}
.csshub-loading span:nth-child(1) {
  top: 0;
  left: 0;
  background-color: rgba(66, 133, 244, 0.75);
  -webkit-animation: csshub-move1 2s linear infinite;
          animation: csshub-move1 2s linear infinite;
}
.csshub-loading span:nth-child(2) {
  top: 0;
  right: 0;
  background-color: rgba(219, 68, 55, 0.75);
  -webkit-animation: csshub-move2 2s linear infinite;
          animation: csshub-move2 2s linear infinite;
}
.csshub-loading span:nth-child(3) {
  bottom: 0;
  left: 0;
  background-color: rgba(244, 180, 0, 0.75);
  -webkit-animation: csshub-move3 2s linear infinite;
          animation: csshub-move3 2s linear infinite;
}
.csshub-loading span:nth-child(4) {
  bottom: 0;
  right: 0;
  background-color: rgba(15, 157, 88, 0.75);
  -webkit-animation: csshub-move4 2s linear infinite;
          animation: csshub-move4 2s linear infinite;
}

@-webkit-keyframes csshub-move1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
    z-index: 10;
  }
  25% {
    -webkit-transform: translate(100%, 0);
            transform: translate(100%, 0);
  }
  50% {
    -webkit-transform: translate(100%, 100%);
            transform: translate(100%, 100%);
  }
  75% {
    -webkit-transform: translate(0, 100%);
            transform: translate(0, 100%);
    z-index: 0;
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

@keyframes csshub-move1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
    z-index: 10;
  }
  25% {
    -webkit-transform: translate(100%, 0);
            transform: translate(100%, 0);
  }
  50% {
    -webkit-transform: translate(100%, 100%);
            transform: translate(100%, 100%);
  }
  75% {
    -webkit-transform: translate(0, 100%);
            transform: translate(0, 100%);
    z-index: 0;
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@-webkit-keyframes csshub-move2 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  25% {
    -webkit-transform: translate(0, 100%);
            transform: translate(0, 100%);
  }
  50% {
    -webkit-transform: translate(-100%, 100%);
            transform: translate(-100%, 100%);
    z-index: 0;
  }
  75% {
    -webkit-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
    z-index: 10;
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes csshub-move2 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  25% {
    -webkit-transform: translate(0, 100%);
            transform: translate(0, 100%);
  }
  50% {
    -webkit-transform: translate(-100%, 100%);
            transform: translate(-100%, 100%);
    z-index: 0;
  }
  75% {
    -webkit-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
    z-index: 10;
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@-webkit-keyframes csshub-move3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  25% {
    -webkit-transform: translate(0, -100%);
            transform: translate(0, -100%);
    z-index: 10;
  }
  50% {
    -webkit-transform: translate(100%, -100%);
            transform: translate(100%, -100%);
  }
  75% {
    -webkit-transform: translate(100%, 0);
            transform: translate(100%, 0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
    z-index: 0;
  }
}
@keyframes csshub-move3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  25% {
    -webkit-transform: translate(0, -100%);
            transform: translate(0, -100%);
    z-index: 10;
  }
  50% {
    -webkit-transform: translate(100%, -100%);
            transform: translate(100%, -100%);
  }
  75% {
    -webkit-transform: translate(100%, 0);
            transform: translate(100%, 0);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
    z-index: 0;
  }
}
@-webkit-keyframes csshub-move4 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  25% {
    -webkit-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
    z-index: 0;
  }
  50% {
    -webkit-transform: translate(-100%, -100%);
            transform: translate(-100%, -100%);
    z-index: 10;
  }
  75% {
    -webkit-transform: translate(0, -100%);
            transform: translate(0, -100%);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes csshub-move4 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  25% {
    -webkit-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
    z-index: 0;
  }
  50% {
    -webkit-transform: translate(-100%, -100%);
            transform: translate(-100%, -100%);
    z-index: 10;
  }
  75% {
    -webkit-transform: translate(0, -100%);
            transform: translate(0, -100%);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

.csshub-loading-text {
  text-align: center;
}
.csshub-loading-text span {
  display: inline-block;
  margin: 0 5px;
  color: #000;
}
.csshub-loading-text span:nth-child(1) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 0s infinite linear alternate;
          animation: csshub-blur-text 1.5s 0s infinite linear alternate;
}
.csshub-loading-text span:nth-child(2) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 0.2s infinite linear alternate;
          animation: csshub-blur-text 1.5s 0.2s infinite linear alternate;
}
.csshub-loading-text span:nth-child(3) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 0.4s infinite linear alternate;
          animation: csshub-blur-text 1.5s 0.4s infinite linear alternate;
}
.csshub-loading-text span:nth-child(4) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 0.6s infinite linear alternate;
          animation: csshub-blur-text 1.5s 0.6s infinite linear alternate;
}
.csshub-loading-text span:nth-child(5) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 0.8s infinite linear alternate;
          animation: csshub-blur-text 1.5s 0.8s infinite linear alternate;
}
.csshub-loading-text span:nth-child(6) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 1s infinite linear alternate;
          animation: csshub-blur-text 1.5s 1s infinite linear alternate;
}
.csshub-loading-text span:nth-child(7) {
  -webkit-filter: blur(0px);
          filter: blur(0px);
  -webkit-animation: csshub-blur-text 1.5s 1.2s infinite linear alternate;
          animation: csshub-blur-text 1.5s 1.2s infinite linear alternate;
}

@-webkit-keyframes csshub-blur-text {
  0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
  }
  100% {
    -webkit-filter: blur(4px);
            filter: blur(4px);
  }
}

@keyframes csshub-blur-text {
  0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
  }
  100% {
    -webkit-filter: blur(4px);
            filter: blur(4px);
  }
}

</style>
