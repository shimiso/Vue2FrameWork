<template>
  <div class="signatureBox">
    <x-header slot="header" :title="'签名'"></x-header>

    <div class="canvasBox" ref="canvasHW">
      <canvas
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @mousedown="mouseDown"
        @mousemove="mouseMove"
        @mouseup="mouseUp"
        ref="canvasF"
      ></canvas>
      <div class="btnBox">
        <button @click="overwrite">重写吧</button>
        <button @click="commit">生成图片</button>
        <!-- <button @click='back'>back</button> -->
      </div>
    </div>
    <div>
      <input @change="carry" type="color">
      <select v-model="selValue">
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
    <img  :src="imgUrl" alt>
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  name: "signature",
  components: { XHeader },
  data() {
    return {
      selValue:'6',
      color: "black",
      imgUrl: "",
      points: [],
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,

      w: null,
      h: null,
      imgData: "",
      isDown: false,
      canvasBoard: null,
      canvasContext: null
    };
  },

  mounted() {
    this.canvasBoard = this.$refs.canvasF;
    this.canvasBoard.height = this.$refs.canvasHW.offsetHeight - 200;
    this.canvasBoard.width = this.$refs.canvasHW.offsetWidth - 20;
    this.canvasContext = this.canvasBoard.getContext("2d");
  },

  methods: {
    carry(e) {
      // this.points.pop()
      this.color = e.target.value;
      console.log(e.target.value);
    },
    // Computer event -- Mouse down
    mouseDown(ev) {
      ev = ev || event;
      ev.preventDefault();
      console.log(ev);

      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };

      console.log(obj);
      this.startX = obj.x;
      this.startY = obj.y;
      this.canvasContext.beginPath();
      this.canvasContext.moveTo(this.startX, this.startY);
      this.canvasContext.lineTo(obj.x, obj.y);
      this.canvasContext.stroke();
      this.canvasContext.closePath();
      this.points.push(obj);
      this.isDown = true;
    },

    // Mobile event -- Touch start
    touchStart(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length === 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - 48
        };

        this.startX = obj.x;
        this.startY = obj.y;
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(this.startX, this.startY);
        this.canvasContext.lineTo(obj.x, obj.y);
        this.canvasContext.stroke();
        this.canvasContext.closePath();
        this.points.push(obj);
      }
    },

    // Mobile -- Mouse move
    mouseMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (this.isDown) {
        let obj = {
          x: ev.offsetX,
          y: ev.offsetY
        };

        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(this.startX, this.startY);
        this.canvasContext.lineTo(obj.x, obj.y);
        this.canvasContext.stroke();
        this.canvasContext.closePath();
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj);
      }
    },

    // Mobile event -- Touch move
    touchMove(ev) {
      ev = ev || event;
      ev.preventDefault();
      if (ev.touches.length === 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - 48
        };

        this.moveY = obj.y;
        this.moveX = obj.x;
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(this.startX, this.startY);
        this.canvasContext.lineTo(obj.x, obj.y);
        this.canvasContext.strokeStyle = this.color;
        this.canvasContext.lineWidth = this.selValue
        this.canvasContext.stroke();
        this.canvasContext.closePath();
        this.startY = obj.y;
        this.startX = obj.x;
        this.points.push(obj);
      }
    },

    // Computer event -- Mouse up
    mouseUp(ev) {
      ev = ev || event;
      ev.preventDefault();

      let obj = {
        x: ev.offsetX,
        y: ev.offsetY
      };

      this.canvasContext.beginPath();
      this.canvasContext.moveTo(this.startX, this.startY);
      this.canvasContext.lineTo(obj.x, obj.y);
      this.canvasContext.stroke();
      this.canvasContext.closePath();
      this.points.push(obj);
      this.points.push({ x: -1, y: -1 });
      this.isDown = false;
    },

    // Mobile event TouchEnd
    touchEnd(ev) {
      ev = ev || event;
      ev.preventDefault();
      console.log(ev);
      if (ev.touches.length === 1) {
        let obj = {
          x: ev.targetTouches[0].clientX,
          y: ev.targetTouches[0].clientY - 48
        };

        this.canvasContext.beginPath();
        this.canvasContext.moveTo(this.startX, this.startY);
        this.canvasContext.lineTo(obj.x, obj.y);
        this.canvasContext.stroke();
        this.canvasContext.closePath();
        this.points.push(obj);
        this.points.push({ x: -1, y: -1 });
      }
    },

    // Over write
    overwrite() {
      this.canvasContext.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      );
      this.points = [];
      this.imgUrl = "";
    },

    // Commit
    commit() {
      // this.$refs.mySignature.src = this.$refs.canvasF.toDataURL('image/png')
      this.imgUrl = this.convertBase64ToBlob(this.$refs.canvasF.toDataURL());
      //   console.log(
      //     window.URL.createObjectURL(
      //       new Blob([this.$refs.canvasF.toDataURL("image/png")])
      //     )
      //   );
      //this.$router.back()
    },
    convertBase64ToBlob(base64) {
      var base64Arr = base64.split(",");
      var imgtype = "";
      var base64String = "";
      if (base64Arr.length > 1) {
        //如果是图片base64，去掉头信息
        base64String = base64Arr[1];
        imgtype = base64Arr[0].substring(
          base64Arr[0].indexOf(":") + 1,
          base64Arr[0].indexOf(";")
        );
      }
      // 将base64解码
      var bytes = atob(base64String);
      //var bytes = base64;
      var bytesCode = new ArrayBuffer(bytes.length);
      // 转换为类型化数组
      var byteArray = new Uint8Array(bytesCode);

      // 将base64转换为ascii码
      for (var i = 0; i < bytes.length; i++) {
        byteArray[i] = bytes.charCodeAt(i);
      }

      // 生成Blob对象（文件对象）
      return window.URL.createObjectURL(
        new Blob([bytesCode], { type: imgtype })
      );
    }
  }
};
</script>

<style scoped>
.signatureBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.visaDetailTop p {
  margin: 0;
  text-align: center;
  color: #000;
  font-size: 1em;
  position: relative;
}

.visaDetailTop p span {
  color: #fff;
  font-size: 1.2em;
}

.visaDetailTop p:first-of-type {
  float: left;
}

.visaDetailTop p:nth-of-type(2) {
  float: right;
}

.canvasBox {
  padding: 10px 10px;
  box-sizing: border-box;
  flex: 1;
}

canvas {
  border-radius: 5px;
  border: 1px solid lightgray;
}

.btnBox {
  height: 30px;
  padding: 5px;
  text-align: right;
  line-height: 30px;
}

.btnBox button:first-of-type {
  border: 1px solid lightgray;
  background: transparent;
  border-radius: 4px;
  padding: 5px 10px;
  width: 100px;
  outline: none;
}

.btnBox button:last-of-type {
  border: 1px solid lightgray;
  background: #0dbfa5;
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  width: 100px;
  outline: none;
}

@media only screen and (min-width: 750px) {
  .signatureBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: visible;
  }
}
</style>