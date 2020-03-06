<style lang="stylus">
  
</style>

<template>
  <div>
    <tb-breadcrumb style="border-bottom:1px solid rgba(0,0,0,0.08)">
      <tb-breadcrumb-one label="块结构"></tb-breadcrumb-one>
      <tb-breadcrumb-one label="详情" :active="true"></tb-breadcrumb-one>
    </tb-breadcrumb>
    <tb-card class="tb-m-b-0 tb-card-bg">
      <tb-card-header>
        <h2 style="text-align:center">Card组件</h2>
      </tb-card-header>
      <tb-card-body class="tb-card-padding">
        <tb-row>

          <tb-col :sm="13">
            <tb-card class="tb-card-one" style="border-top 2px solid #688CFF">
              <tb-card-header>
                <h2>铜板街</h2>
              </tb-card-header>
              <tb-card-body class="tb-card-padding">
                <tb-form>
                  <tb-form-item label="姓名" position="top" align="left">
                    <tb-input v-model="name" placeholder="姓名">
                    </tb-input>
                  </tb-form-item>
                  <tb-form-item label="邮箱" position="top" align="left">
                    <tb-input v-model="email" placeholder="邮箱">
                    </tb-input>
                  </tb-form-item>
                  <tb-form-item label="性别" position="top" align="left">
                    <tb-select-input v-model="sex" :options="options" :filter="true" :multi="true" placeholder="请选择性别"></tb-select-input>
                  </tb-form-item>
                  <tb-form-item label="日期" position="top" align="left">
                    <tb-date-time v-model="date" type="date"></tb-date-time>
                  </tb-form-item>
                </tb-form>
                <tb-btn type="primary">提交</tb-btn>
              </tb-card-body>
            </tb-card>
          </tb-col>

          <tb-col :sm="10" :offset="1">
            <tb-card class="tb-card-one">
              <tb-card-header class="tb-bgm-amber">
                <h2>进度</h2>
              </tb-card-header>
              <tb-card-body class="tb-card-padding">
                <tb-steps :current="current">
                  <tb-step title="步骤一"></tb-step>
                  <tb-step title="步骤二"></tb-step>
                  <tb-step title="步骤三"></tb-step>
                </tb-steps>
              </tb-card-body>
            </tb-card>
            <tb-card class="tb-card-one">
              <tb-card-header class="tb-bgm-deeporange">
                <h2>百分比进度</h2>
              </tb-card-header>
              <tb-card-body class="tb-card-padding">
                <tb-progress :percent="50" type="warning" :striped="true" :active="true" :rect-height="50"></tb-progress>
              </tb-card-body>
            </tb-card>  
          </tb-col>
        </tb-row>
      </tb-card-body>
      <tb-card-footer>
        <!-- 内容 -->
      </tb-card-footer>
    </tb-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 0,
        name: '',
        email: '',
        options: [{
          value: 0,
          label: '男'
        }, {
          value: 1,
          label: '女'
        }],
        date: ''
      }
    },

    created () {

    },

    methods: {
      
    }
  }
</script>