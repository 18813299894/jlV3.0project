<template>
  <div class="success">
    <div class="success pageStyle">
    <wv-icon type="success" :large="true" style="margin-top: 66px;"></wv-icon>
    <h2 style="font-weight: normal;font-size: 20px;margin-top: 30px">提交成功</h2>
    <wv-button type="primary" class="btnStyle">确定</wv-button>
  </div>
  </div>
</template>
<script>
</script>
<style scoped>
.success{
  box-sizing:border-box;
  width: 414px;
  height: 736px;
  background: #f5f5f5;
  padding-top: 64px;
}
.success{
  padding-top: 66px;
  text-align:center;
}
.btnStyle{
  margin-top: 30px;
}
/* ------按钮样式----- */
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
