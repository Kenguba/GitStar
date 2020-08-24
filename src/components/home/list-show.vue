<template>
  <div>
    <div v-for="(item,index) in data1" :key="index">
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      zsdevX/Dartey
      <ul class="likebar">
        <li>
          <Icon type="ios-star-outline" />89
        </li>
        <li>
          <Icon type="ios-thumbs-up-outline" />234
        </li>
        <li>
          <Icon type="ios-chatbubbles-outline" />345
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name:'ListShow',
  data() {
    return {
      data1:Array.from({length:100},(item, index)=> index),
      data: [
        {
          title: "zsdevX/Dartey",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://i.loli.net/2017/08/21/599a521472424.jpg",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
        {
          title: "zsdevX/Dartey",
          description:
            "This is description, this is description, this is description.",
          avatar:
            "https://i.loli.net/2017/08/21/599a521472424.jpg",
          content:
            "This is the content, this is the content, this is the content, this is the content."
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.likebar{
 display: flex;
 justify-self: start;
}
</style>