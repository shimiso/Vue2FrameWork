import Vue from 'vue'
import Router from 'vue-router'

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
      component: resolve => require(['../views/HomeView.vue'], resolve)
    },
    {
      path: '/NativeFile',
      component: resolve => require(['../views/NativeFile.vue'], resolve)
    },
    {
      path: '/EvenBusTest',
      name: 'EvenBusTest',
      component: resolve => require(['../views/EvenBusTest.vue'], resolve)
    },
    {
      path: '/TabbarView',
      name: 'TabbarView',
      component: resolve => require(['../views/TabbarView.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/TabbarView/TabitemView'
        }, {
          path: 'TabitemView',
          name: 'TabitemView',
          component: resolve => require(['../views/TabitemView.vue'], resolve)
        }]
    },
    {
      path: '/ListView',
      name: 'ListView',
      component: resolve => require(['../views/ListView.vue'], resolve)
    },
    {
      path: '/XunFeiTest',
      name: 'XunFeiTest',
      component: resolve => require(['../views/XunFeiTest.vue'], resolve)
    },
    {
      path: '/listNews',
      name: 'listNews',
      component: resolve => require(['../views/ListView.vue'], resolve)
    },
    {
      path: '/dropDownFilterList',
      name: 'DropDownFilterList',
      component: resolve => require(['../views/drop-down-filter-list/DropDownFilterList.vue'], resolve)
    },
    {
      path: '/mescrollOptions',
      name: 'mescrollOptions',
      component: resolve => require(['../views/mescroll/mescroll-options.vue'], resolve)
    },
    {
      path: '/listProducts',
      name: 'listProducts',
      component: resolve => require(['../views/mescroll/list-products.vue'], resolve)
    },
    {
      path: '/mescrollComponent',
      name: 'mescrollComponent',
      component: resolve => require(['../views/mescroll/mescroll-component.vue'], resolve)
    },
    {
      path: 'detail/:id',
      name: 'DetailView',
      component: resolve => require(['../views/DetailView.vue'], resolve)
    }
  ]
})
