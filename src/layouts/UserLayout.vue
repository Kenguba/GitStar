<template>
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