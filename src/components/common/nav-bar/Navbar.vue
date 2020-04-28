<!--  -->
<template>
<div class='nav-bar'>
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>

export default {
name:'Navnar',
components: {},
data() {
return {

};
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.nav-bar {
  width: 100%;
  height:44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-bar .left,.right {
  width: 60px;
  // background: #f00;
}

.nav-bar .center {
  flex: 1;
  // background: #0f0;
}

</style>
