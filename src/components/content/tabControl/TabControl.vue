<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="activeClick(index)"
     :class="{active:index == currentIndex}" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data() {
    return {
      currentIndex:0
    };
  },
  computed: {},
  watch: {},
  methods: {
    activeClick(index){
      this.currentIndex = index
      this.$emit('tabclick',index)
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.tab-control{
  display: flex;
  text-align: center;
  background: #fff;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tab-control-item span {
  padding: 5px 10px;
}

.active {
  color: hotpink;

}

.active span {
  border-bottom: 3px solid hotpink;
}
</style>
