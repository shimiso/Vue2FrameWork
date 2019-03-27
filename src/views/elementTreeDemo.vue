<template>
  <div>
    <!--<el-tree :data="data" :props="defaultProps" show-checkbox @check-change="handleCheckChange" @node-click="handleNodeClick"></el-tree>-->
    <el-tree :data="data" :props="defaultProps" show-checkbox @check-change="handleCheckChange" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
  //element-ui/lib/theme-chalk/base.css element-ui/lib/theme-chalk/tree.css
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        // data: [{
        //   label: '一级 1',
        //   children: [{
        //     label: '二级 1-1',
        //     children: [{
        //       label: '三级 1-1-1'
        //     }]
        //   }]
        // }, {
        //   label: '一级 2',
        //   children: [{
        //     label: '二级 2-1',
        //     children: [{
        //       label: '三级 2-1-1'
        //     }]
        //   }, {
        //     label: '二级 2-2',
        //     children: [{
        //       label: '三级 2-2-1'
        //     }]
        //   }]
        // }, {
        //   label: '一级 3',
        //   children: [{
        //     label: '二级 3-1',
        //     children: [{
        //       label: '三级 3-1-1'
        //     }]
        //   }, {
        //     label: '二级 3-2',
        //     children: [{
        //       label: '三级 3-2-1'
        //     }]
        //   }]
        // }],
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
