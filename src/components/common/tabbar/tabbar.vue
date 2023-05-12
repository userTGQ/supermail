<template>
  <div id="tab_bar">
    <tabbar_item path="/home" active_color="red">
      <img src="~/assets/img/tabbar/home.svg" slot="item_icon" alt="">
      <img src="~/assets/img/tabbar/home_active.svg" slot="item_icon_active" alt="">
      <div slot="item_text">首页</div>
    </tabbar_item>
    <tabbar_item path="/category" active_color="red">
      <img src="~/assets/img/tabbar/category.svg" slot="item_icon" alt="">
      <img src="~/assets/img/tabbar/category_active.svg" slot="item_icon_active" alt="">
      <div slot="item_text">分类</div>
    </tabbar_item>
    <tabbar_item path="/cart" active_color="red">
      <img src="~/assets/img/tabbar/shopcart.svg" slot="item_icon" alt="">
      <img src="~/assets/img/tabbar/shopcart_active.svg" slot="item_icon_active" alt="">
      <div slot="item_text">分购物车</div>
    </tabbar_item>
    <tabbar_item path="/profile"  active_color="red">
      <img src="~/assets/img/tabbar/profile.svg" slot="item_icon" alt="">
      <img src="~/assets/img/tabbar/profile_active.svg" slot="item_icon_active" alt="">
      <div slot="item_text">我的</div>
    </tabbar_item>
  </div>
</template>

<script>
import tabbar_item from "./tabbar_item.vue";

export default {
  name: "tabbar",
  components: {tabbar_item:tabbar_item}
}
</script>

<style scoped>
#tab_bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 1px #ccc;
  width: 100%;
}

</style>
