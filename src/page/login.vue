<template>
  <div class="bg-warp">
    <div class="user-login-container">
      <router-link to="/"> 
      <img src="https://file.iviewui.com/admin-pro-dist/img/logo.7b8cc895.png" alt />
      </router-link>
      <p class="text-center">iView Admin Pro 企业级中台前端/设计解决方案</p>
      <Input class="mt20" placeholder="请输入GiuHub账号"  size="large">
        <Icon type="ios-contact" slot="prefix" />
      </Input>
      <Input class="mt20" placeholder="请输入密码" size="large" type="password" password >
        <Icon type="ios-lock" slot="prefix" />
      </Input>

      <div class="w100p mt15 start">
        <Checkbox v-model="single">自动登录</Checkbox>
      </div>

      <Button type="success mt15" size="large">登陆</Button>

      <div class="other-login mt15">
        <span>其他方式登陆</span>
        <img src="../assets/commom/icon-github.svg" alt srcset />
        <img src="../assets/commom/icon-wechat.svg" alt srcset />
        <img src="../assets/commom/icon-qq.svg" alt srcset />
        <img src="../assets/commom/icon-weibo.svg" alt srcset />
        <img src="../assets/commom/icon-wechat.svg" alt srcset />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return { single: true };
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/basic/home") {
      to.meta.keepAlive = true;
    } else {
      to.meta.keepAlive = false;
    }
    next();
  }
};
</script>


<style scoped lang='less'>
@import "../styles/theme.less";

.bg-warp {
  width: 100vw;
  height: 100vh;
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

.user-login-container {
  width: 368px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 10%;
  margin-left: -184px;
  img {
    width: 100%;
  }
  .other-login {
    display: flex;
    justify-content: start;
    align-items: center;
    span {
      margin-right: 8px;
    }
    img {
      margin-right: 8px;
      width: 25px;
    }
    img:nth-child(2) {
      width: 30px !important;
    }
  }
}

@media screen and(max-width: @main-mobile-max-width) {
  .xs-hide {
    display: none;
  }
  .user-login-container {
    width: 90%;
    left: 0%;
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>