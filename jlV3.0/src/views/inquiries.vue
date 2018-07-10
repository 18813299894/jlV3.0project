<style>
.inquiries{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: fixed;
  padding-top: 64px;
}
.item-list{
  width: 100%;
  height: 46px;
  background: #fff;
  border-bottom: 1px solid #E6E6E6;
}
.item-list label{
  display: inline-block;
  width: 20%;
  float: left;
  text-align: left;
  padding-left: 15px;
  line-height: 46px;
}
.item-list a{
  display: inline-block;
  width: 40%;
  float: right;
  text-align: right;
  line-height: 46px;
  padding-right: 15px;
}
.item-list a .arrow{
  display: inline-block;
  width: 8px;
  height: 8px;
  border-top: 2px solid #C7C7CC;
  border-right:2px solid #C7C7CC;
  transform: rotate(45deg);
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
<template>
  <div class="inquiries">
    <div class="item-list">
      <label>分类</label>
      <a><span>原料上料车间 </span><i class="arrow"></i></a>
    </div>
    <div class="item-list">
      <label>危险源</label>
      <a><span>海龙四期上料车间 </span><i class="arrow"></i></a>
    </div>
    <div class="item-list">
      <label>日期</label>
      <a><span>2018-05-12 </span><i class="arrow"></i></a>
    </div>
    <wv-button type="primary" class="btnStyle" style="margin-top: 30px;">查询</wv-button>
  </div>
</template>
<script>
</script>
