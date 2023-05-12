<template>
  <div class="tab_bar_itme" @click="item_click">
    <div v-if="!isactive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_icon_active"></slot>
    </div>
<!--    <div :class="{active:isactive}">-->
<!--      <slot name="item_text"></slot>-->
<!--    </div>-->
    <div :style='isactivecolor'>
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar_item",
  props:{
    path:String,
    active_color:String
  },
  // data(){
  //   return {
  //     isactive:false
  //   }
  // },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path)!=-1;
    },
    isactivecolor(){
      return this.isactive?{color:this.active_color}:{}
    }
  },
  methods:{
    item_click(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

.tab_bar_itme {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab_bar_itme img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
