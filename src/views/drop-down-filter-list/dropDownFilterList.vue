<template>
  <div>
    <x-header class="head_top" :left-options="{backText: ''}">下拉筛选菜单</x-header>
    <section class="sort_container">
      <!-- 分类 -->
      <div class="sort_item" :class="{choose_type:sortBy == 'food'}" >
        <div class="sort_item_container" @click="chooseType('food')">
          <div class="sort_item_border">
            <span :class="{category_title: sortBy == 'food'}">{{foodTitle}}</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
        <transition name="showlist" v-show="category">
          <section v-show="sortBy == 'food'" class="category_container sort_detail_type">
            <section class="category_left">
              <ul>
                <li v-for="(item, index) in category" :key="index" class="category_left_li" :class="{category_active:restaurant_category_id == item.id}" @click="selectCategoryName(item.id, index)">
                  <section>
                    <img :src="getImgPath(item.image_url)" v-if="index" class="category_icon">
                    <span>{{item.name}}</span>
                  </section>
                  <section>
                    <span class="category_count">{{item.count}}</span>
                    <svg v-if="index" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" class="category_arrow" >
                      <path d="M0 0 L6 4 L0 8"  stroke="#bbb" stroke-width="1" fill="none"/>
                    </svg>
                  </section>
                </li>
              </ul>
            </section>
            <section class="category_right">
              <ul>
                <li v-for="(item, index) in categoryDetail" v-if="index" :key="index" class="category_right_li" @click="getCategoryIds(item.id, item.name)" :class="{category_right_choosed: restaurant_category_ids == item.id || (!restaurant_category_ids)&&index == 0}">
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span>
                </li>
              </ul>
            </section>
          </section>
        </transition>
      </div>
      <!-- 排序 -->
      <div class="sort_item" :class="{choose_type:sortBy == 'sort'}">
        <div class="sort_item_container" @click="chooseType('sort')">
          <div class="sort_item_border">
            <span :class="{category_title: sortBy == 'sort'}">排序</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
              <polygon points="0,3 10,3 5,8"/>
            </svg>
          </div>
        </div>
        <transition name="showlist">
          <section v-show="sortBy == 'sort'" class="sort_detail_type">
            <ul class="sort_list_container" @click="sortList($event)">
              <li class="sort_list_li">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
                </svg>
                <p data="0" :class="{sort_select: sortByType == 0}">
                  <span>智能排序</span>
                  <svg v-if="sortByType == 0">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
              <li class="sort_list_li">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
                </svg>
                <p data="5" :class="{sort_select: sortByType == 5}">
                  <span>距离最近</span>
                  <svg v-if="sortByType == 5">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
              <li class="sort_list_li">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
                </svg>
                <p data="6" :class="{sort_select: sortByType == 6}">
                  <span>销量最高</span>
                  <svg v-if="sortByType == 6">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
              <li class="sort_list_li">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
                </svg>
                <p data="1" :class="{sort_select: sortByType == 1}">
                  <span>起送价最低</span>
                  <svg v-if="sortByType == 1">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
              <li class="sort_list_li">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
                </svg>
                <p data="2" :class="{sort_select: sortByType == 2}">
                  <span>配送速度最快</span>
                  <svg v-if="sortByType == 2">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
              <li class="sort_list_li">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
                </svg>
                <p data="3" :class="{sort_select: sortByType == 3}">
                  <span>评分最高</span>
                  <svg v-if="sortByType == 3">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </p>
              </li>
            </ul>
          </section>
        </transition>
      </div>
      <!-- 筛选 -->
      <div class="sort_item" :class="{choose_type:sortBy == 'activity'}">
        <div class="sort_item_container" @click="chooseType('activity')">
          <span :class="{category_title: sortBy == 'activity'}">筛选</span>
          <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
            <polygon points="0,3 10,3 5,8"/>
          </svg>
        </div>
        <transition name="showlist">
          <section v-show="sortBy == 'activity'" class="sort_detail_type filter_container">
            <section style="width: 100%;">
              <header class="filter_header_style">配送方式</header>
              <ul class="filter_ul">
                <li v-for="(item, index) in Delivery" :key="index" class="filter_li" @click="selectDeliveryMode(item.id)">
                  <svg :style="{opacity: (item.id == 0)&&(delivery_mode !== 0)? 0: 1}">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="delivery_mode == item.id? '#selected':'#fengniao'"></use>
                  </svg>
                  <span :class="{selected_filter: delivery_mode == item.id}">{{item.text}}</span>
                </li>
              </ul>
            </section>
            <section style="width: 100%;">
              <header class="filter_header_style">商家属性（可以多选）</header>
              <ul class="filter_ul" style="paddingBottom: .5rem;">
                <li v-for="(item,index) in Activity" :key="index" class="filter_li" @click="selectSupportIds(index, item.id)">
                  <svg v-show="support_ids[index].status" class="activity_svg">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                  <span class="filter_icon" :style="{color: '#' + item.icon_color, borderColor: '#' + item.icon_color}" v-show="!support_ids[index].status">{{item.icon_name}}</span>
                  <span :class="{selected_filter: support_ids[index].status}">{{item.name}}</span>
                </li>
              </ul>
            </section>
            <footer class="confirm_filter">
              <div class="clear_all filter_button_style" @click="clearSelect">清空</div>
              <div class="confirm_select filter_button_style" @click="confirmSelectFun">确定<span v-show="filterNum">({{filterNum}})</span></div>
            </footer>
          </section>
        </transition>
      </div>
    </section>
    <transition name="showcover">
      <div class="back_cover" v-show="sortBy"></div>
    </transition>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  var categoryData = require('./category.json')
  export default {
    data() {
      return {
        geohash: "", // city页面传递过来的地址geohash
        foodTitle: "分类", // 排序左侧头部标题
        restaurant_category_id: "", // 食品类型id值
        restaurant_category_ids: "", //筛选类型的id
        sortBy: "", // 筛选的条件
        category: categoryData, // category分类左侧数据
        categoryDetail: null, // category分类右侧的详细数据
        sortByType: null, // 根据何种方式排序
        Delivery: [{"color":"57A9FF","id":1,"is_solid":true,"text":"蜂鸟专送","__v":0}], // 配送方式数据
        Activity: [{"description":"","icon_color":"3FBDE6","icon_name":"品","id":8,"name":"品牌商家","ranking_weight":7,"__v":0},{"description":"已加入“外卖保”计划，食品安全有保障","icon_color":"999999","icon_name":"保","id":7,"name":"外卖保","ranking_weight":6,"__v":0},{"description":"准时必达，超时秒赔","icon_color":"57A9FF","icon_name":"准","id":9,"name":"准时达","ranking_weight":1,"__v":0},{"description":"新店","icon_color":"E8842D","icon_name":"新","id":5,"name":"新店","ranking_weight":4,"__v":0},{"description":"可使用支付宝、微信、手机QQ进行在线支付","icon_color":"FF4E00","icon_name":"付","id":3,"name":"在线支付","ranking_weight":2,"__v":0},{"description":"该商家支持开发票，请在下单时填写好发票抬头","icon_color":"999999","icon_name":"票","id":4,"name":"开发票","ranking_weight":3,"__v":0}], // 商家支持活动数据
        delivery_mode: null, // 选中的配送方式
        support_ids: [], // 选中的商铺活动列表
        filterNum: 0, // 所选中的所有样式的集合
        confirmStatus: false // 确认选择
      };
    },
    created() {
      this.initData();
    },
    components: {
      XHeader
    },
    computed: {
    },
    methods: {
      //初始化获取数据
      async initData() {
        //初始化时定位当前category分类左侧默认选择项，在右侧展示出其sub_categories列表
        this.category.forEach(item => {
          if (this.restaurant_category_id == item.id) {
            this.categoryDetail = item.sub_categories;
          }
        });
        //记录support_ids的状态，默认不选中，点击状态取反，status为true时为选中状态
        this.Activity.forEach((item, index) => {
          this.support_ids[index] = { status: false, id: item.id };
        });
      },
      //传递过来的图片地址需要处理后才能正常使用
      getImgPath(path) {
        let suffix;
        if (!path) {
          return '//elm.cangdu.org/img/default.jpg'
        }
        if (path.indexOf('jpeg') !== -1) {
          suffix = '.jpeg'
        } else {
          suffix = '.png'
        }
        let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
        return 'https://fuss10.elemecdn.com' + url
      },
      // 点击顶部三个选项，展示不同的列表，选中当前选项进行展示，同时收回其他选项
      async chooseType(type) {
        if (this.sortBy !== type) {
          this.sortBy = type;
        } else {
          //再次点击相同选项时收回列表
          this.sortBy = "";
        }
      },
      //选中Category左侧列表的某个选项时，右侧渲染相应的sub_categories列表
      selectCategoryName(id, index) {
        //第一个选项 -- 全部商家 因为没有自己的列表，所以点击则默认获取选所有数据
        if (index === 0) {
          this.restaurant_category_ids = null;
          this.sortBy = "";
          //不是第一个选项时，右侧展示其子级sub_categories的列表
        } else {
          this.restaurant_category_id = id;
          this.categoryDetail = this.category[index].sub_categories;
        }
      },
      //选中Category右侧列表的某个选项时，进行筛选，重新获取数据并渲染
      getCategoryIds(id, name) {
        console.log(id, name)
        this.restaurant_category_ids = id;
        this.sortBy = "";
        this.foodTitle = this.headTitle = name;
      },
      //点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染
      sortList(event) {
        let node;
        // 如果点击的是 span 中的文字，则需要获取到 span 的父标签 p
        if (event.target.nodeName.toUpperCase() !== "P") {
          node = event.target.parentNode;
        } else {
          node = event.target;
        }
        this.sortByType = node.getAttribute("data");
        this.sortBy = "";
      },
      //筛选选项中的配送方式选择
      selectDeliveryMode(id) {
        //delivery_mode为空时，选中当前项，并且filterNum加一
        if (this.delivery_mode == null) {
          this.filterNum++;
          this.delivery_mode = id;
          //delivery_mode为当前已有值时，清空所选项，并且filterNum减一
        } else if (this.delivery_mode == id) {
          this.filterNum--;
          this.delivery_mode = null;
          //delivery_mode已有值且不等于当前选择值，则赋值delivery_mode为当前所选id
        } else {
          this.delivery_mode = id;
        }
      },
      //点击商家活动，状态取反
      selectSupportIds(index, id) {
        //数组替换新的值
        this.support_ids.splice(index, 1, {
          status: !this.support_ids[index].status,
          id
        });
        //重新计算filterNum的个数
        this.filterNum = this.delivery_mode == null ? 0 : 1;
        this.support_ids.forEach(item => {
          if (item.status) {
            this.filterNum++;
          }
        });
      },
      //只有点击清空按钮才清空数据，否则一直保持原有状态
      clearSelect() {
        this.support_ids.map(item => (item.status = false));
        this.filterNum = 0;
        this.delivery_mode = null;
      },
      //点击确认时，将需要筛选的id值传递给子组件，并且收回列表
      confirmSelectFun() {
        //状态改变时，因为子组件进行了监听，会重新获取数据进行筛选
        this.confirmStatus = !this.confirmStatus;
        this.sortBy = "";
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "src/style/mixin";
  /*section{*/
    /*height: 1rem;*/
    /*vertical-align: middle;*/
  /*}*/
  .head_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    @include wh(100%, 1.25rem);
  }
  .sort_container {
    background-color: #fff;
    border-bottom: 0.025rem solid #f1f1f1;
    position: fixed;
    top: 1.25rem;
    right: 0;
    width: 100%;
    display: flex;
    z-index: 13;
    box-sizing: border-box;
    .sort_item {
      @include sc(0.4rem, #444);
      @include wh(33.3%, 1rem);
      text-align: center;
      line-height: 1rem;
      .sort_item_container {
        @include wh(100%, 100%);
        position: relative;
        z-index: 14;
        background-color: #fff;
        box-sizing: border-box;
        .sort_item_border {
          height: 1rem;
          border-right: 0.025rem solid $bc;
        }
      }
      .sort_icon {
        vertical-align: middle;
        transition: all 0.3s;
        fill: #666;
      }
    }
    .choose_type {
      .sort_item_container {
        .category_title {
          color: $blue;
        }
        .sort_icon {
          transform: rotate(180deg);
          fill: $blue;
        }
      }
    }
    .showlist-enter-active,
    .showlist-leave-active {
      transition: all 0.3s;
      transform: translateY(0);
    }
    .showlist-enter,
    .showlist-leave-active {
      opacity: 0;
      transform: translateY(-100%);
    }
    .sort_detail_type {
      width: 100%;
      position: absolute;
      display: flex;
      left: 0;
      border-top: 0.025rem solid $bc;
      background-color: #fff;
    }
    .category_container {
      .category_left {
        flex: 1;
        background-color: #f1f1f1;
        height: 10rem;
        overflow-y: auto;
        span {
          @include sc(0.4rem, #666);
          line-height: 0.8rem;
        }
        .category_left_li {
          @include fj;
          padding: 0 0.1rem;
          .category_icon {
            @include wh(0.4rem, 0.4rem);
            vertical-align: middle;
            margin-right: 0.1rem;
          }
          .category_count {
            background-color: #ccc;
            @include sc(0.1rem, #fff);
            padding: 0 0.1rem;
            border: 0.025rem solid #ccc;
            border-radius: 0.8rem;
            vertical-align: middle;
            margin-right: 0.25rem;
          }
          .category_arrow {
            vertical-align: middle;
          }
        }
        .category_active {
          background-color: #fff;
        }
      }
      .category_right {
        flex: 1;
        background-color: #fff;
        padding-left: 0.5rem;
        height: 10rem;
        overflow-y: auto;
        .category_right_li {
          @include fj;
          height: 0.8rem;
          line-height: 0.8rem;
          padding-right: 0.5rem;
          border-bottom: 0.025rem solid $bc;
          span {
            color: #666;
          }
        }
        .category_right_choosed {
          span {
            color: $blue;
          }
        }
      }
    }
    .sort_list_container {
      width: 100%;
      .sort_list_li {
        height: 1rem;
        display: flex;
        align-items: center;
        svg {
          @include wh(0.4rem, 0.4rem);
          margin: 0 0.3rem 0 0.8rem;
        }
        p {
          line-height: 1rem;
          flex: auto;
          text-align: left;
          text-indent: 0.25rem;
          border-bottom: 0.001rem solid $bc;
          @include fj;
          align-items: center;
          span {
            color: #666;
          }
        }
        .sort_select {
          span {
            color: $blue;
          }
        }
      }
    }
    .filter_container {
      flex-direction: column;
      align-items: flex-start;
      min-height: 10.6rem;
      background-color: #f1f1f1;
      .filter_header_style {
        @include sc(0.4rem, #333);
        line-height: 1rem;
        height: 1rem;
        text-align: left;
        padding-left: 0.5rem;
        background-color: #fff;
      }
      .filter_ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.5rem;
        background-color: #fff;
        .filter_li {
          display: flex;
          align-items: center;
          border: 0.025rem solid #eee;
          @include wh(2.6rem, 0.8rem);
          margin-right: 0.1rem;
          border-radius: 0.125rem;
          padding: 0 0.1rem;
          margin-bottom: 0.1rem;
          svg {
            @include wh(0.4rem, 0.4rem);
            margin-right: 0.125rem;
          }
          span {
            @include sc(0.4rem, #333);
          }
          .filter_icon {
            @include wh(0.6rem, 0.6rem);
            font-size: 0.1rem;
            border: 0.025rem solid $bc;
            border-radius: 0.15rem;
            margin-right: 0.25rem;
            line-height: 0.6rem;
            text-align: center;
          }
          .activity_svg {
            margin-right: 0.25rem;
          }
          .selected_filter {
            color: $blue;
          }
        }
      }
      .confirm_filter {
        display: flex;
        background-color: #f1f1f1;
        width: 100%;
        padding: 0.3rem 0.2rem;
        .filter_button_style {
          @include wh(40%, 1rem);
          font-size: 0.4rem;
          line-height: 1rem;
          border-radius: 0.2rem;
        }
        .clear_all {
          background-color: #fff;
          margin-right: 0.5rem;
          border: 0.025rem solid #fff;
        }
        .confirm_select {
          background-color: #56d176;
          color: #fff;
          border: 0.025rem solid #56d176;
          span {
            color: #fff;
          }
        }
      }
    }
  }
  .showcover-enter-active,
  .showcover-leave-active {
    transition: opacity 0.3s;
  }
  .showcover-enter,
  .showcover-leave-active {
    opacity: 0;
  }
  .back_cover {
    position: fixed;
    @include wh(100%, 100%);
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
