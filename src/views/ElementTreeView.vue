<template>
  <div class="wrap">
    <drawer
      width="300px;"
      :show.sync="drawerVisibility"
      show-mode="push"
      placement="right"
      :drawer-style="{'background-color':'#35495e', width: '300px'}">

      <div slot="drawer" style="height: 100%;">
        <!-- 菜单内容 -->
        <group title="请选择部门" style="margin-top:8px;height: 100%;">
          <el-tree :data="data" style="height: 95%;overflow-y: auto" :props="defaultProps" show-checkbox @check-change="handleCheckChange" @node-click="handleNodeClick"></el-tree>
          <flexbox justify="center" style="" class="btns">
            <flexbox-item style="text-align: center">
              <x-button mini @click.native="drawerVisibility = !drawerVisibility;isShow = !isShow">取消</x-button>
            </flexbox-item>
            <flexbox-item style="text-align: center">
              <x-button mini type="primary" @click.native="drawerVisibility = !drawerVisibility;isShow = !isShow">确定</x-button>
            </flexbox-item>
          </flexbox>
        </group>

      </div>

      <!-- main content -->
      <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">
        <x-header
          v-if="isShowNav"
          title="Element-Tree"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          slot="header">
            <span slot="right" @click="drawerVisibility = !drawerVisibility">
              <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
            </span>
        </x-header>
        <group  v-if="isShow">
          <cell :title="selectData.data.chineseName"></cell>
          <cell v-for="(item,index) in selectData.data.childOrgs" :key="index" :title="item.chineseName"></cell>
        </group>
      </view-box>
    </drawer>
  </div>
</template>
<script>
  import { Drawer,Group, Cell, XButton, ViewBox, XHeader,Flexbox, FlexboxItem } from 'vux'

  import { mapGetters } from 'vuex'
  export default {
    components: {
      Drawer,
      ViewBox,
      XHeader,
      Group,
      Cell,
      XButton,Flexbox, FlexboxItem
    },
    data() {
      return {
        // data: [],
        drawerVisibility: false,
        defaultProps: {
          children: 'childOrgs',
          label: 'chineseName'
        },
        isShow:false,
        selectData:{
          data:{},
          selfIsSelected:false,
          childrenHasSelected:false
        }
      };
    },
    created() {
      this.$store.dispatch('OrgStructTree/getOrgStruct')
    },
    computed:{
      ...mapGetters('OrgStructTree',{
        data:'getOrgStruct'
      }),
      isShowNav () {
        if (window.location.href.indexOf('hide-nav') > -1) {
          return false
        }
        return true
      },
    },
    methods: {
      handleNodeClick(data,node,indeterminate) {
        //传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。
        console.log(data);
      },
      handleCheckChange(data, checked, indeterminate) {//复选框选中事件
        //共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
        this.selectData.data = data
        this.selectData.selfIsSelected = checked
        this.selectData.childrenHasSelected = indeterminate
      }
    }
  };
</script>fit

<style lang="less">
  .wrap{
    height: 100%;
  }
  .btns{
    position:fixed;
    bottom: 0;
    background: #3190e8;
    /*height: 50px;*/
    z-index: 999;
    margin-top: 20px;
    height: 5%;
  }
  .wrap /deep/ .weui-cells__title + .weui-cells{
    height: 95%;
  }
</style>
