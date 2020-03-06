<style lang="stylus">
  .logoCon
    height 50px
    padding-left 15px
    &.logoConLogin
      margin-top 50px
      text-align center
      padding-left 0
      .logo
        color #333
        span
          color #333
      .subLogo
        color #333
    .logo
      display inline-block
      height 50px
      line-height 50px
      color #fff
      img
        height 40px
        margin-top -14px
      span
        color #fff
        font-size 24px
        margin-left 10px
    .subLogo
      color #fff
      font-size 12px
</style>

<template>
  <div class="logoCon" :class="{'logoConLogin': isLogin}">
    <a href="" class="logo"><img src="./doom_1x_new.png"><span>天龙</span></a>
    <a href="" class="subLogo">莉娜</a>
  </div>
</template>

<script>
  export default {
    props: {
      isLogin: {
        type: Boolean,
        default: false
      }
    }
  }
</script>