<!--  -->
<template>
  <div class>
    <Tabbar>
      <TabbarItem path="/home" activeColor="blue">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="yellow">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart" activeColor="green">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor="red">
        <div class="fa fa-home" slot="tab-icon"></div>
        <div class="fa fa-star" slot="tab-icon-active"></div>
        <div slot="tab-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar'
  import TabbarItem from './Tabbar-item'
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
  @import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";

</style>
