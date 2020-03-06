<style lang="stylus">
  
</style>

<template>
  <div>
    <tb-card>
      <tb-card-body class="tb-card-padding">
        <tb-form class="tb-m-t-20 tb-p-l-10 tb-p-r-10">
          <tb-form-item label="用户名" position="left" align="left">
            <tb-input v-model="searchForm.username"></tb-input>
          </tb-form-item>

          <tb-form-item label="密码" position="left" align="left">
            <tb-input v-model="searchForm.password"></tb-input>
          </tb-form-item>
          <tb-form-item label="是否记住" position="left" align="left">
            <tb-checkbox v-model="searchForm.isRemember" label=""></tb-checkbox>
          </tb-form-item>

          <tb-form-item>
            <tb-btn type="primary" @click="checkLogin" class="tb-m-r-30">登录</tb-btn>
            <router-link :to="{path: '/index'}"><tb-btn type="danger">返回</tb-btn></router-link>
          </tb-form-item>
        </tb-form>
      </tb-card-body>
    </tb-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchForm: {
          username: '',
          password: '',
          isRemember: false
        }
      }
    },

    created () {

    },

    methods: {
      checkLogin () {
        
      }
    }
  }
</script>