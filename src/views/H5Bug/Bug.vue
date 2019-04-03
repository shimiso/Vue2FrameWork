<template>
  <div>
    <x-header :left-options="{backText: ''}">BUG</x-header>
    <group>
      <cell title="cell" value="小于1px显示问题" is-link></cell>
    </group>
    <div class="border">border</div>
    <group>
      <cell title="cell" value="ios键盘挡住输入框" is-link></cell>
      <!-- inputcontent为输入框的样式。activeElement表示获得焦点的元素。 -->
      <!-- iScroll框架 或者viewBox组件 -->
      <!-- setInterval(function () { 
        if (document.activeElement.className.indexOf('inputcontent') >= 0) {
            document.activeElement.scrollIntoViewIfNeeded();     }
    }, 300); -->
    </group>
    <div class="border">border</div>
  </div>
</template>
<script>
import { XHeader, Cell, Group } from "vux";
export default {
  components: {
    XHeader,
    Cell,
    Group
  }
};
</script>
<style lang="less" scoped>
// 高度有小数导致的
// $target.css("height", Math.ceil(maxline * lineHeight));

// @svg 1px-border {
//   height: 2px;
//   @rect {
//     fill: var(--color, black);
//     width: 100%;
//     height: 50%;
//   }
// }
// .example {
//   border: 1px solid transparent;
//   border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
// }

//编译完
// .example {
//   border: 1px solid transparent;
//   border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E")
//     2 2 stretch;
// }


// 伪类 实现
// .hairlines li {
//   position: relative;
//   border: none;
// }
// .hairlines li:after {
//   content: "";
//   position: absolute;
//   left: 0;
//   background: #000;
//   width: 100%;
//   height: 1px;
//   transform: scaleY(0.5);
//   transform-origin: 0 0;
// }



//ios下  h5 变粗
// .border { border: 1px solid #999 }
// @media screen and (-webkit-min-device-pixel-ratio: 2) {
//     .border { border: 0.5px solid #999 }
// }
// @media screen and (-webkit-min-device-pixel-ratio: 3) {
//     .border { border: 0.333333px solid #999 }
// }
  .border {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 15px;
  border-bottom: 1px solid red;
}
</style>

