import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 查学校
import School from './components/common/school/index.vue'
// 查专业
import Specialty from './components/common/specialty.vue/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/School',
      name: 'School',
      component: School
    },
    {
      path: '/Specialty',
      name: 'Specialty',
      component: Specialty
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
