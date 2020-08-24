<template>
  <Tabs value="name1">
    <TabPane :label="label" name="name1">
      <ListShow name="name" />标签一的内容
    </TabPane>
    <TabPane label="标签二" name="name2">标签二的内容</TabPane>
    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
  </Tabs>
</template>

<script>
import { ListShow } from "@/components/home";
export default {
  name: "home-tabs",
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
      }
    };
  }
};
</script>


