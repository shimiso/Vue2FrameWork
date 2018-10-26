<template>
  <div>
    <group title="Axios的例子">
      <cell title="ListViewDemo" :link="{path:'/ListView'}" is-link></cell>
    </group>

    <group title="Vux的例子">
      <cell title="TabbarView" :link="{path:'/TabbarView'}" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
