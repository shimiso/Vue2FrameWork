<template>
  <div id="FixedLayout">
    <!-- <x-header :left-options="{backText: ''}">IOS input</x-header> -->
    <div style="height:80px;width:100%;background:pink;position:fixed;top:0;"></div>
    <div style="position:absolute;top:80px;width:100%;">
    <x-header :left-options="{backText: ''}">IOS input</x-header>

      <group label-width="4.5em" label-margin-right="2em" label-align="right">
      
        <x-input title="上报人" v-model="value1"></x-input>
        <x-input title="上报人" v-model="value1"></x-input>

        <x-input
          title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人"
          v-model="value1"
        ></x-input>
        <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
        <x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>
        <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
        <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      </group>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
      
        <x-input title="上报人" v-model="value1"></x-input>
        <x-input title="上报人" v-model="value1"></x-input>

        <x-input
          title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人"
          v-model="value1"
        ></x-input>
        <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
        <x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>
        <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
        <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      </group>
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
      
        <x-input title="上报人" v-model="value1"></x-input>
        <x-input title="上报人" v-model="value1"></x-input>

        <x-input
          title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人"
          v-model="value1"
        ></x-input>
        <datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>
        <x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>
        <x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>
        <popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>
      </group>

    </div>
  </div>
</template>

<script>
import {
  XHeader,
  GroupTitle,
  Group,
  Cell,
  XInput,
  Selector,
  PopupPicker,
  Datetime,
  XNumber,
  ChinaAddressData,
  XAddress,
  XTextarea,
  XSwitch
} from "vux";
export default {
  name: "EvenBus测试",
  components: {
    XHeader,
    Group,
    GroupTitle,
    Cell,
    XInput,
    Selector,
    PopupPicker,
    XAddress,
    Datetime,
    XNumber,
    XTextarea,
    XSwitch
  },
  data() {
    return {
      addressValue: ["广东省", "深圳市", "南山区"],
      value1: "张三",
      value2: "工艺技术",
      value3: "",
      value7: "",
      value8: "",
      value4: "",
      time1: "2017-06-01",
      value5: ["A"],
      value6: [],
      list: [["A", "B", "C"]],
      numberValue: 0
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#FixedLayout{
    // background-color: #fff;
    // width: 100%;
    // overflow: scroll;
    // -webkit-overflow-scrolling: touch;
}
</style>
