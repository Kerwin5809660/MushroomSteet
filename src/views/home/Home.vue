<!--  -->
<template>
  <div>
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommend="recommend" />
    <HomePopular />
    <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabClick"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>
<!-- :goods="goods[currentType].list" -->
  </div>
</template>

<script>
//公共组件
import Navbar from "../../components/common/nav-bar/Navbar";
import TabControl from "../../components/content/tabControl/TabControl"
import GoodsList from '../../components/content/goods/GoodsList'
// import BetterScroll from '../../components/common/better-scroll/BetterScroll'

//home的子组件
import HomeSwiper from "./children-components/HomeSwiper";
import {getHomeMultidata,getHomeGoods} from "../../network/home";
import HomeRecommend from "./children-components/HomeRecommend"
import HomePopular from './children-components/HomePopular'


export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    // BetterScroll
  },
  data() {
    return {
      banners: [],
      recommend:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:"pop"
    };
  },
  computed: {},
  watch: {},
  methods: {
    //网络请求的相关的方法
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners =res.data.banner.list
        this.recommend =res.data.recommend.list
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

      })
    },

    //常规事件处理方法
    tabClick(index) {
      switch(index){
        case 0 : this.currentType ="pop"
          break
        case 1 : this.currentType = 'new'
          break
        case 2 : this.currentType = 'sell'
      }
    }
  },

  //常规事件处理的方法
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.nav-bar {
  background: hotpink;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.tab-control{
  position: sticky;
  top: 45px;
  z-index: 10;
}
</style>


