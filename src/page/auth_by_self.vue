<template>
  <!-- <v-fragment></v-fragment> -->
  <Card class="warp">
    <h2>自助授权指南：</h2>
    <h3 class="mt40">Step:1</h3>
    <p class="mt10">
      打开链接：
      <a
        href="https://github.com/settings/tokens"
        target="_blank"
      >https://github.com/settings/tokens</a> ，点击
      <strong>Generate new token</strong> 按钮
      <img src="../assets/user/select_scopes.jpg" alt srcset />
    </p>

    <h3 class="mt40">Step:2</h3>
    <p class="mt10">
      在打开的
      <strong>New personal access token</strong> 中选中"repo"和"user",如下所示
    </p>
    <h3 class="mt40">Step:3</h3>
    <div class="token-box mt10">
      <div class="token-input-warp">
        <span>token：</span>
        <Input class="token-input" placeholder="复制Github token并输入" size="default">
          <Icon type="ios-lock" slot="prefix" />
        </Input>
      </div>
      <Button type="success" size="default">登陆</Button>
    </div>
  </Card>
</template>


<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>


<style scoped lang='less'>
@import "../styles/config.less";
.warp {
  margin: 30px auto;
  display: flex;
  justify-self: start;
  flex-direction: column;
  width: 700px;
  text-align: start;
  img {
    width: 100%;
  }
  strong {
    color: @layout-header-background;
  }
}

.token-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.token-input-warp {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
}
</style>