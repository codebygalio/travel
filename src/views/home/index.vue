<template>
  <div class="home">
    <HomeHeader/>
 <MySwiper :list="swiperList"/>
 <Icons :list="iconList"/>
 <Recommend :list="recommendList"/>
 <Weekend :list="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import MySwiper from './components/MySwiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
   components:{
    HomeHeader,
    MySwiper,
    Icons,
    Recommend,
    Weekend
  },
  data(){
    return {
        swiperList:[],
        recommendList: [],
        iconList: [],
      weekendList: []
    }
  },
  created(){
    this.initList()
  },
  methods:{
   async initList(){
        const {data:{data}} =await axios.get('/mock/index.json')
        this.swiperList= data.swiperList
        this.recommendList = data.recommendList
        this.iconList = data.iconList
        this.weekendList = data.weekendList
    }
  }

}
</script>
