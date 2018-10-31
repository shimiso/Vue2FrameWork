<template>
  <div style="height:100%;">
    <x-header :left-options="{backText: ''}"
              :right-options="{showMore: true}"
              @on-click-more="showMenu = true">TabbarView</x-header>

    <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
    <transition
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
      :name="viewTransition" :css="!!direction">
      <router-view class="router-view"></router-view>
    </transition>

    <tabbar class="vux-demo-tabbar" icon-class="vux-center"  slot="bottom">
      <tabbar-item :link="{path:'/TabbarView/TabitemView?name=首页'}" selected>
        <img slot="icon"  src="../assets/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/TabbarView/TabitemView?name=图书'}">
        <img slot="icon" src="../assets/icon_nav_msg.png">
        <span slot="label">图书</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/TabbarView/TabitemView?name=广播'}">
        <img slot="icon" src="../assets/icon_nav_article.png">
        <span slot="label">广播</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/TabbarView/TabitemView?name=小组'}" badge="9">
        <img slot="icon" src="../assets/icon_nav_cell.png">
        <span slot="label">小组</span>
      </tabbar-item>
    </tabbar>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenu" @on-click-menu="changeLocale"></actionsheet>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Actionsheet, TransferDom } from 'vux'
import { mapState } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    Actionsheet
  },
  methods: {
    changeLocale (key, text) {
      console.log(key)
      this.$i18n.set(key)
      this.$locale.set(key)
    }
  },
  watch: {
    path (path) {
      if (path === '/demo') {
        setTimeout(() => {
          this.box = document.querySelector('#demo_list_box')
          if (this.box) {
            this.box.removeEventListener('scroll', this.handler, false)
            this.box.addEventListener('scroll', this.handler, false)
          }
        }, 1000)
      } else {
        this.box && this.box.removeEventListener('scroll', this.handler, false)
      }
    }
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中,即：把一个对象的key和value展开混入到另一个对象里面，相当于对象的深拷贝
    ...mapState({
      // 箭头函数属于匿名函数,(参数..)=>返回值,如果只有一个参数括号可省略
      direction: state => state.vux.direction
    }),
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  },
  data () {
    return {
      menus: {
        'language.noop': '<span class="menu-title">Language</span>',
        'zh-CN': '中文',
        'en': 'English'
      },
      showMenu: false
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/tap.less';

  body {
    background-color: #fbf9fe;
  }
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .demo-icon-22 {
    font-family: 'vux-demo';
    font-size: 22px;
    color: #888;
  }
  .weui-tabbar.vux-demo-tabbar {
    /** backdrop-filter: blur(10px);
    background-color: none;
    background: rgba(247, 247, 250, 0.5);**/
  }
  .vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
    color: #F70968;
  }
  .vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
    color: rgb(53, 73, 94);
  }
  .demo-icon-22:before {
    content: attr(icon);
  }
  .vux-demo-tabbar-component {
    background-color: #F70968;
    color: #fff;
    border-radius: 7px;
    padding: 0 4px;
    line-height: 14px;
  }
  .weui-tabbar__icon + .weui-tabbar__label {
    margin-top: 0!important;
  }
  .vux-demo-header-box {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  @font-face {
    font-family: 'vux-demo';  /* project id 70323 */
    src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot');
    src: url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.woff') format('woff'),
    url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_70323_wlronpvr565yiudi.svg#iconfont') format('svg');
  }

  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20px;
    color: #04BE02;
  }

  .demo-icon-big {
    font-size: 28px;
  }

  .demo-icon:before {
    content: attr(icon);
  }

  .router-view {
    width: 100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .menu-title {
    color: #888;
  }
</style>
