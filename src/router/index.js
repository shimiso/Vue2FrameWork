import Vue from 'vue'
import Router from 'vue-router'
import TabbarView from '../views/TabbarView'
import ListView from '../views/ListView'
import HomeView from '../views/HomeView'
import TabitemView from '../views/TabitemView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      redirect: '/HomeView'
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/TabbarView',
      name: 'TabbarView',
      component: TabbarView,
      children: [
        {
          path: '',
          redirect: '/TabbarView/TabitemView'
        },
        {
          path: 'TabitemView',
          name: 'TabitemView',
          component: TabitemView
        }]
    },
    {
      path: '/ListView',
      name: 'ListView',
      component: ListView
    }
  ]
})
