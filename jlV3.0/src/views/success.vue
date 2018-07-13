<style scoped lang="less">
.success{
  text-align:center;
}
/* ------按钮样式----- */
.weui-btn_primary{
  width: 90% !important;
  height: 46px;
  background: #2F7DCD;
  border-radius: 5px;
}
.weui-btn_primary:not(.weui-btn_disabled):active{
  background: #1b72ca;
}
</style>
<template>
  <div class="success container">
    <wv-icon type="success" :large="true" style="margin-top: 66px;"></wv-icon>
    <h2 style="font-weight: normal;font-size: 20px;margin-top: 30px">提交成功</h2>
    <wv-button type="primary" class="btnStyle mt30">确定</wv-button>
  </div>
</template>
<script>
</script>
