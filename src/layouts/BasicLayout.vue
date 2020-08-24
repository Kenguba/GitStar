<template>
  <div class="layout">
    <Layout>
      <div class="header-container">
        <div class="header">
          <router-link to="/">
            <div class="layout-logo">
              <img :src="logo_address" alt srcset />
              <span>GitStart</span>
            </div>
          </router-link>

          <div class="layout-nav">
            <div name="1" class="xs-hide">
              <Poptip trigger="hover" title="扫描APP下载" placement="bottom">
                <Icon type="ios-navigate" />App下载
                <div slot="content">
                  <img id="down_app" :src="down_app" alt srcset />
                </div>
              </Poptip>
            </div>
            <div name="2" class="xs-hide">
              <Poptip trigger="hover" title="App扫描登陆" placement="bottom">
                <Icon type="ios-keypad" />App登陆
                <div slot="content">
                  <img id="down_app" :src="app_login" alt srcset />
                </div>
              </Poptip>
            </div>
            <div name="3">
              <Dropdown>
                <div id="profile">
                  <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                  <div>一缕清风</div>
                </div>
                <DropdownMenu slot="list">
                  <DropdownItem>帐户信息</DropdownItem>
                  <DropdownItem>个人仓库</DropdownItem>
                  <DropdownItem disabled>点赞统计</DropdownItem>
                  <DropdownItem divided>设置中心</DropdownItem>
                  <DropdownItem divided>
                    <div @click="logout()">退出</div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <Content class="content">
        <div id="row">
          <div class="flex-7 mr30 col right-section">
            <div class="flex">
              <div class="carousel w100p flex-3">
                <Swiper
                  v-if="slidesReal.length > 0"
                  :autoPlay="true"
                  :showIndicator="true"
                  interval="3000"
                  duration="800"
                  style="w100p"
                >
                  <Slide @click="clickMe" v-for="(item,index) in slidesReal" :key="index">
                    <img class="w100p" :src="item.img" alt srcset />
                  </Slide>
                </Swiper>
              </div>
              <div class="showcolumn col flex-1 xs-hide">
                <div class="h100p w100p">我要上头条</div>
                <div class="blue h100p w100p">使用帮助</div>
              </div>
            </div>
            <Tabs value="name1">
              <TabPane :label="label" name="name1">
                <ListShow></ListShow>
              </TabPane>
              <TabPane label="互粉列表" name="name2">
                <ListShow></ListShow>
              </TabPane>
              <TabPane label="Star记录" name="name3">标签三的内容</TabPane>
              <TabPane label="Watch记录" name="name4">标签三的内容</TabPane>
              <TabPane label="Fork记录" name="name5">标签三的内容</TabPane>
              <TabPane label="Follow记录" name="name6">标签三的内容</TabPane>
              <TabPane label="排行榜" name="name7">标签三的内容</TabPane>
            </Tabs>
          </div>

          <div class="flex-2 col ml5 xs-hide">
            <Card class="w100p h300">
              <p slot="title" class="text-left">个人信息</p>
            </Card>
            <Notice />
            <About />
          </div>
        </div>
      </Content>
      <Footer class="layout-footer-center">2020-2021 &copy; 一缕清风</Footer>
    </Layout>
  </div>
</template>
<script>
import web from "../../config/web.base.js";
import { Swiper, Slide } from "vue-swiper-component";
import { About, Notice, ListShow } from "@/components/home";

export default {
  components: {
    Swiper,
    Slide,
    About,
    Notice,
    ListShow
  },
  data() {
    return {
      logo_address: web.domain + "/static/img/logo_white.png",
      swiper_img1: web.domain + "/media/banner/better-gesture.png",
      down_app:
        "https://wangsj.oss-cn-shanghai.aliyuncs.com/gitstar-img/app_2d_code.png",
      app_login:
        "data:image/png;base64,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",
      label: h => {
        return h("div", [
          h("span", "标签一  "),
          h("Badge", {
            props: {
              count: 3
            }
          })
        ]);
      },
      slidesReal: [
        {
          img: web.domain + "/media/banner/better-gesture.png"
        },
        {
          img: web.domain + "/media/banner/quickredis.jpg"
        },
        {
          img: web.domain + "/media/banner/better-gesture.png"
        },
        {
          img: web.domain + "/media/banner/better-gesture.png"
        },
        {
          img: web.domain + "/media/banner/better-gesture.png"
        }
      ]
    };
  },

  methods: {
    logout: function() {
      this.$router.push({ path: "/UserLayout", query: { setid: 123456 } });
      // this.$router.push({path:'/UserLayout',params:{setid:111222}});
    }
  }
};
</script>


<style scoped lang='less'>
@import "../styles/theme.less";

.layout-logo {
  height: 100%;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 500;
  img {
    margin-left: 3px;
    height: 70%;
  }
  span {
    margin-top: 3px;
    margin-left: 5px;
  }
}

.layout-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-right: 20px;
  }
}

.layout-footer-center {
  text-align: center;
}

.white {
  color: #fff !important;
}

#down_app {
  width: 20vw;
  max-width: 200px;
  min-width: 80px;
}

#profile {
  display: flex;
  padding-left: 0.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  align-items: center;
  margin-top: 5px;
  div {
    margin-left: 0.5rem;
    margin-top: 2px;
  }
}

#row {
  display: flex;
  height: 800px;
  margin-top: 20px;
  .carousel {
    height: 400px;
    width: 300px;
    overflow: hidden;
  }

  .showcolumn {
    height: 400px;
    div {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      font-weight: bold;
      color: #fff;
    }
    div:nth-child(1) {
      background: #01aaed;
    }
    div:nth-child(2) {
      background: #ffb800;
    }
  }
}

.header-container {
  width: 100%;
  height: @header-height;
  background: @layout-header-background;
}

.header {
  display: flex;
  justify-content: space-between;
  background: @layout-header-background;
  height: @header-height;
}

@media screen and (min-width: 1368px) and (max-width: 1980px) {
  .content,
  .header {
    width: 1368px;
    margin: 0 auto;
  }
  .right-section {
    margin-right: 0;
  }
}

@media screen and(max-width: 480px) {
  .xs-hide {
    display: none;
  }
}
</style>