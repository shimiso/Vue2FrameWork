<template>
 <div class="wrap">
   <div class="detail-view has-header">
     <x-header :left-options="{backText: ''}">DetailViewDemo</x-header>
       <div class="info">
         <h4>
           {{eventItem.title}}
           <span class="badge">{{eventItem.loc_name}}</span>
         </h4>
         <div class="poster">
           <img :src="eventItem.image_hlarge" alt="">
         </div>
         <div class="detail">
           <span>时间:&nbsp;&nbsp;</span>
           <ul>
             <li>{{eventItem.begin_time}}</li>
             <li>{{eventItem.end_time}}</li>
           </ul>
         </div>
         <div class="detail">
           <span>地点:&nbsp;&nbsp;</span>
           <ul>
             <li>{{eventItem.address}}</li>
           </ul>
         </div>
         <div class="detail">
           <span>费用:&nbsp;&nbsp;</span>
           <ul>
             <li>{{eventItem.fee_str}}</li>
           </ul>
         </div>
         <div class="detail">
           <span>类型:&nbsp;&nbsp;</span>
           <ul>
             <li>{{eventItem.category_name}}</li>
           </ul>
         </div>
         <div class="detail">
           <span>起始时间:&nbsp;&nbsp;</span>
           <ul>
             <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
           </ul>
         </div>
         <tags v-if="eventItem.tags" :items="eventItem.tags | toArray"></tags>
         <div class="describe">
           <h2>活动详情</h2>
           <div v-if="eventItem.content" class="content" v-html="content"></div>
         </div>
       </div>
     <loading :pageType="type" @clickEvent="loadData"></loading>
   </div>
 </div>

</template>

<script>
import { mapState,mapActions } from 'vuex'
import Tags from '../components/Tags'
import Loading from '../components/Loading'
import { XHeader } from 'vux'

export default {
  name: 'detail-view',
  components: { Tags, Loading,XHeader },
  data () {
    return {
      type:{
        isShow:true, //是否显示
        pageType:"loading", //显示类型
        img:require('../assets/icon_nav_msg.png'),
        text:"正在加载中..."  // 用户自定义显示文字
      },
    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  computed: {
    content: function () {
      // Careful XSS  Remove copyright imgs
      return this.eventItem.content.replace(/<img.+?>/ig, '')
    },
    // Getting Vuex State from store/modules/activities
    ...mapState({
      eventItem: state => state.activities.eventItem
    })
  },
  created () {
    this.loadData();
  },
  methods:{
    loadData(){
      // Getting route params
      const id = this.$route.params.id
      this.getSingleEvent({
        id:12
      }).then(res => {
        // Success handle
        this.type.isShow = false
      }).catch(err=>{
        this.type.pageType = 'error'
        console.error('get请求异常：' + err)
      })
    },
    ...mapActions([
      'getSingleEvent'
    ])
  }
}
</script>

<style lang="scss" scoped>
.info {
  margin: 0.4rem;

  h2 {
    margin: 0.2rem 0;
    font-weight: bold;
    color: #494949;
  }

  .badge {
    display: inline-block;
    padding: 0.1rem 0.2rem;
    margin-bottom: 0.2rem;
    vertical-align: middle;
    line-height: 0.4rem;
    font-size: 0.4rem;
    color: #fff;
    background-color: #FF8263;
    border-radius: 0.1rem;
  }

  .poster {
    margin: 0.2rem auto;
    text-align: center;

    img {
      width: 100%;
      max-width: 5.0rem;
      height: auto;
    }
  }
}

.detail {
  margin-left: 3.3rem;
  margin-bottom: 0.2rem;
  min-height: 0.5rem;
  font-size: 0.4rem;
  clear: left;

  span {
    float: left;
    margin-left: -3.3rem;
    line-height: 150%;
    color: #666666;
  }

  ul {
    list-style-position: outside;
    margin-left: 0;
  }
}

.describe {
  h3 {
    color: #072;
  }

  .content {
    overflow: hidden;
    font-size: 0.4rem;
  }
}

</style>
