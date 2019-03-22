<!--
Description 发布动态
@authors Benny
@date    2018-04-23 10:31:30
@version 1.0.0
-->
<template>
  <div id="dynamic_create">
    <x-header :left-options="{backText: ''}">图片上传</x-header>
    <x-textarea v-model="dynamicContent" placeholder="发表您的动态" :max="200"/>
    <uploader @getFiles='getImageList' @removeFiles='removeImage'></uploader>
    <div class="btn-wrapper">
        <XButton class='btn-send' type="primary"  @click.native="send">发布</XButton>
    </div>

  </div>
</template>

<script>
  import {XButton,XTextarea, XHeader} from 'vux'
  import uploader from "../components/Upload";

export default {
  name: "DynamicCreate",
  data() {
    return {
      dynamicContent: "", //动态内容
      imgList: [], //已上传的图片集合
      FilecodeList: [],
      isSubmit: false
    };
  },
  methods: {
    getImageList(files) {
      this.$nextTick(() => {
        for (let i = 0, len = files.length; i < len; i++) {
          this.imgList.push(files[i].file);
          // this.imgList.push(files[i].src.split("base64,")[1]);
          //上传图片
          //   this._getFileCode({
          //     Base64Str: files[i].src.split("base64,")[1],
          //     AttachmentType: this.$enums.AttachmentType.Activity
          //   });
        }
      });
    },
    //删除图片
    removeImage(index) {
      this.imgList.splice(index, 1);
    },


    //发布事件
    send() {
      console.log("内容" + this.dynamicContent);
      console.log(this.imgList);

      //   if (this.dynamicContent.trim() == "" && this.imgList.length === 0) {
      //     // Toast(this.lang.dynamic_content_no_null);
      //     return;
      //   }
      //   //当图片还没上传成功
      //   let self = this;
      //   var timer = setInterval(function() {
      //     if (
      //       self.FilecodeList &&
      //       self.imgList &&
      //       self.FilecodeList.length < self.imgList.length
      //     ) {
      //       // Indicator.open(self.lang.dynamic_uploading)
      //       self.isSubmit = true;
      //     } else {
      //       clearInterval(timer);
      //       // Indicator.close();
      //       self.createDynamic(self.FilecodeList);
      //     }
      //   }, 200);
    }
  },
  components: {
    uploader,
    XButton,
    XHeader,
    XTextarea
  }
};
</script>

<style lang="less" scoped>
//发布动态
#dynamic_create {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
}
#dynamic_create canvas {
  background: #000 !important;
}
.btn-send {
  margin: 22px;
  display: block;
  width: 100%;
}
.btn-wrapper {
  display: flex;
}
#dynamic_create .mint-cell {
  border: none;
}
</style>
