import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homeView'
    },
    {
      path: '/homeView',
      component: resolve => require(['../views/HomeView.vue'], resolve)
    },
    {
      path: '/momentView',
      component: resolve => require(['../views/MomentView.vue'], resolve)
    },
    {
      path: '/nativeFileView',
      component: resolve => require(['../views/NativeFileView.vue'], resolve)
    },
    {
      path: '/photoPreview',
      component: resolve => require(['../views/PhotoPreview.vue'], resolve)
    },
    {
      path: '/uploadImagesView',
      component: resolve => require(['../views/UploadImagesView.vue'], resolve)
    },
    {
      path: '/evenBusTest',
      component: resolve => require(['../views/EvenBusTest.vue'], resolve)
    },
    {
      path: '/tabbarView',
      component: resolve => require(['../views/TabbarView.vue'], resolve),
      children: [
        {
          path: '',
          redirect: '/tabbarView/tabitemView'
        }, {
          path: 'tabitemView',
          component: resolve => require(['../views/TabitemView.vue'], resolve)
        }]
    },
    {
      path: '/listView',
      component: resolve => require(['../views/ListView.vue'], resolve)
    },
    {
      path: '/xunFeiTest',
      component: resolve => require(['../views/XunFeiTest.vue'], resolve)
    },
    {
      path: '/listNews',
      component: resolve => require(['../views/mescroll/list-news.vue'], resolve)
    },
    {
      path: '/dropDownFilterList',
      component: resolve => require(['../views/drop-down-filter-list/DropDownFilterList.vue'], resolve)
    },
    {
      path: '/mescrollOptions',
      component: resolve => require(['../views/mescroll/mescroll-options.vue'], resolve)
    },
    {
      path: '/listProducts',
      component: resolve => require(['../views/mescroll/list-products.vue'], resolve)
    },
    {
      path: '/mescrollComponent',
      component: resolve => require(['../views/mescroll/mescroll-component.vue'], resolve)
    },
    {
      path: 'detail/:id',
      name: 'DetailView',
      component: resolve => require(['../views/DetailView.vue'], resolve)
    },
    {
      path: '/elementTreeDemo',
      component: resolve => require(['../views/ElementTreeView.vue'], resolve)
    },
    {
      path: '/H5IOSFixedBug',
      component: resolve => require(['../views/H5Bug/FixedLayout.vue'], resolve)
    },
    {
      path: '/H5IOSFixedBugFix',
      component: resolve => require(['../views/H5Bug/FixedLayoutFix.vue'], resolve)
    },
    {
      path: '/H5Bug',
      component: resolve => require(['../views/H5Bug/Bug.vue'], resolve)
    },
    {
      path: '/vuxCalendar',
      component: resolve => require(['../views/VuxCalendar.vue'], resolve)
    },
    {
      path: '/mpvueCalendar',
      component: resolve => require(['../views/MpvueCalendar.vue'], resolve)
    }
  ]
})
