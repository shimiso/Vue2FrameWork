<template>
  <div class="home-view has-header">
    <x-header :left-options="{backText: ''}">ListViewDemo</x-header>
    <list mold="thumbnail"></list>
    <!--<list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>-->
  </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
import { XHeader } from 'vux'
import infiniteLoading from 'vue-infinite-loading'
import List from '../components/List'
import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: { List, infiniteLoading, Loading, XHeader },
  data () {
    return {
    }
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    /*...mapState({
      events: state => state.activities.events
    })*/
  },
  methods: {
    // Using vue-infinite-loading
    /*infiniteHandler ($state) {
      setTimeout(() => {
        this.loadMore()
        $state.loaded()
      }, 5000)
    },*/
    // Dispatching Actions
    /*...mapActions([
      'loadMore'
    ])*/
  }
}
</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
