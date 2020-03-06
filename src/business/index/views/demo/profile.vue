<style lang="stylus">
.profileImg
  img
    width 100%
.profileConnect
  position absolute
  bottom 20px
  left 50%
  margin-left -12px
  box-shadow 0 1px 3px rgba(0, 0, 0, 0.3)
  background-color #333
  padding 5px 10px 3px 10px
  cursor pointer
  .tb-icon
    color #fff
.profileImgList
  .tb-col-sm-6
    height 140px
    padding 10px
    img
      max-width 100%
      max-height 100%
</style>
<template>
  <div>
    <tb-breadcrumb>
      <tb-breadcrumb-one label="个人信息" :active="true"></tb-breadcrumb-one>
    </tb-breadcrumb>
    <tb-card class="tb-m-t-10">
      <tb-card-body class="tb-card-padding">
        <tb-row>
          <tb-col :sm="8">
            <div class="profileImg">
              <img src="../../../../components/images/xyjy1.jpeg">
            </div>
            <div class="profileConnect" @click="showMessagePanel">
              <tb-icon icon="comment-text-alt" size="30px"></tb-icon>
            </div>
          </tb-col>
          <tb-col :sm="16" class="tb-p-l-20 tb-p-r-20">
            <tb-tabs v-model="activeName">
              <tb-tab-pane label="关于我" name="about">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;新垣结衣（Aragaki Yui），1988年6月11日出生于冲绳县那霸市。日本女演员、歌手、模特。毕业于日出高中 [1]  。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;2001年，参加《nicola》模特比赛并获得最优秀奖。2005年，因出演现代剧《涩谷15》而作为演员出道。2006年，参演校园剧《我的老大，我的英雄》；同年，她还出版了个人首本写真集《水漾青春》。2007年，她从日出高校毕业后开始专注于演艺发展，并发表个人首张音乐专辑《天空》；同年，新垣结衣还主演了爱情片《恋空》，而她也凭借该片获得了多个电影新人奖项 [2-3]  。2010年，主演爱情片《花水木》 [4]  。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;2011年，主演都市剧《全开女孩》。2012年，相继参演现代剧《Legal High》、剧情片《剧场版新参者：麒麟之翼》 [5]  。2013年，主演都市剧《飞翔情报室》。2014年，她主演了剧情片《黎明的沙耶》 [6]  。2016年，主演爱情喜剧《逃避虽可耻但有用》 [7]  ，并凭借该剧获得了多个电视剧女主角奖项 [8-9]  。2017年，主演爱情片《恋爱回旋》 [10]  ，凭借该片获得第60届蓝丝带奖最佳女主角；同年11月，她还凭借医疗剧《Code Blue 3》获得第94届日剧学院赏最佳女配角 [11]  。2018年，出演电影《Code Blue》 [12]  ；主演爱情剧《无法化为野兽的我们》</p>
              </tb-tab-pane>
              <tb-tab-pane label="联系我" name="connect">
                <tb-row class="profileImgList">
                  <tb-col :sm="6">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113095&di=a10ae18f34824c6d1f58712644922010&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F60865259.jpeg" @click="showImage()">
                  </tb-col>
                  <tb-col :sm="6">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113095&di=2a05ee368630cbbef0e6650ca712e81c&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170612%2F35357d9f382a4371884aee4ad6db2821_th.jpg" @click="showImage()">
                  </tb-col>
                  <tb-col :sm="6">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113094&di=a96e19c31c7043aeb2a5b8bd07415711&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F25%2F20160125141749_JuUzW.jpeg" @click="showImage()">
                  </tb-col>
                  <tb-col :sm="6">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113094&di=06dd71ecf6f152653a3f71365eee16cc&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20181104%2F20181104112908_b11e4cfa6162e47ff388aa733f49f2b8_1.jpeg" @click="showImage()">
                  </tb-col>
                  <tb-col :sm="6">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113092&di=6a764d8064b9f46dd12d6f06a3ef9af5&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201504%2F07%2F20150407H0648_2GXMV.jpeg" @click="showImage()">
                  </tb-col>
                </tb-row>
              </tb-tab-pane>
              <tb-tab-pane label="作品" name="product">
              </tb-tab-pane>
            </tb-tabs>
          </tb-col>
        </tb-row>
      </tb-card-body>
    </tb-card>

    <tb-modal v-model="mshow" title="联系我" :bg-close="false" :has-close="true">
      <div class="tb-p-t-10 tb-p-b-10 tb-p-l-20 tb-p-r-10" style="line-height: 24px">
        <tb-input v-model="tvalue" 
          :textarea="true"
          :rows="5"
          placeholder="你好，我是新垣结衣，有什么想对我说的么？"></tb-input>
      </div>
      <div class="tb-p-20 clearfix">
        <tb-btn type="default" class="tb-float-right tb-m-l-10" @click="mshow = !mshow">关闭</tb-btn>
        <tb-btn type="primary" class="tb-float-right" @click="sendMessage">确定</tb-btn>
      </div>
    </tb-modal>
    <buffer-line :show="isBufferShow" bg-color="#EAA844"></buffer-line>
  </div>
</template>

<script>
  import BufferLine from 'components/bufferLine/bufferLine';

  export default {
    data () {
      return {
        activeName: this.$route.params.type ? this.$route.params.type : 'about',
        mshow: false,
        tvalue: '',
        isBufferShow: false
      }
    },

    mounted () {
      this.isBufferShow = true;
      setTimeout(() => {
        this.isBufferShow = false;
      }, 2000);

      this.$watch('activeName', (val) => {
        this.$router.push('/profile/' + val);
      });
    },

    methods: {
      showImage () {
        console.log('dd');
        this.$ImgPreview({
          url: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113095&di=a10ae18f34824c6d1f58712644922010&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F60865259.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113095&di=2a05ee368630cbbef0e6650ca712e81c&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170612%2F35357d9f382a4371884aee4ad6db2821_th.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113094&di=a96e19c31c7043aeb2a5b8bd07415711&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F25%2F20160125141749_JuUzW.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113094&di=06dd71ecf6f152653a3f71365eee16cc&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20181104%2F20181104112908_b11e4cfa6162e47ff388aa733f49f2b8_1.jpeg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544782113092&di=6a764d8064b9f46dd12d6f06a3ef9af5&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201504%2F07%2F20150407H0648_2GXMV.jpeg'
          ],
          onOpen () {
            // 开始图片预览时执行
            console.log('显示图片预览');
          },
          onClose () {
            // 关闭图片预览后执行
            console.log('关闭图片预览');
          }
        });
      },
      showMessagePanel () {
        this.tvalue = '';
        this.mshow = true;
      },
      sendMessage () {
        this.$Message({
          type: 'success',
          message: '消息已经发送',
          position: 'centertop'
        });
        this.mshow = false;
      }
    },

    components: {
      BufferLine
    }
  }
</script>