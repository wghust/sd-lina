<style lang="stylus">
.subMenuBar
  position fixed
  width 360px
  bottom 60px
  margin-left 20px
  max-height 500px
  z-index 30
  overflow auto
  
.sub-slide-enter-active
  margin-bottom -500px
  opacity 0
  transition all 0.25s
.sub-slide-enter-to
  opacity 1
  margin-bottom 0
.sub-slide-leave-active
  opacity 1
  margin-bottom 0
  transition all 0.25s
.sub-slide-leave-to
  opacity 0
  margin-bottom -500px
</style>

<template>
  <div>
    <transition name="sub-slide">
      <div class="subMenuBar" v-if="model">
        <tb-card class="tb-m-b-0" style="border-radius: 4px">
          <tb-card-header>
            <h2>{{catName}}</h2>
            <span class="opEditBtn" @click="model = false"><tb-icon icon="close" size="12px"></tb-icon></span>
          </tb-card-header>
          <tb-card-body class="tb-card-padding tb-p-t-10">
            <slot></slot>
          </tb-card-body>
        </tb-card>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      catName: {
        type: String,
        default: '菜单'
      },
      value: {}
    },

    computed: {
      model: {
        get () {
          return this.value;
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    },

    data () {
      return {

      }
    },

    created () {

    },

    methods: {
      
    }
  }
</script>