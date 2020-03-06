<style lang="stylus">
.toolCon
  position fixed
  right 0
  top 0
  height 100%
  width 400px
  background-color #333
  overflow hidden
  padding-bottom 50px
  z-index 20
  &.toolConLogin
    background-color #fff
  &:hover
    overflow auto
@media screen and (max-width: 768px)
  .toolCon
    box-shadow 0 0 10px rgba(51,51,51,0.38)

.oneTool
  display block
  width 90px
  height 90px
  border-radius 4px
  background-color #fff
  margin 10px 0
  text-align center
  font-size 14px
  cursor pointer
  transition all 0.25s
  color #5e5e5e
  p
    margin 5px 0 0
  &.router-link-active
    color #fff
    box-shadow 0 1px 5px rgba(0,0,0,0.8)
    background-color #4496EC
  &:hover
    color #fff
    box-shadow 0 1px 5px rgba(0,0,0,0.8)
    background-color #4496EC
.subCat
  padding 10px
  display block
  border-radius 4px
  color #333
  margin-bottom 15px
  background-color #F9D154
  &:hover
    color #fff
    box-shadow 0 1px 1px rgba(0,0,0,0.3)
    background-color #4496EC
  &.router-link-active
    color #fff
    box-shadow 0 1px 1px rgba(0,0,0,0.3)
    background-color #4496EC
</style>

<template>
  <div class="toolCon" :class="{'toolConLogin': isLogin}" v-if="isRightFixed">
    <div v-if="!isLogin">
      <logo-con></logo-con>
      <cur-user></cur-user>
      <tb-card style="background-color:transparent;" class="tb-m-t-20">
        <tb-card-header>
          <h2 style="color:#fff;">工具列表</h2>
        </tb-card-header>
        <tb-card-body class="tb-card-padding">
          <tb-row>
            <tb-col :span="8">
              <router-link :to="{path: '/index'}" class="oneTool">
                <tb-icon icon="home" size="40px" class="tb-m-t-10"></tb-icon>
                <p>首页</p>
              </router-link>
            </tb-col>
            <tb-col :span="8">
              <router-link :to="{path: '/card'}" class="oneTool">
                <tb-icon icon="card" size="40px" class="tb-m-t-10"></tb-icon>
                <p>块结构</p>
              </a>
            </tb-col>
            <tb-col :span="8">
              <a href="javascript:void(0)" class="oneTool" @click="setSubCat('one', true)">
                <tb-icon icon="storage" size="40px" class="tb-m-t-10"></tb-icon>
                <p>表单列表</p>
              </a>
            </tb-col>
            <tb-col :span="8">
              <router-link :to="{path: '/profile'}" class="oneTool">
                <tb-icon icon="folder-person" size="40px" class="tb-m-t-10"></tb-icon>
                <p>个人信息</p>
              </router-link>
            </tb-col>
            <tb-col :span="8">
              <router-link :to="{path: '/login'}" class="oneTool">
                <tb-icon icon="key" size="40px" class="tb-m-t-10"></tb-icon>
                <p>登录</p>
              </router-link>
            </tb-col>
            <tb-col :span="8">
              <router-link :to="{path: '/404'}" class="oneTool">
                <tb-icon icon="local-cafe" size="40px" class="tb-m-t-10"></tb-icon>
                <p>404</p>
              </router-link>
            </tb-col>
          </tb-row>
        </tb-card-body>
      </tb-card>

      <sub-menu v-model="catShow.one" cat-name="表单列表">
        <router-link :to="{path: '/form'}" class="subCat">基本表单</router-link>
        <router-link :to="{path: '/data'}" class="subCat">数据列表</router-link>
      </sub-menu>
    </div>
    <div v-if="isLogin">
      <logo-con :is-login="true"></logo-con>
      <login-panel></login-panel>
    </div>
  </div>
</template>

<script>
  import CurUser from '../curuser/curuser';
  import LogoCon from '../logocon/logocon';
  import LoginPanel from '../loginpanel/index';
  import SubMenu from './submenu';

  export default {
    props: {
      isRightFixed: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        isLogin: true,
        catShow: {
          one: false
        }
      }
    },

    watch: {
      '$route' (to) {
        const path = to.path;
        if (path === '/login') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    },

    created () {
      const path = this.$route.path;
      if (path === '/login') {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },

    methods: {
      setSubCat (type, status) {
        for (const key in this.catShow) {
          if (key === type) {
            this.catShow[key] = status;
          } else {
            this.catShow[key] = false;
          }
        }
      }
    },

    components: {
      LogoCon,
      CurUser,
      LoginPanel,
      SubMenu
    }
  }
</script>