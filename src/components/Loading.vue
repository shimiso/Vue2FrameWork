<template>
  <div class="wrap" v-if="pageType.isShow">
    <div class="loading">
      <div class="error" v-if="pageType.pageType == 'error'"  @click="handleClick">
        <Error></Error>
      </div>
      <div class="loading" v-if="pageType.pageType == 'empty'"  @click="handleClick">
        <Empty></Empty>
      </div>
      <div class="loading" v-if="pageType.pageType == 'networkerr'"  @click="handleClick">
        <NetworkErr></NetworkErr>
      </div>
      <div class="loading" v-if="pageType.pageType == 'loading'">
        <Spinner type="android" size="40px"></Spinner>
        <p class="text_content">{{pageType.text==null?'正在加载...':pageType.text}}</p>
      </div>
      <div class="loading" v-if="pageType.pageType == 'customer'"  @click="handleClick">
        <img :src="pageType.img" alt="loading">
        <p class="text_content">{{pageType.text}}</p>
      </div>
    </div>
  </div>


</template>

<script>
import Error from "./Error"
import Empty from "./Empty"
import NetworkErr from "./NetworkErr"
import { Spinner } from 'vux'

export default {
  name: 'loading',
  props:["pageType"],
  data () {
    return {}
  },
  methods: {
    handleClick() {
      this.pageType.isShow = true
      this.pageType.pageType = 'loading'
      this.$emit('clickEvent')
    }
  },
  components: { Error,Empty,NetworkErr,Spinner }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 46px;
  bottom: 0;
  right: 0;
  z-index: 99;
}
.loading {
  margin:1rem;
  text-align: center;

  img {
    width: 4rem;
    height: auto;
  }
}

.text_content{
  line-height: 35px;
  color: #666
}
</style>
