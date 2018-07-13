<style scoped lang="less">
.resultDetails{
  overflow: scroll;
}
.recordsTitle{
  padding: 20px 20px 10px 20px;
  text-align: left;
  border-bottom: 1px solid #EFEFEF;
  background: #fff;
  margin-top: 20px;
}
.msgList{
  padding: 0 20px;
  background: #fff;
  text-align: left;
  margin-bottom:20px;
  &>div:first-child{
    padding-top: 20px;
  }
}
.item{
  width: 100%;
  height: auto;
  overflow: hidden;
  padding:10px 0;
  border-bottom: 1px solid #EDEDED;
  .preview_label{
    float: left;
    width: 40%;
    line-height: 24px;
    font-size: 14px;
    color: #9B9B9B;
  }
  .preview_value{
    float: left;
    width: 53%;
    padding-left: 10px;
    line-height: 24px;
    font-size: 14px;
    color: #000;
  }
  .preview_img{
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}
.iconAddress{
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(./../../static/image/address.png);
  background-size: 14px 14px;
}
</style>
<template>
  <div class="resultDetails container">
    <div class="recordsTitle">
      <h3 style="font-size: 17px;line-height: 24px;font-weight: normal">危险源：海龙四期上料车间</h3>
      <p style="font-size: 14px;color: #9B9B9B;margin-top: 5px;line-height: 20px">所属分类：原料上料车间</p>
    </div>
    <div class="msgList">
      <div class="item">
        <label class="preview_label">巡检时间</label>
        <span class="preview_value">2018-5-12 17:23:35</span>
      </div>
      <div class="item">
        <label class="preview_label">巡检人</label>
        <span class="preview_value">张三</span>
      </div>
      <div class="item">
        <label class="preview_label">消防通道</label>
        <span class="preview_value">不正常</span>
        <label class="preview_label">备注信息</label>
        <span class="preview_value">消防通道是指消防人员实施营救和被困人员疏散的通道</span>
      </div>
      <div class="item">
        <label class="preview_label">堆垛情况</label>
        <span class="preview_value">正常</span>
      </div>
      <div class="item">
        <label class="preview_label">国废使用情况</label>
        <span class="preview_value">正常</span>
      </div>
      <div class="item">
        <label class="preview_label">现场动火作业</label>
        <span class="preview_value">不正常</span>
        <label class="preview_label">备注信息</label>
        <span class="preview_value">请注意安全</span>
      </div>
      <div class="item">
        <label class="preview_label">消防器材完好性</label>
        <span class="preview_value">不正常</span>
        <label class="preview_label">备注信息</label>
        <span class="preview_value">在距离火焰2-3米的地方，右手用力压下压把</span>
      </div>
      <div class="item">
        <label class="preview_label">该区域其他安全隐患</label>
        <span class="preview_value">无</span>
      </div>
      <div class="item">
        <label class="preview_label">巡检地理位置</label>
        <span class="preview_value"><i class="iconAddress"></i>广东省东莞市麻涌镇</span>
      </div>
      <div class="item">
        <label class="preview_label">图片</label>
        <img src="./../../static/image/logo.png" class="preview_img ml10" />
        <img src="./../../static/image/logo.png" class="preview_img" />
        <img src="./../../static/image/logo.png" class="preview_img" />
      </div>
    </div>
  </div>
</template>
<script>
</script>
