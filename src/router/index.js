import Vue from 'vue'
import Router from 'vue-router'
import TabbarView from '../views/TabbarView'
import ListView from '../views/ListView'
import HomeView from '../views/HomeView'
import TabitemView from '../views/TabitemView'
import XunFeiTest from '../views/XunFeiTest'
import listNews from '../views/mescroll/list-news'
import mescrollOptions from '../views/mescroll/mescroll-options'
import listProducts from '../views/mescroll/list-products'
import mescrollComponent from '../views/mescroll/mescroll-component'
import DetailView from '../views/DetailView'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeView',
      redirect: '/HomeView'
    }, {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
    }, {
      path: '/TabbarView',
      name: 'TabbarView',
      component: TabbarView,
      children: [
        {
          path: '',
          redirect: '/TabbarView/TabitemView'
        }, {
          path: 'TabitemView',
          name: 'TabitemView',
          component: TabitemView
        }]
    }, {
      path: '/ListView',
      name: 'ListView',
      component: ListView
    }, {
      path: '/XunFeiTest',
      name: 'XunFeiTest',
      component: XunFeiTest
    }, {
      path: '/listNews',
      name: 'listNews',
      component: listNews
    }, {
      path: '/mescrollOptions',
      name: 'mescrollOptions',
      component: mescrollOptions
    }, {
      path: '/listProducts',
      name: 'listProducts',
      component: listProducts
    }, {
      path: '/mescrollComponent',
      name: 'mescrollComponent',
      component: mescrollComponent
    }, {
      path: 'detail/:id',
      name: 'DetailView',
      component: DetailView
    }
  ]
})
