<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <router-link to="/">
            <div class="layout-logo">
              <img :src="logo_address" alt srcset />
              <span>GitStart</span>
            </div>
          </router-link>
          <div class="layout-nav">
            <MenuItem name="1">
              <Poptip class="white" trigger="hover" title="扫描APP下载" placement="bottom">
                <Icon type="ios-navigate"></Icon>App下载
                <div slot="content">
                  <img id="down_app" :src="down_app" alt srcset />
                </div>
              </Poptip>
            </MenuItem>
            <MenuItem name="2">
              <Poptip class="white" trigger="hover" title="App扫描登陆" placement="bottom">
                <Icon type="ios-keypad"></Icon>App登陆
                <div slot="content">
                  <img id="down_app" :src="app_login" alt srcset />
                </div>
              </Poptip>
            </MenuItem>
            <MenuItem name="3">
              <Dropdown>
                <div id="profile">
                  <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                  <div>一缕清风</div>
                </div>
                <DropdownMenu slot="list">
                  <DropdownItem>帐户信息</DropdownItem>
                  <DropdownItem>个人仓库</DropdownItem>
                  <DropdownItem disabled>点赞统计</DropdownItem>
                  <DropdownItem>收入来源</DropdownItem>
                  <DropdownItem divided>设置</DropdownItem>
                  <DropdownItem divided>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <!-- <MenuItem name="4">
              <Icon type="ios-paper"></Icon>Item 4
            </MenuItem>-->
          </div>
        </Menu>
      </Header>

      <Content class="content" :style="{padding: '0 50px'}">
        <!-- <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>-->

        <Card>
          <div id="row">
            <div class="flex-7 mr40 col">
              <div class="flex">
                <div class="carousel w100p flex-3">
                  <Swiper
                    v-if="slidesReal.length > 0"
                    :autoPlay="true"
                    :showIndicator="true"
                    interval="2500"
                    duration="500"
                    style="w100p"
                  >
                    <Slide @click="clickMe" v-for="(item,index) in slidesReal" :key="index">
                      <img class="w100p" :src="swiper_img1" alt srcset />
                    </Slide>
                  </Swiper>
                </div>
                <div class="showcolumn col flex-1">
                  <div class="h100p w100p">我要上头条</div>
                  <div class="blue h100p w100p">使用帮助</div>
                </div>
              </div>
              <Tabs value="name1">
                <TabPane :label="label" name="name1">标签一的内容</TabPane>
                <TabPane label="互粉列表" name="name2">标签二的内容</TabPane>
                <TabPane label="Star记录" name="name3">标签三的内容</TabPane>
                <TabPane label="Watch记录" name="name4">标签三的内容</TabPane>
                <TabPane label="Fork记录" name="name5">标签三的内容</TabPane>
                <TabPane label="Follow记录" name="name6">标签三的内容</TabPane>
                <TabPane label="排行榜" name="name7">标签三的内容</TabPane>
              </Tabs>
            </div>
            <div class="flex-2 col ml5">
              <Card class="w100p h300">
                <p slot="title" class="text-left">个人信息</p>
              </Card>
              <Card class="mt10 w100p">
                <p slot="title" class="text-left">公告</p>
                <h3 class="text-left color-red">
                  1，点赞时出现数据加载不出来的情况，可以借助梯子，推荐免费的蓝灯。
                  2，标记为失信的用户，大家不要对其点赞，已点过赞的可自行取消。
                </h3>
              </Card>
              <Card class="mt10 w100p aaaa">
                <p slot="title" class="text-left">关于</p>
                <Badge color="cyan" text="我要反馈" />
                <br />
                <Badge color="cyan" text="app下载" />
                <br />
                <Badge color="cyan" text="交流群:904860781" />
                <br />
                <Badge color="cyan" text="商务合作" />
                <br />
                <Badge color="cyan" text="赞助本站" />
                <br />
              </Card>
            </div>
          </div>

          <div style="min-height: 200px;"></div>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2020-2021 &copy; 一缕清风</Footer>
    </Layout>
  </div>
</template>
<script>
import web from "../../config/web.base.js";
import { Swiper, Slide } from "vue-swiper-component";

export default {
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
      slidesReal: [1, 2, 3, 4, 5]
    };
  },
  components: {
    Swiper,
    Slide
  }
};
</script>


<style scoped lang='less'>
html {
  font-size: 62.5%;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 250px;
  height: 100%;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  img {
    height: 80%;
  }
  span {
    margin-top: 3px;
    margin-left: 5px;
  }
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
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
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  div {
    margin-left: 0.2rem;
  }
}

#row {
  display: flex;
  height: 800px;

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

  .yellow {
    background: yellow;
  }
  .red {
    background: red;
  }
  .pink {
    background: pink;
  }
  .blue {
    background: blue;
  }

  .color-red {
    color: red;
  }

  .flex {
    display: flex;
    overflow: hidden;
  }

  .flex-1 {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .flex-2 {
    flex: 2;
    display: flex;
    overflow: hidden;
  }
  .flex-3 {
    flex: 3;
    display: flex;
    overflow: hidden;
  }
  .flex-4 {
    flex: 4;
    display: flex;
    overflow: hidden;
  }
  .flex-5 {
    flex: 5;
    display: flex;
    overflow: hidden;
  }
  .flex-6 {
    flex: 6;
    display: flex;
    overflow: hidden;
  }
  .flex-7 {
    flex: 7;
    display: flex;
    overflow: hidden;
  }
  .flex-8 {
    flex: 8;
    display: flex;
  }
  .w100p {
    width: 100%;
  }
  .h100p {
    height: 100%;
  }

  .h100 {
    height: 100px;
  }

  .h300 {
    height: 300px;
  }

  .h500 {
    height: 500px;
  }

  .mt10 {
    margin-top: 10px;
  }
  .ml5 {
    margin-left: 5px;
  }
  .mr40 {
    margin-right: 40px;
  }
  .col {
    display: flex;
    flex-direction: column;
  }

  .text-left {
    text-align: left !important;
  }

  .content {
    width: 80vw;
    min-width: 800px;
    max-width: 800px;
  }
}
</style>