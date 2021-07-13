<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";

  import {getDetail} from "@/network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {}
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid
      // console.log(this.iid);

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        this.topImages = res.data.result.itemInfo.topImages
      })
    }
  }
</script>

<style scoped>

</style>