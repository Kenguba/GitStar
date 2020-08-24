<template>
  <Tabs value="name1">
    <TabPane :label="label" name="name1">
      <div class="list-container" @click="emitParent()">
        <div class="list-wrap" v-for="(item,index) in data1" :key="index">
          <div class="upper-strata">
            <div>
<<<<<<< HEAD
              <Avatar class="mr5" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              zsdevX/Dartey
=======
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />zsdevX/Dartey
>>>>>>> 框架设计基本完毕,等待二次开发
            </div>
            <strong>
              <Badge color="blue" />Go
            </strong>
          </div>
          <div class="like-bar">
            <img src="../../../src/assets/home/name.svg" alt srcset /> Kenguba
            <img src="../../../src/assets/home/star.svg" alt srcset /> 89
            <img src="../../../src/assets/home/watch.svg" alt srcset /> 89
            <img src="../../../src/assets/home/fork.svg" alt srcset /> 89
          </div>
        </div>
      </div>
    </TabPane>
<<<<<<< HEAD
    <TabPane label="star记录" name="name2"></TabPane>
    <TabPane label="Watch记录" name="name3">标签三的内容</TabPane>
    <TabPane label="Fork记录" name="name4">标签三的内容</TabPane>
    <TabPane label="Follow记录" name="name5">标签三的内容</TabPane>
    <TabPane label="排行榜" name="name6">标签三的内容</TabPane>
=======
    <TabPane label="标签二" name="name2"></TabPane>
    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
>>>>>>> 框架设计基本完毕,等待二次开发
  </Tabs>
</template>

<script>
import { ListShow, About } from "@/components/home";
export default {
  name: "HomeTabs",
  components: {
    ListShow
  },
  methods: {
    emitParent() {
      this.$emit('logoutCB')
    }
  },
  data() {
    return {
      label: h => {
        return h("div", [
          h("span", "互粉列表  "),
          h("Badge", {
            props: {
              count: 3
            }
          })
        ]);
      },
      data1: Array.from({ length: 100 }, (item, index) => index),
      data: [
        {
          title: "zsdevX/Dartey",
          description:
            "This is description, this is description, this is description.",
          avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "zsdevX/Dartey",
          description:
            "This is description, this is description, this is description.",
          avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "zsdevX/Dartey",
          description:
            "This is description, this is description, this is description.",
          avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.list-container {
  padding: 0 20px;
}

.list-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  border-bottom: solid 1px #b3ad9f38;
}
.like-bar {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  img {
    width: 18px;
    margin-right: 5px;
    margin-left: 20px;
  }
  img:first-child {
    margin-left: 0px;
  }
}

.upper-strata {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>

