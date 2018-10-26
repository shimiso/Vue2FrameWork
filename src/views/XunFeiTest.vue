<template>
  <div id="app">
    <box gap="10px 10px">
      <x-button @click.native="xfyun">测试科大讯飞接口</x-button>
    </box>
    <p>{{json}}</p>
  </div>
</template>

<script>
  import crypto from 'crypto'
  import { XButton, Box} from 'vux'
  export default {
    data() {
      return {
        json: ''
      }
    },
    components: {
      XButton,
      Box
    },
    created: function () {

    },
    methods: {
      xfyun: function () {
        var APPID = "5b7b7528";
        var API_KEY = "28dcc37bb3cf4c69bb46ba70d8a7c7e8";
        var AUTH_ID = "1e17dc6bf0da71cc2346b5cceee32ed0";
        var AUE = "raw";
        var CLIENT_IP = "127.0.0.1";
        var SAMPLE_RATE = "16000";
        var DATA_TYPE = "text";
        var SCENE = "english";
        var LAT = "39.938838";
        var LNG = "116.368624";
        var RESULT_LEVEL = "complete";
        var X_CurTime = Math.floor(Date.now() / 1000);
        var param = "{\"result_level\":\"" + RESULT_LEVEL + "\",\"aue\":\"" + AUE + "\",\"scene\":\"" + SCENE + "\",\"auth_id\":\"" + AUTH_ID + "\",\"data_type\":\"" + DATA_TYPE + "\",\"sample_rate\":\"" + SAMPLE_RATE + "\",\"lat\":\"" + LAT + "\",\"lng\":\"" + LNG + "\"}";
        var X_Param = new Buffer(param).toString('base64');
        var md5 = crypto.createHash("md5");
        //update("中文", "utf8")
        md5.update(API_KEY + X_CurTime + X_Param);
        var X_CheckSum = md5.digest('hex');

        this.$http.post('/aiui', "i leave application！！", {
          headers: {
            'X-Param': X_Param,
            'X-CurTime': X_CurTime,
            'X-CheckSum': X_CheckSum,
            'X-Appid': APPID
          }
        }).then((res) => {
          console.log('返回结果：', res)
          this.json = res
        }, (error) => {
          console.log(error)
        })
        return this.msg + " - 学的不仅是技术，更是梦想！";
      }
    }
  };
</script>
