<template>
  <div class="wrapper">
    <div class="content">
      <ul>
        <li @click="itemClick">1这是一个列表测试</li>
        <li>2这是一个列表测试</li>
        <li>3这是一个列表测试</li>
        <li>4这是一个列表测试</li>
        <li>5这是一个列表测试</li>
        <li>6这是一个列表测试</li>
        <li>7这是一个列表测试</li>
        <li>8这是一个列表测试</li>
        <li>9这是一个列表测试</li>
        <li>10这是一个列表测试</li>
        <li>11这是一个列表测试</li>
        <li>12这是一个列表测试</li>
        <li>13这是一个列表测试</li>
        <li>14这是一个列表测试</li>
        <li>15这是一个列表测试</li>
        <li>16这是一个列表测试</li>
        <li>17这是一个列表测试</li>
        <li>18这是一个列表测试</li>
        <li>19这是一个列表测试</li>
        <li>20这是一个列表测试</li>
        <li>21这是一个列表测试</li>
        <li>22这是一个列表测试</li>
        <li>23这是一个列表测试</li>
        <li>24这是一个列表测试</li>
        <li>25这是一个列表测试</li>
        <li>26这是一个列表测试</li>
        <li>27这是一个列表测试</li>
        <li>28这是一个列表测试</li>
        <li>29这是一个列表测试</li>
        <li>30这是一个列表测试</li>
        <li>31这是一个列表测试</li>
        <li>32这是一个列表测试</li>
        <li>33这是一个列表测试</li>
        <li>34这是一个列表测试</li>
        <li>35这是一个列表测试</li>
        <li>36这是一个列表测试</li>
        <li>37这是一个列表测试</li>
        <li>38这是一个列表测试</li>
        <li>39这是一个列表测试</li>
        <li>40这是一个列表测试</li>
        <li>41这是一个列表测试</li>
        <li>42这是一个列表测试</li>
        <li>43这是一个列表测试</li>
        <li>44这是一个列表测试</li>
        <li>45这是一个列表测试</li>
        <li>46这是一个列表测试</li>
        <li>47这是一个列表测试</li>
        <li>48这是一个列表测试</li>
        <li>49这是一个列表测试</li>
        <li>50这是一个列表测试</li>
        <li>51这是一个列表测试</li>
        <li>52这是一个列表测试</li>
        <li>53这是一个列表测试</li>
        <li>54这是一个列表测试</li>
        <li>55这是一个列表测试</li>
        <li>56这是一个列表测试</li>
        <li>57这是一个列表测试</li>
        <li>58这是一个列表测试</li>
        <li>59这是一个列表测试</li>
        <li>60这是一个列表测试</li>
        <li>61这是一个列表测试</li>
        <li>62这是一个列表测试</li>
        <li>63这是一个列表测试</li>
        <li>64这是一个列表测试</li>
        <li>65这是一个列表测试</li>
        <li>66这是一个列表测试</li>
        <li>67这是一个列表测试</li>
        <li>68这是一个列表测试</li>
        <li>69这是一个列表测试</li>
        <li>70这是一个列表测试</li>
        <li>71这是一个列表测试</li>
        <li>72这是一个列表测试</li>
        <li>73这是一个列表测试</li>
        <li>74这是一个列表测试</li>
        <li>75这是一个列表测试</li>
        <li>76这是一个列表测试</li>
        <li>77这是一个列表测试</li>
        <li>78这是一个列表测试</li>
        <li>79这是一个列表测试</li>
        <li>80这是一个列表测试</li>
        <li>81这是一个列表测试</li>
        <li>82这是一个列表测试</li>
        <li>83这是一个列表测试</li>
        <li>84这是一个列表测试</li>
        <li>85这是一个列表测试</li>
        <li>86这是一个列表测试</li>
        <li>87这是一个列表测试</li>
        <li>88这是一个列表测试</li>
        <li>89这是一个列表测试</li>
        <li>90这是一个列表测试</li>
        <li>91这是一个列表测试</li>
        <li>92这是一个列表测试</li>
        <li>93这是一个列表测试</li>
        <li>94这是一个列表测试</li>
        <li>95这是一个列表测试</li>
        <li>96这是一个列表测试</li>
        <li>97这是一个列表测试</li>
        <li>98这是一个列表测试</li>
        <li>99这是一个列表测试</li>
        <li>100这是一个列表测试</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from "@better-scroll/core";
import Pullcup from "@better-scroll/pull-up";
BS.use(Pullcup);
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    let bs = new BS('.wrapper',{
      click:true,
      pullUpLoad:true,
      // probeType:0

    })
    // bs.on('scroll' ,(position) => {
    //   console.log(position)
    // })
    bs.on('pullingUp',() => {
      console.log('上拉加载');
      bs.finishPullUp()

    })

  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    itemClick(){
      console.log("......");
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 150px;
  background: #ccc;
  overflow: hidden;
  // overflow-y:scroll;
}
</style>
