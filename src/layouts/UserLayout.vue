<template>
  <div class="user-login-container">
    <!-- <router-link to="/"> <div class="red" to="/">首页</div> </router-link> -->
    <img src="https://file.iviewui.com/admin-pro-dist/img/logo.7b8cc895.png" alt />
    <p class="text-center">iView Admin Pro 企业级中台前端/设计解决方案</p>
    <Input placeholder="请输入GiuHub账号" class="mt20">
      <Icon type="ios-contact" slot="prefix" />
    </Input>
    <Input placeholder="请输入密码" type="password" password class="mt20">
      <Icon type="ios-lock" slot="prefix" />
    </Input>

    <div class="w100p mt15 start">
      <Checkbox v-model="single" >自动登录</Checkbox>
    </div>

    <Button type="success mt15">登陆</Button>

    <div class="other-login mt10">
      <span>其他方式登陆</span>
      <img src="../../src/assets/commom/icon-wechat.svg" alt srcset />
      <img src="../../src/assets/commom/icon-qq.svg" alt srcset />
      <img src="../../src/assets/commom/icon-weibo.svg" alt srcset />
      <img src="../../src/assets/commom/icon-wechat.svg" alt srcset />
    </div>
  </div>
</template>
<script>
export default {
  name: "UserLayout",
  data() {
    return { single: true };
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/BasicLayout") {
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
  }
}



@media screen and(max-width: @main-mobile-max-width) {
  .xs-hide {
    display: none;
  }
}

</style>