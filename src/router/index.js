import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '@/views/home')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import( '@/views/city/index.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import( '@/views/detail/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0,y: 0 }
     }
   
})

export default router
