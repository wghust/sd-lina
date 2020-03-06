<style lang="stylus">
.setMenu
  position fixed
  right 20px
  bottom 20px
  z-index 22

.slide-left-enter-active
  margin-left 500px
  opacity 0
  transition all 0.25s
.slide-left-enter-to
  opacity 1
  margin-left 0
.slide-left-leave-active
  opacity 1
  margin-left 0
  transition all 0.25s
.slide-left-leave-to
  opacity 0
  margin-left -500px   
  
.slide-right-enter-active
  margin-left -500px
  opacity 0
  transition all 0.25s
.slide-right-enter-to
  opacity 1
  margin-left 0
.slide-right-leave-active
  opacity 1
  margin-left 0
  transition all 0.25s
.slide-right-leave-to
  opacity 0
  margin-left 500px
</style>
<template>
  <div id="app">
    <div class="setMenu">
      <tb-btn :icon="isLeftFixed ? 'menu' : 'widgets'" type="danger" @click="changeLeft(!isLeftFixed)"></tb-btn>
    </div>
    <transition :name="slideName">
      <router-view class="container" :class="{'fullContainer': !isLeftFixed}"></router-view>
    </transition>
    <left-bar :is-right-fixed="isLeftFixed"></left-bar>
    <!-- <bottom-footer :is-left-fixed="isLeftFixed"></bottom-footer> -->
  </div>
</template>

<script>
  import leftBar from '../../../components/leftbar/leftbar.vue';
  import bottomFooter from '../../../components/bottomfooter/bottomfooter.vue';

  const pathArr = [
    '/index',
    '/card',
    '/form',
    '/data',
    '/profile',
    '/login',
    '/404'
  ]

  export default {
    data () {
      return {
        slideName: 'slide-right'
      }
    },

    computed: {
      isLeftFixed () {
        return this.$store.state.isLeftFixed;
      },
      isTopShow () {
        return this.$store.state.isTopShow;
      }
    },

    watch: {
      '$route' (to, from) {
        if (pathArr.indexOf(to.path) > pathArr.indexOf(from.path)) {
          this.slideName = 'slide-left';
        } else {
          this.slideName = 'slide-right';
        }
      }
    },

    created () {
      if (document.body.clientWidth < 768) {
        this.$store.commit('SET_LEFTMENU', false);
      }
      
      window.onresize = () => {
        if (document.body.clientWidth < 768) {
          this.$store.commit('SET_LEFTMENU', false);
        }
      }
    },

    methods: {
      changeLeft (type) {
        this.$store.commit('SET_LEFTMENU', type);
      }
    },

    components: {
      leftBar,
      bottomFooter
    }
  }
</script>