<style scoped>
.alarmDetails{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #f5f5f5;
  padding-top: 64px;
  overflow: scroll;
  text-align: left;
}
.recordsTitle{
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid #EFEFEF;
  background: #fff;
}
/* ----------------------------- */
.msgList{
  padding: 0 20px;
  background: #fff;
  margin-bottom:20px;
}
.item{
  width: 100%;
  height: auto;
  overflow: hidden;
  padding:10px 0;
  border-bottom: 1px solid #EDEDED;
}
.item .preview_label{
  float: left;
  width: 30%;
  line-height: 24px;
  font-size: 14px;
  color: #9B9B9B;
}
.item .preview_value{
  float: left;
  padding-left: 10px;
  line-height: 24px;
  font-size: 14px;
}
</style>
<template>
  <div class="alarmDetails">
    <div class="recordsTitle">
      <h3 style="font-size: 17px;line-height: 24px;font-weight: normal">危险源：海龙四期上料车间</h3>
      <p style="font-size: 14px;color: #9B9B9B;margin-top: 5px;line-height: 20px">所属分类：原料上料车间</p>
    </div>
    <div class="msgList">
      <div class="item" style="padding-top: 20px;">
        <label class="preview_label">报警时间</label>
        <span class="preview_value">2018-5-12 17:23:35</span>
      </div>
      <div class="item">
        <label class="preview_label">未查次数</label>
        <span class="preview_value">2</span>
      </div>
      <div class="item">
        <label class="preview_label">巡检岗位角色</label>
        <span class="preview_value">主管</span>
      </div>
    </div>
  </div>
</template>
<script>
</script>
