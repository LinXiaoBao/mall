import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bannerVideo from '@/demo/bannerVideo.vue'
import goodsList from '@/page/goodsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bannerVideo',
      name: 'bannerVideo',
      component: bannerVideo
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    }
  ]
})
