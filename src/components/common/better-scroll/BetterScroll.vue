<!--  -->
<template>
<div class='wrapper'>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BS from "@better-scroll/core"
import Pullup from 'better-scroll/pull-up'
export default {
name:'BetterScroll',
components: {},
data() {
return {
  bs:null
};
},
computed: {},
watch: {},
methods: {

},
created() {

},
props:{
  pullupload:{
    type:Boolean,
    default:false
  },
  probetype:{
    type:Number,
    default:0
  },
  click: {
    type:Boolean,
    default:false
  }
},
mounted() {
  //创建better-scroll对象
  this.bs = new BS('.wrapper',{
    click:this.click,
    pullUpLoad:this.pullupload,
    probeType:this.probtType,e
  })
  //监听滚动事件
  this.bs.on('scroll',(position) => {
    console.log(position);

  })
  //监听上拉事件
  this.bs.on('pullingUp',() => {
    console.log("上拉监听");
    // this.bs.finishPullUp()
  })
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
