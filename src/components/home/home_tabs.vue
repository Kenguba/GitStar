<template>
  <Tabs value="互粉列表">
    <TabPane :label="label" name="互粉列表">
      <ListShow></ListShow>
    </TabPane>

    <TabPane label="Star记录" name="name3">标签三的内容</TabPane>
    <TabPane label="Watch记录" name="name4">标签三的内容</TabPane>
    <TabPane label="Fork记录" name="name5">标签三的内容</TabPane>
    <TabPane label="Follow记录" name="name6">标签三的内容</TabPane>
    <TabPane label="排行榜" name="name7">标签三的内容</TabPane>
  </Tabs>
</template>


<script>
import { ListShow } from "@/components/home";
export default {
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
     
    };
  }
};
</script>   
