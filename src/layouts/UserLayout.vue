<template>
<<<<<<< HEAD
  <div id="BlankLayout">
      <router-view />
  </div>
</template>

<script>
export default {
  name: "BlankLayout"
};
</script>

<style lang="less">
</style>>
=======
  <div>
    <router-link to="/">
      <div class="red" to="/">首页</div>
    </router-link>
    <div>登陆页面</div>
  </div>
</template>
<script>
export default {
  name: "UserLayout",
  data() {
    return {};
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
</style>
>>>>>>> 框架设计基本完毕,等待二次开发
