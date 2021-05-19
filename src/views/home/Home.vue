<template>
  <div id="home">
    <nav-bar class="home-nar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import RecommendView from "@/views/home/childComps/RecommendView";

  import {getHomeMultidata} from "@/network/home";


  export default {
    name: "home",
    data() {
      return {
        result: null,
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created() {
    //  1.请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        this.result = res;
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
