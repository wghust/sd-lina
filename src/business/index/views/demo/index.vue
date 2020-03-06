<style lang="stylus">
.headerImg
  height 100px
  width 100px
  overflow hidden
  border-radius 100px
  box-shadow 0 1px 3px rgba(0,0,0,0.3)
  margin 10px auto
  img
    height 100px
    margin-left -30px
</style>
<template>
  <div>
    <tb-breadcrumb>
      <tb-breadcrumb-one label="首页" :active="true"></tb-breadcrumb-one>
    </tb-breadcrumb>
    <tb-card style="border-bottom: 1px solid #f2f2f2">
      <tb-card-body class="tb-card-padding">
        <div class="headerImg">
          <img src="../../../../components/images/xyjy.jpeg">
        </div>
        <p style="text-align:center;margin-top:30px;font-size:18px">新垣结衣欢迎你</p>
      </tb-card-body>
    </tb-card>
    <tb-row>
      <tb-col :sm="12" style="border-right: 1px solid #f2f2f2;" class="tb-p-b-20">
        <tb-card>
          <tb-card-header>
            <h2 style="text-align:center;"><span style="padding: 0 10px 5px 10px;border-bottom: 1px solid #f2f2f2;">项目完成度</span></h2>
          </tb-card-header>
          <tb-card-body class="tb-card-padding">
            <div id="drawing1" style="width:200px;height:200px;margin: 20px auto;"></div>
          </tb-card-body>
        </tb-card>
      </tb-col>
      <tb-col :sm="12" class="tb-p-b-20">
        <tb-card>
          <tb-card-header>
            <h2 style="text-align:center;"><span style="padding: 0 10px 5px 10px;border-bottom: 1px solid #f2f2f2;">进件审核概况</span></h2>
          </tb-card-header>
          <tb-card-body class="tb-card-padding">
            <div id="drawing2" class="tb-m-t-10"></div>
          </tb-card-body>
        </tb-card>
      </tb-col>
    </tb-row>
    <buffer-line :show="isBufferShow" bg-color="#EAA844"></buffer-line>
  </div>
</template>

<script>
  import BufferLine from 'components/bufferLine/bufferLine';
  import { CirclePie, ListBar } from '@tbj/dk'

  export default {
    data () {
      return {
        isBufferShow: false,
        alertShow: true,
        disabled: false,
        cardMsg: '打卡',
        activeName: 'jugg'
      }
    },

    created () {
      console.log(this.$common.dateFormat.oneToTwo(2));
    },

    mounted () {
      this.isBufferShow = true;
      setTimeout(() => {
        this.isBufferShow = false;
      }, 2000);

      new CirclePie('drawing1', {
        diameter: 200,
        inColor: '#f2f2f2',
        outColor: '#B9E575',
        fontColor: '#B9E575',
        deg: 120
      });

      new ListBar('drawing2', {
        height: 200,
        space: 20,
        data: [{
          title: '铜板街',
          num: 20
        }, {
          title: '铜金所',
          num: 80
        }, {
          title: '信贷服务',
          num: 60
        }]
      });
    },

    methods: {
    },

    components: {
      BufferLine
    }
  }
</script>