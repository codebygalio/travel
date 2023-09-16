<template>
  <div class="home">
    <HomeHeader/>
 <MySwiper/>
 test
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import MySwiper from './components/MySwiper'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    MySwiper
  }

}
</script>
