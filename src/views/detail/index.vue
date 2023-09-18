<template>
    <div class="detail-container">
        <Banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></Banner>
        <Header/>
          <div class="content">
      <List :list="list"></List>
    </div>
    </div>
</template>
<script>
import axios from "axios";
import Banner from "./components/Banner";
import Header from './components/Header';
import List from './components/List'
export default {
    name: "Detail",
    components: {
        Banner,
        Header,
        List
    },
    data() {
        return {
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
            list: [],
        };
    },
    created() {
        this.initList();
    },
    methods: {
        async initList() {
            const {data: { data }} = await axios.get("/mock/detail.json");
            this.sightName = data.sightName;
            this.bannerImg = data.bannerImg;
            this.gallaryImgs = data.gallaryImgs;
            this.list = data.categoryList;
        },
    },
};
</script>
<style lang="scss" scoped>
  .content{
    height: 50rem;
  }
    
</style>