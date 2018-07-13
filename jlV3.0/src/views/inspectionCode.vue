<style scoped lang="less">
.inspectionCode{
  text-align: left;
}
/* 按钮样式 */
.weui-btn_primary{
  width: 93%!important;
  height: 46px;
  background: #2F7DCD;
  border-radius: 5px;
  margin-top: 30px;
}
.weui-btn_primary:not(.weui-btn_disabled):active{
  background: #1b72ca;
}
</style>
<style>
.inputStyle .weui-cell__hd .weui-label{
  width: 70px!important;
}
</style>
<template>
  <div class="inspectionCode container">
    <wv-group>
      <wv-input label="巡检码" class="inputStyle" placeholder="请输入巡检码"></wv-input>
    </wv-group>
    <wv-button type="primary" class="btnStyle">进入</wv-button>
  </div>
</template>
<script>
</script>
