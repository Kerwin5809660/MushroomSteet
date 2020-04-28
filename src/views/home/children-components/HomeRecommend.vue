<!--  -->
<template>
  <div class="home-recommend">
    <div v-for="item in recommend" :key="item" class="recommend-item" >
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
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
.home-recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 14px;
  border-bottom: 7px solid #ddd;
  padding: 10px 0px 20px;

}

.recommend-item {
  flex:1;
}

.recommend-item img {
  width: 70px;
  margin-bottom: 10px;
}
</style>
