<template>
  <div class="inspectionCode">
    <wv-input label="巡检码" class="inputStyle" style="margin-top: 20px" placeholder="请输入巡检码" v-model="valueSupplierName" required></wv-input>
    <wv-button style="margin-top: 30px" type="primary" class="btnStyle">进入</wv-button>
  </div>
</template>
<script>
</script>
<style scoped>
.inspectionCode{
  box-sizing:border-box;
  width: 414px;
  height: 736px;
  background: #f5f5f5;
  padding-top: 64px;
}
/* ---------input框样式------------- */
.inputStyle{
  width: 414px;
  height: 46px;
  background: #fff;
  box-sizing: border-box;
  padding: 0;
}
.inputStyle .weui-cell__hd .weui-label{
  font-family: PingFangSC-Regular;
  font-size: 17px;
  color: #000;
  width: 60px!important;
  text-align:left;
  margin-left: 15px;
  line-height: 24px;
}
.inputStyle .weui-cell__bd{
  text-align: left;
}
.inputStyle .weui-cell__bd .weui-input{
  font-family: PingFangSC-Regular;
  font-size: 17px;
  color: #000;
  line-height: 24px;
  padding-left: 10px;
  width: 280px;
  text-align:left;
}
.inputStyle .weui-cell__ft{
  display: none;
}
.inputStyle .weui-cell__ft .weui-icon-warn{
  position: relative;
  left: -30px;
}
/* 按钮样式 */
.weui-btn_primary{
  width: 384px !important;
  height: 46px;
  background: #2F7DCD;
  border-radius: 5px;
}
.weui-btn_primary:not(.weui-btn_disabled):active{
  background: #1b72ca;
}
</style>
