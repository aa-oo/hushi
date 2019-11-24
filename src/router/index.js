import Vue from 'vue'
import Router from 'vue-router'
import hsz from '@/components/page/hsz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hsz',
      component:hsz
    }
  ]
})
