<template>
  <div class="inspectionCode">
    <wv-input label="巡检码" class="inputStyle" style="margin-top: 20px" placeholder="请输入巡检码" v-model="valueSupplierName" required></wv-input>
    <wv-button style="margin-top: 30px" type="primary" class="btnStyle">进入</wv-button>
  </div>
</template>
<script>
</script>
<style>
.inspectionCode{
  box-sizing:border-box;
  width: 100%;
  height: 100%;
  position:fixed;
  background: #f5f5f5;
  padding-top: 64px;
}
/* ---------input框样式------------- */
.inputStyle{
  height: 46px;
  background: #fff;
  box-sizing: border-box;
  padding: 0;
}
.inputStyle .weui-cell__hd .weui-label{
  font-size: 17px;
  width: 60px!important;
  text-align:left;
  margin-left: 15px;
  line-height: 24px;
}
.weui-cell_warn{
  color: #000;
}
.inputStyle .weui-cell__bd{
  text-align: left;
}
.inputStyle .weui-cell__bd .weui-input{
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
/* 按钮样式 */
.weui-btn_primary{
  width: 93%!important;
  height: 46px;
  background: #2F7DCD;
  border-radius: 5px;
}
.weui-btn_primary:not(.weui-btn_disabled):active{
  background: #1b72ca;
}
</style>
