<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <Bscroll
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </Bscroll>
  </div>
</template>

<script>
import Bscroll from '@/components/MyBetterScroll.vue'
// import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  components:{
    Bscroll
  },
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        this.$refs.search.newRfresh()
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {

        console.log('city=',city)
      this.$router.push('/')
    },
  },

}
</script>

<style lang="scss" scoped>
  .search{
    height: .72rem;
    padding: 0 .1rem;
    background: $bgColor;
    .search-input{
        box-sizing: border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
      
  }
    
  .search-content{
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    .search-item{
        line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color: #666;
    }
      
  }
    
</style>
