<!--  -->
<template>
<div class='goods-list-item'>
  <img :src="goodsitem.show.img" alt="">
  <div class="goods-info">
    <p>{{goodsitem.title}}</p>
    <span class="price">￥{{goodsitem.price}}</span>
    <span class="cfav">{{goodsitem.cfav}}</span>
  </div>
</div>
</template>

<script>

export default {
name:'GoosListItem',
props:{
  goodsitem:{
    type:Object,
    default(){
      return {}
    }
  }
},
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
.goods-list-item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img{
  width: 100%;
}
.goods-info{
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
}
.goods-info p{
  /* 设置文字省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  margin-bottom: 5px;
}
.goods-info .price{
  margin-right: 20px;
  color:#f00;
}
.goods-info .cfav{
  position: relative;
}
.goods-info .cfav::before{
  position: absolute;
  left: -14px;
  top: 0;
  content: "";
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
