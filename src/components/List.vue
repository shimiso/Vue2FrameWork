<template>
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
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import Vue from 'vue'
export default {
  name: 'list',
  components: {
    MescrollVue
  },
  props: {
    mold: {
      type: String,
      default: 'basic'
    }
    /*items: {
      type: Array,
      required: true
    }*/
  },
  data () {
    let _this = this
    return {
      mescroll: null,
      mescrollDown: {
        use: true,
        callback: this.downCallback
      },
      mescrollUp: {
        use: false,
        callback: this.upCallback,
        page: {
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 3
        },
        empty: {
          warpId: 'dataList', // 父布局的id;
          icon: './static/mescroll/mescroll-empty.png', // 图标,支持网络图
          tip: '暂无相关数据~', // 提示
          btntext: '去逛逛 >', // 按钮,默认""
          btnClick () { // 点击按钮的回调,默认null
            _this.upCallback(_this.mescrollUp.page, _this.mescroll)
            alert('点击了按钮,具体逻辑自行实现')
          }
        }
      },
      items: []
    }
  },
  methods: {
    mescrollInit (mescroll) {
      this.mescroll = mescroll
    },
    downCallback (mescroll) {
      this.getDownList(mescroll)
    },
    upCallback (page, mescroll) {
      this.getUpList(page, mescroll)
    },
    getUpList (page, mescroll) {
      Vue.prototype.$http.get('/douban/event/list', {
        params: {
          'loc': '108288',
          count: this.mescrollUp.page.size
        }
      }).then((response) => {
//        response.data.events.length = 0调试数据为空点击去逛逛btn
// 重新设置empty里面的数据之后需要手动调用mescroll.showEmpty()
        if (page.num === 1) this.items = []
        // 把请求到的数据添加到列表
        this.items = this.items.concat(response.data.events)
        // 数据渲染成功后,隐藏下拉刷新的状态
        this.$nextTick(() => {
          mescroll.endSuccess(response.data.events.length)
        })
      }).catch((error) => {
        mescroll.endErr()
      })
    },
    getDownList(mescroll) {
      let i = 1
      let _this = this
      Vue.prototype.$http.get('/douban/event/list', {
        params: {
          'loc': '108288',
          count: i
        }
      }).then((response) => {
        _this.items = response.data.events
        // 数据渲染成功后,隐藏下拉刷新的状态
        _this.$nextTick(() => {
          mescroll.endSuccess(response.data.events.length)
        })
      }).catch((error) => {
        mescroll.endErr()
      })
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
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
