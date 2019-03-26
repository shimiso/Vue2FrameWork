<template>
  <div class="home-view has-header" id="">
    <x-header :left-options="{backText: ''}">ListViewDemo</x-header>
    <mescroll-vue ref="mescroll" :up="mescrollUp" @init="mescrollInit">
      <div class="list" id="dataList">
        <template v-if="mold === 'thumbnail'" v-for="item in items">
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
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
  import MescrollVue from 'mescroll.js/mescroll.vue'
  import {XHeader} from 'vux'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'home-view',
    components: {XHeader, MescrollVue},
    data() {
      return {
        mold: 'thumbnail',
        mescroll: null,
        mescrollUp: {
          callback: this.upCallback, // 上拉加载回调函数
          page: {
            num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
            size: 4 // 每页数据的数量
          },
          noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
          toTop: {
            src: '../static/mescroll/mescroll-totop.png', // 回到顶部按钮的图片路径,支持网络图
            offset: 500, // 列表滚动多少距离才显示回到顶部按钮,默认1000
          },
          empty: {
            warpId: 'dataList', // 父布局的id;
            icon: './static/mescroll/mescroll-empty.png', // 图标,支持网络图
            tip: '暂无相关数据~', // 提示
            btntext: '去逛逛 >', // 按钮,默认""
            btnClick() { // 点击按钮的回调,默认null
              // 请求失败后继续请求加载数据的接口
              this.mescroll.resetUpScroll() // 刷新列表数据
            }
          }
        }
      }
    },
    computed: {
      ...mapState({
        items: state => state.list.items
      })
    },
    methods: {
      mescrollInit(mescroll) {
        this.mescroll = mescroll
      },
      upCallback(page, mescroll) {
        this.getUpCallbackList(page).then(response => {
            // 数据渲染成功后,隐藏下拉刷新的状态
            mescroll.endSuccess(response.length)
          },
          (error) => {
            this.mescrollUp.empty = {
              warpId: 'dataList', // 父布局的id;
              icon: './static/mescroll/mescroll-error.png', // 图标,支持网络图
              tip: '服务器发生未知异常', // 提示
              btntext: '点击重试', // 按钮,默认""
              btnClick() { // 点击按钮的回调,默认null
                // 请求失败后继续请求加载数据的接口
                mescroll.resetUpScroll() // 刷新列表数据
              }
            }
            // 联网异常,隐藏上拉和下拉的加载进度
            mescroll.endSuccess(0)
            // _this.showToast('请求失败：' + error);
          })
      },
      ...mapActions([
        'getUpCallbackList'
      ])
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
      top: 1rem;
      bottom: 0;
      height: auto;
    }
    .thumbnail {
      position: relative;
      display: block;
      padding: 0.2rem 0.2rem 0.2rem 0.2rem;

      .content {
        overflow: hidden;
        margin-bottom: 0.2rem;
      }

      h3 {
        margin-top: 0;
        margin-bottom: 0.2rem;
        line-height: 1.41;
        text-align: justify;
        font-size: 0.4rem;
        font-weight: 500;
        color: #494949;
      }

      p {
        line-height: 1.5;
        text-align: justify;
        color: #aaa;
        font-size: 0.4rem;
        overflow: hidden;
      }

      img {
        float: right;
        width: 25.6%;
        height: 3.5rem;
        margin-left: 0.4rem;
      }

      .author {
        font-size: 0.4rem;
        color: #ccc;
      }

      .label {
        position: absolute;
        right: 0.5rem;
      }
    }

    .thumbnail ~ .thumbnail::before {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.03rem;
      content: '';
      background: #e3e3e3;
    }

    .basic {
      h3 {
        padding: 0;
        line-height: 1.41;
        font-size: 0.5rem;
        font-weight: 500;
        color: #494949;
      }

      .info {
        margin-top: 0.5rem;
        font-size: 0.5rem;
        color: #42bd56;
      }
    }
  }
</style>
