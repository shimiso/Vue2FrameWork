<template>
  <div class="home-view has-header">
    <x-header :left-options="{backText: ''}">ListViewDemo</x-header>
    <div class="list" id="dataList">
      <mescroll-vue ref="mescroll" :up="mescrollUp" :down="mescrollDown" @init="mescrollInit" class="mescroll">
        <template v-if="mold === 'thumbnail'" v-for="item in items" >
          <router-link
            class="thumbnail"
            :to="{name: 'DetailView', params: { id: item.id }}">
            <div class="content">
              <img :src="item.image_hlarge" alt="cover">
              <h3>{{item.title}}</h3>
              <p>{{item.content | subStr}}</p>
            </div>
            <div class="author">
              <span class="name">{{item.category_name}}</span>
              <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
            </div>
          </router-link>
        </template>
        <template v-if="mold === 'basic'">
          <ul class="basic">
            <li v-for="item in items">
              <a href="#">
                <h3>{{item.title}}</h3>
                <div class="info">{{item.comments}}</div>
              </a>
            </li>
          </ul>
        </template>
      </mescroll-vue>
    </div>
    <!--<list mold="thumbnail"></list>-->
    <!--<list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>-->
  </div>
</template>

<script>
import Vue from 'vue'
import MescrollVue from 'mescroll.js/mescroll.vue'
import { XHeader } from 'vux'
/*import { mapState, mapActions } from 'vuex'
import infiniteLoading from 'vue-infinite-loading'*/
//import List from '../components/List'
//import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: { XHeader, MescrollVue },
  data () {
    let _this = this
    return {
      mold: 'thumbnail',
      mescroll: null,
      mescrollDown: {
        use: true, // 是否初始化下拉刷新，如果设为false,则下拉刷新不可用
        auto: false, // 是否在初始化时以下拉刷新的方式自动加载第一页数据; 默认true
        callback: this.downCallback // 下拉刷新回调函数
      },
      mescrollUp: {
        use: true, // 是否初始化上拉加载，如果设为false,则上拉加载不可用
        auto: true, // 是否在初始化时以上拉加载的方式自动加载第一页数据; 默认true
        callback: this.upCallback, // 上拉加载回调函数
        page: {
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 3 // 每页展示的数据条数
        },
        empty: {
          warpId: 'dataList', // 父布局的id;
          icon: './static/mescroll/mescroll-empty.png', // 图标,支持网络图
          tip: '暂无相关数据~', // 提示
          btntext: '3333去逛逛 >', // 按钮,默认""
          btnClick () { // 点击按钮的回调,默认null
            _this.upCallback(_this.mescrollUp.page, _this.mescroll) // 此处是点击去逛逛的时候重新请求上拉加载的方法
            // alert('点击了按钮,具体逻辑自行实现')
          }
        }
      },
      items: []
    }
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    /*...mapState({
      events: state => state.activities.events
    })*/
  },
  methods: {
    mescrollInit (mescroll) {
      this.mescroll = mescroll
    },
    downCallback (mescroll) {
      // 下拉刷新获取数据
      this.getDownList(mescroll)
    },
    upCallback (page, mescroll) {
      // 上拉加载获取数据
      this.getUpList(page, mescroll)
    },
    getUpList (page, mescroll) {
      var _this = this
      Vue.prototype.$http.get('/douban/event/list', {
        params: {
          'loc': '108288',
          count: this.mescrollUp.page.size
        }
      }).then((response) => {
        // response.data = []如此设置为了模拟在第一屏中出现非数据为空的错误
        if (!response.data.events) {
          // 调用张松写的错误页面
        }
        // response.data.events.length = 0
        if (response.data.events.length === 0) {
          // 此处为了模拟项目中返回数据为空的情况，数据为空相关配置为data中的mescrollUp.empty,可以自行修改
        } else {
          // response.data.events.length = 0调试数据为空点击去逛逛btn
          // 重新设置empty里面的数据之后需要手动调用mescroll.showEmpty()
          if (page.num === 1) this.items = []
          // 把请求到的数据添加到列表
          this.items = this.items.concat(response.data.events)
          // 数据渲染成功后,隐藏下拉刷新的状态
        }
        this.$nextTick(() => {
          mescroll.endSuccess(response.data.events.length)
        })
      }).catch(() => {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr()
        // TODO调用网络异常组件
      })
    },
    getDownList (mescroll) {
      let i = 3
      let _this = this
      Vue.prototype.$http.get('/douban/event/list', {
        params: {
          'loc': '108288',
          count: i
        }
      }).then((response) => {
        // 渲染数据
        _this.items = response.data.events
        // 数据渲染成功后,隐藏下拉刷新的状态
        _this.$nextTick(() => {
          mescroll.endSuccess(response.data.events.length)
        })
      }).catch(() => {
        // 联网异常,隐藏上拉和下拉的加载进度
        mescroll.endErr()
        // TODO调用网络异常组件

      })
    }
    // Using vue-infinite-loading
    /*infiniteHandler ($state) {
      setTimeout(() => {
        this.loadMore()
        $state.loaded()
      }, 5000)
    },*/
    // Dispatching Actions
    /*...mapActions([
      'loadMore'
    ])*/
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
  .list {
    .mescroll {
      position: fixed;
      top: 44px;
      bottom: 0;
      height: auto;
    }
    .thumbnail {
      position: relative;
      display: block;
      padding: 2.5rem 1.8rem 2.5rem 0;
      margin-left: 1.8rem;

      .content {
        overflow: hidden;
        margin-bottom: 1rem;
      }

      h3 {
        margin-top: 0;
        margin-bottom: 0.6rem;
        line-height: 1.41;
        text-align: justify;
        font-size: 1.7rem;
        font-weight: 500;
        color: #494949;
      }

      p {
        line-height: 1.5;
        text-align: justify;
        color: #aaa;
        font-size: 1.2rem;
        overflow: hidden;
      }

      img {
        float: right;
        width: 25.6%;
        height: 8.678rem;
        margin-left: 2.5rem;
      }

      .author {
        font-size: 1.2rem;
        color: #ccc;
      }

      .label {
        position: absolute;
        bottom: 2.5rem;
        right: 1.8rem;
      }
    }

    .thumbnail ~ .thumbnail::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.1rem;
      content: '';
      background: #e3e3e3;
    }

    .basic {
      h3 {
        padding: 0;
        line-height: 1.41;
        font-size: 1.7rem;
        font-weight: 500;
        color: #494949;
      }

      .info {
        margin-top: 0.5rem;
        font-size: 1.4rem;
        color: #42bd56;
      }
    }
  }
</style>
