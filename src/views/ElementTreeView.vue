<template>
  <div style="height:100%;">
    <drawer
      width="300px;"
      :show.sync="drawerVisibility"
      show-mode="push"
      placement="right"
      :drawer-style="{'background-color':'#35495e', width: '300px',height: 'max-content'}">

      <div slot="drawer">
        <!-- 菜单内容 -->
        <group title="请选择部门" style="margin-top:20px;height: max-content">
          <el-tree :data="data" :props="defaultProps" show-checkbox @check-change="handleCheckChange" @node-click="handleNodeClick"></el-tree>
          <flexbox justify="center" style="margin-top: 20px">
            <flexbox-item style="text-align: center"><x-button mini @click.native="drawerVisibility = !drawerVisibility">取消</x-button></flexbox-item>
            <flexbox-item style="text-align: center"><x-button mini type="primary" @click.native="drawerVisibility = !drawerVisibility">确定</x-button></flexbox-item>
          </flexbox>
        </group>

      </div>

      <!-- main content -->
      <view-box>
        <x-header
          title="Element-Tree"
          slot="header">
            <span slot="right" @click="drawerVisibility = !drawerVisibility">
              <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
            </span>
        </x-header>
          11
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

    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleCheckChange(data, checked, indeterminate) {//复选框选中事件
        console.log(data, checked, indeterminate);
      }
    }
  };
</script>

<style lang="less">
</style>
