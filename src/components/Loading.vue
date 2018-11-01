<template>
  <div class="loading">
    <div class="error" v-if="pageType.pageType == 'error'">
      <img src="../assets/loading_green.gif" alt="loading">
      <Error></Error>
    </div>
    <div class="networkerr" v-if="pageType.pageType == 'networkerr'">
      <img src="../assets/loading_green.gif" alt="loading">
      <Empty></Empty>
    </div>
    <div class="empty" v-if="pageType.pageType == 'empty'">
      <img src="../assets/loading_green.gif" alt="loading">
      <NetworkErr></NetworkErr>
    </div>
    <div class="empty" v-if="pageType.pageType == 'customer'">
      <img src="../assets/loading_green.gif" alt="loading">
      <p>{{pageType.text}}</p>
    </div>
  </div>

</template>

<script>
import Error from "./Error"
import Empty from "./Empty"
import NetworkErr from "./NetworkErr"
export default {
  name: 'loading',
  props:["pageType"],
  data () {
    return {}
  },
  components: { Error,Empty,NetworkErr }
}
</script>

<style lang="scss" scoped>
.loading {
  margin: 2rem;
  text-align: center;

  img {
    width: 4.8rem;
  }
}
</style>
