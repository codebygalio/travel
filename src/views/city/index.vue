<template>
<div class="city-container">
    <Header/>
    <Search :cities="cities"/>
    <List  :cities="cities" :hot="hotCities"  :letter="letter"/>
    <Alphabet :cities="cities" @change="handleLetterChange"/>
</div>
</template>
<script>
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
name:"City",
components:{
    Header,
    Search,
    List,
    Alphabet
},
data(){
    return {
        cities: {},
        hotCities:[],
        letter: ''
    }
},
created(){
    this.initList()
},
methods:{
    async initList(){
   const {data:{data}} = await axios.get('mock/city.json')
   console.log('data.cities=',data.cities)
    this.cities = data.cities
    this.hotCities = data.hotCities
    },
    handleLetterChange (letter) {
        debugger
      this.letter = letter
    }
}
}
</script>
<style lang="scss" scoped>
.city-container{
    height: 100%;
}
</style>