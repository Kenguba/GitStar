<template>
  <Card class="w100p personal">
    <p slot="title" class="text-left">个人信息</p>
    <div class="personal-item">
      <img src="../../../src/assets/home/name.svg" alt srcset />
      <span>name:</span>
      <span>一缕清风</span>
    </div>
    <div class="personal-item">
      <img src="../../../src/assets/home/location.svg" alt srcset />
      <span>location:</span>
      <span>广州</span>
    </div>
    <Divider />
    <div class="personal-item">
      <img src="../../../src/assets/home/star.svg" alt srcset />
      <span>star:</span>
      <span>45</span>
    </div>
    <div class="personal-item">
      <img src="../../../src/assets/home/watch.svg" alt srcset />
      <span>watch:</span>
      <span class="sb">
        <span>45</span>
        <i-switch v-model="switch1" true-color="#13ce66">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </span>
    </div>
    <div class="personal-item">
      <img src="../../../src/assets/home/fork.svg" alt srcset />
      <span>fork:</span>
      <span>35</span>
    </div>
    <Divider dashed />
    <div class="personal-item">
      <img src="../../../src/assets/home/follower.svg" alt srcset />
      <span>follow:</span>
      <span class="sb">
        14
        <i-switch true-color="#13ce66">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </span>
    </div>
    <div class="personal-item">
      <img src="../../../src/assets/home/target_repo.svg" alt srcset />
      <span>目标仓库:</span>
      <span>
        <Tooltip content="KenGuba/google-access-helper">KenGuba/google-access-helper</Tooltip>
      </span>
    </div>
  </Card>
</template>
<script>
export default {
  name: "personal-information",
  data() {
    return {
      switch1: true
    };
  }
};
</script>


<style scoped lang='less'>
.personal-item {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 20px;
    margin-right: 10px;
  }
  > span {
    margin-right: 10px;
  }

  > span:nth-of-type(1) {
    width: 80px;
    text-align: start;
  }
  > span:nth-of-type(2) {
    width: calc(100% - 80px);
    text-align: start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>