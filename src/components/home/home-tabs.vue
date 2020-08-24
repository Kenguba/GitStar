<template>
  <Tabs value="name1">
    <TabPane :label="label" name="name1">
      <div class="list-container">
        <div class="list-wrap" v-for="(item,index) in data" :key="index">
          <div class="upper-strata">
            <div>
              <Avatar :src="item.avatar" />
              {{ item.title }}
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
    <TabPane label="标签二" name="name2"></TabPane>
    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
  </Tabs>
</template>

<script>
import { ListShow, About } from "@/components/home";
export default {
  name: "HomeTabs",
  components: {
    ListShow
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

